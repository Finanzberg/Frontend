send("GET", "data/saldo", {}, function(response, status){
    const data = JSON.parse(response)
    createChart(data.labels, data.data)
})

function createChart(labels, amounts) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // or 'line', 'pie', etc.
        data: {
            labels: labels,
            datasets: [{
                label: 'Amounts',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
