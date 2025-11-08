const healthElement = document.querySelector(".stats p:nth-child(3)")
const levelElement = document.querySelector(".stats p:nth-child(2)")
const attackButton = document.querySelector(".buttons button:nth-child(1)")
const levelButton = document.querySelector(".buttons button:nth-child(2)")

let health=100
let level=5

attackButton.addEventListener("click", ()=>{
     if (health > 0){
        health -= 20
     }

     if (health == 0){
        health = 0
     }

     healthElement.textContent = `Health: ${health}`
})

levelButton.addEventListener('click', ()=>{
   level += 1
   levelElement.textContent = `Level: ${level}`
})
