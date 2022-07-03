// const upperName = (name) => name.toUpperCase();
// console.log(upperName("Lucas"))

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = "active"
  }

  addActiveEvent() {
    this.menuElement.addEventListener("click", (event) =>{
      event.target.classList.toggle(this.activeClass)
    })
  }
}


const menu = new Menu(".principal");
menu.addActiveEvent();

console.log(menu)