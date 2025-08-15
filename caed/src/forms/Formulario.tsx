import { useState } from "react";
import Pergunta from "../components/Pergunta.tsx";
import { PerguntasAmabilidade } from "../questions/amabilidade/Perguntas.ts";
import { PerguntasNeuroticismo } from "../questions/neuroticismo/Perguntas.ts";
import { PerguntasExtroversao } from "../questions/extroversao/Perguntas.ts";
import { PerguntasConscienciosidade } from "../questions/conscienciosidade/Perguntas.ts";
import { PerguntasAberturaExperiencias } from "../questions/abertura_a_experiencias/Perguntas.ts";

const todasAreas = [
  { nome: "Amabilidade", perguntas: PerguntasAmabilidade },
  { nome: "Neuroticismo", perguntas: PerguntasNeuroticismo },
  { nome: "Extroversão", perguntas: PerguntasExtroversao },
  { nome: "Conscienciosidade", perguntas: PerguntasConscienciosidade },
  { nome: "Abertura a Experiências", perguntas: PerguntasAberturaExperiencias },
];

type RespostasPorArea = {
  [area: string]: { idPergunta: number; valor: number; reversa: boolean }[];
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

const salvarRespostas = async (
  area: string,
  respostas: { idPergunta: number; valor: number; reversa: boolean }[]
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
  { area: string; respostas: { idPergunta: number; valor: number; reversa: boolean }[] }[]
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
          respostas: { idPergunta: number; valor: number; reversa: boolean }[];
        }[]
      );
    request.onerror = () => reject(request.error);
  });
};

const Formulario = () => {
  const [indiceArea, setIndiceArea] = useState(0);
  const [respostas, setRespostas] = useState<RespostasPorArea>({});
  const [erro, setErro] = useState("");
  const [finalizado, setFinalizado] = useState(false);
  const [medias, setMedias] = useState<{ area: string; media: number }[]>([]);
  const [respostasArmazenadas, setRespostasArmazenadas] = useState<
    { area: string; respostas: { idPergunta: number; valor: number; reversa: boolean }[] }[]
  >([]);

  const areaAtual = todasAreas[indiceArea];

  const handleResposta = (indexPergunta: number, valor: number, reversa: boolean) => {
    setRespostas((prev) => {
      const areaNome = areaAtual.nome;
      const respostasArea = prev[areaNome] || [];

      const novasRespostasArea = [...respostasArea];
      novasRespostasArea[indexPergunta] = { idPergunta: indexPergunta, valor, reversa };

      return {
        ...prev,
        [areaNome]: novasRespostasArea,
      };
    });
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

    try {
      await salvarMedia(areaAtual.nome, media);
      await salvarRespostas(areaAtual.nome, respostasAreaAtual);
    } catch (e) {
      console.error("Erro ao salvar no IndexedDB:", e);
    }

    if (indiceArea < todasAreas.length - 1) {
      setIndiceArea(indiceArea + 1);
    } else {
      try {
        const medias = await lerTodasMedias();
        const todasRespostas = await lerTodasRespostas();
        setMedias(medias);
        setRespostasArmazenadas(todasRespostas);
        setFinalizado(true);
      } catch (e) {
        console.error("Erro ao ler dados do IndexedDB:", e);
      }
    }
  };

  if (finalizado) {
    return (
      <div className="container mt-4">
        <h2>Resumo do Questionário</h2>

        <h3>Médias por área</h3>
        <ul>
          {medias.map((m) => (
            <li key={m.area}>
              {m.area}: {m.media.toFixed(2)}
            </li>
          ))}
        </ul>

        <h3>Respostas completas</h3>
        {respostasArmazenadas.map((r) => (
          <div key={r.area} style={{ marginBottom: "20px" }}>
            <strong>{r.area}</strong>
            <ul>
              {r.respostas.map((resp) => (
                <li key={resp.idPergunta}>
                  Pergunta {resp.idPergunta + 1}: {resp.valor}{" "}
                  {resp.reversa ? "(reversa)" : ""}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>{areaAtual.nome}</h2>

      {areaAtual.perguntas.map((item, index) => (
        <Pergunta
          key={`${areaAtual.nome}-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          reversa={item.reversa}
          onChange={(valor, rev) => handleResposta(index, valor, rev ?? false)}
        />
      ))}

      {erro && <div className="alert alert-danger mt-3">{erro}</div>}

      <button
        type="button"
        className="btn btn-primary mt-3"
        onClick={proximaArea}
      >
        {indiceArea < todasAreas.length - 1 ? "Próxima área" : "Finalizar"}
      </button>
    </div>
  );
};

export default Formulario;
