export default async function produtos(url) {
  const produtos = await (await fetch(url)).json();

  const resultado = document.querySelector(".resultado");

  const produtosText = [...produtos];

  produtosText.forEach(produto => {
    resultado.innerHTML += `<p> <img src="${produto.fotos[0].src}"> <br> <strong>Nome:</strong> ${produto.nome} <br> <strong>Preço:</strong>  ${produto.preco}</p>`
  }) 
  console.log(produtos)
}