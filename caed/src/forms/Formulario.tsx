import Pergunta from "../components/Pergunta.tsx";
import {PerguntasAmabilidade} from "../questions/amabilidade/Perguntas.ts";
import {PerguntasNeuroticismo} from "../questions/neuroticismo/Perguntas.ts";
import {PerguntasExtroversao} from "../questions/extroversao/Perguntas.ts";
import {PerguntasConscienciosidade} from "../questions/conscienciosidade/Perguntas.ts";
import {PerguntasAberturaExperiencias} from "../questions/abertura_a_experiencias/Perguntas.ts";

const Formulario = () => {
  return (
    <div className="container mt-4">

      {PerguntasAmabilidade.map((item, index) => (
        <Pergunta
          key={`amabilidade-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          onChange={(valor) =>
            console.log(`Amabilidade [${index}]:`, valor)
          }
        />
      ))}

      {PerguntasNeuroticismo.map((item, index) => (
        <Pergunta
          key={`neuroticismo-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          onChange={(valor) =>
            console.log(`Neuroticismo [${index}]:`, valor)
          }
        />
      ))}

      {PerguntasExtroversao.map((item, index) => (
        <Pergunta
          key={`extroversao-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          onChange={(valor) =>
            console.log(`Extroversão [${index}]:`, valor)
          }
        />
      ))}

      {PerguntasConscienciosidade.map((item, index) => (
        <Pergunta
          key={`conscienciosidade-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          onChange={(valor) =>
            console.log(`Conscienciosidade [${index}]:`, valor)
          }
        />
      ))}

      {PerguntasAberturaExperiencias.map((item, index) => (
        <Pergunta
          key={`abertura-${index}`}
          faceta={item.fator}
          pergunta={item.pergunta}
          onChange={(valor) =>
            console.log(`Abertura a Experiências [${index}]:`, valor)
          }
        />
      ))}

        <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
                console.log('Submit');
            }}
        >
            Enviar dados
        </button>
    </div>
  );
};

export default Formulario;
