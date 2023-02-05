console.log("Cadastro")

// Recuperar o botão no HTML
const btnCadastrar = document.querySelector("button")

// Atribuir um envonto ao botão
btnCadastrar.onclick = () => { 
    console.log("cliquei") 
    const fields = document.querySelectorAll("input")

    const data = {} 

    fields.forEach((fields) => {
        console.log(fields.id, fields.value)

        data[fields.id] = fields.value
        
    })
    console.log(data)

    const endpoint = 'http://localhost:8080/customers'

    const config = {
        method : 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            "content-type": "application/json"
        })


    }
    fetch(endpoint, config)
    .then((res) => {
        if(res.ok) location.href = "/customers"
    })
    .catch(() => console.error("FALHA AO CADASTRAR"))
}
