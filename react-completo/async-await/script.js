async function produtos (url) {
  const response = await (await fetch(url)).json()
  return response;
}


const produtosList = produtos("https://ranekapi.origamid.dev/json/api/produto").then(response => console.log(response))



