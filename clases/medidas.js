//a=0;b=0;
function Calcular(temp) {
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([cCkKfF])/;
  var m = temp.match(regexp);
  if (m) {
    var num = m[1];
    num = parseFloat(num);
    var tipo = m[2];

    this.n1 = num;
    this.n2 = tipo;

  }

}
Calcular.prototype.n1 = 0; //propiedad numero 1
Calcular.prototype.n2 = 0; //propiedad numero 2

function ConvertirCelsius() { //función para crear método convertir celsius
  var solucion;
  if (this.n2 == 'c' || this.n2 == 'C'){
    solucion = this.n1;
  }
  else if (this.n2 == 'f' || this.n2 == 'F'){
    solucion = (this.n1 - 32)*5/9;
  }
  else if (this.n2 == 'k' || this.n2 == 'K'){
    solucion = (this.n1*1) - 273.15
  }
  return solucion;
}
Calcular.prototype.ConvertirCelsius = ConvertirCelsius //crear método a partir de la función.

function Celsius(input, output){ // función que muestra el resultado para Celsius
  var numeros = new Calcular(input) //llamada a la función que crea un objeto concreto.
  var result = numeros.ConvertirCelsius(); //aplicar método
  var operacion = "Resultado: "; //texto para pantalla
  escribir(output, operacion + result); //función que escribe el resultado en pantalla.
}

function ConvertirFahrenheit() {
  var solucion;
  if (this.n2 == 'c' || this.n2 == 'C'){
    solucion = (this.n1 * 9/5)+32;
    return solucion;
  }
  else if (this.n2 == 'f' || this.n2 == 'F'){
    solucion = this.n1;
  }
  else if (this.n2 == 'k' || this.n2 == 'K'){
    solucion = (1.8*(this.n1 - 273))+32;
  }
  return solucion;


}
Calcular.prototype.ConvertirFahrenheit = ConvertirFahrenheit
function Fahrenheit(input, output) {
  var numeros = new Calcular(input);
  var result = numeros.ConvertirFahrenheit();
  var operacion = "Resultado: ";
  escribir(output, operacion + result);
}



function ConvertirKelvin() {
  var solucion;
  if (this.n2 == 'c' || this.n2 == 'C'){
    solucion = (this.n1*1)+273.15;
    return solucion;
  }
  else if (this.n2 == 'f' || this.n2 == 'F'){
    solucion = (this.n1*1 + 459.67) / 1.8;
  }
  else if (this.n2 == 'k' || this.n2 == 'K'){
    solucion = this.n1;
  }
  return solucion;

}
Calcular.prototype.ConvertirKelvin = ConvertirKelvin
function Kelvin(input, output) {
  var numeros = new Calcular(input);
  var result = numeros.ConvertirKelvin();
  escribir(output, ("Resultado: " + result));
}


function escribir(output, result) { //escribir resultados en el documento.
  output.innerHTML = result
}
