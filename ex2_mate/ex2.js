/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
*/

document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Una pagina de matematicas</h1>')

// as variables decláranse
var num1; 
var num2;

// pregunto o valor ó usuario; Javscript considéraos caracteres, non números
num1 = prompt('Cuanto es el primer numero? ');
num2 = prompt('Y el segundo número? ');

// convertimos a números
var solucionado = parseInt(num1)+parseInt(num2);
document.write('La suma da esto '+ solucionado);

// fallos nos cálculos
var num3 = 0;
document.write('<br> Esto es lo que pasa cuando dividimos entre cero que da pues esto:'+ num1/num3); // opsssss


document.write('<hr><h3>Ahora a inventar numeros</h3>');

var misterio = Math.random();
document.write('<br>Los numero generados siempre son menores que 1: '+ misterio);

//olliño con este truquito para non crear máis variables
misterio = 10*misterio;
document.write('<br>Eso se puede solucionar multiplicandolos por 10: '+ misterio);

//olliño con este truquito para non crear máis variables (outra vez)
misterio = Math.round(misterio)
document.write('<br> Y tambien redondearlos para quitar esos molestos decimales '+ misterio);