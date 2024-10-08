// DIV
const divForms = document.querySelector('.divForms')
const divRealForms = document.querySelector('.divRealForms')
const divResult = document.querySelector('.divResult')

// INPUTS
const inputNumber = document.querySelector('#inputNumber')
const inputFrom = document.querySelector('#inputFrom')
const inputTo = document.querySelector('#inputTo')
const inputDontRepeat = document.querySelector('#inputDontRepeat')

// LABELS
const labelInputNumber = document.querySelector('#labelInputNumber')
const labelInputFrom = document.querySelector('#labelInputFrom')
const labelInputTo = document.querySelector('#labelInputTo')

function sortearNumeros() {
    
    if(inputNumber.value <= 0) return alert('É necessário sortear ao menos um número!')
    if(inputFrom.value >= inputTo.value) return alert('O intervalo precisa ser maior!')

    // PEGANDO VARIÁVEIS
    const labels = []
    const randomNumbers = []
    const max = inputFrom.value
    const min = inputTo.value

    const labelResult = document.createElement('label')
    labelResult.textContent = 'RESULTADO DO SORTEIO'
    labelResult.style.display = 'inline-block'
    divResult.appendChild(labelResult)

    for(let i = 0; i < inputNumber.value; i++) {

        labels[i] = document.createElement('label')        
        randomNumbers[i] = Math.abs(Math.round(Math.random() * (max - min) + min))

        if(inputDontRepeat.checked) {
            if(labels.includes(randomNumbers[i])) continue

            divRealForms.appendChild(labels[i])
            labels[i].textContent = randomNumbers[i]
            labels[i].style.color = '#E7DDFF'
            labels[i].style.fontSize = '1rem'
        }
        else {
            divRealForms.appendChild(labels[i])
            labels[i].textContent = randomNumbers[i]
            labels[i].style.color = '#E7DDFF'
            labels[i].style.fontSize = '1rem'
        }

    }

    inputNumber.remove()
    inputFrom.remove()
    inputTo.remove()

    labelInputNumber.remove()
    labelInputFrom.remove()
    labelInputTo.remove()
}
