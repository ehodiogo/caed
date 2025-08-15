import type {Avaliacao} from "../../types/Avaliacao.ts";

const assertividadeAlto: Avaliacao = {
  area: "Extroversão",
  faceta: "Assertividade",
  nivel: "Alto",
  definicao: "A faceta Assertividade, em nível alto, refere-se à capacidade de expressar opiniões, dificuldades e necessidades de forma direta...",
  caracteristicas: [
    { nome: "Expressão de Opiniões", descricao: ["Não sente receio em expor suas ideias e pontos de vista em sala, laboratórios ou reuniões de projeto."] },
    { nome: "Liderança Natural", descricao: ["Assume a liderança em trabalhos coletivos, sobretudo quando há falta de iniciativa entre os membros."] },
    { nome: "Defesa do Ponto de Vista", descricao: ["Faz questão de sustentar seu posicionamento mesmo quando diverge da opinião majoritária."] },
    { nome: "Facilidade em Apresentações", descricao: ["Tem ou desenvolveu facilidade para expor ideias em seminários, congressos estudantis ou bancas de TCC."] }
  ],
  vantagensPotenciais: [
    { nome: "Iniciativa e Proatividade", descricao: ["A assertividade permite que o graduando lidere projetos, coordene tarefas e peça ajuda quando necessário."] },
    { nome: "Clareza na Comunicação", descricao: ["A expressão direta contribui para resolver dúvidas e conflitos, aumentando a eficácia das discussões técnicas."] },
    { nome: "Estabelecimento de Limites", descricao: ["Ao comunicar suas necessidades, consegue definir limites claros, evitando sobrecargas e mal-entendidos em equipes."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Risco de Imposição", descricao: ["Assertividade elevada pode ser percebida como postura impositiva se não houver empatia."] },
    { nome: "Monopolização de Espaço", descricao: ["A tendência a liderar sem revezar pode limitar a participação e o desenvolvimento de outros membros do grupo."] }
  ],
  estrategias: [
    { nome: "Revezamento de Liderança", descricao: ["Convide colegas a tomar decisões e conduzir partes das discussões, promovendo participação mútua."] },
    { nome: "Empatia na Comunicação", descricao: ["Ao fornecer feedback ou defender opiniões, pratique empatia, suavizando críticas."] },
    { nome: "Autoavaliação Contínua", descricao: ["Monitore como suas mensagens são recebidas e esteja aberto(a) a ajustes."] }
  ],
  conclusao: "Graduandos com nível alto da faceta Assertividade mostram grande potencial para liderar e dinamizar projetos, equilibrando assertividade com empatia e revezamento de liderança."
};

const assertividadeBaixo: Avaliacao = {
  area: "Extroversão",
  faceta: "Assertividade",
  nivel: "Baixo",
  definicao: "A faceta Assertividade, em nível baixo, indica hesitação em expressar opiniões, dificuldades e necessidades de forma direta...",
  caracteristicas: [
    { nome: "Dificuldade em Se Posicionar", descricao: ["Sente insegurança ao expor opiniões ou dificuldades, mesmo quando possui argumentos sólidos."] },
    { nome: "Reticência em Assumir a Liderança", descricao: ["Evita tomar a iniciativa em trabalhos coletivos, preferindo manter uma postura mais reservada."] },
    { nome: "Hesitação em Defender Posições", descricao: ["Tem dificuldade em sustentar seu ponto de vista em discussões, podendo concordar com a maioria."] },
    { nome: "Timidez em Apresentações", descricao: ["Apresenta desafios para expor ideias em contextos formais devido à insegurança na comunicação."] }
  ],
  vantagensPotenciais: [
    { nome: "Cautela na Comunicação", descricao: ["A postura menos assertiva pode evitar conflitos desnecessários, mantendo ambiente de respeito e diplomacia."] },
    { nome: "Espaço para Reflexão", descricao: ["A hesitação em se posicionar permite análise mais cuidadosa antes de emitir opiniões."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Perda de Oportunidades", descricao: ["A falta de assertividade pode fazer o graduando deixar de liderar projetos ou solicitar ajuda."] },
    { nome: "Dificuldade na Comunicação de Necessidades", descricao: ["A relutância em expressar dificuldades limita a obtenção de feedbacks importantes."] }
  ],
  estrategias: [
    { nome: "Preparação Prévia", descricao: ["Anote previamente perguntas ou dúvidas para ganhar segurança ao abordá-las."] },
    { nome: "Prática em Ambientes Menores", descricao: ["Exercite a assertividade em espaços menos formais para construir confiança antes de se expor em turmas maiores."] },
    { nome: "Feedback Construtivo", descricao: ["Busque ambientes onde possa receber feedback de maneira segura e construtiva."] }
  ],
  conclusao: "Graduandos com nível baixo da faceta Assertividade enfrentam desafios na expressão de opiniões e necessidades, podendo desenvolver postura mais proativa por meio de prática e preparação prévia."
};

const assertividadeMedio: Avaliacao = {
  area: "Extroversão",
  faceta: "Assertividade",
  nivel: "Médio",
  definicao: "A faceta Assertividade, em nível médio, caracteriza graduandos que conseguem expressar opiniões, necessidades e dúvidas de forma razoavelmente clara...",
  caracteristicas: [
    { nome: "Expressão Moderada de Opiniões", descricao: ["Expõe ideias e dúvidas em sala, reuniões de projeto ou grupos de estudo, especialmente quando se sente confortável com o tema ou o ambiente."] },
    { nome: "Liderança Pontual", descricao: ["Pode assumir liderança em projetos coletivos ou trabalhos em grupo, mas também permite que outros conduzam as atividades."] },
    { nome: "Equilíbrio na Defesa de Posições", descricao: ["Defende seu ponto de vista quando acredita ser relevante, mas está disposto(a) a ouvir argumentos contrários."] },
    { nome: "Participação em Apresentações", descricao: ["Participa de apresentações, seminários ou bancas, alternando entre momentos de maior segurança e episódios de hesitação."] }
  ],
  vantagensPotenciais: [
    { nome: "Flexibilidade na Comunicação", descricao: ["Capacidade de adaptar o grau de exposição conforme o contexto, preservando respeito e clareza."] },
    { nome: "Abertura para Liderança Compartilhada", descricao: ["Colabora para um ambiente onde todos possam se posicionar e liderar em diferentes etapas do projeto."] },
    { nome: "Busca de Consenso", descricao: ["Tendência a mediar opiniões e buscar soluções que conciliem interesses diversos."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Oscilação de Protagonismo", descricao: ["Pode hesitar em assumir liderança ou expor opiniões, limitando o protagonismo acadêmico."] },
    { nome: "Risco de Ambiguidade", descricao: ["Pode deixar de comunicar necessidades de forma clara, resultando em mal-entendidos."] },
    { nome: "Dependência do Ambiente", descricao: ["Nível de assertividade pode depender do clima do grupo ou do grau de abertura percebido."] }
  ],
  estrategias: [
    { nome: "Preparação Específica para Exposição", descricao: ["Revise tópicos e organize pontos-chave antes de reuniões e apresentações."] },
    { nome: "Prática de Feedback Assertivo", descricao: ["Exercite dar e receber feedback de modo construtivo, usando linguagem clara e respeitosa."] },
    { nome: "Autoavaliação Regular", descricao: ["Após momentos de interação, reflita sobre sua participação, identificando oportunidades para aumentar clareza e segurança."] },
    { nome: "Revezamento de Liderança", descricao: ["Aproveite oportunidades para conduzir etapas dos projetos e incentive colegas a fazer o mesmo."] }
  ],
  conclusao: "Graduandos com nível médio da faceta Assertividade conseguem equilibrar exposição e escuta, fortalecendo participação acadêmica e desempenho em projetos coletivos."
};
