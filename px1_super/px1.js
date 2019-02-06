/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Usado: 
*/
alert('Productos: 1-Mandarinas(5€),2-Bolis(2€),3-Carton(12€),4-Cuerda(27€)')
var pro1;
pro1 = prompt('Codigo del primer producto');
var pro2;
pro2 = prompt('Codigo del segundo producto');
var pro3;
pro3 = prompt('Codigo del tercer producto');
var Mandarina;
Mandarina = 5;
var Boli;
Boli = 2;
var Cartones;
Cartones = 12;
var Cuerdas;
Cuerdas = 27;


/*
-----------------------------------------------
	Cosas a escribir
*/
document.write('<h1>Super Manolito</h1>');
document.write('<img src="../logo.png" alt="Algo falla no logo">');
document.write('<h2>Tu supermercado de confianza</h2>');

var obj1;

 if (pro1 < 2) {
	document.write('<br> Producto uno Mandarina <br>' + Mandarina + '€');
	obj1 = Mandarina;

}

else if (pro1 <= 2) {
		document.write('<br> Producto uno Boli <br>'  + Boli + '€');
		obj1 = Boli;
	}

	else if (pro1 <= 3) {
				document.write('<br> Producto uno Cartones <br>' + Cartones + '€');
				obj1 = Cartones;

		}
		else if (pro1 = 4) {
						document.write('<br> Producto uno Cuerdas <br>' + Cuerdas + '€');
						obj1 = Cuerdas;
			}

document.write('<hr>');
var obj2;

 if (pro2 < 2) {
	document.write('<br> Producto dos Mandarina <br>' + Mandarina + '€');
	obj2 = Mandarina;

}

else if (pro2 <= 2) {
		document.write('<br> Producto dos Boli <br>'  + Boli + '€');
		obj2 = Boli;
	}

	else if (pro2 <= 3) {
				document.write('<br> Producto dos Cartones <br>' + Cartones + '€');
				obj2 = Cartones;

		}
		else if (pro2 = 4) {
						document.write('<br> Producto dos Cuerdas <br>' + Cuerdas + '€');
						obj2 = Cuerdas;
			}

document.write('<hr>');
var obj3;

 if (pro3 < 2) {
	document.write('<br> Producto tres Mandarina <br>' + Mandarina+ '€');
	obj3 = Mandarina;

}

else if (pro3 <= 2) {
		document.write('<br> Producto tres Boli <br>'  + Boli + '€');
		obj3 = Boli;
	}

	else if (pro3 <= 3) {
				document.write('<br> Producto tres Cartones <br>' + Cartones + '€');
				obj3 = Cartones;

		}
		else if (pro3 = 4) {
						document.write('<br> Producto tres Cuerdas <br>' + Cuerdas + '€');
						obj3 = Cuerdas;
			}

document.write('<hr>');
var Resultado;
Resultado = obj2+obj3+obj1;
document.write('Resultado Sin Iva' + '     ' + Resultado + '€' +'<br>');

document.write('<hr>');

var Resiltadiva;
Resiltadiva= ((Resultado*21)/100) + Resultado;
document.write('Resultado con Iva' + '    ' + Resiltadiva.toFixed(2) + '€');
