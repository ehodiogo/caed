import type {Avaliacao} from "../../types/Avaliacao.ts";

const raivaHostilidadeAlto: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Raiva/Hostilidade",
  nivel: "Alto",
  definicao: "A faceta Raiva/Hostilidade, em nível alto, refere-se à tendência de reagir com irritação intensa, frustração e ressentimento diante de obstáculos, críticas e imprevistos acadêmicos...",
  caracteristicas: [
    {
      nome: "Reatividade Exacerbada",
      descricao: ["Responde de forma intensa a interrupções, críticas e situações que atrapalham o planejamento acadêmico."]
    },
    {
      nome: "Sensação de Explosão",
      descricao: ["Experiencia sentimento de 'explodir' diante de contratempos, sobretudo quando o esforço não é reconhecido ou surgem comparações com colegas."]
    },
    {
      nome: "Irritação Contínua",
      descricao: ["Manifesta irritação mesmo diante de pequenos obstáculos, dificultando concentração e manutenção do foco."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Energia para Ação",
      descricao: ["A intensidade emocional pode, se canalizada corretamente, impulsionar postura mais assertiva e engajada na resolução de problemas."]
    },
    {
      nome: "Comprometimento com Projetos",
      descricao: ["Forte reação pode indicar elevado envolvimento com atividades acadêmicas e busca por rigor e excelência em relatórios, códigos ou protótipos."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Prejuízo nas Relações Interpessoais",
      descricao: ["Hostilidade excessiva pode gerar conflitos com colegas, professores e membros de equipe."]
    },
    {
      nome: "Desvio do Foco Acadêmico",
      descricao: ["Dificuldade em controlar irritação pode levar à dispersão e comprometer desempenho."]
    },
    {
      nome: "Impacto na Saúde Emocional",
      descricao: ["Tensão constante pode resultar em esgotamento, aumento da ansiedade e outros sintomas de estresse."]
    }
  ],
  estrategias: [
    {
      nome: "Identificação de Gatilhos",
      descricao: ["Reconheça situações como prazos apertados, ambientes barulhentos ou interrupções inesperadas que disparam irritação."]
    },
    {
      nome: "Pausas Estratégicas (Time-Outs)",
      descricao: ["Faça intervalos curtos (2 – 3 min) para respirar profundamente e recuperar a calma sempre que notar aumento da tensão."]
    },
    {
      nome: "Técnicas de Autorregulação",
      descricao: ["Pratique registro diário das emoções, relaxamento muscular progressivo ou meditação para liberar tensão acumulada."]
    },
    {
      nome: "Feedback e Reflexão",
      descricao: ["Busque retorno de colegas e professores para identificar padrões reativos e desenvolver respostas mais equilibradas."]
    }
  ],
  conclusao: "Graduandos com nível alto da faceta Raiva/Hostilidade demonstram forte comprometimento com suas atividades acadêmicas, precisam adotar estratégias eficazes de regulação emocional para canalizar essa energia de forma construtiva..."
};

const raivaHostilidadeBaixo: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Raiva/Hostilidade",
  nivel: "Baixo",
  definicao: "Para graduandos, a faceta Raiva/Hostilidade em nível baixo indica postura de controle emocional e serenidade mesmo diante de desafios e imprevistos acadêmicos...",
  caracteristicas: [
    {
      nome: "Estabilidade Emocional",
      descricao: ["Mantém calma ao receber feedbacks críticos, interrupções ou contratempos em projetos e disciplinas."]
    },
    {
      nome: "Controle nas Respostas",
      descricao: ["Responde de maneira ponderada, sem permitir que irritação comprometa foco ou desempenho."]
    },
    {
      nome: "Postura Colaborativa",
      descricao: ["Tranquilidade facilita mediação de conflitos, promovendo clima pacífico e cooperativo em salas, laboratórios e grupos de estudo."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Concentração Sustentada",
      descricao: ["Estabilidade emocional contribui para trabalho eficiente e focado, mesmo em períodos de pressão."]
    },
    {
      nome: "Menor Risco de Esgotamento",
      descricao: ["Equilíbrio preserva saúde física e mental, evitando desgaste excessivo."]
    },
    {
      nome: "Ambiente Interpessoal Positivo",
      descricao: ["Postura serena facilita construção de relações harmoniosas e redes de apoio."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Falta de Senso de Urgência",
      descricao: ["Ausência de tensão pode levar à procrastinação ou revisão crítica insuficiente dos projetos."]
    },
    {
      nome: "Violação de Limites Pessoais",
      descricao: ["Colegas ou professores podem sobrecarregar o estudante supondo que 'está tudo bem'."]
    },
    {
      nome: "Baixa Defesa de Direitos",
      descricao: ["Pode aceitar prazos ou condições desfavoráveis sem questionar, perdendo oportunidades de reconhecimento."]
    },
    {
      nome: "Ressentimento Silencioso",
      descricao: ["Raiva suprimida pode acumular-se e explodir tardiamente ou gerar afastamento do grupo."]
    }
  ],
  estrategias: [
    {
      nome: "Ativação do Senso de Urgência",
      descricao: ["Use cronômetros, checklists e agendas para estabelecer marcos intermediários.", "Divida grandes projetos em partes menores com prazos definidos."]
    },
    {
      nome: "Participação em Desafios Acadêmicos",
      descricao: ["Inscreva-se em editais, eventos e grupos de pesquisa para gerar compromissos motivadores."]
    },
    {
      nome: "Feedback Contínuo",
      descricao: ["Solicite retornos frequentes de professores e colegas para identificar pontos de melhoria."]
    },
    {
      nome: "Desenvolvimento de Assertividade e Limites",
      descricao: ["Estabeleça horários de foco ininterrupto e comunique claramente sua disponibilidade.", "Comece dizendo 'não' a pedidos de baixo risco e avance gradualmente."]
    },
    {
      nome: "Monitoramento de Ressentimento",
      descricao: ["Registre, em escala 0–10, desconforto após interações; se ≥ 5, busque diálogo em até 48 h."]
    }
  ],
  conclusao: "Graduandos com nível baixo da faceta Raiva/Hostilidade cultivam eficiência e harmonia no ambiente acadêmico..."
};

const raivaHostilidadeMedio: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Raiva/Hostilidade",
  nivel: "Médio",
  definicao: "A faceta Raiva/Hostilidade, em nível médio, caracteriza estudantes que demonstram certa irritação diante de contratempos e críticas...",
  caracteristicas: [
    {
      nome: "Irritação pontual",
      descricao: ["Reage com incômodo moderado a interrupções, críticas ou imprevistos, mas evita explosões ou conflitos abertos na maioria das situações."]
    },
    {
      nome: "Recuperação do controle",
      descricao: ["Após momentos de irritação, busca retomar o foco, procurando não prolongar tensões em sala, laboratórios ou grupos de projeto."]
    },
    {
      nome: "Sensibilidade a injustiças",
      descricao: ["Demonstra desconforto quando sente que seu esforço não é reconhecido, mas geralmente consegue expressar descontentamento de forma adequada."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Alerta para problemas",
      descricao: ["A irritação moderada serve como sinal de que algo precisa ser ajustado, favorecendo revisões de planejamento e melhorias nos processos acadêmicos."]
    },
    {
      nome: "Comprometimento equilibrado",
      descricao: ["Mostra envolvimento com as atividades, mantendo assertividade suficiente para defender pontos de vista sem hostilidade excessiva."]
    },
    {
      nome: "Capacidade de mediação",
      descricao: ["Oscilando entre firmeza e serenidade, pode atuar como mediador em situações de tensão, promovendo discussões mais equilibradas."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Oscilação emocional",
      descricao: ["A alternância entre calma e irritação pode gerar momentos de instabilidade no grupo ou equipe, exigindo atenção ao modo de expressar desconforto."]
    },
    {
      nome: "Risco de acúmulo de tensão",
      descricao: ["Se não for expressa de maneira adequada, a irritação pode se acumular, levando a explosões ocasionais ou a afastamento silencioso."]
    },
    {
      nome: "Dificuldade em lidar com críticas intensas",
      descricao: ["Pode reagir defensivamente diante de críticas mais incisivas, especialmente se recorrentes ou mal fundamentadas."]
    }
  ],
  estrategias: [
    {
      nome: "Prática de pausas conscientes",
      descricao: ["Ao perceber irritação crescente, faça breves intervalos para recuperar a calma e evitar respostas impulsivas."]
    },
    {
      nome: "Expressão assertiva do desconforto",
      descricao: ["Comunique incômodos de forma direta e respeitosa, buscando soluções práticas sem entrar em conflito desnecessário."]
    },
    {
      nome: "Monitoramento das reações",
      descricao: ["Reflita sobre os gatilhos de irritação e ajuste o modo de resposta para evitar impactos negativos no ambiente acadêmico."]
    },
    {
      nome: "Busca de diálogo construtivo",
      descricao: ["Quando notar tensão no grupo, promova conversas para alinhar expectativas e prevenir conflitos futuros."]
    }
  ],
  conclusao: "Graduandos com nível médio da faceta Raiva/Hostilidade apresentam envolvimento emocional saudável com suas atividades..."
};
