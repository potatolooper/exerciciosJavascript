/* 
	Código en JavaScript
	Nome do ficheiro: ex3.js
	Usado: function
*/

/*	
	Función sen parámetros
*/
function saludar () {
	var dato='todos';
	alert('Moi boas a '+ dato);
}


// /*	
// 	Función á que lle pasamos un parámetro e fai o que lle pedimos
// */
function cotillear(algo) {
	document.write('<br> Que tal estás '+ algo);
}

/*	
	Función á que lle pasamos dous parámetros e devolve un valor
*/
function calcularMedia(n1,n2) {
	final=(n1+n2)/2;
	return final
}

function media(){
var notas = prompt('Nota practica');
var notap = prompt('Nota teorica');

	final=(parseInt(notas)+ parseInt(notap))/2;
	return final;


}

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h2>Ahora lo divertido</h2>');
document.write('<h1> FUNCIONES!!!!!!!</h1>')

document.write('Algunhas ya esta hechas por grandes personas: <code>alert(), prompt(), parseInt()</code> <br>');
document.write('Luego hay otras que estan en grupillos <i>Math</i> como <code>Math.random(), Math.round()</code> <br>');
document.write('<hr>Lo mejor es que nosotros podemos hacer las nuestras propias y llamarlas como queramos: <code>saudar(), cotillear(), calcularMedia()</code><br>');
document.write('Y este es el resultado de alguna de ellas  <hr>');


//chamada á función saudar()
saludar();
document.write('Por ejemplo una de las preguntas que te hizo la pregunta al principio fue la funcion de saludar<hr>')

document.write('Esta funcion te muestra que se pueden usar con distintos valores <code>cotillear()</code><br>');
cotillear('Rosa');
cotillear('Carlos');
cotillear('Pedro');

media();
document.write('<hr>Te acuerdas la otra pregunta pues era esta funcion <code>calcularMedia()</code>');
document.write('<br> A túa nota final é... '+ final);



