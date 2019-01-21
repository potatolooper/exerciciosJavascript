/* 
	Código en JavaScript
	Nome do ficheiro: ex4.js
	Usado: switch(), case, break, default
*/
/*	
	Imaxe corporativa 🤦🏼‍♀️
*/
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1>Traballamos con condicionales</h1>');

// varios caracteres entre comiñas forman unha cadea (string)
var resposta = prompt('Nacionalidad? 🌍');
document.write('Con que  ' + resposta +  '<br>'); // unha cadea detrás da outra co signo +

/*	
	avaliamos o que introduce o usuario
*/

switch(resposta)
{
	case 'Española':
	case 'española':
		document.write('POR SUPOSTO 😆 ARRIBA ESPAÑA');
		break;
	case 'Portugues':
	case 'portugues':
		document.write('Pobre 🍶');
	break;
	case 'Estadounidense':
	case 'estadounidense':
		document.write('⚒ VIVA EL TIO SAM');
	break;
	default:
		document.write('SE EQUIVOCO USTED DE SITIO ☠');
	break;
}; 

document.write('<h6>Truquito: 📶 En Sublime Text: Edit/Emoji</h6>');