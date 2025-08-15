import type {Avaliacao} from "../../types/Avaliacao.ts";

const fantasiaAlto: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Fantasía",
  nivel: "Alto",
  definicao: "A faceta Fantasia, em nível alto, envolve a tendência de criar cenários mentais vívidos, ultrapassando o presente e explorando possibilidades hipotéticas...",
  caracteristicas: [
    { nome: "Visualização de Cenários Futuros", descricao: ["Costuma imaginar cenários de sucesso, como apresentação final de protótipo ou defesa do TCC."] },
    { nome: "Criação de Histórias e Analogias", descricao: ["Cria exemplos mentais para tornar conteúdos teóricos mais interessantes e fáceis de compreender."] },
    { nome: "Imaginação Aplicada", descricao: ["Gosta de se imaginar vivenciando situações reais relacionadas ao tema e de visualizar possíveis aplicações práticas dos resultados."] }
  ],
  vantagensPotenciais: [
    { nome: "Motivação e Inspiração", descricao: ["Imaginar o sucesso e impactos futuros aumenta entusiasmo e comprometimento com projetos."] },
    { nome: "Estímulo à Criatividade", descricao: ["Favorece geração de ideias inovadoras e conexão entre teoria e prática."] },
    { nome: "Planejamento Visionário", descricao: ["Permite criar plano de ação motivador com metas visualizadas de forma concreta."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Risco de Dispersão", descricao: ["Passar muito tempo idealizando pode desviar foco de ações práticas."] },
    { nome: "Desconexão com a Realidade", descricao: ["Excesso de fantasia pode dificultar execução de planos concretos."] }
  ],
  estrategias: [
    { nome: "Planejar 'Momentos de Sonhar Acordado'", descricao: ["Dedique intervalos curtos para visualizar metas e, em seguida, retome foco nas tarefas técnicas."] },
    { nome: "Técnicas de Visualização Dirigida", descricao: ["Transforme imaginação em motivação prática, imaginando-se apresentando o projeto com êxito."] },
    { nome: "Estabelecimento de Metas e Checklists", descricao: ["Use metas e listas de tarefas para retornar ao plano de ação quando perceber distração com idealizações."] }
  ],
  conclusao: "Graduandos com nível alto possuem notável capacidade de se inspirar por meio da imaginação, impulsionando motivação e inovação, mas devem equilibrar criatividade com execução prática."
};

const fantasiaBaixo: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Fantasía",
  nivel: "Baixo",
  definicao: "A faceta Fantasia, em nível baixo, indica menor tendência a usar imaginação para criar cenários futuros ou analogias, resultando em abordagem mais objetiva e prática...",
  caracteristicas: [
    { nome: "Pouca Utilização da Imaginação", descricao: ["Raramente cria histórias ou exemplos mentais para enriquecer conteúdos teóricos ou projetar soluções."] },
    { nome: "Abordagem Pragmática", descricao: ["Foca na execução objetiva dos métodos, sem engajar-se em visualizações de cenários futuros."] },
    { nome: "Dificuldade em Visualizar Aplicações Práticas", descricao: ["Tem menor tendência a imaginar como resultados de projetos serão aplicados ou impactarão o futuro profissional."] }
  ],
  vantagensPotenciais: [
    { nome: "Foco na Execução", descricao: ["Abordagem objetiva e prática pode resultar em maior disciplina e consistência."] },
    { nome: "Estabilidade Metodológica", descricao: ["Menor variabilidade de métodos facilita consolidação de processos e comparação de resultados."] },
    { nome: "Redução do Risco de Dispersão", descricao: ["Com menos idealizações, há maior probabilidade de manter foco nas ações planejadas."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Falta de Motivação Intrínseca", descricao: ["Ausência de cenários visionários pode reduzir entusiasmo para superar desafios."] },
    { nome: "Limitação na Inovação", descricao: ["Pode dificultar geração de ideias criativas e conexão entre teoria e prática."] }
  ],
  estrategias: [
    { nome: "Sistema de Metas Passo a Passo", descricao: ["Adote checklists semanais ou marcos mensais para compensar falta de motivação gerada pela imaginação."] },
    { nome: "Utilização de Recursos Visuais Prontos", descricao: ["Recorra a infográficos, tutoriais e vídeos para tornar conteúdo mais atraente."] },
    { nome: "Prática de 'Sprints' de Estudo/Projeto", descricao: ["Realize intervalos curtos e intensos com recompensas claras para estimular foco."] }
  ],
  conclusao: "Graduandos com nível baixo adotam abordagem objetiva e focada, favorecendo execução consistente, mas incorporar elementos que estimulem criatividade pode enriquecer projetos e estudos."
};

const fantasiaMedio: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Fantasía",
  nivel: "Médio",
  definicao: "A faceta Fantasia, em nível médio, caracteriza-se pelo uso ocasional e equilibrado da imaginação para visualizar cenários futuros e conectar teoria e prática...",
  caracteristicas: [
    { nome: "Imaginação Moderada", descricao: ["Costuma imaginar cenários de sucesso ou criar exemplos mentais, mas retorna rapidamente à execução prática."] },
    { nome: "Equilíbrio entre Visualização e Prática", descricao: ["Utiliza analogias e visualizações para facilitar entendimento de conceitos, alternando com abordagem objetiva."] },
    { nome: "Conexão com a Realidade", descricao: ["Consegue transformar ideias abstratas em metas tangíveis, evitando se perder em idealizações prolongadas."] },
    { nome: "Estímulo Criativo Pontual", descricao: ["Recorre à imaginação para motivação extra ou resolver problemas complexos, alternando com foco pragmático."] }
  ],
  vantagensPotenciais: [
    { nome: "Motivação e Praticidade", descricao: ["Imaginação pontual estimula entusiasmo sem comprometer regularidade do trabalho."] },
    { nome: "Criatividade Aplicada", descricao: ["Consegue inovar ao propor melhorias e soluções alternativas, tornando projetos mais eficazes."] },
    { nome: "Capacidade de Planejamento Realista", descricao: ["Utiliza fantasia para definir metas ambiciosas e planejar passos concretos para alcançá-las."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Oscilação entre Idealização e Execução", descricao: ["Pode alternar entre fases criativas e momentos de dispersão, exigindo organização."] },
    { nome: "Risco de Subestimar Detalhes", descricao: ["Equilibrando imaginação e prática, pode deixar de aprofundar aspectos inovadores ou realistas."] }
  ],
  estrategias: [
    { nome: "Intervalos Programados para Imaginação", descricao: ["Inclua períodos curtos para 'sonhar acordado', especialmente antes de iniciar trabalhos."] },
    { nome: "Checklist de Transformação de Ideias", descricao: ["Registre ideias principais e converta em ações ou metas, mantendo foco no resultado prático."] },
    { nome: "Alternância Consciente", descricao: ["Perceba quando criatividade prejudica execução; retome tarefas práticas e volte à fantasia quando necessário."] },
    { nome: "Utilização de Ferramentas Visuais", descricao: ["Apoie-se em mapas mentais e quadros para organizar ideias criativas e progresso objetivo."] }
  ],
  conclusao: "Graduandos com nível médio apresentam equilíbrio saudável entre imaginação e execução, usando criatividade estrategicamente sem perder foco nos resultados acadêmicos."
};
