function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n \n 1 - Soma ( + )\n 2 - Subtração ( - )\n 3 - Multiplicação ( * ) \n 4 - Divisão Real ( / ) \n 5 - Divisão Inteira ( % ) \n 6 - Potenciação ( ** )'));

    // Verificar se a operação é valida
    if (!operacao || operacao >= 7) {
        alert('Erro - operação inválida!');
        calculadora();
    } else {

        // Variaveis
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        // Verificar se variavel é valida
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!')
            calculadora();
        } else {
            // Funções das operações 
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            // Mais de uma operaçao
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação? \n 1 - Sim \n 2 - Não');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('Digite uma das opções!')
                    novaOperacao();
                }
            }
        }


        // Verificação
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoReal();
        } else if (operacao == 5) {
            divisaoInteira();
        } else if (operacao == 6) {
            potenciacao();
        }
    }
}


calculadora();