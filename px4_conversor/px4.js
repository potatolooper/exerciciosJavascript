/* 
	Código en JavaScript
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Estos son botones de conversores si quieres repetir recargas</h1>');

// varios caracteres entre comiñas forman unha cadea (string)

 // unha cadea detrás da outra co signo +
var n_uno = parseInt(prompt('Cantidad que quieras convertir'));

function longitud(n1){
	
	op1 = parseFloat(n1) / 1000;
	document.getElementById("cambiar").innerHTML = op1 + 'm';
	return op1;
}
function dinero(n1){
	op2 = parseFloat(n1) * 0.88;
	document.getElementById("cambiar").innerHTML = op2 + '€';
	return op2;
} 


function datos(n1){
	op3 = parseFloat(n1)* 1024;
	document.getElementById("cambiar").innerHTML = op3 + 'MB';
	return op3;
}

function tiempo(n1){
	op4 = parseFloat(n1) * 3600;
	document.getElementById("cambiar").innerHTML = op4 + 's';
	return op4;
}

// function paseando (n1) {
// 	alert('🚶🏼‍♀️ Paseando polo botón 🚶🏼‍♀️');
// }
// var metrazos = longitud(n_uno);

 // document.write('<button onclick="longitud(n_uno)">Km a m</button>');





/*	
	avaliamos o que introduce o usuario
*/
// var resposta = prompt('longitud(De Km a m),dinero(De $ a €),datos(De GB a MB) o tiempo(De h a s)');

// document.write('Con que  ' + resposta +  '<br>');

// switch(resposta)
// {
// 	case 'longitud':
// 	 var km1 = prompt('Tu distancia porfavor(Km)');
// 		longitud(km1);
// 		document.write(op1 + 'm');
// 		break;
// 	case 'dinero': 
// 		var dol = prompt('Tu dinero acá($)');
// 		dinero(dol);
// 			document.write(op2 + '€');
// 	break;
// 	case 'datos':
// 	var dat = prompt('Datos (GB)');
// 		datos(dat);
// 			document.write(op3 + 'MB');
// 	break;
// 	case 'tiempo':
// 	var time = prompt('Tu tiempesito (h)');
// 		tiempo(time);
// 			document.write(op4 + 's');
// 	break;
// 	default:
// 		document.write('SE EQUIVOCO USTED DE SITIO ☠');
// 	break;
// }; 

// document.write('<h6>Truquito: 📶 En Sublime Text: Edit/Emoji</h6>');

