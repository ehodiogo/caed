import Formulario from "../forms/Formulario.tsx";
import NavbarComponent from "../components/Navbar.tsx";
import { useState } from "react";
import QuantiaPerguntas from "../components/QuantiaPerguntas.tsx";
import todasAreas from "../questions/todasAreas.ts";

const BigFive = () => {
  const [startFormulario, setStartFormulario] = useState<boolean>(false);

  return (
    <div>
      <NavbarComponent />
      <h2 className="text-center fw-bold">Big Five Questionário</h2>

      {!startFormulario && (
        <QuantiaPerguntas
          areas={todasAreas.map((a) => a.nome)}
          quantias={todasAreas.map((a) => a.perguntas.length)}
        />
      )}

      {!startFormulario ? (
        <div className="text-center mt-5">
          <p className="fs-5">Clique abaixo para iniciar o questionário:</p>
          <button
            className="btn btn-primary"
            onClick={() => setStartFormulario(true)}
          >
            Iniciar
          </button>
        </div>
      ) : (
        <Formulario />
      )}
    </div>
  );
};

export default BigFive;
