const zoomOptions = {
    pan: {
        enabled: true,
        mode: 'x',
        modifierKey: 'ctrl',
    },
    zoom: {
        wheel: {
            enabled: true,
            modifierKey: 'shift'
        },
        drag: {
            enabled: true,
        },
        pinch: {
            enabled: true
        },
        mode: 'x',
    }
};

send("GET", "data/saldo", {}, function (response, status) {
    const data = JSON.parse(response)
    let dates = [];
    data.labels.forEach((value) => { // Only one graph is needed for the labels
        let date = new Date(value * 1000)
        let name = date.toLocaleDateString() + " " + date.toLocaleTimeString()
        dates.push(name)
    })
    createChart(dates, data.data)
})


function createChart(labels, amounts) {
    const ctx = document.getElementById('myChart').getContext('2d');
    console.log(amounts)
    let chart;
    const config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Saldo",
                    data: amounts,
                    borderWidth: 1,
                    cubicInterpolationMode: 'monotone',
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: document.defaultView.innerWidth / 200
                    }
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Chart.js Line Chart - Cubic interpolation mode'
                },
                zoom: zoomOptions
            },
            interaction: {
                hoverRadius: 20,
                intersect: false,
                mode: 'index',
            },
        },
    };
   chart = new Chart(ctx, config);
}
