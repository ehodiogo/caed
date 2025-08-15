import type {Avaliacao} from "../../types/Avaliacao.ts";

const autoconscienciaAlto: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Autoconsciência",
  nivel: "Alto",
  definicao: "A faceta Autoconsciência, em nível alto, caracteriza-se pela sensibilidade exacerbada a julgamentos externos, levando à vergonha ao expor dúvidas, dificuldades e erros...",
  caracteristicas: [
    {
      nome: "Excessiva Sensibilidade aos Julgamentos",
      descricao: ["Sente vergonha ao cometer erros conceituais ou metodológicos diante de colegas ou professores."]
    },
    {
      nome: "Desconforto com a Crítica",
      descricao: ["Experimenta desconforto quando percebe que seu esforço ou linha de trabalho é avaliado negativamente."]
    },
    {
      nome: "Medo de Exposição Pública",
      descricao: ["Tem vergonha de apresentar resultados e defender argumentos em seminários, bancas ou congressos estudantis."]
    },
    {
      nome: "Evita Compartilhar Dificuldades",
      descricao: ["Prefere não revelar falhas para não parecer despreparado(a), limitando aprendizado e melhoria contínua."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Inibição da Busca por Ajuda",
      descricao: ["Vergonha excessiva leva à relutância em solicitar esclarecimentos ou feedback, comprometendo a evolução acadêmica."]
    },
    {
      nome: "Atraso no Desenvolvimento",
      descricao: ["Medo de expor dúvidas impede enfrentamento de desafios e correção de erros, atrasando progresso em projetos."]
    },
    {
      nome: "Isolamento e Baixa Colaboração",
      descricao: ["Dificuldade em compartilhar fragilidades gera isolamento, reduzindo a troca de conhecimento com colegas e docentes."]
    }
  ],
  estrategias: [
    {
      nome: "Participação Gradual em Grupos de Estudo",
      descricao: ["Comece em grupos pequenos ou fóruns on-line mais acolhedores, aumentando gradualmente a confiança para contextos maiores."]
    },
    {
      nome: "Passo a Passo da Dúvida",
      descricao: ["Anote a questão, revise-a e formule a pergunta de forma estruturada para colega ou professor, reduzindo a ansiedade."]
    },
    {
      nome: "Desenvolvimento da Autoconfiança",
      descricao: ["Trabalhe autoconhecimento e auto aceitação refletindo sobre conquistas passadas e recebendo feedback construtivo."]
    },
    {
      nome: "Ambiente de Apoio",
      descricao: ["Busque redes em que a troca de experiências seja valorizada e o erro seja encarado como parte do aprendizado."]
    }
  ],
  conclusao: "Graduandos com nível alto da faceta Autoconsciência (vergonha) demonstram grande sensibilidade às avaliações externas, o que pode inibir o desenvolvimento acadêmico..."
};

