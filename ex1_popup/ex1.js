/* 
	Código en JavaScript
	Nome do ficheiro: ex1.js
	Usado: prompt(), alert(),document.write(), confirm(), if-else
*/

// preguntamos un dato con prompt() e mostrámolo con alert()
var dato; //declaramos unha variable para gardar a resposta
dato = prompt('Dime tu nombre guapo?');
alert('Hola bro '+ dato);


// o navegador sabe HTML:
document.write('<img src="../logo.png" alt="Algo falla amego">');
document.write('<h1>Este es el principio de todo,el ex1.js</h1>'); // podemos inserir HTML
document.write('Veremos que podemos hacer con esto poco de programacion. '); //non fai caso dos saltos de liña
document.write('Por ejemplo para hacer un salto de pagina usamos lo mismo que usariamos en html <br>');
document.write('Y con la raya pasaria lo mismo <hr>');

// confirm() mostra cadro de diálogo OK ou Cancel:
var marchamos= confirm('Te queres ir a otro? ');

if(marchamos)
{
	document.write('<br> Hola de nuevo '+ dato);
} 
else 
{
	document.write('<br> Nah pero aca no hay mucho que hacer, '+ dato);
}