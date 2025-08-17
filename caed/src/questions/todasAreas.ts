import { PerguntasAmabilidade } from "./amabilidade/Perguntas.ts";
import { PerguntasNeuroticismo } from "./neuroticismo/Perguntas.ts";
import { PerguntasExtroversao } from "./extroversao/Perguntas.ts";
import { PerguntasConscienciosidade } from "./conscienciosidade/Perguntas.ts";
import { PerguntasAberturaExperiencias } from "./abertura_a_experiencias/Perguntas.ts";

const todasAreas = [
  { nome: "Amabilidade", perguntas: PerguntasAmabilidade },
  { nome: "Neuroticismo", perguntas: PerguntasNeuroticismo },
  { nome: "Extroversão", perguntas: PerguntasExtroversao },
  { nome: "Conscienciosidade", perguntas: PerguntasConscienciosidade },
  { nome: "Abertura a Experiências", perguntas: PerguntasAberturaExperiencias },
];

export default todasAreas;