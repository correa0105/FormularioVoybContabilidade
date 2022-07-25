import calcularTributos from "./calcularImpostos";

const formCalculadoraTributaria = document.querySelector("#calculadora-tributaria");

formCalculadoraTributaria.addEventListener("submit", event => {
    event.preventDefault();

    const nomeEmpresa = formCalculadoraTributaria.querySelector("#nomeEmpresa").value;
    const cnpjEmpresa = formCalculadoraTributaria.querySelector("#cnpj").value;
    const emailEmpresa = formCalculadoraTributaria.querySelector("#email").value;
    const faturamento = formCalculadoraTributaria.querySelector("#faturamento").value;
    const atividade = document.querySelector("#select").value;
    const eSimplesNacional = document.querySelector("#radio-no");

    const cnpjVerdadeiro = validarCNPJ(cnpjEmpresa);

    if (cnpjVerdadeiro) {
        fetch("https://formsubmit.co/ajax/contato.lucas0105@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Email: emailEmpresa,
                Empresa: nomeEmpresa,
                CNPJ: cnpjEmpresa,
                Faturamento: faturamento
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

        const calculation = calcularTributos(faturamento, atividade, eSimplesNacional);
        loadPage(formCalculadoraTributaria, calculation, nomeEmpresa);
    } else {
        erroCnpj()
    }
})

async function loadPage(element, calculation, nomeEmpresa) {
    try {
        const get = element.getAttribute("GET");
        const response = await fetch(get);
        const html = await response.text();

        loadResult(html, calculation, nomeEmpresa);
    } catch (err) {
        console.log("Deu erro!");
    }
}

function loadResult(response, calculation, nomeEmpresa) {
    const result = document.querySelector(".container");
    result.innerHTML = response;

    document.querySelector(".valorRecuperado").innerHTML = `R$ ${calculation}`;
    document.querySelector(".spanEmpresa").innerHTML = nomeEmpresa;
}

function validarCNPJ(value) {
    if (!value) return false

    const isString = typeof value === 'string'
    const validTypes = isString || Number.isInteger(value) || Array.isArray(value)

    if (!validTypes) return false

    if (isString) {

        if (value.length > 18) return false

        const digitsOnly = /^\d{14}$/.test(value)

        const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value)

        if (digitsOnly || validFormat) true

        else return false
    }

    const match = value.toString().match(/\d/g)
    const numbers = Array.isArray(match) ? match.map(Number) : []

    if (numbers.length !== 14) return false

    const items = [...new Set(numbers)]
    if (items.length === 1) return false

    const calc = (x) => {
        const slice = numbers.slice(0, x)
        let factor = x - 7
        let sum = 0

        for (let i = x; i >= 1; i--) {
            const n = slice[x - i]
            sum += n * factor--
            if (factor < 2) factor = 9
        }

        const result = 11 - (sum % 11)

        return result > 9 ? 0 : result
    }

    const digits = numbers.slice(12)

    const digit0 = calc(12)
    if (digit0 !== digits[0]) return false

    const digit1 = calc(13)
    if (digit1 === digits[1]) {
        return true
    }
}

function erroCnpj() {
    const campoErro = document.querySelector(".cnpjError");
    const cnpjErro = "CNPJ Inválido";
    campoErro.innerHTML = cnpjErro;
}
