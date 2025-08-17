import { useState } from "react";
import todasAreas from "../questions/todasAreas.ts";
import { useNavigate } from "react-router-dom";

type RespostasPorArea = {
  [area: string]: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[];
};

type MediaPorFaceta = {
  [faceta: string]: number;
};

const abrirDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("QuestionarioDB", 1);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains("medias")) {
        db.createObjectStore("medias", { keyPath: "area" });
      }
      if (!db.objectStoreNames.contains("respostas")) {
        db.createObjectStore("respostas", { keyPath: "area" });
      }
      if (!db.objectStoreNames.contains("mediasFacetas")) {
        db.createObjectStore("mediasFacetas", { keyPath: "area" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

const salvarMedia = async (area: string, media: number) => {
  const db = await abrirDB();
  const tx = db.transaction("medias", "readwrite");
  const store = tx.objectStore("medias");
  store.put({ area, media });
  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const salvarMediaFacetas = async (area: string, mediasFacetas: MediaPorFaceta) => {
  const db = await abrirDB();
  const tx = db.transaction("mediasFacetas", "readwrite");
  const store = tx.objectStore("mediasFacetas");
  store.put({ area, mediasFacetas });
  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const salvarRespostas = async (
  area: string,
  respostas: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[]
) => {
  const db = await abrirDB();
  const tx = db.transaction("respostas", "readwrite");
  const store = tx.objectStore("respostas");
  store.put({ area, respostas });
  return new Promise<void>((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
};

const lerTodasMedias = async (): Promise<{ area: string; media: number }[]> => {
  const db = await abrirDB();
  const tx = db.transaction("medias", "readonly");
  const store = tx.objectStore("medias");

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result as { area: string; media: number }[]);
    request.onerror = () => reject(request.error);
  });
};

const lerTodasRespostas = async (): Promise<
  { area: string; respostas: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[] }[]
> => {
  const db = await abrirDB();
  const tx = db.transaction("respostas", "readonly");
  const store = tx.objectStore("respostas");

  return new Promise((resolve, reject) => {
    const request = store.getAll();
    request.onsuccess = () =>
      resolve(
        request.result as {
          area: string;
          respostas: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[];
        }[]
      );
    request.onerror = () => reject(request.error);
  });
};

const Formulario = () => {
  const [indiceArea, setIndiceArea] = useState(0);
  const [respostas, setRespostas] = useState<RespostasPorArea>({});
  const [erro, setErro] = useState("");
  const [, setMedias] = useState<{ area: string; media: number }[]>([]);
  const [, setRespostasArmazenadas] = useState<
    { area: string; respostas: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[] }[]
  >([]);
  const navigate = useNavigate();

  const areaAtual = todasAreas[indiceArea];

  const handleResposta = (indexPergunta: number, valor: number, reversa: boolean, faceta: string) => {
    setRespostas((prev) => {
      const areaNome = areaAtual.nome;
      const respostasArea = prev[areaNome] || [];

      const novasRespostasArea = [...respostasArea];
      novasRespostasArea[indexPergunta] = { idPergunta: indexPergunta, valor, reversa, faceta };

      return {
        ...prev,
        [areaNome]: novasRespostasArea,
      };
    });
  };

  const calcularMediaFacetas = (
    respostasArea: { idPergunta: number; valor: number; reversa: boolean; faceta: string }[]
  ): MediaPorFaceta => {
    const medias: MediaPorFaceta = {};
    const contagem: { [faceta: string]: number } = {};

    respostasArea.forEach((r) => {
      const valorCorrigido = r.reversa ? 6 - r.valor : r.valor;
      if (!medias[r.faceta]) {
        medias[r.faceta] = valorCorrigido;
        contagem[r.faceta] = 1;
      } else {
        medias[r.faceta] += valorCorrigido;
        contagem[r.faceta]++;
      }
    });

    Object.keys(medias).forEach((faceta) => {
      medias[faceta] /= contagem[faceta];
    });

    return medias;
  };

  const proximaArea = async () => {
    const respostasAreaAtual = respostas[areaAtual.nome] || [];

    if (
      respostasAreaAtual.length < areaAtual.perguntas.length ||
      respostasAreaAtual.some((r) => r === undefined)
    ) {
      setErro("Responda todas as perguntas antes de continuar.");
      return;
    }

    setErro("");

    const valoresCorrigidos = respostasAreaAtual.map((r) =>
      r.reversa ? 6 - r.valor : r.valor
    );
    const media =
      valoresCorrigidos.reduce((acc, v) => acc + v, 0) / valoresCorrigidos.length;

    const mediasFacetas = calcularMediaFacetas(respostasAreaAtual);

    try {
      await salvarMedia(areaAtual.nome, media);
      await salvarMediaFacetas(areaAtual.nome, mediasFacetas);
      await salvarRespostas(areaAtual.nome, respostasAreaAtual);
    } catch (e) {
      console.error("Erro ao salvar no IndexedDB:", e);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (indiceArea < todasAreas.length - 1) {
      setIndiceArea(indiceArea + 1);
    } else {
      try {
        const todasMedias = await lerTodasMedias();
        const todasRespostas = await lerTodasRespostas();
        setMedias(todasMedias);
        setRespostasArmazenadas(todasRespostas);

        navigate("/resultado");
      } catch (e) {
        console.error("Erro ao ler dados do IndexedDB:", e);
      }
    }
  };

  const respostasAreaAtual = respostas[areaAtual.nome] || [];
  const respondidas = respostasAreaAtual.filter((r) => r !== undefined).length;
  const total = areaAtual.perguntas.length;
  const progresso = Math.round((respondidas / total) * 100);

  return (
    <div className="container mt-4">
      <div className="alert alert-light text-center shadow-sm">
        <div className="d-flex justify-content-around">
          <span>😠 1 - Discordo totalmente</span>
          <span>🙁 2 - Discordo parcialmente</span>
          <span>😐 3 - Neutro</span>
          <span>🙂 4 - Concordo parcialmente</span>
          <span>😄 5 - Concordo totalmente</span>
        </div>
      </div>
      <h2 className="text-center mb-4">{areaAtual.nome}</h2>

      <div className="progress mb-4" style={{ height: "25px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: `${progresso}%` }}
        >
          {respondidas}/{total}
        </div>
      </div>

      {areaAtual.perguntas.map((item, index) => {
        const respostaAtual = respostasAreaAtual[index]?.valor || 0;

        return (
          <div key={`${areaAtual.nome}-${index}`} className="card mb-3 shadow-sm">
            <div className="card-body">
              <p className="fw-bold">{item.pergunta}</p>

              <div className="d-flex justify-content-between">
                {[1, 2, 3, 4, 5].map((valor) => (
                  <button
                    key={valor}
                    className={`btn ${
                      respostaAtual === valor ? "btn-success" : "btn-outline-secondary"
                    } rounded-circle`}
                    style={{ width: "50px", height: "50px", fontSize: "1.2rem" }}
                    onClick={() => handleResposta(index, valor, item.reversa, item.fator)}
                  >
                    {["😠", "🙁", "😐", "🙂", "😄"][valor - 1]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {erro && <div className="alert alert-danger mt-3">{erro}</div>}

      <div className="text-center">
        <button type="button" className="btn btn-primary mt-3 px-4" onClick={proximaArea}>
          {indiceArea < todasAreas.length - 1 ? "Próxima área" : "Finalizar"}
        </button>
      </div>
    </div>
  );
};

export default Formulario;
