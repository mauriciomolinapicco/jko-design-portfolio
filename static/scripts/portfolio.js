/*document.querySelector('#externasBtn').addEventListener('click', function() {
    document.querySelector('#internas').style.display = 'none';
    document.querySelector('#externas').style.display = 'block';
})

document.querySelector('#internasBtn').addEventListener('click', function() {
    document.querySelector('#externas').style.display = 'none';
    document.querySelector('#internas').style.display = 'block';

})*/

const internas = document.getElementById("internas");
const externas = document.getElementById("externas");
const isometricas = document.getElementById("isometricas");

function resetButtons() {
    todasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    internasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    externasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
    isometricasBtn.classList.remove("bg-bege", "text-white", "border-none", "shadow-lg");
}


document.getElementById("todasBtn").addEventListener("click", function() {
    resetButtons();
    todasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "block";
    externas.style.display = "block";
    isometricas.style.display = "block";
})

document.getElementById("internasBtn").addEventListener("click", function() {
    resetButtons();
    internasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "block";
    externas.style.display = "none";
    isometricas.style.display = "none";
})

document.getElementById("externasBtn").addEventListener("click", function() {
    resetButtons();
    externasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "none";
    externas.style.display = "block";
    isometricas.style.display = "none";
})

document.getElementById("isometricasBtn").addEventListener("click", function() {
        resetButtons();
    isometricasBtn.classList.add("bg-bege", "text-white", "border-none", "shadow-lg");

    internas.style.display = "none";
    externas.style.display = "none";
    isometricas.style.display = "block";
})