

document.querySelectorAll('.btn, .btn-delete, .btn-zero, .btn-reset, .btn-reset, .btn-equal, .btn-multiplication, .btn-minus, .btn-sum').forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        const display = document.getElementById('displayContent');
        display.textContent += buttonValue;

        if (button.classList.contains('btn-equal')) {
            try {
                const expressao = display.textContent.replace(/x/g, '*');
                display.textContent = eval(expressao); 
                const resultado = eval(expressao);
                console.log("v1",resultado);
            } catch {
                display.textContent = 'nAn';
            }
        } else if (button.classList.contains('btn-reset')) {
            display.textContent = ""; 
        } else if (button.classList.contains('btn-delete')) {
            display.textContent = display.textContent.slice(0, -4);
        }
    });
    
});
