import type {Avaliacao} from "../../types/Avaliacao.ts";

const impulsividadeAlto: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Impulsividade",
  nivel: "Alto",
  definicao: "A faceta Impulsividade, em nível alto, caracteriza-se pela tendência a ceder a impulsos momentâneos e distrações, abandonando o planejamento em busca de atividades mais prazerosas...",
  caracteristicas: [
    {
      nome: "Abandono do Cronograma",
      descricao: ["Interrompe o cronograma de estudo ou projeto para realizar atividades divertidas, mesmo sabendo que isso poderá gerar arrependimento depois."]
    },
    {
      nome: "Paralisação Imediata",
      descricao: ["Quando o conteúdo se torna entediante, interrompe leitura, cálculo ou programação sem considerar consequências."]
    },
    {
      nome: "Uso Excessivo de Redes Sociais",
      descricao: ["Dedica tempo excessivo a redes sociais ou entretenimento on-line, prejudicando o andamento das tarefas."]
    },
    {
      nome: "Pausas Prolongadas",
      descricao: ["Faz intervalos muito mais longos do que o planejado, mesmo ciente de deadlines próximos."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Busca por Variedade",
      descricao: ["Tendência a buscar atividades alternativas pode estimular criatividade e oferecer momentos de relaxamento."]
    },
    {
      nome: "Energia e Iniciativa",
      descricao: ["Impulsividade pode, ocasionalmente, levar a ação rápida diante de situações que exijam respostas imediatas."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Desorganização do Planejamento",
      descricao: ["Interrupções constantes podem atrasar relatórios, códigos e preparo para provas."]
    },
    {
      nome: "Procrastinação e Arrependimento",
      descricao: ["Abandono de planos gera arrependimento e aumenta ansiedade com prazos."]
    },
    {
      nome: "Impacto na Qualidade do Trabalho",
      descricao: ["Falta de continuidade prejudica profundidade e consistência de projetos acadêmicos."]
    }
  ],
  estrategias: [
    {
      nome: "Técnica 'Se... então...'",
      descricao: ["Se sentir vontade de interromper o trabalho antes do previsto, então continuarei por mais 10 min e reavaliarei a situação."]
    },
    {
      nome: "Bloqueadores de Sites",
      descricao: ["Use bloqueadores para redes sociais e sites de entretenimento nos períodos críticos de foco."]
    },
    {
      nome: "Planejamento de Pausas Controladas",
      descricao: ["Estabeleça intervalos programados e curtos no cronograma, garantindo descanso sem comprometer o progresso."]
    }
  ],
  conclusao: "Graduandos com nível alto da faceta Impulsividade tendem a abandonar seus planejamentos em prol de gratificações imediatas, o que compromete regularidade e qualidade do trabalho acadêmico..."
};

const impulsividadeBaixo: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Impulsividade",
  nivel: "Baixo",
  definicao: "A faceta Impulsividade, em nível baixo, indica alto grau de autocontrole e disciplina, permitindo manter o cronograma acadêmico mesmo diante de distrações...",
  caracteristicas: [
    {
      nome: "Adesão ao Planejamento",
      descricao: ["Mantém o cronograma de estudo ou projeto, resistindo à tentação de abandonar tarefas para atividades mais prazerosas."]
    },
    {
      nome: "Persistência no Estudo",
      descricao: ["Mesmo em momentos de tédio ou desmotivação, continua estudando ou escrevendo sem interrupções impulsivas."]
    },
    {
      nome: "Uso Controlado de Redes Sociais",
      descricao: ["Evita gastar tempo excessivo em redes sociais, direcionando esforços para o trabalho acadêmico."]
    },
    {
      nome: "Pausas Proporcionais",
      descricao: ["Faz pausas dentro do tempo previsto, garantindo produtividade."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Regularidade e Consistência",
      descricao: ["Autocontrole permite rotina organizada e cumprimento de prazos, favorecendo o andamento dos projetos."]
    },
    {
      nome: "Alto Desempenho Acadêmico",
      descricao: ["Disciplina e adesão ao planejamento resultam em produção contínua e de qualidade."]
    },
    {
      nome: "Sustentabilidade no Longo Prazo",
      descricao: ["Resistência a distrações garante equilíbrio entre trabalho e descanso, prevenindo esgotamento."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Rigidez Excessiva",
      descricao: ["Forte controle pode levar a postura muito rígida, dificultando adaptação a mudanças ou pausas espontâneas."]
    },
    {
      nome: "Necessidade de Flexibilidade",
      descricao: ["Falta de impulsividade pode reduzir momentos de criatividade e inovação."]
    }
  ],
  estrategias: [
    {
      nome: "Testar Técnicas Exigentes",
      descricao: ["Use o autocontrole para experimentar blocos de estudo prolongados ou metas mais audaciosas, estimulando o crescimento acadêmico."]
    },
    {
      nome: "Incorporar Pausas Planejadas",
      descricao: ["Permita-se pausas e descansos espontâneos dentro do cronograma para evitar rigidez excessiva e manter a motivação."]
    },
    {
      nome: "Avaliação Contínua do Desempenho",
      descricao: ["Revise periodicamente o planejamento para ajustar prazos e metas, garantindo que a disciplina não vire inflexibilidade."]
    }
  ],
  conclusao: "Graduandos com nível baixo da faceta Impulsividade demonstram excelente controle sobre suas rotinas acadêmicas, favorecendo continuidade e qualidade dos projetos..."
};

const impulsividadeMedio: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Impulsividade",
  nivel: "Médio",
  definicao: "A faceta Impulsividade, em nível médio, caracteriza estudantes que mantêm equilíbrio entre disciplina e flexibilidade...",
  caracteristicas: [
    {
      nome: "Adesão Moderada ao Planejamento",
      descricao: ["Geralmente seguem cronogramas, mas, em dias de maior desmotivação, podem alterar prioridades ou permitir pausas mais longas do que o planejado."]
    },
    {
      nome: "Flexibilidade no Gerenciamento do Tempo",
      descricao: ["São capazes de persistir no estudo, mas, ocasionalmente, deixam-se atrair por redes sociais, vídeos ou outras formas de entretenimento, especialmente após tarefas exigentes."]
    },
    {
      nome: "Equilíbrio entre Autocontrole e Espontaneidade",
      descricao: ["Alternam momentos de disciplina com episódios pontuais de impulsividade, o que pode gerar tanto criatividade quanto adiamento de tarefas."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Capacidade de Adaptação",
      descricao: ["Flexibilidade permite lidar com imprevistos, ajustar o ritmo de estudo e aproveitar oportunidades de lazer sem comprometer totalmente o desempenho acadêmico."]
    },
    {
      nome: "Alívio de Estresse",
      descricao: ["Permitir-se pequenas quebras no planejamento pode reduzir tensão e renovar a motivação, evitando esgotamento."]
    },
    {
      nome: "Criatividade Ocasional",
      descricao: ["Momentos de distração ou mudança de atividade podem favorecer a geração de ideias e soluções inovadoras para desafios acadêmicos."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Risco de Acúmulo de Tarefas",
      descricao: ["Episódios de impulsividade podem levar ao adiamento pontual de tarefas, exigindo esforço extra para recuperar o ritmo posteriormente."]
    },
    {
      nome: "Oscilação na Produtividade",
      descricao: ["Alternância entre foco e distração pode comprometer a continuidade e a qualidade de alguns projetos, principalmente em períodos de alta demanda."]
    },
    {
      nome: "Dificuldade em Delimitar Pausas",
      descricao: ["Sem um controle claro, intervalos planejados podem se estender além do necessário, dificultando a retomada do trabalho."]
    }
  ],
  estrategias: [
    {
      nome: "Planeje Pausas Inteligentes",
      descricao: ["Inclua intervalos breves e regulares na rotina de estudo, para evitar impulsos de longas distrações imprevistas."]
    },
    {
      nome: "Use Técnicas de Compromisso Parcial",
      descricao: ["Se sentir vontade de interromper uma tarefa, comprometa-se a avançar por mais 10 minutos antes de decidir se fará uma pausa."]
    },
    {
      nome: "Estabeleça Limites para o Lazer",
      descricao: ["Defina tempo máximo para uso de redes sociais ou entretenimento entre tarefas, utilizando cronômetros ou aplicativos de bloqueio quando necessário."]
    },
    {
      nome: "Monitore os Resultados",
      descricao: ["Reflita semanalmente sobre o equilíbrio entre produtividade e pausas, ajustando o planejamento para evitar que a flexibilidade vire procrastinação."]
    }
  ],
  conclusao: "Graduandos com nível médio da faceta Impulsividade demonstram equilíbrio razoável entre disciplina e abertura a distrações..."
};

export { impulsividadeAlto, impulsividadeBaixo, impulsividadeMedio };