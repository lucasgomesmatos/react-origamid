async function produtos (url) {
  const response = await fetch(url)
  const json = await response.json()
  return json;
}



const produtosList = produtos("https://ranekapi.origamid.dev/json/api/produto").then(response => {
  console.log(response)
})

data = {
  nome: "Lucas Gomes",
  email: "lgomes.lg99@gmail.com",
  senha: "123",
  cep: "39817000",
  rua: "rua goias",
  numero: "310",
  bairro: "centro",
  cidade: "Novo",
  estado: "Minas Gerais",
}

fetch("https://ranekapi.origamid.dev/json/api/usuario", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(data)
  
})
