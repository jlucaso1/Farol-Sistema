var farolVermelho = document.getElementById("farolVermelho")
var farolAmarelo = document.getElementById("farolAmarelo")
var farolVerde = document.getElementById("farolVerde")

var btnVermelho = document.getElementById("btnVermelho")
var btnAmarelo = document.getElementById("btnAmarelo")
var btnVerde = document.getElementById("btnVerde")

btnVermelho.addEventListener("click", function ligarFarol() {
    farolVermelho.classList.toggle("cor-vermelha")
}) 