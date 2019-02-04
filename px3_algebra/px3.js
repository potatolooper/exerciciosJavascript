/* 
	Código en JavaScript
	Nome do ficheiro: ex5.js
	Suma,resta y multiplicaciones
	*/


	function suma(num1,num2){
		var sumada= parseInt(num1) + parseInt(num2); 
		alert('El resultado de la suma es ' + sumada);
		document.write('Suma' + sumada +  '<br>');
	}


	function resta(num1,num2){

		var restota = parseInt(num1) - parseInt(num2);
		alert('El resultado de la resta es ' + restota);
		document.write('Resta' + restota +  '<br>')
	}


	function multi(num1,num2){

		var multiplicasion = parseInt(num1) * parseInt(num2);
		alert('El resultado de la multiplicacion es ' + multiplicasion);
		document.write('Multiplicación' + multiplicasion + '<br>' )
	}

	function division(num1,num2){
		var divit = parseInt(num1) * parseInt(num2);
		alert('El resultado de la multiplicacion es ' + multiplicasion);
		document.write('Multiplicación' + multiplicasion + '<br>' )
	}
		// suma(num1,num2);
		// resta(num1,num2);
		// multi(num1,num2);

		var agin = 1;
		while (agin) {
			var num1 = prompt('Numero primario')
			var num2 = prompt('Numero secundario')
			suma(num1,num2);
			resta(num1,num2);
			multi(num1,num2);


			agin = confirm ('Te apetece repetir?');
		} 

/*	
	
*/
