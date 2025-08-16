import type {Pergunta} from "../../types/Pergunta.ts";

export const PerguntasExtroversao: Pergunta[] = [
  {
    pergunta:
      "Prefiro participar de grupos de estudo a trabalhar sempre sozinho(a).",
    fator: "Gregarismo",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Sua preferência por trabalho individual favorece o foco. Para enriquecer perspectivas, agende ao menos um encontro semanal curto com colegas para conversar sobre seus estudos.",
      },
      {
        nota: "3",
        resultado:
          "Você alterna bem entre colaboração e autonomia. Mantenha sessões quinzenais de grupo para discutir tópicos complexos e preserve blocos individuais para consolidar conteúdo.",
      },
      {
        nota: "4-5",
        resultado:
          "Aprendizado colaborativo é seu ponto forte. Para evitar sobrecarga de reuniões, defina uma pauta clara e limite de tempo a cada encontro, garantindo espaço para estudo aprofundado sozinho.",
      },
    ],
  },
  {
    pergunta: "Sinto-me mais animado(a) em ambientes com debates constantes.",
    fator: "Gregarismo",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Ambientes silenciosos aumentam sua produtividade. Use bibliotecas ou salas de estudo reservadas, mas marque check-ins rápidos on-line quando precisar de feedback.",
      },
      {
        nota: "3",
        resultado:
          "Você equilibra bem estímulo e concentração. Organize períodos de debate após etapas chave dos seus estudos e projetos; isso traz novas ideias sem dispersar o foco.",
      },
      {
        nota: "4-5",
        resultado:
          "Discussões o revigoram. Para não perder ritmo, crie um quadro compartilhado onde ideias sejam registradas e priorizadas antes de se aprofundar em cada tema.",
      },
    ],
  },
  {
    pergunta: "Gosto de grupos de discussão sobre temas do meu curso.",
    fator: "Gregarismo",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Falar pouco em grupos preserva tempo. Para colher benefícios, participe de fóruns assíncronos e deixe perguntas pontuais — você recebe insights sem reuniões longas.",
      },
      {
        nota: "3",
        resultado:
          "Interesse moderado. Selecione apenas grupos alinhados aos seus interesses atuais e participe em momentos estratégicos (ex.: início de semestre, revisão de literatura).",
      },
      {
        nota: "4-5",
        resultado:
          "Você valoriza muito a troca de ideias. Rotacione liderança das discussões para garantir foco e permita a todos apresentar suas ideias, mantendo o debate produtivo.",
      },
    ],
  },
  {
    pergunta:
      "Aprendo melhor conversando sobre métodos ou resultados com colegas.",
    fator: "Gregarismo",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Você assimila conteúdo em estudo solo. Para testar compreensão, faça revisões esporádicas com um colega de confiança ou grave um áudio explicando o conceito para si mesmo.",
      },
      {
        nota: "3",
        resultado:
          "Combina estudo individual com debates pontuais. Agende revisões em duplas após concluir cada etapa do seu aprendizado para consolidar o aprendizado.",
      },
      {
        nota: "4-5",
        resultado:
          "Debate potencializa seu entendimento. Para não depender 100% de outras pessoas, finalize leituras prévias antes da discussão e registre conclusões em resumo escrito.",
      },
    ],
  },
  {
    pergunta: "Sinto-me revigorado(a) após sessões de brainstorming coletivo.",
    fator: "Gregarismo",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Brainstorming intenso pode cansar. Participe apenas das etapas iniciais (mapeamento de ideias) e depois concentre-se em desenvolver soluções individualmente.",
      },
      {
        nota: "3",
        resultado:
          "Energia moderada pós-reunião. Defina objetivos claros: converta as melhores ideias em plano de ação pessoal logo após o encontro para não perder o ímpeto.",
      },
      {
        nota: "4-5",
        resultado:
          "Brainstorming eleva sua motivação e criatividade. Para manter a produtividade, finalize cada sessão com tarefas designadas e prazos curtos, evitando que as ideias fiquem só no papel.",
      },
    ],
  },
  {
    pergunta: "Prefiro estudar isolado(a) para não me distrair.",
    fator: "Gregarismo",
    reversa: true,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Você aprecia as companhias e aprende bem em grupo. Continue alternando entre debate colaborativo e blocos curtos de estudo solo para fixação dos conceitos.",
      },
      {
        nota: "3",
        resultado:
          "Tanto trabalho solo quanto coletivo funcionam para você. Escolha o formato conforme a complexidade do assunto e a fase do projeto.",
      },
      {
        nota: "4-5",
        resultado:
          "O isolamento favorece sua concentração, mas pode limitar o feedback rápido. Agende revisões breves com colegas ou professores para validar o avanço e evitar pontos cegos.",
      },
    ],
  },
  {
    pergunta: "Não tenho medo de expor minhas opiniões em sala ou reuniões.",
    fator: "Assertividade",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Hesitar em falar pode fazer suas ideias passarem despercebidas. Anote dois pontos que queira defender antes da aula e comprometa-se a comentar pelo menos um deles.",
      },
      {
        nota: "3",
        resultado:
          "Você fala quando necessário, mas ainda se policia. Continue preparando argumentos-chave e pratique reformular críticas em sugestões construtivas.",
      },
      {
        nota: "4-5",
        resultado:
          "Sua clareza beneficia o debate. Para evitar a impressão de imposição, faça perguntas abertas (“Como vocês veem…?”) antes de apresentar seu ponto de vista.",
      },
    ],
  },
  {
    pergunta: "Assumo a liderança em trabalhos coletivos quando necessário.",
    fator: "Assertividade",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Evitar a liderança pode limitar seu crescimento. Candidate-se para coordenar subtarefas (ex.: controle de prazos) em um próximo projeto para ganhar experiência.",
      },
      {
        nota: "3",
        resultado:
          "Você lidera quando precisa e sabe delegar. Mantenha check-lists compartilhados para acompanhar o progresso sem centralizar excessivamente.",
      },
      {
        nota: "4-5",
        resultado:
          "Liderar é natural para você. Para estimular o grupo, distribua responsabilidades-chave e ofereça mentoria leve, garantindo que todos desenvolvam competências de gestão.",
      },
    ],
  },
  {
    pergunta: "Defendo meu ponto de vista mesmo contra a maioria.",
    fator: "Assertividade",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Fortaleça a confiança reunindo dados ou exemplos práticos antes de discordar — isso aumenta a segurança ao se posicionar.",
      },
      {
        nota: "3",
        resultado:
          "Boa disposição para argumentar. Continue fundamentando seus posicionamentos em evidências e mostre abertura para ajustes durante o debate.",
      },
      {
        nota: "4-5",
        resultado:
          "Persistência sólida. Para não parecer inflexível, declare o interesse comum (“Nosso objetivo é…”), depois apresente seu argumento e convide os que discordam de você a propor melhorias.",
      },
    ],
  },
  {
    pergunta: "Exponho ideias com facilidade em apresentações ou eventos.",
    fator: "Assertividade",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Pratique apresentações de 3-5 min para colegas ou grave-se; revise postura e clareza antes de apresentações oficinais.",
      },
      {
        nota: "3",
        resultado:
          "Você se apresenta razoavelmente bem. Aperfeiçoe ritmo e objetividade gravando ensaios e observando o tempo de cada slide.",
      },
      {
        nota: "4-5",
        resultado:
          "Apresentar é seu ponto forte. Para engajar a audiência, inclua perguntas interativas e exemplos aplicados aos projetos do Centro de Tecnologia.",
      },
    ],
  },
  {
    pergunta:
      "Faço perguntas diretas aos professores quando algo não está claro.",
    fator: "Assertividade",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Formular uma dúvida por escrito antes da aula ajuda a ganhar coragem; se ainda hesitar, envie-a por e-mail e depois comente em público na aula seguinte.",
      },
      {
        nota: "3",
        resultado:
          "Você pergunta quando é essencial. Continue anotando pontos obscuros em tempo real e procure confirmação breve ao fim da aula para fixar o conteúdo.",
      },
      {
        nota: "4-5",
        resultado:
          "Perguntar diretamente acelera o seu aprendizado. Para equilibrar a dinâmica da turma, agrupe dúvidas semelhantes e verifique se colegas também precisam de esclarecimento.",
      },
    ],
  },
  {
    pergunta: "Deixo de expor dúvidas para não parecer insistente.",
    fator: "Assertividade",
    reversa: true,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Excelente assertividade: você compartilha dúvidas livremente. Apenas monitore o tempo da aula para que todos possam participar.",
      },
      {
        nota: "3",
        resultado:
          "Oscila entre perguntar e recuar. Defina um limite (ex.: no máximo 2 dúvidas por aula) para manter o equilíbrio sem ficar em silêncio.",
      },
      {
        nota: "4-5",
        resultado:
          "Medo de insistir pode deixar lacunas de conhecimento. Anote suas dúvidas e combine um momento para esclarecê-las sem constrangimento.",
      },
    ],
  },
  {
    pergunta: "Procuro métodos novos de estudo para manter a motivação.",
    fator: "Busca de Novidades",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Sua rotina estável garante consistência. Para evitar monotonia, agende um “teste de ferramenta” quinzenal (ex.: mapa mental digital) e avalie se vale a adoção.",
      },
      {
        nota: "3",
        resultado:
          "Você experimenta ocasionalmente. Inclua uma técnica nova por semestre (p. ex., flashcards) e mantenha as que realmente elevarem rendimento.",
      },
      {
        nota: "4-5",
        resultado:
          "Entusiasmo por novos métodos mantém o engajamento. Use um diário de experimentação para anotar ganhos e descartar abordagens que só desviam o foco.",
      },
    ],
  },
  {
    pergunta: "Fico entusiasmado(a) ao testar abordagens diferentes.",
    fator: "Busca de Novidades",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Testar pouco pode limitar a inovação. Defina mini-projetos de baixo risco (ex.: aplicar uma técnica nova de estudo para um tópico mais desafiador) para avaliar benefícios sem comprometer prazos.",
      },
      {
        nota: "3",
        resultado:
          "Seu entusiasmo moderado equilibra inovação e estabilidade. Conserve práticas que entregam resultados e reserve finais de mês para explorar algo novo.",
      },
      {
        nota: "4-5",
        resultado:
          "Alta motivação por novidades impulsiona criatividade. Para não dispersar, aplique a regra “1 mudança por vez” e avalie o impacto antes de seguir para a próxima.",
      },
    ],
  },
  {
    pergunta: "Gosto de variar horários e locais de estudo.",
    fator: "Busca de Novidades",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Horários fixos favorecem o ritmo, mas a mente pode saturar. Experimente mudar apenas o ambiente (sala silenciosa ↔ biblioteca) uma vez na semana para reenergizar.",
      },
      {
        nota: "3",
        resultado:
          "Variação moderada ajuda sem perder rotina. Continue alternando local nos dias, mantendo os horários para preservar o relógio biológico.",
      },
      {
        nota: "4-5",
        resultado:
          "Diversificar ambientes revigora você. Para garantir constância, use uma checklist de material essencial (notas, carregador de celular) e evite tempo perdido com adaptações constantes.",
      },
    ],
  },
  {
    pergunta:
      "Busco desafios adicionais, como eventos ou competições acadêmicas.",
    fator: "Busca de Novidades",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Participar pouco pode reduzir networking. Escolha ao menos um evento por semestre alinhado aos seus projetos para ampliar repertório e conexões.",
      },
      {
        nota: "3",
        resultado:
          "Engajamento seletivo traz equilíbrio. Continue priorizando os eventos ou competições que complementam habilidades-chave da sua formação.",
      },
      {
        nota: "4-5",
        resultado:
          "Desafios extras energizam seu aprendizado. Para não sobrecarregar, aplique um filtro: aceite apenas eventos que não sacrifiquem muito o desempenho nas disciplinas do curso.",
      },
    ],
  },
  {
    pergunta: "Testo novas ferramentas digitais para melhorar desempenho.",
    fator: "Busca de Novidades",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Ferramentas tradicionais funcionam, mas podem faltar recursos modernos. Defina um período mensal para validar um app ou extensão que otimize anotações ou gerenciamento de referências.",
      },
      {
        nota: "3",
        resultado:
          "Adota ferramentas quando vê necessidade. Continue comparando funcionalidades antes de migrar dados, evitando redundância entre as ferramentas.",
      },
      {
        nota: "4-5",
        resultado:
          "Curiosidade digital eleva eficiência. Use planilha de avaliação (usabilidade, integração, custo) antes de incorporar a ferramenta ao fluxo principal, prevenindo dispersão.",
      },
    ],
  },
  {
    pergunta: "Mantenho-me fiel a métodos tradicionais e evito novidades.",
    fator: "Busca de Novidades",
    reversa: true,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Excelente abertura a inovações. Só se atente a consolidar os melhores processos para ter base comparativa e não girar em falso.",
      },
      {
        nota: "3",
        resultado:
          "Equilíbrio saudável entre tradição e novidade. Revise semestralmente se alguma ferramenta tradicional pode ser atualizada sem grande curva de aprendizado.",
      },
      {
        nota: "4-5",
        resultado:
          "Preferir métodos testados aumenta consistência, mas pode limitar melhorias. Experimente micro inovações (ex.: atalho no editor de código) que demandam poucos minutos para aprender e trazem ganhos imediatos.",
      },
    ],
  },
  {
    pergunta: "Sinto grande satisfação ao perceber meu avanço acadêmico.",
    fator: "Emoções Positivas",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Reconhecer pouco o próprio avanço pode reduzir a motivação. Mantenha um registro de progresso mensal (páginas escritas, exercícios resolvidos) para visualizar conquistas.",
      },
      {
        nota: "3",
        resultado:
          "Satisfação moderada mantém você estável. Inclua breve revisão semanal listando três avanços; isso reforça sensação de evolução contínua.",
      },
      {
        nota: "4-5",
        resultado:
          "Alto nível de satisfação sustenta energia. Compartilhe esses progressos em encontros de grupo para contagiar colegas com otimismo.",
      },
    ],
  },
  {
    pergunta: "Celebrar pequenas conquistas diárias me dá ânimo.",
    fator: "Emoções Positivas",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "A falta de celebração pode tornar a rotina árida. Reserve 5 min no fim do dia para anotar alguma vitória (ex.: bug resolvido) e escolha uma mini-recompensa simples.",
      },
      {
        nota: "3",
        resultado:
          "Reconhece conquistas às vezes. Use um checklist “feito hoje” e destaque pelo menos um item que gerou aprendizado extra.",
      },
      {
        nota: "4-5",
        resultado:
          "Valorizar cada avanço mantém alto engajamento. Continue marcando conquistas no diário e celebre em micro-pausas para preservar seu ritmo sem dispersar.",
      },
    ],
  },
  {
    pergunta:
      "Consigo manter uma atitude positiva frente a desafios complexos.",
    fator: "Emoções Positivas",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Postura negativa pode virar desânimo em tarefas difíceis. Divida os desafios em micro-etapas e registre cada etapa concluída para converter a ansiedade em confiança.",
      },
      {
        nota: "3",
        resultado:
          "Positividade moderada. Ao iniciar um projeto complexo, defina marcos intermediários com pequenas recompensas para sustentar o otimismo até o final.",
      },
      {
        nota: "4-5",
        resultado:
          "O otimismo robusto fortalece resiliência. Compartilhe estratégias de enfrentamento com colegas; isso cria clima colaborativo e eleva moral da turma.",
      },
    ],
  },
  {
    pergunta: "Sinto alegria ao pensar em concluir o curso.",
    fator: "Emoções Positivas",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Visão distante ou neutra da formatura reduz motivação de longo prazo. Crie um painel visual (road-map do curso) para lembrar o propósito e reacender o entusiasmo.",
      },
      {
        nota: "3",
        resultado:
          "Alegria moderada é saudável. Esboce um plano semestral apontando como cada disciplina aproxima você da meta final para manter o senso de propósito.",
      },
      {
        nota: "4-5",
        resultado:
          "Alegria intensa impulsiona esforço diário. Use esse entusiasmo para organizar estudos de revisão no final do semestre.",
      },
    ],
  },
  {
    pergunta: "Reconheço minhas vitórias mesmo quando o progresso é lento.",
    fator: "Emoções Positivas",
    reversa: false,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "A dificuldade em notar vitórias pode gerar frustração. Estabeleça indicadores mínimos e marque ✓ ao cumprir, reforçando o avanço gradual.",
      },
      {
        nota: "3",
        resultado:
          "Reconhece vitórias de forma equilibrada. Continue atualizando uma planilha de pequenas conquistas e a reveja-a ao fim da semana para consolidar percepção de progresso.",
      },
      {
        nota: "4-5",
        resultado:
          "Excelente habilidade de autorreconhecimento. Para ampliar o impacto, compartilhe essas vitórias com os colegas, cuidando para não parecer presunçoso.",
      },
    ],
  },
  {
    pergunta: "Raramente valorizo minhas conquistas acadêmicas.",
    fator: "Emoções Positivas",
    reversa: true,
    feedbacks: [
      {
        nota: "1-2",
        resultado:
          "Ótimo: você valoriza conquistas com frequência (alto nível de emoções positivas). Só monitore para não superestimar resultados; mantenha análise crítica equilibrada.",
      },
      {
        nota: "3",
        resultado:
          "Às vezes valoriza, às vezes não. Inclua um lembrete quinzenal para revisar metas e celebrar pelo menos uma conquista do período.",
      },
      {
        nota: "4-5",
        resultado:
          "Tende a minimizar vitórias, o que pode minar motivação. Adote “diário de conquistas” com três coisas boas por dia; peça a um colega para lembrar-lhe de reconhecer seus próprios avanços.",
      },
    ],
  },
];