const autoconscienciaBaixo: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Autoconsciência",
  nivel: "Baixo",
  definicao: "A faceta Autoconsciência, em nível baixo, indica menor sensibilidade aos julgamentos externos, permitindo maior liberdade para expor dúvidas, dificuldades e erros...",
  caracteristicas: [
    {
      nome: "Menor Preocupação com Julgamentos",
      descricao: ["Não sente vergonha ao cometer erros, facilitando a exposição de dúvidas em sala, laboratório ou grupo de estudo."]
    },
    {
      nome: "Conforto na Exposição",
      descricao: ["Sente-se à vontade para apresentar resultados e defender argumentos em seminários, congressos estudantis e discussões em grupo."]
    },
    {
      nome: "Abertura para Feedback",
      descricao: ["Aceita críticas com facilidade e utiliza o retorno de colegas e professores para aprimorar trabalhos."]
    },
    {
      nome: "Disposição para Compartilhar Experiências",
      descricao: ["Compartilha falhas e dificuldades de forma construtiva, contribuindo para um ambiente de aprendizado colaborativo."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Facilidade na Busca por Ajuda",
      descricao: ["Menor sensibilidade ao julgamento permite solicitar auxílio e esclarecimentos sem receios."]
    },
    {
      nome: "Estímulo à Colaboração",
      descricao: ["Postura aberta favorece intercâmbio de ideias e construção de conhecimento em equipe."]
    },
    {
      nome: "Crescimento Profissional",
      descricao: ["Disposição para aprender com erros e feedback contínuo impulsiona desenvolvimento acadêmico e qualidade dos projetos."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Excesso de Autoconfiança",
      descricao: ["Pouca preocupação com julgamentos pode levar à negligência de revisões críticas necessárias."]
    },
    {
      nome: "Risco de Postura Excessivamente Crítica",
      descricao: ["Liberdade para opinar pode soar dura ou brusca se não houver equilíbrio, afetando o clima colaborativo."]
    }
  ],
  estrategias: [
    {
      nome: "Solicitar Feedback Regular",
      descricao: ["Aproveite facilidade em receber críticas para pedir retornos frequentes de professores e colegas, garantindo avaliação contínua."]
    },
    {
      nome: "Cultivar a Diplomacia",
      descricao: ["Mantenha empatia e respeito ao expor opiniões e lidar com críticas, evitando que autoconfiança vire arrogância."]
    },
    {
      nome: "Equilíbrio entre Autonomia e Reflexão",
      descricao: ["Continue buscando melhorias e revisões críticas mesmo quando se sentir seguro, assegurando excelência acadêmica."]
    },
    {
      nome: "Promoção de Ambientes Colaborativos",
      descricao: ["Participe ativamente de debates e grupos de estudo, usando postura positiva para incentivar troca de experiências e aprendizado conjunto."]
    }
  ],
  conclusao: "Graduandos com nível baixo da faceta Autoconsciência tendem a sentir-se seguros e abertos para expor dúvidas e receber feedback..."
};

const autoconscienciaMedio: Avaliacao = {
  area: "Neuroticismo",
  faceta: "Autoconsciência",
  nivel: "Médio",
  definicao: "A faceta Autoconsciência, em nível médio, caracteriza estudantes que apresentam equilíbrio entre sensibilidade aos julgamentos externos e liberdade para expor dúvidas...",
  caracteristicas: [
    {
      nome: "Convivência com Alguma Vergonha",
      descricao: ["Pode sentir certo constrangimento ao cometer erros em público, mas geralmente não deixa de participar de apresentações, seminários ou grupos de estudo."]
    },
    {
      nome: "Disposição Moderada para Compartilhar Dificuldades",
      descricao: ["Admite dúvidas e limitações quando percebe que o ambiente é acolhedor, porém pode preferir silenciar em contextos mais competitivos ou avaliativos."]
    },
    {
      nome: "Busca de Feedback com Critério",
      descricao: ["Valoriza críticas construtivas, mas pode evitar exposições desnecessárias para não correr o risco de julgamentos negativos excessivos."]
    }
  ],
  vantagensPotenciais: [
    {
      nome: "Autoproteção e Autocrítica",
      descricao: ["A sensibilidade moderada ao julgamento ajuda a manter uma postura cuidadosa, evitando exposição precipitada, mas sem impedir totalmente a busca por ajuda."]
    },
    {
      nome: "Participação Seletiva",
      descricao: ["Tende a escolher bem os momentos de expor dúvidas, aproveitando oportunidades seguras para aprender e aprimorar o desempenho acadêmico."]
    },
    {
      nome: "Abertura Gradual ao Aprendizado Colaborativo",
      descricao: ["Com o tempo, pode sentir-se mais à vontade em contextos colaborativos, desenvolvendo autoconfiança a partir de experiências positivas."]
    }
  ],
  dificuldadesPotenciais: [
    {
      nome: "Oscilação na Busca por Ajuda",
      descricao: ["Pode, em alguns períodos, hesitar em solicitar feedbacks ou participar de discussões por receio de avaliação negativa, limitando o avanço em projetos específicos."]
    },
    {
      nome: "Receio de Exposição em Contextos Competitivos",
      descricao: ["Em ambientes de alta competitividade, tende a adotar postura mais reservada, dificultando a troca de conhecimento ou a identificação de dificuldades reais."]
    },
    {
      nome: "Tendência a Comparações Sociais",
      descricao: ["Sensibilidade intermediária pode levar à autocrítica excessiva ao comparar o próprio desempenho com o dos colegas."]
    }
  ],
  estrategias: [
    {
      nome: "Planeje Perguntas e Participações",
      descricao: ["Prepare previamente dúvidas ou contribuições para sentir-se mais confiante ao se expor em reuniões, seminários ou grupos de estudo."]
    },
    {
      nome: "Busque Ambientes Acolhedores",
      descricao: ["Participe de grupos ou projetos em que o erro é visto como parte natural do aprendizado, ampliando gradualmente o conforto com a exposição."]
    },
    {
      nome: "Equilibre Autoproteção e Abertura",
      descricao: ["Reconheça que sentir certo desconforto é natural, mas não permita que isso impeça o acesso a recursos, feedbacks e oportunidades de desenvolvimento."]
    },
    {
      nome: "Pratique a Autocompaixão",
      descricao: ["Aceite que todos cometem erros e que a exposição controlada às críticas pode contribuir para crescimento acadêmico e pessoal."]
    }
  ],
  conclusao: "Graduandos com nível médio da faceta Autoconsciência apresentam postura equilibrada: são atentos à própria imagem, mas, com apoio e preparo, conseguem participar de forma construtiva..."
};
