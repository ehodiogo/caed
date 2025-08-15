export type Avaliacao = {
  area: string;             // Neuroticismo
  faceta: string;           // Ansiedade
  nivel: "Alto" | "Médio" | "Baixo";

  definicao: string;

  caracteristicas: {
    nome: string;           // Nome da característica
    descricao: string[];    // Lista de detalhes
  }[];

  sintomasFisicos?: string[]; // Sintomas físicos

  vantagensPotenciais?: {
    nome: string;           // Nome da vantagem
    descricao: string[];    // Detalhes
  }[];

  dificuldadesPotenciais?: {
    nome: string;           // Nome  dificuldade
    descricao: string[];    // Detalhe
  }[];

  estrategias?: {
    nome: string;           // Nome da estratégia-
    descricao: string[];    // Detalhe
  }[];

  conclusao?: string;       // Texto final resumido do doc do caed
};
