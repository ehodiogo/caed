import type {Avaliacao} from "../../types/Avaliacao.ts";

const franquezaAlto: Avaliacao = {
  area: "Amabilidade",
  faceta: "Franqueza",
  nivel: "Alto",
  "definicao": "A faceta Franqueza, em nível alto, refere-se à inclinação para ser direto(a) e sincero(a) ao comunicar sentimentos, opiniões e percepções, tanto em trabalhos de equipe quanto em discussões com professores...",
  "caracteristicas": [
    { "nome": "Transparência sobre Limitações", "descricao": ["Prefere ser honesto(a) com docentes e colegas acerca das suas dificuldades e desafios."] },
    { "nome": "Autenticidade na Comunicação", "descricao": ["Não tenta transmitir imagem falsa sobre o progresso do projeto ou estudo."] },
    { "nome": "Admissão de Dúvidas", "descricao": ["Gosta de admitir quando não entende um conceito ou metodologia."] },
    { "nome": "Valorização da Sinceridade", "descricao": ["Acredita que a sinceridade nas discussões acadêmicas é fundamental para evolução de todos."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Melhoria Coletiva", "descricao": ["Honestidade ao dar feedback enriquece discussões e contribui para melhoria contínua do trabalho em grupo."] },
    { "nome": "Ambiente de Confiança", "descricao": ["Franqueza fortalece confiança entre membros da equipe, facilitando cooperação e suporte mútuo."] },
    { "nome": "Desenvolvimento Pessoal", "descricao": ["Admitir limitações ajuda a identificar pontos de melhoria e buscar soluções para aprimorar desempenho acadêmico."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Risco de Conflitos", "descricao": ["Abordagem demasiado direta pode gerar atritos ou ser interpretada como brusca."] },
    { "nome": "Equilíbrio Delicado", "descricao": ["Necessidade de ser sincero deve ser equilibrada com sensibilidade para não desmotivar ou ofender interlocutores."] }
  ],
  "estrategias": [
    { "nome": "Uso de Tom Construtivo", "descricao": ["Ao oferecer críticas, comece elogiando pontos positivos e, em seguida, sugira melhorias de forma construtiva."] },
    { "nome": "Escuta Ativa", "descricao": ["Ouça atentamente opiniões dos demais antes de expressar as suas, evitando confrontos desnecessários."] },
    { "nome": "Feedback Equilibrado", "descricao": ["Mantenha equilíbrio entre sinceridade e respeito, garantindo comunicação clara sem ser ofensiva."] },
    { "nome": "Prática de Autoavaliação", "descricao": ["Reflita sobre como suas críticas são recebidas e ajuste abordagem, buscando aprimorar forma de se expressar."] }
  ],
  "conclusao": "Graduandos com nível alto favorecem transparência e aprimoramento coletivo. Combinando honestidade com comunicação empática e construtiva, transformam essa característica em ferramenta poderosa para desenvolvimento pessoal e evolução do ambiente acadêmico."
};

const franquezaBaixo: Avaliacao = {
  area: "Amabilidade",
  faceta: "Franqueza",
  nivel: "Baixo",
  "definicao": "A faceta Franqueza, em nível baixo, indica tendência a omitir informações ou evitar sinceridade em situações que exigem comunicação aberta de dúvidas e dificuldades...",
  "caracteristicas": [
    { "nome": "Reticência na Comunicação", "descricao": ["Tende a não ser completamente honesto(a) sobre limitações e desafios com professores e colegas."] },
    { "nome": "Imagem Idealizada", "descricao": ["Evita revelar dificuldades, preferindo manter aparência de progresso constante."] },
    { "nome": "Dificuldade em Admitir Falhas", "descricao": ["Hesita em admitir quando não entende um conceito ou metodologia, impedindo obtenção de apoio necessário."] },
    { "nome": "Resistência à Transparência", "descricao": ["Falta de franqueza limita desenvolvimento de feedbacks construtivos e evolução coletiva."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Estabilidade nas Relações", "descricao": ["Postura menos direta pode, em alguns casos, evitar conflitos imediatos e manter relações superficiais harmoniosas."] },
    { "nome": "Foco na Imagem Profissional", "descricao": ["Contribui para manutenção de imagem de competência e segurança, mesmo ocultando dificuldades."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Prejuízo no Aprimoramento", "descricao": ["Omissão de dúvidas e limitações impede recebimento de feedbacks importantes, comprometendo desenvolvimento e qualidade dos projetos."] },
    { "nome": "Isolamento Acadêmico", "descricao": ["Falta de transparência dificulta formação de redes de apoio e colaboração efetiva."] },
    { "nome": "Risco de Erros Persistentes", "descricao": ["Não admitir dificuldades pode levar à repetição de erros e manutenção de práticas que prejudicam desempenho acadêmico."] }
  ],
  "estrategias": [
    { "nome": "Prática de Transparência em Situações Simples", "descricao": ["Comece admitindo dúvidas em situações cotidianas para fortalecer confiança mútua."] },
    { "nome": "Objetividade ao Pedir Ajuda", "descricao": ["Seja claro(a) e direto(a) sobre dificuldades ao solicitar apoio."] },
    { "nome": "Construção Gradual de Confiança", "descricao": ["Crie ambiente de confiança com colegas e professores, tornando a franqueza prática natural e benéfica."] },
    { "nome": "Feedback Externo", "descricao": ["Solicite feedback sobre sua comunicação para identificar áreas de melhoria sem comprometer relações."] }
  ],
  "conclusao": "Graduandos com nível baixo podem enfrentar desafios no desenvolvimento pessoal e na colaboração acadêmica. Ao aumentar transparência e comunicação honesta, é possível superar barreiras e promover ambiente de trabalho mais aberto e colaborativo."
};

const franquezaMedio: Avaliacao = {
  area: "Amabilidade",
  faceta: "Franqueza",
  nivel: "Médio",
  "definicao": "A faceta Franqueza, em nível médio, representa equilíbrio entre sinceridade e cautela na comunicação. O estudante tende a ser honesto em relação às suas dúvidas e limitações quando necessário...",
  "caracteristicas": [
    { "nome": "Sinceridade Moderada", "descricao": ["Geralmente é honesto(a) sobre limitações e desafios, mas pode optar por omitir dificuldades em situações de risco de julgamento."] },
    { "nome": "Comunicação Selecionada", "descricao": ["Prefere ser transparente em contextos seguros, mas adota postura mais reservada em ambientes competitivos ou pouco acolhedores."] },
    { "nome": "Autenticidade com Prudência", "descricao": ["Admite dúvidas ou erros quando acredita que contribuirá para aprendizado coletivo, dosando exposição de fragilidades."] },
    { "nome": "Busca de Feedback Equilibrada", "descricao": ["Solicita críticas construtivas, mas filtra informações compartilhadas para evitar exposição excessiva."] }
  ],
  "vantagensPotenciais": [
    { "nome": "Relações Harmoniosas", "descricao": ["Equilíbrio entre sinceridade e cautela contribui para manutenção de relações colaborativas sem atritos desnecessários."] },
    { "nome": "Aprendizado Direcionado", "descricao": ["Honestidade dosada permite buscar apoio e esclarecimentos nos momentos mais relevantes."] },
    { "nome": "Preservação da Imagem Profissional", "descricao": ["Estudante preserva imagem diante de colegas e professores, demonstrando maturidade na comunicação."] }
  ],
  "dificuldadesPotenciais": [
    { "nome": "Omissão Parcial de Dificuldades", "descricao": ["Pode evitar revelar dúvidas ou erros por receio de julgamento, atrasando resolução de problemas."] },
    { "nome": "Oscilação na Busca por Ajuda", "descricao": ["Hesita em pedir auxílio quando se sente inseguro, limitando oportunidades de aprimoramento contínuo."] }
  ],
  "estrategias": [
    { "nome": "Avaliação de Contextos", "descricao": ["Identifique ambientes e interlocutores em que sinceridade é bem recebida e seja mais aberto nesses espaços."] },
    { "nome": "Prática de Autoavaliação", "descricao": ["Reflita sobre situações em que omitiu dificuldades e avalie benefícios da transparência."] },
    { "nome": "Feedback Gradual", "descricao": ["Compartilhe pequenas dúvidas ou limitações, ajustando grau de franqueza conforme receptividade."] },
    { "nome": "Cultivo da Confiança", "descricao": ["Invista em construir relações de confiança para ampliar contextos em que se sente confortável sendo honesto(a)."] }
  ],
  "conclusao": "Graduandos com nível médio mantêm postura madura e ponderada, alternando entre sinceridade e cautela segundo o contexto, favorecendo desenvolvimento acadêmico e pessoal sem comprometer relações e imagem."
};

export { franquezaAlto, franquezaBaixo, franquezaMedio };