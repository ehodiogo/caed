import type {Avaliacao} from "../../types/Avaliacao.ts";

const esteticaAlto: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Estética",
  nivel: "Alto",
  definicao: "A faceta Estética, em nível alto, refere-se à valorização da beleza e da qualidade visual dos materiais, ambientes e recursos utilizados no trabalho acadêmico...",
  caracteristicas: [
    { nome: "Apreciação Visual", descricao: ["Valoriza materiais de pesquisa, slides, resumos e anotações que sejam visualmente bem organizados e atraentes."] },
    { nome: "Integração com Expressões Artísticas", descricao: ["Gosta de relacionar conteúdos a elementos artísticos ou culturais para facilitar memorização e entendimento."] },
    { nome: "Organização do Espaço de Trabalho", descricao: ["Sente prazer em organizar o ambiente de estudo de forma esteticamente agradável, melhorando a disposição para trabalhar."] }
  ],
  vantagensPotenciais: [
    { nome: "Motivação e Bem-Estar", descricao: ["Um ambiente visualmente organizado pode aumentar a motivação e tornar estudo e escrita mais prazeroso."] },
    { nome: "Facilitação do Aprendizado", descricao: ["Cores, formatações e elementos visuais ajudam a destacar pontos importantes e a memorizar conteúdos."] },
    { nome: "Ambiente Inspirador", descricao: ["Espaço bem decorado e organizado estimula criatividade e produtividade."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Excesso de Foco na Aparência", descricao: ["Preocupação excessiva com estética pode consumir tempo em detrimento do conteúdo."] },
    { nome: "Distração", descricao: ["Esforço contínuo para manter ambiente perfeito pode prejudicar eficiência nas tarefas principais."] }
  ],
  estrategias: [
    { nome: "Crie um 'Cantinho de Trabalho' Funcional", descricao: ["Organize espaço de estudo agradável, evitando exageros na decoração que desviem atenção."] },
    { nome: "Defina Limites de Tempo para a Organização Visual", descricao: ["Estabeleça período curto para 'embelezar' slides, resumos ou anotações, depois concentre-se no conteúdo."] },
    { nome: "Utilize Elementos Visuais com Propósito", descricao: ["Use cores e formatações para destacar partes importantes, mantendo clareza e eficácia da mensagem."] }
  ],
  conclusao: "Graduandos com nível alto beneficiam-se de ambientes e materiais visualmente organizados, elevando motivação e bem-estar, desde que equilibrem cuidado com aparência e produtividade."
};

const esteticaBaixo: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Estética",
  nivel: "Baixo",
  definicao: "A faceta Estética, em nível baixo, indica menor preocupação com a aparência visual dos materiais e do ambiente de trabalho...",
  caracteristicas: [
    { nome: "Foco no Conteúdo", descricao: ["Prioriza desenvolvimento e qualidade do conteúdo, com pouca ênfase na organização visual."] },
    { nome: "Abordagem Pragmática", descricao: ["Mantém rotina funcional e prática, sem investir tempo em detalhes visuais."] },
    { nome: "Espaço de Trabalho Simples", descricao: ["Organiza o ambiente de estudo de forma básica, sem grandes apelos estéticos."] }
  ],
  vantagensPotenciais: [
    { nome: "Maior Concentração", descricao: ["Redução da preocupação com estética favorece foco no conteúdo e execução das tarefas."] },
    { nome: "Produtividade Consistente", descricao: ["Abordagem prática mantém ritmo de trabalho linear e eficiente, sem distrações visuais."] },
    { nome: "Simplicidade nos Processos", descricao: ["Manutenção de ambiente funcional facilita padronização dos métodos de trabalho."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Motivação Reduzida", descricao: ["Falta de estímulos visuais pode tornar ambiente monótono, reduzindo entusiasmo."] },
    { nome: "Experiência de Estudo Monótona", descricao: ["Ausência de elementos visuais atrativos pode afetar memorização e engajamento."] }
  ],
  estrategias: [
    { nome: "Insira Estímulos Visuais Mínimos", descricao: ["Use marcadores coloridos ou gráficos básicos para evitar monotonia sem desviar foco."] },
    { nome: "Mantenha uma Organização Básica", descricao: ["Organize espaço de estudo de forma funcional, garantindo clareza e ordem."] },
    { nome: "Varie o Ambiente de Estudo", descricao: ["Mude ocasionalmente local de estudo para renovar motivação visual."] }
  ],
  conclusao: "Graduandos com nível baixo focam mais no conteúdo e execução prática, mas incorporar gradualmente estímulos visuais pode aumentar motivação e tornar experiência de estudo mais agradável."
};

const esteticaMedio: Avaliacao = {
  area: "Abertura à Experiência",
  faceta: "Estética",
  nivel: "Médio",
  definicao: "A faceta Estética, em nível médio, caracteriza-se por equilíbrio entre apreço pela organização visual e foco no conteúdo acadêmico...",
  caracteristicas: [
    { nome: "Organização Visual Moderada", descricao: ["Gosta de materiais e ambientes visualmente agradáveis, mas investe apenas tempo necessário para clareza e organização mínima."] },
    { nome: "Valorização Equilibrada de Recursos Visuais", descricao: ["Utiliza cores, esquemas ou gráficos para realçar pontos-chave, sem buscar perfeccionismo."] },
    { nome: "Integração Parcial com Expressões Artísticas", descricao: ["Relaciona conteúdos a elementos artísticos ocasionalmente, mantendo abordagem prática."] },
    { nome: "Ambiente de Trabalho Agradável", descricao: ["Prefere estudar em locais organizados, mas não se sente desconfortável se não estiver visualmente impecável."] }
  ],
  vantagensPotenciais: [
    { nome: "Motivação e Praticidade", descricao: ["Ambiente minimamente organizado contribui para bem-estar e facilita concentração."] },
    { nome: "Eficiência Visual", descricao: ["Uso pontual de recursos visuais favorece memorização e comunicação de ideias."] },
    { nome: "Flexibilidade no Processo de Estudo", descricao: ["Sabe adaptar-se a diferentes contextos, valorizando estética quando possível, mas priorizando conteúdo."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Oscilação entre Forma e Conteúdo", descricao: ["Pode ter dúvidas sobre tempo a dedicar à aparência, alternando maior ou menor capricho visual."] },
    { nome: "Risco de Desorganização Ocasional", descricao: ["Sem padrão mínimo de organização, pode deixar de lado recursos visuais importantes."] }
  ],
  estrategias: [
    { nome: "Defina Padrões Simples de Organização", descricao: ["Estabeleça modelo básico para anotações e slides, facilitando clareza e atratividade."] },
    { nome: "Limite o Tempo de 'Embelezamento'", descricao: ["Reserve alguns minutos para revisar organização visual, evitando excesso que comprometa avanço do conteúdo."] },
    { nome: "Utilize Recursos Visuais para Revisão", descricao: ["Use esquemas, mapas mentais e infográficos para reforçar pontos críticos sem sobrecarregar material."] },
    { nome: "Alterne entre Ambientes", descricao: ["Varie local de estudo ocasionalmente para estimular criatividade, sem depender dele para manter produtividade."] }
  ],
  conclusao: "Graduandos com nível médio equilibram valorização visual e eficiência acadêmica, aproveitando benefícios de ambiente agradável e materiais organizados sem comprometer execução das tarefas."
};
