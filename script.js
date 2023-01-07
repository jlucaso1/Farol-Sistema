var farolVermelho = document.getElementById("farolVermelho")
var farolAmarelo = document.getElementById("farolAmarelo")
var farolVerde = document.getElementById("farolVerde")

var btnVermelho = document.getElementById("btnVermelho")
var btnAmarelo = document.getElementById("btnAmarelo")
var btnVerde = document.getElementById("btnVerde")

btnVermelho.addEventListener("click", function ligarFarol() {
    farolVermelho.classList.toggle("cor-vermelha")
    farolAmarelo.classList.remove("cor-amarela")
    farolVerde.classList.remove("cor-verde")
})

btnAmarelo.addEventListener("click", function ligarFarol() {
    farolAmarelo.classList.toggle("cor-amarela")
    farolVermelho.classList.remove("cor-vermelha")
    farolVerde.classList.remove("cor-verde")

})
btnVerde.addEventListener("click", function ligarFarol() {
    farolVerde.classList.toggle("cor-verde")
    farolAmarelo.classList.remove("cor-amarela")
    farolVermelho.classList.remove("cor-vermelha")
})