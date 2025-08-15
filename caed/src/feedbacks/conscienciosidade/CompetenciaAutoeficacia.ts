import type {Avaliacao} from "../../types/Avaliacao.ts";

const competenciaAlto: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Competência (Autoeficácia)",
  nivel: "Alto",
  definicao: "A faceta Competência (Autoeficácia) refere-se à crença na própria capacidade de aprender, resolver problemas e atingir metas, mesmo diante dos desafios inerentes à graduação. Em nível alto, esse traço manifesta-se por confiança robusta, permitindo ao estudante enfrentar tarefas complexas com dedicação e persistência — impulsionando o progresso mesmo em fases difíceis dos projetos de curso.",
  caracteristicas: [
    { nome: "Confiança Elevada", descricao: ["Confia plenamente em sua capacidade de entender conteúdos complexos desde que se esforce, mesmo quando depara com desafios significativos."] },
    { nome: "Persistência e Resiliência", descricao: ["Demonstra forte determinação para dominar qualquer aspecto do projeto, acreditando que estudo consistente leva ao sucesso."] },
    { nome: "Compromisso com o Aperfeiçoamento Contínuo", descricao: ["Reconhece que competência se desenvolve com prática e busca constante por melhorias."] }
  ],
  vantagensPotenciais: [
    { nome: "Resiliência e Motivação", descricao: ["Autoconfiança elevada aumenta a capacidade de enfrentar desafios e manter motivação, mesmo em momentos de dificuldade."] },
    { nome: "Proatividade na Solução de Problemas", descricao: ["Acreditar nas próprias habilidades estimula a busca por soluções inovadoras e o engajamento em tarefas complexas."] },
    { nome: "Alto Desempenho Acadêmico", descricao: ["Postura favorece a realização consistente de metas, contribuindo para progresso e sucesso ao longo do curso."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Excesso de Confiança", descricao: ["Confiança elevada pode levar à subestimação de desafios ou negligência de detalhes importantes."] },
    { nome: "Pressão Interna", descricao: ["Forte crença nas próprias capacidades pode aumentar a pressão por resultados, gerando estresse se as metas não forem alcançadas."] }
  ],
  estrategias: [
    { nome: "Registro de Conquistas", descricao: ["Liste tarefas desafiadoras e anote conquistas diárias ou semanais para reforçar positivamente sua autoeficácia."] },
    { nome: "Compartilhamento de Resultados", descricao: ["Divida seus avanços com professores ou grupos de estudo para receber feedback construtivo e ajustar estratégias."] },
    { nome: "Planejamento Realista", descricao: ["Estabeleça metas ambiciosas, porém alcançáveis, e revise periodicamente o planejamento."] },
    { nome: "Equilíbrio entre Autoconfiança e Autocrítica", descricao: ["Mantenha autoavaliação que reconheça conquistas sem ignorar áreas a aprimorar."] }
  ],
  conclusao: "Graduandos com nível alto da faceta Competência (Autoeficácia) demonstram notável capacidade de enfrentar desafios complexos com persistência e autoconfiança. Essa postura impulsiona o progresso acadêmico e fortalece a resiliência, desde que acompanhada de planejamento realista e autocrítica construtiva — garantindo crescimento sustentável ao longo da graduação."
};

const competenciaBaixo: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Competência (Autoeficácia)",
  nivel: "Baixo",
  definicao: "A faceta Competência (Autoeficácia) em nível baixo caracteriza-se pela insegurança e pela dúvida em relação à própria capacidade de aprender, resolver problemas e atingir metas na graduação, podendo levar à procrastinação ou abandono de tarefas desafiadoras.",
  caracteristicas: [
    { nome: "Insegurança em Relação às Próprias Habilidades", descricao: ["Demonstra dúvidas quanto à capacidade de compreender conteúdos complexos e solucionar desafios significativos."] },
    { nome: "Dificuldade para Assumir Tarefas Exigentes", descricao: ["Pode hesitar em enfrentar partes importantes do projeto de disciplina ou do TCC."] },
    { nome: "Dependência de Feedback Externo", descricao: ["Sente necessidade constante de validação e apoio de professores ou colegas para avançar."] }
  ],
  vantagensPotenciais: [
    { nome: "Cautela na Tomada de Decisões", descricao: ["Insegurança leva a abordagem mais cuidadosa e meticulosa na execução das tarefas."] },
    { nome: "Abertura para Aprender", descricao: ["Percepção de limitações incentiva busca ativa por orientação e aprendizado contínuo, se bem direcionada."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Procrastinação e Medo de Desafios", descricao: ["Falta de confiança resulta em adiamentos e evasão de tarefas exigentes."] },
    { nome: "Baixa Autonomia", descricao: ["Dependência excessiva de feedback externo limita capacidade de tomar decisões independentemente."] },
    { nome: "Desmotivação", descricao: ["Insegurança afeta negativamente motivação e persistência, comprometendo continuidade dos estudos."] }
  ],
  estrategias: [
    { nome: "Estabelecer Objetivos Pequenos", descricao: ["Divida tarefas em metas diárias ou semanais para criar sucessos cumulativos que reforcem a confiança."] },
    { nome: "Buscar Mentoria e Apoio", descricao: ["Procure suporte de professores, veteranos ou grupos de estudo de confiança."] },
    { nome: "Registro de Progresso", descricao: ["Mantenha diário ou planilha de conquistas para visualizar avanços e consolidar percepção de competência."] },
    { nome: "Desenvolver Técnicas de Autogerenciamento", descricao: ["Implemente estratégias de organização e gerenciamento de tempo para estruturar tarefas e minimizar procrastinação."] }
  ],
  conclusao: "Graduandos com nível baixo da faceta Competência (Autoeficácia) enfrentam desafios significativos devido à insegurança e à falta de autoconfiança. Adotando estratégias que promovam pequenos sucessos e fortalecendo suporte externo, é possível transformar gradualmente essa insegurança em base sólida para aprendizado e crescimento contínuo."
};

const competenciaMedio: Avaliacao = {
  area: "Conscienciosidade",
  faceta: "Competência (Autoeficácia)",
  nivel: "Médio",
  definicao: "A faceta Competência (Autoeficácia), em nível médio, indica equilíbrio entre confiança nas próprias capacidades e reconhecimento das próprias limitações. O graduando acredita ser capaz de aprender conteúdos complexos, mas pode buscar validação externa em situações de maior dificuldade.",
  caracteristicas: [
    { nome: "Confiança Moderada", descricao: ["Acredita que pode superar desafios acadêmicos, especialmente com dedicação consistente, mas reconhece necessidade de apoio ou revisão em tópicos mais complexos."] },
    { nome: "Busca Equilibrada por Suporte", descricao: ["Recorre ao auxílio de colegas ou professores quando sente dúvidas persistentes, valorizando momentos de autonomia e iniciativa própria."] },
    { nome: "Persistência com Autocrítica", descricao: ["Demonstra perseverança em tarefas exigentes, podendo hesitar brevemente diante de dificuldades antes de retomar o foco."] },
    { nome: "Ajuste de Expectativas", descricao: ["Estabelece metas realistas, ajustando ritmo conforme progresso e feedbacks recebidos."] }
  ],
  vantagensPotenciais: [
    { nome: "Avanço Consistente", descricao: ["Equilíbrio entre autoconfiança e busca por ajuda permite progresso constante e sustentável."] },
    { nome: "Capacidade de Autoavaliação", descricao: ["Reconhecimento dos próprios limites facilita aprimoramento contínuo."] },
    { nome: "Redução de Estresse", descricao: ["Combinação entre otimismo realista e cautela diminui pressão interna e contribui para bem-estar durante o curso."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Oscilação de Confiança", descricao: ["Pode alternar entre momentos de segurança e incerteza, levando a pequenas procrastinações."] },
    { nome: "Dependência Variável de Feedback", descricao: ["Em alguns contextos, pode depender mais do que o ideal de validação externa."] },
    { nome: "Autocrítica Excessiva em Falhas", descricao: ["Tendência a questionar capacidades após resultados negativos, gerando desânimo temporário."] }
  ],
  estrategias: [
    { nome: "Registro Regular de Progresso", descricao: ["Mantenha anotações ou planilhas simples para acompanhar conquistas e padrões de evolução."] },
    { nome: "Feedback Planejado", descricao: ["Solicite retornos periódicos de professores e colegas, integrando críticas construtivas sem depender excessivamente delas."] },
    { nome: "Divisão das Metas", descricao: ["Organize tarefas em etapas pequenas e tangíveis, celebrando cada avanço como motivação para desafios subsequentes."] },
    { nome: "Prática de Autoafirmação Realista", descricao: ["Reconheça conquistas, mas mantenha autocrítica equilibrada, revisando estratégias sem desvalorizar capacidades."] }
  ],
  conclusao: "Graduandos com nível médio da faceta Competência (Autoeficácia) desenvolvem trajetória acadêmica segura e progressiva, equilibrando confiança nas próprias habilidades e abertura para aprimoramento, promovendo autonomia e aprendizado contínuo."
};
