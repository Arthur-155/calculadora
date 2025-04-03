document.querySelectorAll('.btn, .btn-delete, .btn-zero, .btn-reset, .btn-reset, .btn-equal, .btn-multiplication, .btn-minus, .btn-sum').forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        const display = document.getElementById('displayContent');

        function somar(a, b) {
            return a + b;
        }

        function subtrair(a, b) {
            return a - b;
        }

        function multiplicar(a, b) {
            return a * b;
        }

        function dividir(a, b) {
            if (b === 0) {
                return "Erro vadia";
            } else {
                return a / b;
            }
        }


        function processarExpressao(expressao) {
            let resultado = 0;
            let operadores = null;
            let numeroAnterior = null;
            let numeros = "";
            expressao = expressao.replace(/x/g, '*');

            for (let i = 0; i < expressao.length; i++) {
                const caractere = expressao[i];
                if ("0123456789.".includes(caractere)) {
                    numeros += caractere;
                } else if ("+-*/".includes(caractere)) {
                    if (numeros !== "") {
                        const numAtual = parseFloat(numeros);
                        if (operadores === '+') {
                            resultado = somar(numeroAnterior, numAtual);
                        } else if (operadores === '-') {
                            resultado = subtrair(numeroAnterior, numAtual);
                        } else if (operadores === '*') {
                            resultado = multiplicar(numeroAnterior, numAtual);
                        } else if (operadores === '/') {
                            resultado = dividir(numeroAnterior, numAtual);
                        } else {
                            resultado = numAtual;
                        }
                    }
                        numeros = "";
                        operadores = caractere;
                        numeroAnterior = resultado;
                }
            }
            if (numeros !== "") {
                const numFinal = parseFloat(numeros);
                if (operadores === '+') {
                    resultado = somar(numeroAnterior, numFinal);
                    console.log(numFinal);
                    console.log(numeroAnterior);
                } else if (operadores === '-') {
                    resultado = subtrair(numeroAnterior, numFinal);
                } else if (operadores === '*') {
                    resultado = multiplicar(numeroAnterior, numFinal);
                } else if (operadores === '/') {
                    resultado = dividir(numeroAnterior, numFinal);
                } else {
                    resultado = numFinal;
                }
            }

            return resultado;
        }
        if (button.classList.contains("btn-equal")) {
            try {
                let expressao = display.textContent.trim();
                const resultado = processarExpressao(expressao);
                display.textContent = resultado;
            } catch (error) {
                display.textContent = 'nAn';
            }
        }
        else if (button.classList.contains("btn-reset")) {
            display.textContent = "";
        }
        else if (button.classList.contains("btn-delete")) {
            display.textContent = display.textContent.slice(0, -1);
        }
        else {
            display.textContent += buttonValue; 
        }
    });
});
