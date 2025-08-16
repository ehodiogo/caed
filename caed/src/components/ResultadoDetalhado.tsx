import { useEffect, useState } from "react";
// TODO: aqui tem q pegar os feedbacks de cada nivel de cada pergunta de cada faceta kkkkkk

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

const ResultadoDetalhado: React.FC<ResultadoDetalhadoProps> = ({
  exibirTitulo = false,
}) => {
  const [respostasPorArea, setRespostasPorArea] = useState<RespostasPorArea[]>(
    []
  );

  useEffect(() => {
    const abrirDB = () => {
      return new Promise<IDBDatabase>((resolve, reject) => {
        const request = indexedDB.open("QuestionarioDB", 1);

        request.onsuccess = (event: Event) => {
          resolve((event.target as IDBRequest).result);
        };

        request.onerror = () => {
          reject("Erro ao abrir o banco IndexedDB");
        };
      });
    };

    const pegarStore = (db: IDBDatabase, storeName: string) => {
      return new Promise<unknown[]>((resolve, reject) => {
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
          resolve(request.result);
        };

        request.onerror = () => {
          reject(`Erro ao buscar dados de ${storeName}`);
        };
      });
    };

    const pegarDados = async () => {
      try {
        const db = await abrirDB();
        const [dadosRespostas] = await Promise.all([
          pegarStore(db, "respostas"),
        ]);
        setRespostasPorArea(dadosRespostas as RespostasPorArea[]);
      } catch (error) {
        console.error(error);
      }
    };

    pegarDados();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {exibirTitulo && <h2>Resultado Detalhado</h2>}

      {respostasPorArea.map((registroArea, idx) => (
        <div key={idx} style={{ marginBottom: "20px" }}>
          <h3>{registroArea.area}</h3>
          <ul>
            {registroArea.respostas.map((resposta) => (
              <li key={resposta.idPergunta}>
                Pergunta {resposta.idPergunta}: {resposta.valor} – Faceta:{" "}
                {resposta.faceta} {resposta.reversa ? "(Reversa)" : ""}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResultadoDetalhado;
