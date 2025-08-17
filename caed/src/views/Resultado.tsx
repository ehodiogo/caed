import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  CartesianGrid,
} from "recharts";
import ResultadoDetalhado from "../components/ResultadoDetalhado";
import { getFeedback } from "../functions/GetResult";
import NavbarComponent from "../components/Navbar.tsx";

interface RegistroFacetas {
  area: string;
  mediasFacetas: Record<string, number>;
}

interface RegistroMedia {
  area: string;
  media: number;
}

interface RegistroResposta {
  idPergunta: number;
  valor: number;
  reversa: boolean;
  faceta: string;
}

const Resultado = () => {
  const [facetas, setFacetas] = useState<RegistroFacetas[]>([]);
  const [medias, setMedias] = useState<RegistroMedia[]>([]);
  const [respostas, setRespostas] = useState<RegistroResposta[]>([]);

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

        const [dadosFacetas, dadosMedias, dadosRespostas] = await Promise.all([
          pegarStore(db, "mediasFacetas"),
          pegarStore(db, "medias"),
          pegarStore(db, "respostas"),
        ]);

        setFacetas(dadosFacetas as RegistroFacetas[]);
        setMedias(dadosMedias as RegistroMedia[]);
        setRespostas(dadosRespostas as RegistroResposta[]);
      } catch (error) {
        console.error(error);
      }
    };

    pegarDados();
  }, []);

  const dadosCompletos =
    respostas.length === 5 &&
    facetas.length === 5 &&
    medias.length === 5;

  if (!dadosCompletos) {
    return (
      <>
        <NavbarComponent />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            padding: "20px",
            backgroundColor: "#f9f4f4",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "40px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              maxWidth: "500px",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#b03a2e", marginBottom: "20px" }}>
              Teste BigFive não realizado
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "30px" }}>
              Você ainda não realizou o teste BigFive para obter seu resultado detalhado.
            </p>
            <a
              href="/formulario"
              style={{
                display: "inline-block",
                backgroundColor: "#b03a2e",
                color: "#fff",
                padding: "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#8a2820")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#b03a2e")
              }
            >
              Realizar o teste
            </a>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <NavbarComponent />
      <div style={{ padding: "20px" }}>
        <h1>Resultado</h1>

        <h2>Médias Gerais</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={medias}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="area" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Bar dataKey="media" fill="#b03a2e" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        <h2>Médias por Facetas</h2>
        {facetas.map((registro, idx) => {
          const dataFacetas = Object.entries(registro.mediasFacetas).map(
            ([faceta, valor]) => ({
              faceta,
              valor,
            })
          );

          const poucasFacetas = dataFacetas.length <= 2;

          return (
            <div key={idx} style={{ marginBottom: "40px" }}>
              <h3>{registro.area}</h3>

              <ResponsiveContainer width="100%" height={300}>
                {poucasFacetas ? (
                  <BarChart data={dataFacetas}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="faceta" />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#b03a2e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                ) : (
                  <RadarChart data={dataFacetas}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="faceta" />
                    <PolarRadiusAxis domain={[0, 5]} />
                    <Radar
                      name={registro.area}
                      dataKey="valor"
                      stroke="#b03a2e"
                      fill="#b03a2e"
                      fillOpacity={0.6}
                    />
                    <Tooltip />
                  </RadarChart>
                )}
              </ResponsiveContainer>

              <div style={{ marginTop: "20px" }}>
                {Object.entries(registro.mediasFacetas).map(([faceta, valor]) => (
                    console.log("Faceta", faceta, "Valor", valor),
                  <div
                    key={faceta}
                    style={{
                      backgroundColor: "#fff",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      marginBottom: "10px",
                    }}
                  >
                    <strong>{faceta}:</strong> {valor.toFixed(2)} –{" "}
                    <em>{getFeedback(faceta, valor)}</em>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <h2>Respostas Detalhadas</h2>
        <ResultadoDetalhado exibirTitulo />
      </div>
    </>
  );
};

export default Resultado;
