import type {Avaliacao} from "../../types/Avaliacao.ts";

const emocoesPositivasAlto: Avaliacao = {
  area: "Extroversão",
  faceta: "Emoções Positivas",
  nivel: "Alto",
  definicao: "A faceta Emoções Positivas, em nível alto, refere-se à tendência de sentir alegria, entusiasmo e satisfação, influenciando a motivação e o bem-estar ao longo da graduação...",
  caracteristicas: [
    { nome: "Satisfação com o Progresso", descricao: ["Sente grande satisfação ao perceber avanços em projetos, relatórios ou desenvolvimento de protótipos."] },
    { nome: "Celebração de Pequenas Conquistas", descricao: ["Valoriza e celebra pequenas vitórias diárias, reforçando ânimo para continuar."] },
    { nome: "Atitude Otimista em Face dos Desafios", descricao: ["Mantém postura positiva mesmo em tarefas complexas, como provas finais ou integração de sistemas."] },
    { nome: "Alegria com Objetivos", descricao: ["Sente alegria ao pensar em alcançar metas acadêmicas, como concluir o curso ou apresentar projeto."] }
  ],
  vantagensPotenciais: [
    { nome: "Motivação Sustentada", descricao: ["O otimismo ajuda a manter motivação em fases estressantes, como semanas de entrega de projetos ou revisão de TCC."] },
    { nome: "Influência Positiva no Grupo", descricao: ["Energia positiva contagia colegas, contribuindo para clima colaborativo e engajado."] },
    { nome: "Resiliência Emocional", descricao: ["Fortalece capacidade de enfrentar desafios, tornando aprendizado mais gratificante."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Excesso de Otimismo", descricao: ["Otimismo exagerado pode levar à subestimação de desafios ou riscos."] },
    { nome: "Possível Negligência de Aspectos Críticos", descricao: ["Focar apenas nas conquistas pode ofuscar atenção a detalhes importantes."] }
  ],
  estrategias: [
    { nome: "Incentivo ao Compartilhamento de Conquistas", descricao: ["Use otimismo para motivar colegas, celebrando avanços coletivos."] },
    { nome: "Registro de Pequenas Vitórias", descricao: ["Mantenha diário ou planilha de pequenas conquistas para reforçar sensação de progresso."] },
    { nome: "Análise Crítica Construtiva", descricao: ["Combine entusiasmo com reflexão crítica para avaliar desafios e definir estratégias."] }
  ],
  conclusao: "Graduandos com nível alto exibem postura motivada e resiliente, capaz de enfrentar pressão com energia e otimismo, incentivando o grupo sem descuidar da avaliação crítica."
};

const emocoesPositivasBaixo: Avaliacao = {
  area: "Extroversão",
  faceta: "Emoções Positivas",
  nivel: "Baixo",
  definicao: "A faceta Emoções Positivas, em nível baixo, indica postura mais neutra ou técnica, com menor frequência de sentimentos de alegria e entusiasmo diante do progresso acadêmico...",
  caracteristicas: [
    { nome: "Humor Neutro", descricao: ["Apresenta disposição emocional mais reservada, com menor intensidade de entusiasmo."] },
    { nome: "Menor Celebração de Conquistas", descricao: ["Pode não registrar ou valorizar pequenas vitórias, como páginas de relatório concluídas."] },
    { nome: "Abordagem Técnica", descricao: ["Foca objetivamente nos aspectos práticos das tarefas, sem demonstrar entusiasmo."] },
    { nome: "Falta de Engajamento Emocional", descricao: ["Sente menos alegria ao pensar em alcançar objetivos acadêmicos."] }
  ],
  vantagensPotenciais: [
    { nome: "Foco na Racionalidade", descricao: ["Postura neutra favorece análise crítica e objetiva, contribuindo para decisões fundamentadas."] },
    { nome: "Estabilidade Emocional", descricao: ["Menor oscilação emocional mantém ambiente previsível e consistente."] },
    { nome: "Consistência na Rotina", descricao: ["Abordagem menos entusiástica resulta em ritmo de trabalho estável."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Redução na Motivação", descricao: ["Ausência de sentimentos positivos intensos pode dificultar superação de períodos de dificuldade."] },
    { nome: "Menor Engajamento com Conquistas", descricao: ["Não reconhecer pequenas vitórias reduz incentivo para continuar evoluindo."] },
    { nome: "Risco de Desânimo a Longo Prazo", descricao: ["Falta de estímulos emocionais positivos pode afetar desempenho acadêmico."] }
  ],
  estrategias: [
    { nome: "Registro de Pequenas Vitórias", descricao: ["Mantenha registro de conquistas mesmo que pontualmente para reforçar progresso."] },
    { nome: "Busca de Feedback Externo", descricao: ["Conte com mentor ou colega que destaque realizações e motive."] },
    { nome: "Estabelecimento de Metas Motivacionais", descricao: ["Defina objetivos que proporcionem sensação de realização ao serem alcançados."] },
    { nome: "Integração de Atividades Estimulantes", descricao: ["Participe de eventos que tragam estímulo extra, elevando ânimo."] }
  ],
  conclusao: "Graduandos com nível baixo tendem a adotar postura técnica e neutra, favorecendo objetividade, mas estratégias de reconhecimento de conquistas e feedback podem aumentar motivação."
};

const emocoesPositivasMedio: Avaliacao = {
  area: "Extroversão",
  faceta: "Emoções Positivas",
  nivel: "Médio",
  definicao: "A faceta Emoções Positivas, em nível médio, refere-se à presença regular, mas moderada, de satisfação, entusiasmo e otimismo diante das atividades acadêmicas...",
  caracteristicas: [
    { nome: "Satisfação Moderada com o Progresso", descricao: ["Reconhece conquistas, celebrando apenas avanços significativos ou etapas importantes."] },
    { nome: "Atitude Realista diante de Desafios", descricao: ["Mantém postura positiva na maior parte do tempo, alternando otimismo com foco técnico."] },
    { nome: "Celebração Parcial de Conquistas", descricao: ["Valoriza pequenas vitórias, mas nem sempre registra ou compartilha com o grupo."] },
    { nome: "Oscilações de Motivação", descricao: ["Apresenta picos de entusiasmo alternando com períodos de menor envolvimento emocional."] }
  ],
  vantagensPotenciais: [
    { nome: "Equilíbrio entre Entusiasmo e Objetividade", descricao: ["Motiva-se e contagia colegas sem perder análise crítica e foco nas metas."] },
    { nome: "Resiliência Moderada", descricao: ["Lida bem com desafios, buscando apoio ou ajustando estratégias quando necessário."] },
    { nome: "Ambiente de Trabalho Estável", descricao: ["Contribui para clima acadêmico harmonioso, alternando otimismo e análise racional."] }
  ],
  dificuldadesPotenciais: [
    { nome: "Motivação Irregular", descricao: ["Pode apresentar variações no engajamento ao longo do semestre."] },
    { nome: "Celebração Parcial de Conquistas", descricao: ["Nem sempre valoriza avanços menores, tornando progresso menos visível."] },
    { nome: "Risco de Oscilar entre Excesso e Falta de Entusiasmo", descricao: ["Alterna entre otimismo e postura reservada em situações de pressão."] }
  ],
  estrategias: [
    { nome: "Registro Seletivo de Avanços", descricao: ["Anote principais progressos para reforçar percepção de desenvolvimento contínuo."] },
    { nome: "Balanceamento entre Otimismo e Reflexão Crítica", descricao: ["Alterne celebração com análises realistas das dificuldades."] },
    { nome: "Compartilhamento de Conquistas Significativas", descricao: ["Divida avanços relevantes com colegas e orientadores."] },
    { nome: "Apoio Mútuo em Fases de Desânimo", descricao: ["Reconheça períodos de menor entusiasmo e busque apoio em grupos de estudo ou mentoria."] }
  ],
  conclusao: "Graduandos com nível médio transitam entre otimismo e objetividade, mantendo equilíbrio entre celebração e análise crítica, favorecendo ambiente acadêmico saudável e produtivo."
};

export { emocoesPositivasAlto, emocoesPositivasBaixo, emocoesPositivasMedio };