export default function calcularTributos(faturamento, atividade, eSimplesNacional) {
    if (eSimplesNacional.checked) {
        return (((faturamento * atividade) * 0.00208) * 60);
    } else {
        return ((faturamento * 0.00112) * 60);
    }
}