import type {Avaliacao} from "../../types/Avaliacao.ts";

const complacenciaAlto: Avaliacao = {
  area: "Amabilidade",
  faceta: "Complacência",
  nivel: "Alto",
  "definicao": "A faceta Complacência, em nível alto, refere-se à inclinação para evitar conflitos e buscar relações harmoniosas, procurando sempre entendimento mútuo em situações de divergência...",
  "caracteristicas": [
    { "nome": "Evasão de Conflitos", "descricao": ["Procura evitar conflitos desnecessários com colegas e professores, muitas vezes abrindo mão de preferências pessoais para manter a harmonia."] },
    { "nome": "Conformidade com a Maioria", "descricao": ["Prefere concordar com a maioria para preservar o clima amistoso em projetos coletivos."] },
    { "nome": "Aceitação das Decisões do Grupo", "descricao": ["Tende a aceitar decisões coletivas, mesmo que não sejam ideais para seus próprios interesses."] },
    { "nome": "Busca de Soluções Pacíficas", "descricao": ["Mantém calma e busca resolver divergências de forma pacífica, priorizando entendimento mútuo."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Ambiente Colaborativo", "descricao": ["Evitar conflitos gera clima de trabalho agradável, facilitando cooperação e integração entre membros da equipe."] },
    { "nome": "Redução do Estresse Interpessoal", "descricao": ["Harmonia minimiza atritos e mantém relações interpessoais positivas."] },
    { "nome": "Facilidade na Troca de Informações", "descricao": ["Postura conciliadora favorece abertura para troca de conhecimentos e colaboração contínua."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Risco de Concessões Excessivas", "descricao": ["Evitar conflitos pode levar a ceder em situações que comprometam prazos ou qualidade do próprio projeto."] },
    { "nome": "Perda de Autonomia", "descricao": ["Ceder demais para manter harmonia pode resultar em negligência das próprias necessidades e metas acadêmicas."] },
    { "nome": "Dificuldade em Expressar Divergências", "descricao": ["Postura demasiadamente complacente pode dificultar manifestação de opiniões contrárias quando necessárias."] }
  ],
  "estrategias": [
    { "nome": "Reflexão Antes de Ceder", "descricao": ["Antes de concordar com pedidos ou sugestões que impactem seu cronograma, avalie se isso afetará prazos ou saúde mental."] },
    { "nome": "Prática de Assertividade Construtiva", "descricao": ["Exponha opiniões de forma respeitosa, destacando pontos positivos e sugerindo melhorias quando algo for inviável."] },
    { "nome": "Equilíbrio entre Harmonia e Autonomia", "descricao": ["Busque meio-termo em que cooperação seja mantida sem comprometer objetivos pessoais."] },
    { "nome": "Estabelecimento de Limites", "descricao": ["Defina claramente seus limites para que metas pessoais e prazos não sejam comprometidos."] }
  ],
  "conclusao": "Graduandos com nível alto desfrutam de ambiente de trabalho amigável e cooperativo, benéfico para integração e troca de conhecimentos. Equilibrar busca pela harmonia com preservação de objetivos é essencial para desempenho acadêmico sustentável."
};

const complacenciaBaixo: Avaliacao = {
  area: "Amabilidade",
  faceta: "Complacência",
  nivel: "Baixo",
  "definicao": "A faceta Complacência, em nível baixo, caracteriza-se por uma postura menos voltada a evitar conflitos, evidenciando tendência a ser mais competitivo(a) e firme nas interações...",
  "caracteristicas": [
    { "nome": "Postura Competitiva", "descricao": ["Defende opiniões com firmeza, mesmo que surjam divergências no grupo."] },
    { "nome": "Menor Propensão à Concessão", "descricao": ["Não cede facilmente, o que pode resultar em confrontos em situações de divergência."] },
    { "nome": "Foco na Autonomia", "descricao": ["Valoriza independência e manutenção dos próprios objetivos, mesmo questionando decisões coletivas."] },
    { "nome": "Resolução Direta de Conflitos", "descricao": ["Prefere enfrentar conflitos de maneira direta, definindo limites e expectativas com clareza."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Defesa dos Próprios Interesses", "descricao": ["Postura menos complacente ajuda a manter foco em metas pessoais e garantir que necessidades sejam atendidas."] },
    { "nome": "Estímulo à Inovação", "descricao": ["Disposição para questionar e desafiar o status quo pode promover mudanças positivas."] },
    { "nome": "Claridade na Comunicação", "descricao": ["Firmeza ao expressar opiniões resulta em comunicação mais transparente e objetiva."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Risco de Conflitos Frequentes", "descricao": ["Postura muito rígida pode gerar atritos e dificultar colaboração."] },
    { "nome": "Ambiente Tenso", "descricao": ["Falta de complacência pode criar clima de trabalho menos harmonioso."] },
    { "nome": "Dificuldade em Aceitar Divergências", "descricao": ["Pode haver resistência em ouvir e integrar pontos de vista diferentes."] }
  ],
  "estrategias": [
    { "nome": "Defina um Protocolo de Convivência", "descricao": ["Estabeleça regras de convivência em grupo para minimizar hostilidade e resolver conflitos construtivamente."] },
    { "nome": "Invista em Escuta Ativa", "descricao": ["Mesmo discordando, demonstre interesse genuíno nas ideias alheias."] },
    { "nome": "Balance Assertividade com Empatia", "descricao": ["Combine firmeza com esforço para reconhecer e valorizar contribuições dos colegas."] },
    { "nome": "Pratique a Mediação de Conflitos", "descricao": ["Desenvolva habilidades de mediação para transformar divergências em oportunidades de crescimento coletivo."] }
  ],
  "conclusao": "Graduandos com nível baixo tendem a ser mais competitivos e firmes, vantagem para defender interesses e promover inovações. Equilibrar assertividade com empatia evita conflitos excessivos e garante ambiente colaborativo e produtivo."
};

const complacenciaMedio: Avaliacao = {
  area: "Amabilidade",
  faceta: "Complacência",
  nivel: "Médio",
  "definicao": "A faceta Complacência, em nível médio, indica perfil equilibrado entre busca por harmonia e defesa dos próprios interesses...",
  "caracteristicas": [
    { "nome": "Equilíbrio entre Harmonia e Firmeza", "descricao": ["Busca manter relações harmoniosas, mas expõe necessidades e preferências quando necessário."] },
    { "nome": "Flexibilidade com Limites", "descricao": ["Cede em pequenas questões para preservar clima do grupo, mas impõe limites claros diante de demandas excessivas."] },
    { "nome": "Gestão de Conflitos Moderada", "descricao": ["Procura resolver divergências por meio do diálogo e negociação, sem evitar debates construtivos."] },
    { "nome": "Postura Cooperativa com Assertividade", "descricao": ["Colabora com colegas e professores, incentivando troca de ideias e contribuindo para definição de metas."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Ambiente Colaborativo Estável", "descricao": ["Conciliadora aliada à assertividade favorece relações positivas e produtivas, reduzindo conflitos desnecessários."] },
    { "nome": "Resolução Eficiente de Problemas", "descricao": ["Diálogo e negociação promovem soluções que equilibram bem-estar coletivo e resultados acadêmicos."] },
    { "nome": "Preservação da Autonomia", "descricao": ["Capacidade de impor limites protege contra sobrecarga e preserva foco em metas pessoais."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Oscilação entre Ceder e Confrontar", "descricao": ["Pode sentir-se dividido(a) entre evitar conflitos e necessidade de se posicionar."] },
    { "nome": "Possibilidade de Mal-Entendidos", "descricao": ["Esforço para equilibrar interesses pode gerar dúvidas sobre sua posição."] }
  ],
  "estrategias": [
    { "nome": "Diálogo Aberto e Respeitoso", "descricao": ["Comunique opiniões e preocupações de forma transparente e cordial."] },
    { "nome": "Definição de Prioridades", "descricao": ["Avalie quando vale a pena ceder e quando é fundamental defender interesses."] },
    { "nome": "Negociação e Consenso", "descricao": ["Busque consenso, mas esteja preparado(a) para argumentar construtivamente quando discordar."] },
    { "nome": "Autoavaliação Contínua", "descricao": ["Reflita sobre resultados das interações em grupo, ajustando postura conforme receptividade."] }
  ],
  "conclusao": "Graduandos com nível médio mantêm equilíbrio saudável entre cooperação e assertividade, promovendo clima colaborativo sem abrir mão de objetivos e necessidades. Desenvolver habilidades de negociação, comunicação clara e definição de limites favorece convivência produtiva e progresso acadêmico."
};

export { complacenciaAlto, complacenciaBaixo, complacenciaMedio };