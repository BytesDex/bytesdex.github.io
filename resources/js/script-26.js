  var operando1 = '';
  var operando2 = '';
  var operacionActual = '';

  function agregarNumero(numero) {
    if (operacionActual === '') {
      operando1 += numero;
      actualizarDisplay(operando1);
    } else {
      operando2 += numero;
      actualizarDisplay(operando2);
    }
  }

  function agregarDecimal() {
    if (operacionActual === '') {
      if (!operando1.includes('.')) {
        operando1 += '.';
        actualizarDisplay(operando1);
      }
    } else {
      if (!operando2.includes('.')) {
        operando2 += '.';
        actualizarDisplay(operando2);
      }
    }
  }

  function operacion(operador) {
    if (operando1 !== '') {
      operacionActual = operador;
      actualizarDisplay(operando1 + ' ' + operacionActual);
    }
  }

  function calcular() {
    var resultado = '';
    var num1 = parseFloat(operando1);
    var num2 = parseFloat(operando2);

    switch (operacionActual) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '×':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = 'Error';
        }
        break;
    }

    actualizarDisplay(resultado, 'white');
    operando1 = resultado.toString();
    operando2 = '';
    operacionActual = '';
  }

  function limpiar() {
    operando1 = '';
    operando2 = '';
    operacionActual = '';
    actualizarDisplay('');
  }

  function actualizarDisplay(valor, color) {
    var display = document.getElementById('display');
    display.value = valor;
    display.style.color = color;
  }
