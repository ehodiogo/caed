import type {Avaliacao} from "../../types/Avaliacao.ts";

const buscaPorNovidadesAlto: Avaliacao = {
  area: "Extroversão",
  faceta: "Busca por Novidades",
  nivel: "Alto",
  definicao: "A faceta Busca por Novidades, em nível alto, refere-se à necessidade de explorar diferentes técnicas, metodologias e desafios para tornar a rotina acadêmica mais dinâmica e estimulante...",
  caracteristicas: [
    { nome: "Exploração de Novos Métodos", descricao: ["Procura constantemente novos métodos de estudo, análise ou escrita para manter o interesse e a motivação."] },
    { nome: "Entusiasmo por Abordagens Diferentes", descricao: ["Fica entusiasmado(a) com a possibilidade de testar abordagens metodológicas inovadoras."] },
    { nome: "Variedade na Rotina", descricao: ["Gosta de variar horários e locais de estudo ou projeto para sair da rotina habitual."] },
    { nome: "Busca por Desafios Adicionais", descricao: ["Incentiva-se a participar de desafios acadêmicos para estimular e aprimorar o desempenho."] }
  ],
  vantagensPotenciais: [
    { nome: "Dinamismo e Inovação", descricao: ["A busca por novidades pode trazer métodos inovadores que aprimorem projetos e gerem novas perspectivas."] },
    { nome: "Motivação Renovada", descricao: ["A variedade de abordagens e desafios mantém o graduando engajado e estimulado ao longo do curso."] },
    { nome: "Adaptação e Flexibilidade", descricao: ["Estar aberto(a) a novas técnicas favorece a capacidade de adaptação a diferentes contextos e desafios acadêmicos."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Risco de Dispersão", descricao: ["A constante busca por novidades pode levar à experimentação excessiva, prejudicando a consistência e o foco nos trabalhos principais."] },
    { nome: "Inconstância Metodológica", descricao: ["Mudar frequentemente os métodos pode dificultar a consolidação de processos eficazes e a avaliação comparativa de resultados."] }
  ],
  estrategias: [
    { nome: "Cronograma de Experimentação", descricao: ["Estabeleça um cronograma para testar uma nova técnica ou ferramenta por vez, avaliando seu real valor antes de adotar mudanças frequentes."] },
    { nome: "Uso Moderado de Plataformas Interativas", descricao: ["Utilize ferramentas inovadoras, mas delimite o tempo de uso para evitar distrações excessivas."] },
    { nome: "Equilíbrio entre Inovação e Consistência", descricao: ["Integre as novidades de forma planejada, conciliando a experimentação com a manutenção de um fluxo estruturado."] }
  ],
  conclusao: "Graduandos com nível alto da faceta Busca por Novidades demonstram entusiasmo e disposição para inovar, mas precisam equilibrar experimentação com processos consistentes para manter foco e produtividade."
};

const buscaPorNovidadesBaixo: Avaliacao = {
  area: "Extroversão",
  faceta: "Busca por Novidades",
  nivel: "Baixo",
  definicao: "A faceta Busca por Novidades, em nível baixo, indica preferência por rotinas estáveis e métodos consolidados, com menor inclinação para experimentar novas abordagens...",
  caracteristicas: [
    { nome: "Preferência por Rotinas Estáveis", descricao: ["Segue métodos e técnicas já testadas, mantendo rotina bem definida de estudo e projetos."] },
    { nome: "Baixa Iniciativa para Experimentar", descricao: ["Não busca ativamente novas abordagens, preferindo processos comprovados."] },
    { nome: "Estabilidade no Ambiente de Trabalho", descricao: ["Valoriza constância e previsibilidade, evitando variações frequentes."] },
    { nome: "Menor Envolvimento com Desafios Adicionais", descricao: ["Participa de desafios e eventos acadêmicos de forma pontual, sem buscar constantemente inovações."] }
  ],
  vantagensPotenciais: [
    { nome: "Foco e Consistência", descricao: ["Rotina estável favorece concentração e produtividade, consolidando métodos eficazes."] },
    { nome: "Previsibilidade nos Resultados", descricao: ["Seguir processos estabelecidos permite avaliação consistente dos resultados."] },
    { nome: "Redução do Risco de Dispersão", descricao: ["A ausência de mudanças frequentes permite desenvolvimento linear das atividades."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Limitação na Inovação", descricao: ["Resistência a experimentar novas técnicas pode restringir potencial de descoberta e adaptação."] },
    { nome: "Possível Estagnação", descricao: ["A falta de desafios e variações pode reduzir motivação e criatividade."] }
  ],
  estrategias: [
    { nome: "Introdução Gradual de Novidades", descricao: ["Inclua novas ferramentas ou métodos de forma gradual, testando antes de adotar mudanças frequentes."] },
    { nome: "Seleção de Recursos Simples e Claros", descricao: ["Opte por recursos claros e simples, minimizando desconforto com mudanças abruptas."] },
    { nome: "Momentos de Inovação Programados", descricao: ["Planeje períodos específicos para experimentar abordagens diferentes, sem comprometer a rotina."] },
    { nome: "Equilíbrio entre Rotina e Experimentação", descricao: ["Mantenha foco na consistência, reservando pequenos momentos para estimular criatividade."] }
  ],
  conclusao: "Graduandos com nível baixo da faceta Busca por Novidades mantêm estabilidade e consistência, mas a introdução gradual de novas técnicas pode enriquecer projetos e motivação acadêmica."
};

const buscaPorNovidadesMedio: Avaliacao = {
  area: "Extroversão",
  faceta: "Busca por Novidades",
  nivel: "Médio",
  definicao: "A faceta Busca por Novidades, em nível médio, caracteriza estudantes que equilibram métodos consolidados com abertura ocasional a novas técnicas e ferramentas...",
  caracteristicas: [
    { nome: "Abertura Moderada à Experimentação", descricao: ["Testa novas metodologias, recursos digitais ou ambientes de estudo de maneira pontual."] },
    { nome: "Manutenção de Rotinas Eficazes", descricao: ["Valoriza métodos já consolidados, mas admite ajustes e pequenas inovações."] },
    { nome: "Participação Seletiva em Desafios", descricao: ["Engaja-se em eventos acadêmicos ou projetos diferenciados quando percebe oportunidade relevante de aprendizado."] },
    { nome: "Adaptação Gradual", descricao: ["Introduz novidades no planejamento acadêmico sem romper com práticas tradicionais."] }
  ],
  vantagensPotenciais: [
    { nome: "Equilíbrio entre Consistência e Renovação", descricao: ["Mantém foco e estabilidade nas atividades, explorando inovações que aprimoram resultados."] },
    { nome: "Adoção Consciente de Novas Ferramentas", descricao: ["Avalia impacto das novidades antes de implementá-las, evitando mudanças superficiais."] },
    { nome: "Resistência à Monotonia", descricao: ["Inclui pequenas variações que estimulam motivação e evitam estagnação."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Ritmo Lento de Atualização", descricao: ["A adoção gradual de novidades pode atrasar oportunidades de inovação."] },
    { nome: "Possível Dúvida entre Rotina e Inovação", descricao: ["Pode hesitar entre método tradicional ou novo, gerando incerteza e atraso."] },
    { nome: "Adoção Parcial de Ferramentas", descricao: ["Recursos inovadores podem ser explorados superficialmente."] }
  ],
  estrategias: [
    { nome: "Avaliação Periódica das Rotinas", descricao: ["Reflita sobre eficácia dos métodos e pesquise novidades que tragam ganhos concretos."] },
    { nome: "Testes Controlados de Novas Abordagens", descricao: ["Experimente novas ferramentas em projetos-piloto antes de adotar amplamente."] },
    { nome: "Integração Gradual", descricao: ["Inclua pequenas inovações no planejamento sem comprometer a rotina estabelecida."] },
    { nome: "Troca de Experiências com Colegas", descricao: ["Compartilhe experiências e aprenda com relatos de outros estudantes."] }
  ],
  conclusao: "Graduandos com nível médio da faceta Busca por Novidades conciliam rotinas eficazes com abertura seletiva à experimentação, promovendo evolução acadêmica gradual e sustentável."
};

export { buscaPorNovidadesAlto, buscaPorNovidadesBaixo, buscaPorNovidadesMedio };