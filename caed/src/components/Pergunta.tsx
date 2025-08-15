import { useState } from "react";
import * as React from "react";

interface PerguntaProps {
  faceta: string;
  pergunta: string;
  onChange?: (valor: number) => void;
}

const Pergunta = ({ faceta, pergunta, onChange }: PerguntaProps) => {
  const [resposta, setResposta] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseInt(e.target.value);
    setResposta(valor);
    if (onChange) onChange(valor);
  };

  return (
    <div className="mb-4">
      <h5>{faceta}</h5>
      <p>{pergunta}</p>
      <div className="d-flex justify-content-between">
        {[1, 2, 3, 4, 5].map((num) => (
          <div className="form-check text-center" key={num}>
            <input
              className="form-check-input"
              type="radio"
              name={faceta + pergunta}
              value={num}
              checked={resposta === num}
              onChange={handleChange}
              id={`${faceta}-${num}`}
            />
            <label className="form-check-label" htmlFor={`${faceta}-${num}`}>
              {num}
            </label>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-2" style={{ fontSize: "0.8rem" }}>
        <span>Discordo totalmente</span>
        <span>Concordo totalmente</span>
      </div>
    </div>
  );
};

export default Pergunta;
