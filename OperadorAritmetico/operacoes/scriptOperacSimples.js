function Somar() {
    let operador1 = window.document.getElementById('operadorUm')
    let operador2 = window.document.getElementById('operadorDois')
    let res = window.document.getElementById('resultado')
    let somando1 = Number(operador1.value)
    let somando2 = Number(operador2.value) 
    let somaFinal = somando1 + somando2
    res.innerHTML = `A soma entre ${somando1} e ${somando2} é igual a <strong>${somaFinal}</strong>`
}

function Subtrair() {
    let operador1 = window.document.getElementById('operadorUm')
    let operador2 = window.document.getElementById('operadorDois')
    let res = window.document.getElementById('resultado')
    let subtraindo1 = Number(operador1.value)
    let subtraindo2 = Number(operador2.value)
    let subtracaoFinal = subtraindo1 - subtraindo2
    res.innerHTML = `A subtração entre ${subtraindo1} e ${subtraindo2} é igual <strong>${subtracaoFinal}</strong>`
}

function Multiplicar() {
    let operador1 = window.document.getElementById('operadorUm')
    let operador2 = window.document.getElementById('operadorDois')
    let res = window.document.getElementById('resultado')
    let multi1 = Number(operador1.value)
    let multi2 = Number(operador2.value)
    let multiFinal = multi1 * multi2
    res.innerHTML = `A multiplicação entre ${multi1} e ${multi2} é igual a <strong>${multiFinal}</strong>`
}

function Dividir() {
    let operador1 = window.document.getElementById('operadorUm')
    let operador2 = window.document.getElementById('operadorDois')
    let res = window.document.getElementById('resultado')
        if(operador2.value == 0 || undefined){
            res.innerHTML = `Não é possível dividir um número por 0`
        }else{
            let divisor1 = Number(operador1.value)
            let divisor2 = Number(operador2.value)
            let divisaoFinal = divisor1/divisor2
            res.innerHTML = `A divisão entre ${divisor1} e ${divisor2} é igual a ${divisaoFinal}`
        }
}