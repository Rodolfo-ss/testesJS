
const input = document.querySelector('#input')
const p = document.createElement('p')
const form = document.querySelector('form')

input.addEventListener('submit', event => {
    event.preventDefault()
    const regex = /[a-zA-Z]{4,}/ 
    const valueInput = event.target.cor.value

    console.log(valueInput);

    if(regex.test(valueInput)){
        p.insertAdjacentElement('afterend', p)
        p.textContent = 'não válido'
    }

})


