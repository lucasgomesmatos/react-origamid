const precos = [
  "Crédito",
  "R$ 200",
  "R$ 400",
  "Contas Pagar",
  "R$ 300",
  "R$ 400",
  "Meus dados",
];

const precoFilter = precos.filter((preco) => {
  return preco.includes("R$");
});

const precoNumeros = precoFilter.map((preco) => {
  return Number(preco.replace("R$ ", ""));
});

const total = precoNumeros.reduce((ac, preco) => {
  return ac + preco;
})

console.log(total);
