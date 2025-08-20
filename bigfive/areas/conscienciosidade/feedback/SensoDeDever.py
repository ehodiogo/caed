import type {Avaliacao} from "../../types/Avaliacao.ts";

const sensoDeDeverAlto: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Senso de Dever",
  nivel: "Alto",
  "definicao": "A faceta Senso de Dever refere-se ao sentimento de responsabilidade e obrigação de cumprir metas e compromissos acadêmicos. Em nível alto, o graduando demonstra forte comprometimento com o cronograma de estudos e atividades, mantendo regularidade mesmo diante de cansaço ou desmotivação.",
  "caracteristicas": [
    { "nome": "Comprometimento Consistente", "descricao": ["Cumpre horários de leitura, laboratório ou escrita mesmo quando está cansado(a) ou pouco motivado(a)."] },
    { "nome": "Resistência à Procrastinação", "descricao": ["Evita adiar tarefas; pontualidade é vista como obrigação pessoal."] },
    { "nome": "Seriedade com Metas Acadêmicas", "descricao": ["Leva a sério metas de produção (páginas de relatório, linhas de código, exercícios resolvidos), mantendo disciplina elevada."] },
    { "nome": "Prioridade nas Responsabilidades", "descricao": ["Mesmo diante de convites atraentes, prioriza metas diárias de estudo e projeto."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Regularidade e Produtividade", "descricao": ["Forte senso de dever garante cumprimento de prazos e progresso contínuo nas disciplinas e no TCC."] },
    { "nome": "Desenvolvimento de Hábitos Consistentes", "descricao": ["Disciplina fortalece rotinas de estudo e escrita, essenciais ao sucesso acadêmico."] },
    { "nome": "Conquista de Resultados", "descricao": ["Ao priorizar metas, atinge resultados concretos, como relatórios concluídos e notas acima da média."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Rigidez Excessiva", "descricao": ["O alto senso de dever pode gerar inflexibilidade e estresse quando surgem imprevistos ou mudanças no cronograma."] },
    { "nome": "Possível Sobrecarga", "descricao": ["Pressão para cumprir todas as obrigações pode causar desgaste físico e mental, afetando o equilíbrio trabalho–descanso."] }
  ],
  "estrategias": [
    { "nome": "Incorpore Pausas Programadas", "descricao": ["Reserve períodos de descanso no cronograma e encare-os como parte essencial da rotina para evitar sobrecarga."] },
    { "nome": "Planeje 'Folgas Planejadas'", "descricao": ["Após etapas importantes, conceda-se pequenos intervalos para recuperar energia."] },
    { "nome": "Reavalie Periodicamente o Cronograma", "descricao": ["Faça revisões regulares e ajuste prazos e metas, mantendo equilíbrio entre rigor e flexibilidade."] }
  ],
  "conclusao": "Graduandos com nível alto da faceta Senso de Dever demonstram forte compromisso com metas e obrigações acadêmicas, favorecendo produtividade e avanço contínuo. Equilibrar disciplina com descanso e flexibilidade é essencial para evitar rigidez excessiva e desgaste."
};

const sensoDeDeverBaixo: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Senso de Dever",
  nivel: "Baixo",
  "definicao": "A faceta Senso de Dever, em nível baixo, caracteriza-se pela dificuldade em cumprir compromissos e responsabilidades acadêmicas de forma consistente, podendo levar à procrastinação e não cumprimento de prazos.",
  "caracteristicas": [
    { "nome": "Falta de Comprometimento Consistente", "descricao": ["Pode deixar de cumprir horários de estudo ou laboratório mesmo quando a tarefa é essencial."] },
    { "nome": "Tendência à Procrastinação", "descricao": ["Adia tarefas e metas, mostrando relutância em manter cronograma rígido."] },
    { "nome": "Baixa Prioridade das Metas Acadêmicas", "descricao": ["Não leva a sério compromissos e prazos estabelecidos, prejudicando organização e continuidade do trabalho."] },
    { "nome": "Distração com Outras Atividades", "descricao": ["Prioriza convites ou atividades não relacionadas ao curso, deixando de lado responsabilidades essenciais."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Maior Flexibilidade", "descricao": ["A ausência de senso de dever rigoroso permite liberdade para explorar novas abordagens e ajustar a rotina de forma espontânea."] },
    { "nome": "Redução de Pressão", "descricao": ["Menor pressão para cumprir prazos rígidos diminui estresse imediato, permitindo ambiente de estudo menos tenso."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Ineficiência na Gestão do Tempo", "descricao": ["Desorganização e adiamento das tarefas podem resultar em perda de prazos e acúmulo de atividades."] },
    { "nome": "Comprometimento do Progresso Acadêmico", "descricao": ["Falta de compromisso dificulta formação de hábitos consistentes de estudo e escrita, atrasando projetos."] },
    { "nome": "Isolamento e Baixa Responsabilidade", "descricao": ["Postura desmotivada pode afetar colaboração em equipe e autoavaliação contínua."] }
  ],
  "estrategias": [
    { "nome": "Crie um 'Contrato de Estudos'", "descricao": ["Formalize um compromisso consigo ou com um colega, definindo metas mínimas e revisando progresso regularmente."] },
    { "nome": "Utilize Lembretes e Ferramentas de Monitoramento", "descricao": ["Use alarmes, agendas ou apps para acompanhar progresso diário/semanal."] },
    { "nome": "Divida as Tarefas em Metas Menores", "descricao": ["Estabeleça objetivos reduzidos (ex.: escrever 300 palavras ou revisar dois exercícios) para criar sucessos cumulativos."] },
    { "nome": "Busque Apoio Externo", "descricao": ["Conte com incentivo de colegas, veteranos ou professores para manter foco e responsabilidade."] }
  ],
  "conclusao": "Graduandos com nível baixo da faceta Senso de Dever enfrentam desafios na formação de hábitos consistentes e cumprimento de prazos. Implementar metas menores, utilizar lembretes e fortalecer compromisso por meio de parcerias pode melhorar produtividade e avanço contínuo."
};

const sensoDeDeverMedio: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Senso de Dever",
  nivel: "Médio",
  "definicao": "A faceta Senso de Dever, em nível médio, caracteriza-se pelo cumprimento das principais responsabilidades acadêmicas, porém com flexibilidade para adaptar rotinas conforme o contexto.",
  "caracteristicas": [
    { "nome": "Comprometimento Moderado", "descricao": ["Cumpre horários de estudo e principais obrigações acadêmicas, mas pode flexibilizar rotinas quando necessário."] },
    { "nome": "Adaptação a Situações Especiais", "descricao": ["Prioriza as metas mais importantes, mas permite-se adiar ou reorganizar tarefas secundárias diante de convites, cansaço ou outras demandas."] },
    { "nome": "Gestão Razoável do Tempo", "descricao": ["Consegue evitar atrasos frequentes, mas pode enfrentar dificuldades em manter disciplina total durante períodos mais longos."] },
    { "nome": "Equilíbrio entre Disciplina e Flexibilidade", "descricao": ["Mantém regularidade, alternando momentos de rigor com concessão para preservar bem-estar e motivação."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Maior Sustentabilidade", "descricao": ["Equilíbrio entre compromisso e flexibilidade favorece manutenção do desempenho acadêmico sem gerar desgaste."] },
    { "nome": "Capacidade de Ajuste", "descricao": ["Facilidade para adaptar cronogramas e prioridades diante de imprevistos ou mudanças na rotina."] },
    { "nome": "Redução do Estresse", "descricao": ["Permissão para reequilibrar tarefas e lazer contribui para saúde mental, prevenindo sobrecarga."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Oscilações na Produtividade", "descricao": ["Alternância entre disciplina e flexibilidade pode resultar em variações de rendimento ao longo do semestre."] },
    { "nome": "Risco de Acúmulo de Pendências", "descricao": ["Ao flexibilizar tarefas secundárias, pode haver acúmulo de pequenas pendências, exigindo esforço concentrado para regularizar antes dos prazos finais."] },
    { "nome": "Necessidade de Monitoramento", "descricao": ["Exige atenção constante para que flexibilidade não leve à procrastinação excessiva ou perda de foco em metas importantes."] }
  ],
  "estrategias": [
    { "nome": "Planejamento com Prioridades", "descricao": ["Classifique tarefas em 'essenciais' e 'flexíveis', dedicando-se com rigor às primeiras e adaptando as demais conforme a semana."] },
    { "nome": "Revisão Regular do Cronograma", "descricao": ["Realize ajustes semanais no planejamento, reavaliando prazos e redistribuindo tarefas de acordo com a realidade do momento."] },
    { "nome": "Pausas e Lazer Programados", "descricao": ["Inclua momentos de descanso e atividades prazerosas como parte da rotina, evitando sensação de culpa ao flexibilizar horários."] },
    { "nome": "Monitoramento das Pendências", "descricao": ["Use checklists e registros para controlar evolução das tarefas e evitar acúmulo de demandas não resolvidas."] }
  ],
  "conclusao": "Graduandos com nível médio da faceta Senso de Dever conseguem equilibrar responsabilidades acadêmicas com a flexibilidade necessária para preservar saúde mental e bem-estar, mantendo progresso sustentável sem rigidez ou negligência."
};

export { sensoDeDeverAlto, sensoDeDeverBaixo, sensoDeDeverMedio };