const alto : number[] = [3.67, 5.00];
const medio: number[] = [2.34, 3.66];
const baixo: number[] = [1.00, 2.33];

function getResultFeedback(value: number): string {
    if (value >= alto[0] && value <= alto[1]) return "Alto";
    if (value >= medio[0] && value <= medio[1]) return "Médio";
    if (value >= baixo[0] && value <= baixo[1]) return "Baixo";
    return "Valor fora do intervalo";
}

export default getResultFeedback;