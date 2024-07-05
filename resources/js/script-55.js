var myChart; 
var maxVisitas = 10000; 
var intervaloActualizacion = 3 * 1000; 

function getTotalVisitas() {
  return parseInt(localStorage.getItem('totalVisitas')) || 0;
}

function reiniciarGrafica() {
  localStorage.setItem('totalVisitas', 0);
  actualizarGrafico();
}

function simularFluctuacion(visitas) {
  return visitas + Math.floor(Math.random() * 11) - 5;
}

function actualizarGrafico() {
  var totalVisitas = getTotalVisitas();
  var visitasAnteriores = [];

  for (var i = 0; i < totalVisitas; i++) {
    if (i === 0) {
      visitasAnteriores.push(20); 
    } else {
      var visitasAnterioresDiaAnterior = visitasAnteriores[i - 1];
      visitasAnteriores.push(simularFluctuacion(visitasAnterioresDiaAnterior));
    }
  }

  var data = {
    labels: Array.from({ length: totalVisitas }, (_, index) => 'Visita ' + (index + 1)),
    datasets: [{
      label: 'Visitas',
      data: visitasAnteriores,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      pointRadius: 0 
    }]
  };

  var options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10 
        }
      }
    }
  };

  var ctx = document.getElementById('myChart').getContext('2d');

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: 'line', 
    data: data,
    options: options
  });
}

function avanzarVisita() {
  var totalVisitas = getTotalVisitas();
  if (totalVisitas >= maxVisitas) {
    reiniciarGrafica();
  } else {
    var nuevasVisitas = simularFluctuacion(totalVisitas + 1);
    localStorage.setItem('totalVisitas', nuevasVisitas);
    actualizarGrafico();
  }
}

actualizarGrafico();
setInterval(avanzarVisita, intervaloActualizacion); 

window.onbeforeunload = function() {
  localStorage.setItem('totalVisitas', getTotalVisitas());
};
