a=0;b=0;
function Calcular() {
         }
Calcular.prototype.n1 = a; //propiedad numero 1
Calcular.prototype.n2 = b; //propiedad numero 2
function ConvertirCelsius() { //función para crear método convertir celsius
          if (num2 == 'c' || num2 == 'C'){
        	 solucion = this.n1;        	 
		  }
		  else if (num2 == 'f' || num2 == 'F'){
        	 solucion = (this.n1 - 32)*5/9;       	 
		  }
		  else if (num2 == 'k' || num2 == 'K'){
        	 solucion = (this.n1*1) - 273.15       	 
		  }
		  return solucion;
}
Calcular.prototype.ConvertirCelsius = ConvertirCelsius //crear método a partir de la función.
function Celsius(){ // función que muestra el resultado para Celsius
         instanciar(); //llamada a la función que crea un objeto concreto.
         result = numeros.ConvertirCelsius(); //aplicar método
         operacion = "Resultado: "; //texto para pantalla
         escribir(); //función que escribe el resultado en pantalla.
         }
		 
		 
function ConvertirFahrenheit() { 
		if (num2 == 'c' || num2 == 'C'){
					 solucion = (this.n1 * 9/5)+32;  
					 return solucion;      	 
		}
		 else if (num2 == 'f' || num2 == 'F'){
        	 solucion = this.n1;       	 
		  }
		 else if (num2 == 'k' || num2 == 'K'){
        	 solucion = (1.8*(this.n1 - 273))+32;   	 
		  }
		  return solucion;
         
				  
}        
Calcular.prototype.ConvertirFahrenheit = ConvertirFahrenheit 
function Fahrenheit() { 
         instanciar();
         result = numeros.ConvertirFahrenheit();
         operacion = "Area del círculo: ";
         escribir();
}
		 
		 
		 
function ConvertirKelvin() { 
		if (num2 == 'c' || num2 == 'C'){
					 solucion = (this.n1*1)+273.15;
					 return solucion;      	 
		}
		  else if (num2 == 'f' || num2 == 'F'){
        	 solucion = (this.n1*1 + 459.67) / 1.8;  	 
		  }
		  else if (num2 == 'k' || num2 == 'K'){
        	 solucion = this.n1;       	 
		  }
		  return solucion;
				  
}
Calcular.prototype.ConvertirKelvin = ConvertirKelvin 
function Kelvin() {
         instanciar()
         result = numeros.ConvertirKelvin()
         operacion = "Area del triángulo: "
         escribir()
}
		 
		 
		 
function instanciar(){ //función que crea un objeto y asigna valores a las propiedades.
         num1 = document.calcular.num1.value
         num2 = document.calcular.num2.value
         numeros = new Calcular()
         numeros.n1 = num1
         numeros.n2 = num2
         return numeros
}		 
function escribir() { //escribir resultados en el documento.
         texto = document.getElementById("respuesta")
         texto.innerHTML = operacion +  result
}