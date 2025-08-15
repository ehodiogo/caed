import type {Pergunta} from "../../types/Pergunta.ts";

export const PerguntasConscienciosidade: Pergunta[] = [
    {
        "pergunta": "Confio na minha capacidade de entender conteúdos complexos se me esforçar.",
        "fator": "Competência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "A dúvida fragiliza a motivação. Divida o conteúdo em blocos de 30 – 40 min e registre cada trecho concluído; a visualização de progresso reforça a autoconfiança."},
            {nota: "3", resultado: "Confiança moderada. Antes de iniciar um tema difícil, relembre vitórias passadas semelhantes para impulsionar o foco e persistência."},
            {nota: "4-5", resultado: "Forte crença na própria capacidade. Para evitar subestimar detalhes, valide entendimento com exercícios-chave ou breve explicação a um colega."}
        ]
    },
    {
        "pergunta": "Sinto-me confiante de que o estudo consistente me faz dominar o conteúdo.",
        "fator": "Competência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Falta de confiança no método gera procrastinação. Teste rotinas curtas, como Pomodoro, e acompanhe evolução semanal para comprovar a eficácia do esforço contínuo."},
            {nota: "3", resultado: "Reconhece o valor do estudo, mas às vezes duvida. Mantenha um calendário visual marcando dias de estudo efetivo; isso consolida a confiança no processo."},
            {nota: "4-5", resultado: "Certeza de que prática leva ao domínio. Eleve eficiência: revise conteúdo com técnica ensino-explicação (ensinar o conceito em 5 min)."}
        ]
    },
    {
        "pergunta": "Acredito ter habilidades para concluir o curso com êxito.",
        "fator": "Competência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Visão pessimista reduz resiliência. Elabore um road-map semestral do curso e destaque disciplinas já vencidas para tornar o objetivo final mais tangível."},
            {nota: "3", resultado: "Expectativa cautelosa. Revise metas a cada término de semestre e ajuste cronograma para manter rota clara até a formatura."},
            {nota: "4-5", resultado: "Confiança sólida. Para não relaxar, estabeleça metas extras (estágio, iniciação científica) que complementem a trajetória e mantenham desafios."}
        ]
    },
    {
        "pergunta": "Reconheço que competência se desenvolve com prática contínua.",
        "fator": "Competência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Crer que habilidade é fixa limita evolução. Acompanhe progresso em planilha de horas de prática × desempenho (notas, bugs resolvidos) para comprovar ganho real."},
            {nota: "3", resultado: "Entende a importância da prática, mas pode a subutilizar. Agende sessões semanais de revisão ativa e monitore melhorias mensais."},
            {nota: "4-5", resultado: "Mentalidade de crescimento bem estabelecida. Amplie impacto orientando colegas em tópicos que você já domina — reforça aprendizagem mútua."}
        ]
    },
    {
        "pergunta": "Após concluir tarefas difíceis, sinto-me capaz de enfrentar novos desafios.",
        "fator": "Competência",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Falta reconhecimento do próprio sucesso. Registre cada desafio vencido numa “lista de vitórias” e releia antes de iniciar nova tarefa complexa."},
            {nota: "3", resultado: "Confiança cresce, mas oscila. Faça retrospectiva mensal destacando 3 conquistas e 3 aprendizados para manter impulso positivo."},
            {nota: "4-5", resultado: "Usa vitórias como combustível para os próximos passos. Crie uma lista escalonada de desafios (fácil → médio → avançado) para aproveitar o momento de autoconfiança."}
        ]
    },
    {
        "pergunta": "Duvido da minha competência mesmo após sucesso em tarefas complexas.",
        "fator": "Competência",
        "reversa": true,
        "feedbacks": [
            {nota: "1-2", resultado: "É saudável reconhecimento das habilidades. Mas, para equilibrar, pratique autoavaliação crítica pontuando uma melhoria possível a cada sucesso."},
            {nota: "3", resultado: "Às vezes questiona competência. Mantenha o feedback objetivo de docentes (rubricas, notas) como referência externa para validar desempenho."},
            {nota: "4-5", resultado: "A autocrítica excessiva mina a confiança. Guarde evidências concretas (professor elogiando, nota satisfatória) e releia-as quando a dúvida surgir."}
        ]
    },
    {
        "pergunta": "Organizo materiais (artigos, livros, anotações) de forma sistemática.",
        "fator": "Ordem",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "A desorganização dificulta achar referências. Separe hoje mesmo uma pasta (física ou digital) para cada disciplina e mova todo o material correspondente; isso reduz buscas futuras."},
            {nota: "3", resultado: "Organização moderada. Agende revisão quinzenal para arquivar novos arquivos na estrutura existente e evitar acúmulo."},
            {nota: "4-5", resultado: "Sistema robusto facilita estudo. Para não perder tempo catalogando demais, use regras automáticas (nomes-padrão ou filtros de e-mail) que arquivem arquivos novos sem trabalho manual."}
        ]
    },
    {
        "pergunta": "Minha mesa de estudo costuma estar arrumada.",
        "fator": "Ordem",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Um ambiente caótico aumenta a distração. Reserve 5 min antes de cada sessão para guardar papéis/objetos, deixando na mesa só o que será usado."},
            {nota: "3", resultado: "Mantém ordem razoável. Inclua mini-rotina ao fim do dia: devolver livros e anotações ao lugar correto, garantindo início limpo na manhã seguinte."},
            {nota: "4-5", resultado: "Mesa impecável favorece o foco. Se notar rigidez, permita “bagunça controlada” enquanto trabalha e faça arrumação rápida apenas ao final."}
        ]
    },
    {
        "pergunta": "Uso calendário ou planner para acompanhar atividades.",
        "fator": "Ordem",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Falta de registro causa esquecimentos. Insira todos os prazos desta semana no Google Calendar e ative lembrete 24 h antes como primeiro passo."},
            {nota: "3", resultado: "Usa planner para datas principais. Acrescente lembretes de etapas intermediárias (ex.: rascunho do relatório) para evitar correria de última hora."},
            {nota: "4-5", resultado: "Planejamento rigoroso garante previsibilidade. Para não sobrecarregar o calendário, agrupe tarefas similares em blocos (leitura, laboratório) e revise prioridades semanalmente."}
        ]
    },
    {
        "pergunta": "Planejo horários diários de leitura, exercícios e pausas.",
        "fator": "Ordem",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Agenda vaga leva à procrastinação. Defina bloco fixo de 90 min para leitura técnica logo pela manhã; repita por 5 dias para criar hábito."},
            {nota: "3", resultado: "Estrutura parcial. Confirme na noite anterior os três blocos-chave do dia seguinte (ex.: leitura, exercício, resumo) para chegar já decidido."},
            {nota: "4-5", resultado: "Grade horária bem definida otimiza rendimento. Mantenha 10 % de tempo em branco para imprevistos a fim de preservar a flexibilidade."}
        ]
    },
    {
        "pergunta": "Arquivo notas digitais em pastas nomeadas por tema.",
        "fator": "Ordem",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Notas soltas dificultam a revisão. Crie hierarquia simples (Curso > Disciplina > Tema) e mova notas antigas gradualmente durante revisões semanais."},
            {nota: "3", resultado: "Estrutura básica. Adote padrão único de nomes (ex.: 2025-08-04_Tema) para acelerar buscas futuras."},
            {nota: "4-5", resultado: "Arquivamento criterioso facilita a recuperação de informação. Automatize captura usando tags ou ferramentas como Notion/Obsidian para ganhar tempo."}
        ]
    },
    {
        "pergunta": "Deixo anotações e arquivos espalhados sem critério.",
        "fator": "Ordem",
        "reversa": true,
        "feedbacks": [
            {nota: "1-2", resultado: "Ótimo controle de arquivos. Apenas cheque trimestralmente se a estrutura ainda atende às necessidades ou precisa ajuste."},
            {nota: "3", resultado: "Às vezes espalha, às vezes organiza. Defina “quinta da limpeza”: 15 min para realocar tudo que ficou solto durante a semana."},
            {nota: "4-5", resultado: "Desordem recorrente atrasa tarefas. Use regra dos 2-cliques: qualquer arquivo deve ser localizável em até dois cliques de pasta; se não, reestruture a hierarquia."}
        ]
    },
    {
        "pergunta": "Cumpro horários de estudo mesmo cansado(a) ou desmotivado(a).",
        "fator": "Senso de Dever",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "A falta de regularidade reduz o rendimento. Defina um bloco mínimo inegociável (ex.: 25 min) e use um timer para começar – muitas vezes a motivação aparece após iniciar."},
            {nota: "3", resultado: "Cumpre na maioria das vezes. Mantenha um calendário visível com marcação diária; ver a sequência de dias estudados ajuda a não quebrar o ritmo."},
            {nota: "4-5", resultado: "Disciplina exemplar. Inclua pausas programadas e noites de descanso completo para evitar sobrecarga a longo prazo."}
        ]
    },
    {
        "pergunta": "Evito adiar tarefas; considero obrigação manter o planejamento.",
        "fator": "Senso de Dever",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Procrastinação gera acúmulo. Divida a tarefa em micro-passos (ex.: introdução, método, resultados) e conclua um a cada sessão para manter avanço constante."},
            {nota: "3", resultado: "Raramente adia, mas ainda ocorre. Experimente prioridade 1-3-5: finalize 1 tarefa grande, 3 médias e 5 pequenas por semana para manter o fluxo."},
            {nota: "4-5", resultado: "Resistência sólida à procrastinação. Faça revisão semanal para redistribuir tarefas caso surjam imprevistos e evitar gargalos de última hora."}
        ]
    },
    {
        "pergunta": "Levo a sério metas de produção acadêmica que estabeleço.",
        "fator": "Senso de Dever",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Metas soltas perdem força. Formalize um ‘contrato de estudo’ com um colega ou mentor, revisando metas toda sexta-feira."},
            {nota: "3", resultado: "Compromete-se com às principais metas. Converta cada meta de maneira simples (ex.: páginas por semana) para medir progresso objetivamente."},
            {nota: "4-5", resultado: "Alto compromisso. Para não inflar expectativas, valide se cada meta é SMART (específica, mensurável, alcançável, relevante, temporal)."}
        ]
    },
    {
        "pergunta": "Mesmo com convites atraentes, priorizo metas de estudo.",
        "fator": "Senso de Dever",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Faltas frequentes atrasam tarefas. Use regra 2-de-5: em cada 5 convites, permita-se aceitar 2 e mantenha 3 sessões de estudo intactas."},
            {nota: "3", resultado: "Equilibra lazer e dever. Continue bloqueando trechos fixos (ex.: 19h-21h) como “horário intocável” para estudo intensivo."},
            {nota: "4-5", resultado: "Forte priorização. Agende atividade social como recompensa após marcos importantes; isso preserva redes pessoais sem sacrificar resultados."}
        ]
    },
    {
        "pergunta": "Estudo nos horários planejados, mesmo sem vontade.",
        "fator": "Senso de Dever",
        "reversa": false,
        "feedbacks": [
            {nota: "1-2", resultado: "Vontade flutuante impede consistência. Utilize o método ‘arraste-e-solte’: se perder o horário, reprograme no mesmo dia para não pular a sessão."},
            {nota: "3", resultado: "Normalmente cumpre, mas cede ocasionalmente. Prepare rota alternativa curta (ex.: 30 min de revisão) quando estiver sem energia, mantendo a cadência."},
            {nota: "4-5", resultado: "Cumprimento rigoroso. Inclua exercícios leves ou técnicas de respiração entre blocos para renovar disposição sem quebrar o cronograma."}
        ]
    },
    {
        "pergunta": "Deixo para estudar “quando der”; não vejo problema em alterar responsabilidades.",
        "fator": "Senso de Dever",
        "reversa": true,
        "feedbacks": [
            {nota: "1-2", resultado: "Ótimo senso de responsabilidade. Só garanta flexibilidade mínima para ajustes de última hora, mantendo o planejamento como guia principal."},
            {nota: "3", resultado: "Às vezes flexibiliza demais. Defina limite claro: remanejar no máximo uma sessão por semana; o restante permanece fixo."},
            {nota: "4-5", resultado: "Falta de compromisso afeta prazos. Instale lembretes no celular para iniciar sessões e peça a um colega para }checar seu progresso duas vezes por semana, reforçando responsabilidade."}
        ]
    },
]