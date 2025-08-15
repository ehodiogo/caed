import type {Feedback} from "./Feedback.ts";

export type Pergunta = {
    pergunta: string;
    fator: string;
    reversa: boolean;
    feedbacks: Feedback[];
}

