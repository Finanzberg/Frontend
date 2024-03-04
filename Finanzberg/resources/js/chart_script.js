send("GET", "data/saldo", {}, function(response, status){
    const data = JSON.parse(response)
    createChart(data.labels, data.data)
})

const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Value'
          },
          suggestedMin: -10,
          suggestedMax: 200
        }
      }
    },
  };

function createChart(labels, amounts) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx,config);
}
