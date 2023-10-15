let contador = 0;


//selecionar valor
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('diminuir')) {
            contador--;
        }
        else if (styles.contains('aumentar')){
            contador++;
        }
        else{
            contador = 0;
        }

        if (contador > 0){
            value.style.color = 'green';
        }
        if(contador < 0){
            value.style.color = 'red'
        }

        if(contador === 0) {
            value.style.color = '#222';
        }
        value.textContent = contador;
    });
});