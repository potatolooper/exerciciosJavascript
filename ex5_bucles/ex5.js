// /* 
// 	Código en JavaScript
// 	Nome do ficheiro: ex5.js
// 	Usado: for, while
// */
//	Imaxe corporativa 🤦🏼‍♀️
/*
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h1> Páxina de bucles </h1>')

/*	
	bucle WHILE
*/
document.write('<h2> Bucle WHILE</h2>');

//exercicio 1
document.write('<h3>💠 Aprendamos a contar</h3>');
numerito = 0;
while (numerito <=5){
	document.write(numerito + ' ');
	numerito++;
}

//exercicio 2
document.write('<h3>💠 Comida </h3>');
var comida = 'Rico rico :';
while (comida != 'stop') {
	document.write(comida+ ' ');
	comida  = prompt('Que te apetece comer?(stop para parar)');
}


/*	
	Bucle FOR
*/
document.write('<h2> Bucle FOR</h2>');

//exercicio 1
document.write('<h3>💠 Facer algo cinco veces</h3>');
for (var i=1; i<= 5; i++) {
	document.write('Salta ');
}
document.write('<br> Ya tah<br>')
//exercicio 2
document.write('<h3>💠 Con temos con FOR 10</h3>');
for (var i=0; i<= 10; i++) {
	document.write(i +', ');
}

//exercicio 3
document.write('<h3>💠Ahora hasta 44 pero de 5 en 5 y empenzando en 10</h3>');
for (var i=10; i<= 44; i=i+5) {
	document.write(i +', ');
}

//exercicio 4
document.write('<h3>💠 Cansionsita pegadiza</h3>');
for (var i=2; i<= 10; i++) {
	document.write(i +' 🐘 se balanceaban sobre la tela... ');
}

document.write('<br> <hr> <h2>Experimentos con el for y los bucles</h2>')

for (var pato=-7;pato<=777;pato=pato+100) {
	document.write(pato+'| ');
}