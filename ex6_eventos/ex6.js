/* 
	Código en JavaScript
	Nome do ficheiro: ex6.js
	Usados os eventos: onclick, onload, onmouseover
*/

/*	
	Definimos funcións ás que chaman os eventos
*/

function arrancamos () {
	alert('Buenos dias');
}

function premerBoton () {
	alert('Auu💥💥 ');
	document.write('Pues ahora no te dejo volver')
}

function paseando () {
	alert('BUUUUUUUUUUU👻👻👻');
}

/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Programación orientada a eventos </h1>');

/*	
	Creamos botóns que respondan a eventos, no .html ou aquí mesmo
*/
document.write('<h3>Lembramos aquelo dos formularios e dos botóns </h3>');
document.write('<button onclick="premerBoton()">Fai clic aquí </button>');
