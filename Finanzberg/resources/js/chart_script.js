send("GET", "data/saldo", {}, function(response, status){
    const data = JSON.parse(response)
    let dates = [];
    data.labels.forEach((value) => { // Only one graph is needed for the labels
        let date = new Date(value * 1000)
        let name = date.toLocaleDateString() + " " + date.toLocaleTimeString()
        dates.push(name)
    })
    createChart(data.dates, data.data)
})



function createChart(labels, amounts) {
    const ctx = document.getElementById('myChart').getContext('2d');
    const config = {
        type: 'line',
        data:{
            labels: labels,
            datasets: [
                {
                    label: "Saldo", 
                    data: amounts
                }
            ]
        },
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
    new Chart(ctx,config)
}
