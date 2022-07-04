function handleMouseMove({clientX, clientY}) {
  console.log(clientX, clientY)
}

// document.documentElement.addEventListener("mousemove", handleMouseMove);

const frutas = ["banana", "maçã", "uva"];

const frutaToUpperCase = frutas.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutaToUpperCase);


const items = document.querySelectorAll("li");

const elements = [...items].map(item => {
  return item
})



console.log(elements)

class Transporte {
  constructor() {
    this.transporte = true;
  }
}

class Carro extends Transporte {
  constructor(cor, rodas) {
    super();
    this.cor = cor;
    this.rodas = rodas;
  }
}


const carro = new Carro("preto", 4);
const cloneCarro = {...carro}

console.log(carro);
console.log(cloneCarro);