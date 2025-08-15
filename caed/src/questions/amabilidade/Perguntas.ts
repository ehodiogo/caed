import type {Pergunta} from "../../types/Pergunta.ts";

export const PerguntasAmabilidade: Pergunta[] = [
    {
        "pergunta": "Sou honesto(a) com professores e colegas sobre minhas limitações.",
        "fator": "Franqueza",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "A omissão dificulta a ajuda. Compartilhe uma limitação com um colega de confiança; isso abre espaço para suporte e aprendizado mútuo."},
            {nota: "3", resultado: "Você reconhece dificuldades em parte das situações. Continue praticando transparência para garantir que obstáculos sejam resolvidos rapidamente."},
            {nota: "4-5", resultado: "A sinceridade plena fortalece a confiança. Mantenha tom construtivo e proponha soluções ao expor limitações, mostrando proatividade junto com franqueza."}
        ]
    },
    {
        "pergunta": "Não passo imagem falsa sobre meu progresso acadêmico.",
        "fator": "Franqueza",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Mostrar apenas sucessos pode levar a expectativas irreais. Experimente relatar progresso real (incluindo pendências)."},
            {nota: "3", resultado: "Geralmente realista, mas às vezes suaviza detalhes negativos. Inclua métricas objetivas (percentual concluído) nos relatórios para manter clareza."},
            {nota: "4-5", resultado: "A transparência total permite ajustes de cronograma em tempo hábil. Apenas evite excesso de informação técnica que possa confundir quem recebe."}
        ]
    },
    {
        "pergunta": "Admito quando não entendo algo.",
        "fator": "Franqueza",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Evitar admitir dúvidas prolonga erros. Anote as questões e leve ao professor ou grupo de estudo para esclarecê-las na primeira oportunidade."},
            {nota: "3", resultado: "Admitir dúvidas e pedir ajuda em tópicos pontuais. Continue registrando dúvidas em tempo real e esclarecendo-as."},
            {nota: "4-5", resultado: "Reconhecer rapidamente o que não sabe acelera aprendizado. Para otimizar o tempo de todos, pesquise brevemente antes de perguntar; isso gera perguntas mais específicas."}
        ]
    },
    {
        "pergunta": "Acredito que a sinceridade ajuda na evolução de todos.",
        "fator": "Franqueza",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Se não vê valor na sinceridade, pode subutilizar o feedback. Observe resultados de pessoas e equipes que praticam franqueza e teste essa abordagem em pequena escala."},
            {nota: "3", resultado: "Concorda em parte; pratique dando feedback construtivo em revisões de código ou relatórios, demonstrando benefícios na prática."},
            {nota: "4-5", resultado: "Convicção firme na sinceridade gera cultura de melhoria. Em relação aos outros combine elogios específicos com críticas pontuais para manter o clima colaborativo."}
        ]
    },
    {
        "pergunta": "Confesso quando não cumpro um prazo, mesmo constrangido(a).",
        "fator": "Franqueza",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Esconder atrasos atrapalha o planejamento. Informe a falha rapidamente e proponha novo prazo ou plano de recuperação."},
            {nota: "3", resultado: "Assume atrasos em casos relevantes. Padronize atualização de status semanal para evitar surpresas de última hora."},
            {nota: "4-5", resultado: "Transparência imediata permite realocação de tarefas. Documente causas do atraso para prevenir recorrência e mostrar aprendizado."}
        ]
    },
    {
        "pergunta": "Prefiro esconder dificuldades para não parecer despreparado(a).",
        "fator": "Franqueza",
        "reversa": true,
        "feedbacks": [
            {nota: "1-2", resultado: "Excelente abertura: você compartilha dificuldades naturalmente. Em reuniões, apenas observe o tempo para equilibrar espaço com colegas."},
            {nota: "3", resultado: "Às vezes esconde, às vezes compartilha. Estabeleça regra pessoal: revelar pelo menos uma dificuldade por projeto, mantendo fluxo de apoio constante."},
            {nota: "4-5", resultado: "Esconder problemas atrasa a solução. Comece por dividir pequenos obstáculos em conversas individuais; com o tempo, amplie essa prática a todo o grupo."}
        ]
    },
    {
        "pergunta": "Evito conflitos desnecessários, mesmo que precise ceder.",
        "fator": "Complacência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Sua postura firme evita concessões precipitadas, mas pode gerar tensão. Antes de discordar, destaque um benefício comum e proponha alternativa que contemple ambos os lados."},
            {nota: "3", resultado: "Você pondera entre ceder e defender ponto de vista. Continue avaliando o impacto de cada conflito."},
            {nota: "4-5", resultado: "Harmonia é prioridade para você. Para não comprometer metas pessoais, defina limite claro: ceder apenas se não afetar prazos ou escopo essencial do trabalho."}
        ]
    },
    {
        "pergunta": "Concordo com a maioria para manter harmonia em grupos.",
        "fator": "Complacência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Discorda quando necessário é essencial. Use escuta ativa para mostrar respeito antes de expor contraponto, reduzindo percepção de confronto."},
            {nota: "3", resultado: "Ajuste o posicionamento conforme relevância. Valide rapidamente se a decisão coletiva atende requisitos técnicos antes de aderir ou propor ajustes."},
            {nota: "4-5", resultado: "Concordar preserva o clima amistoso, mas pode ocultar ideias valiosas. Em trabalhos em equipe, crie espaço “cinco minutos de divergência” para que todos exponham riscos antes da votação final."}
        ]
    },
    {
        "pergunta": "Aceito decisões do grupo, mesmo não sendo minhas preferidas.",
        "fator": "Complacência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Defender preferência reforça autonomia, mas verifique se insistência agrega valor proporcional ao esforço adicional."},
            {nota: "3", resultado: "Costuma aceitar quando a diferença é pequena. Mantenha a prática de registrar objeções técnicas brevemente para futura referência, caso ajustes sejam necessários."},
            {nota: "4-5", resultado: "A aceitação rápida mantém o ritmo, porém pode impactar motivação. Sugira rodízio de responsabilidade para que, em outra fase, sua proposta seja testada."}
        ]
    },
    {
        "pergunta": "Mantenho calma e busco soluções pacíficas em divergências.",
        "fator": "Complacência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Confronto direto pode resolver rápido, mas cuidado: foque no problema, não na pessoa, para evitar desgaste."},
            {nota: "3", resultado: "Combina calma com firmeza. Preserve tom colaborativo e use técnicas de mediação (explicar, escutar, propor síntese) para fechar impasses."},
            {nota: "4-5", resultado: "Ser pacificador reduz o stress coletivo. Para não empacar em impasses sem decisão, estabeleça prazo para consenso; se falhar, proponha votação objetiva."}
        ]
    },
    {
        "pergunta": "Procuro mediar divergências para que todos se sintam ouvidos.",
        "fator": "Complacência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Como não costuma mediar, conflitos podem escalar. Experimente resumir posições opostas em uma frase cada; isso mostra neutralidade e acelera solução."},
            {nota: "3", resultado: "Atua como mediador quando necessário. Continue garantindo que cada membro fale ao menos uma vez antes da decisão final."},
            {nota: "4-5", resultado: "Forte habilidade de mediação. Mantenha atas curtas com acordos e responsáveis para evitar mal-entendidos após a conversa."}
        ]
    },
    {
        "pergunta": "Faço questão de impor minhas opiniões mesmo que cause tensão.",
        "fator": "Complacência",
        "reversa": true,
        "feedbacks": [
            {nota: "1-2", resultado: "Boa disposição para consenso. Apenas garanta que suas ideias também apareçam — apresente-as como sugestões, não imposições."},
            {nota: "3", resultado: "Às vezes impõe, às vezes concilia. Defina critério: insistir somente quando impacto técnico for significativo."},
            {nota: "4-5", resultado: "A insistência pode prejudicar o clima da equipe. Aplique regra dos 2 min: exponha argumento principal em até dois minutos e, depois, abra para contrapontos antes de retomar posição."}
        ]
    },
]