import calcularTributos from "./calcularImpostos";

const formCalculadoraTributaria = document.querySelector("#calculadora-tributaria");
const displaySaudacao = document.querySelector(".saudacao");
const displaySeguranca = document.querySelector(".seguranca");
const displayLogo = document.querySelector(".logoFora");

formCalculadoraTributaria.addEventListener("submit", event => {
    event.preventDefault();

    const nomeEmpresa = formCalculadoraTributaria.querySelector("#nomeEmpresa").value;
    const cnpjEmpresa = formCalculadoraTributaria.querySelector("#cnpj").value;
    const emailEmpresa = formCalculadoraTributaria.querySelector("#email").value;
    const faturamento = formCalculadoraTributaria.querySelector("#faturamento").value;
    const atividade = document.querySelector("#select");
    const eSimplesNacional = document.querySelector("#radio-yes");

    const cnpjVerdadeiro = validarCNPJ(cnpjEmpresa);

    const simplesNacional = eSimplesNacional.checked ? "É Simples Nacional" : "Não é Simples Nacional";

    if (cnpjVerdadeiro) {
        fetch("https://formsubmit.co/ajax/thiago@voyb.com.br", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Email: emailEmpresa,
                Empresa: nomeEmpresa,
                CNPJ: cnpjEmpresa,
                Faturamento: faturamento,
                Atividade: atividade.options[atividade.selectedIndex].text,
                Simples_Nacional: simplesNacional
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));

        const calculation = calcularTributos(faturamento, atividade.value, eSimplesNacional);
        const brlCalculation = calculation.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
        loadPage(formCalculadoraTributaria, brlCalculation, nomeEmpresa);
    } else {
        erroCnpj()
    }
})

async function loadPage(element, brlCalculation, nomeEmpresa) {
    try {
        const get = element.getAttribute("GET");
        const response = await fetch(get);
        const html = await response.text();

        loadResult(html, brlCalculation, nomeEmpresa);
        innerHref();
    } catch (err) {
        console.log("Deu erro!");
    }
}

function loadResult(response, brlCalculation, nomeEmpresa) {
    const result = document.querySelector(".container");
    result.innerHTML = response;

    document.querySelector(".valorRecuperado").innerHTML = brlCalculation;
    document.querySelector(".spanEmpresa").innerHTML = nomeEmpresa;
    displaySaudacao.style.display = "block";
    displaySeguranca.style.display = "block";
    displayLogo.style.display = "block";
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

function innerHref() {
    const linkRecuperar = document.querySelector("#linkRecuperar");
    const comoRecuperar = document.querySelector(".valorRecuperado").innerHTML.replace("R$&nbsp;", "");
    linkRecuperar.href = `https://api.whatsapp.com/send?phone=5551997013861&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20como%20eu%20posso%20recuperar%20R$%20${comoRecuperar}%20de%20impostos`;
}