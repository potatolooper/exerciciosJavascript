/* 
	Código en JavaScript
	Nome do ficheiro: ex9.js
	Usado: getElementById(), innerHTML
	*/

/*	
	Este ficheiro só contén as funcións. Todo o demáis está no .html
	*/


//https://developer.mozilla.org/es/docs/Web/API/Document/getElementById
function cambiarCor(colorin) {
	var letras = document.getElementById('textito');
	letras.style.color = colorin;
}

function procesarDatos(){
	var aa;
	var nn;
	aa = parseInt(document.getElementById('apelido').value);
	nn =parseInt(document.getElementById('nome').value);
	alert('Boom'+ '' + nn + aa);
}

//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_innerhtml
function cambiarTexto() {
	document.getElementById("parrafada").innerHTML = "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||";
}

function consultarHora() {
	var agora=Date();
	document.getElementById("hora").innerHTML = agora;
}

function sumar(){
	
}
document.write('<button ondblclick="">Romper la pagina</button>')