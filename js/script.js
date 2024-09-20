const primeiroNome = document.getElementById("primeiro_nome")
const ultimoNome = document.getElementById("ultimo_nome")
const email = document.getElementById("email")
const website = document.getElementById("website")
const message = document.getElementById("message")

const objData = []

const handleSubmit = addEventListener("submit", function(event) {
    event.preventDefault()

    const payload = {
        primeiro_nome: primeiroNome.value,
        ultimo_nome: ultimoNome.value,
        emails: email.value,
        websites: website.value,
        messages: message.value
    }
    
    objData.push(payload)

    this.localStorage.setItem("data", JSON.stringify(objData))
})

window.addEventListener("load", function() {
    const obterData = JSON.parse(this.localStorage.getItem("data"))

    if(!obterData) {
        return console.log("Sem dados")
    }

    console.log(obterData)
})