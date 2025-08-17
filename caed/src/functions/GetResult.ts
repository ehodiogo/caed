import { esteticaAlto, esteticaBaixo, esteticaMedio } from "../feedbacks/abertura_a_experiencias/Estetica";
import { fantasiaAlto, fantasiaBaixo, fantasiaMedio } from "../feedbacks/abertura_a_experiencias/Fantasia";
import { complacenciaAlto, complacenciaBaixo, complacenciaMedio } from "../feedbacks/amabilidade/Complacencia";
import { franquezaAlto, franquezaBaixo, franquezaMedio } from "../feedbacks/amabilidade/Franqueza";
import { competenciaAlto, competenciaBaixo, competenciaMedio } from "../feedbacks/conscienciosidade/CompetenciaAutoeficacia";
import { ordemAlto, ordemBaixo, ordemMedio } from "../feedbacks/conscienciosidade/Ordem";
import { sensoDeDeverAlto, sensoDeDeverBaixo, sensoDeDeverMedio } from "../feedbacks/conscienciosidade/SensoDeDever";
import { assertividadeAlto, assertividadeBaixo, assertividadeMedio } from "../feedbacks/extroversao/Assertividade";
import { buscaPorNovidadesAlto, buscaPorNovidadesBaixo, buscaPorNovidadesMedio } from "../feedbacks/extroversao/BuscaPorNovidades";
import { emocoesPositivasAlto, emocoesPositivasBaixo, emocoesPositivasMedio } from "../feedbacks/extroversao/EmocoesPositivas";
import { gregarismoAlto, gregarismoBaixo, gregarismoMedio } from "../feedbacks/extroversao/Gregarismo";
import { ansiedadeAlto, ansiedadeBaixo, ansiedadeMedio } from "../feedbacks/neuroticismo/Ansiedade";
import { autoconscienciaAlto, autoconscienciaBaixo, autoconscienciaMedio } from "../feedbacks/neuroticismo/Autoconsciencia";
import { depressaoAlto, depressaoBaixo, depressaoMedio } from "../feedbacks/neuroticismo/DepressaoDesanimo";
import { raivaHostilidadeAlto, raivaHostilidadeBaixo, raivaHostilidadeMedio } from "../feedbacks/neuroticismo/Hostilidade";
import { impulsividadeAlto, impulsividadeBaixo, impulsividadeMedio } from "../feedbacks/neuroticismo/Impulsividade";
import type { Avaliacao } from "../types/Avaliacao";

const alto: number[] = [3.67, 5.0];
const medio: number[] = [2.34, 3.66];
const baixo: number[] = [1.0, 2.33];

type FeedbackNivel = {
  Alto: Avaliacao;
  Médio: Avaliacao;
  Baixo: Avaliacao;
};

const feedbacks: Record<string, FeedbackNivel> = {
  "Estética": {
    Alto: esteticaAlto,
    Médio: esteticaMedio,
    Baixo: esteticaBaixo,
  },
  "Fantasia": {
    Alto: fantasiaAlto,
    Médio: fantasiaMedio,
    Baixo: fantasiaBaixo,
  },
  "Complacência": {
    Alto: complacenciaAlto,
    Médio: complacenciaMedio,
    Baixo: complacenciaBaixo,
  },
  "Franqueza": {
    Alto: franquezaAlto,
    Médio: franquezaMedio,
    Baixo: franquezaBaixo,
  },
  "Competência": {
    Alto: competenciaAlto,
    Médio: competenciaMedio,
    Baixo: competenciaBaixo,
  },
  "Ordem": {
    Alto: ordemAlto,
    Médio: ordemMedio,
    Baixo: ordemBaixo,
  },
  "Senso de Dever": {
    Alto: sensoDeDeverAlto,
    Médio: sensoDeDeverMedio,
    Baixo: sensoDeDeverBaixo,
  },
  "Assertividade": {
    Alto: assertividadeAlto,
    Médio: assertividadeMedio,
    Baixo: assertividadeBaixo,
  },
  "Busca por Novidades": {
    Alto: buscaPorNovidadesAlto,
    Médio: buscaPorNovidadesMedio,
    Baixo: buscaPorNovidadesBaixo,
  },
  "Emoções Positivas": {
    Alto: emocoesPositivasAlto,
    Médio: emocoesPositivasMedio,
    Baixo: emocoesPositivasBaixo,
  },
  "Gregarismo": {
    Alto: gregarismoAlto,
    Médio: gregarismoMedio,
    Baixo: gregarismoBaixo,
  },
  "Ansiedade": {
    Alto: ansiedadeAlto,
    Médio: ansiedadeMedio,
    Baixo: ansiedadeBaixo,
  },
  "Autoconsciência": {
    Alto: autoconscienciaAlto,
    Médio: autoconscienciaMedio,
    Baixo: autoconscienciaBaixo,
  },
  "Depressão/Desânimo": {
    Alto: depressaoAlto,
    Médio: depressaoMedio,
    Baixo: depressaoBaixo,
  },
  "Raiva/Hostilidade": {
    Alto: raivaHostilidadeAlto,
    Médio: raivaHostilidadeMedio,
    Baixo: raivaHostilidadeBaixo,
  },
  "Impulsividade": {
    Alto: impulsividadeAlto,
    Médio: impulsividadeMedio,
    Baixo: impulsividadeBaixo,
  },
};

function getResultFeedback(value: number): "Alto" | "Médio" | "Baixo" {
    const v = parseFloat(value.toFixed(2));

  if (v >= alto[0] && v <= alto[1]) return "Alto";
  if (v >= medio[0] && v <= medio[1]) return "Médio";
  if (v >= baixo[0] && v <= baixo[1]) return "Baixo";

  throw new Error("Valor fora do intervalo esperado");
}

export function getFeedback(faceta: string, value: number): string {
  const nivel = getResultFeedback(value);
  const facetaFeedback = feedbacks[faceta];
  if (!facetaFeedback) {
    return `⚠️ Faceta "${faceta}" não encontrada.`;
  }

  // TODO: aqui da p melhorar esses resultados, passando só o facetaFeedback[nivel] e usando os dados dentro do Resultado.tsx
  return facetaFeedback[nivel].definicao;
}

export default getResultFeedback;
