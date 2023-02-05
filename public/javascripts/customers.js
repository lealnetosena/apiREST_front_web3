/*
    Promise - fetch()
            |
          Pending
         /       \
    rejected   fulfilled
    catch()    then()
       */

function getAllCostumers() {
  console.log("=== CUSTOMER ==");

  const endpoint = `http://localhost:8080/customers`;

  const config = {
    method: "GET",
  };

  fetch(endpoint, config)
    .then( (res) => res.json())
        .then(function (customers) {
        document.querySelector("tbody").innerHTML = 
            
            customers
            .map(function(customers) {
                return `<tr>
                    <th scope="row">${customers.id}</th>
                    <td>${customers.name}</td>
                    <td>${customers.email}</td>
                    <td>${customers.cpf}</td>
                </tr>`
        
            }).join("")

        })
        .catch(() => console.log("deu errado"))
    .catch(() => console.log("deu errado"));
}
getAllCostumers();
