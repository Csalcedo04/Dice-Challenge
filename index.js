// variables
// generador de numero aleatorios para la imagen 1 
var  randomNumber1 = Math.floor((Math.random()*6) + 1);
// generador de numero aleatorios para la imagen 2 
var  randomNumber2 = Math.floor((Math.random()*6) + 1);
//vaible de la direccion de la imagen1 - sugeto al cambio de la variable randomNumber
var randomdiceimg ="images/dice"+randomNumber1+".png";
//vaible de la direccion de la imagen2 - sugeto al cambio de la variable randomNumber
var randomdiceimg2 ="images/dice"+randomNumber2+".png";
//seleccion de la imagen1
var image1 = document.querySelectorAll("img")[0];
//seleccion de la imagen2
var image2 = document.querySelectorAll("img")[1];
//se cambia la direccion de la imagen 1
image1.setAttribute("src", randomdiceimg);
//se cambia la direccion de la imagen 2
image2.setAttribute("src",randomdiceimg2)
// Condiones para determinar el ganador o empate - cambiando el texto de la etiqueta h1
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Player 1 Wins!"
} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= "Player 2 Wins! 🚩"
}else{
    document.querySelector("h1").innerHTML= "Draw"
}
