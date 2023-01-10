const minu = document.getElementById("minu");
const action = document.getElementById("action");

minu.addEventListener("click", () =>{
    hundlemenu();
});

function hundlemenu() {
    minu .classList.toggle("is-active");
    action .classList.toggle("is-active");
}