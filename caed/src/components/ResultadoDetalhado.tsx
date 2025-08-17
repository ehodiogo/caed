import { useEffect, useState } from "react";
import todasAreas from "../questions/todasAreas.ts";

interface RegistroResposta {
  idPergunta: number;
  valor: number;
  reversa: boolean;
  faceta: string;
}

interface RespostasPorArea {
  area: string;
  respostas: RegistroResposta[];
}

interface ResultadoDetalhadoProps {
  exibirTitulo?: boolean;
}

const ResultadoDetalhado: React.FC<ResultadoDetalhadoProps> = () => {
  const [respostasPorArea, setRespostasPorArea] = useState<RespostasPorArea[]>([]);

  useEffect(() => {
    const abrirDB = () => {
      return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open("QuestionarioDB", 1);
        request.onsuccess = (event: Event) => resolve((event.target as IDBRequest).result);
        request.onerror = () => reject("Erro ao abrir o banco IndexedDB");
      });
    };

    const pegarStore = (db: IDBDatabase, storeName: string) => {
      return new Promise<unknown[]>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(`Erro ao buscar dados de ${storeName}`);
      });
    };

    const pegarDados = async () => {
      try {
        const db = await abrirDB();
        const [dadosRespostas] = await Promise.all([pegarStore(db, "respostas")]);
        setRespostasPorArea(dadosRespostas as RespostasPorArea[]);
      } catch (error) {
        console.error(error);
      }
    };

    pegarDados();
  }, []);

  const pegarFeedback = (area: string, idPergunta: number, valor: number) => {
    const areaObj = todasAreas.find((a) => a.nome === area);
    if (!areaObj) return "Área não encontrada";

    const pergunta = areaObj.perguntas[idPergunta];
    if (!pergunta) return "Pergunta não encontrada";

    const notaFinal = pergunta.reversa ? 6 - valor : valor;

    const feedback = pergunta.feedbacks.find((f) => {
      if (f.nota.includes("-")) {
        const [min, max] = f.nota.split("-").map(Number);
        return notaFinal >= min && notaFinal <= max;
      } else {
        return Number(f.nota) === notaFinal;
      }
    });

    return feedback ? feedback.resultado : "Feedback não encontrado";
  };

  return (
    <div style={{ padding: "20px" }}>
      {respostasPorArea.map((registroArea, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <h3>{registroArea.area}</h3>
          <ul>
            {registroArea.respostas.map((resposta) => (
              <li key={resposta.idPergunta}>
                <strong>Pergunta:</strong>{" "}
                {todasAreas
                  .find((a) => a.nome === registroArea.area)
                  ?.perguntas[resposta.idPergunta]?.pergunta || "Pergunta não encontrada"}{" "}
                <br />
                <strong>Resposta:</strong> {resposta.valor}{" "}
                {resposta.reversa ? "(Reversa)" : ""} <br />
                <strong>Faceta:</strong> {resposta.faceta} <br />
                <strong>Feedback:</strong>{" "}
                {pegarFeedback(registroArea.area, resposta.idPergunta, resposta.valor)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResultadoDetalhado;
