function handleMouseMove({clientX, clientY}) {
  console.log(clientX, clientY)
}

document.documentElement.addEventListener("mousemove", handleMouseMove);

const frutas = ["banana", "maçã", "uva"];

const frutaToUpperCase = frutas.map((fruta) => {
  return fruta.toUpperCase();
});

console.log(frutaToUpperCase);