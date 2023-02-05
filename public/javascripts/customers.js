

function getAllCostumers(){
    console.log("=== CUSTOMER ==")

    const endpoint = `http://localhost:8080/customers`;

    const config = {
        method: "GET"
    }

    fetch(endpoint,config)
}
getAllCostumers()
