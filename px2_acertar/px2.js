/* 
	Código en JavaScript
	Nome do ficheiro: ex2.js
	Usado: parseInt(), Math.random(), Math.round()
	*/

	document.write('<img src="../logo.png" alt="Algo falla no logo">');

// xenera un número aleatorio menor ca 1
var misterio = Math.random();

// o número será menor ca 10
misterio = misterio*10;

//redondeo para non ter decimais
misterio = Math.round(misterio);

document.write(misterio);

var escolle = prompt('Cual sera el numero entre 0 y 10? ');

if (escolle == misterio)
{
	document.write(' Asertaste wey ');

}
else if (escolle > misterio) 
{

	alert ('Era menor');

// alert ('Era  ' + misterio + '  te equivacaste');

}
else if (escolle < misterio)
{
	alert ('Era mayor')
};

var limitado = 0;
var continuar = confirm('Te apetecere repetir?');

if (continuar) {
	do {limitado++}

while(limitado != 3){
		
		
	while (escolle != misterio){
	escolle = prompt('Nuevo numero');
			
		document.write(limitado + 'Numero de veces');
	
}
	
	}

	document.write(' Acertaste');

}
else
{
	document.write('Adios');
};

	// while (limitado = 3){
	// limitado++;	
	// } 