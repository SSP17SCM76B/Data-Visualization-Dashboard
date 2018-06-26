class barChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3) {

        let a = [];
        for (let i = 0; i < arr1.length; i++) {
            a[i] = arr1[i].toString();
        }
		document.getElementById("divChart").innerHTML="";
		var mycanvas = document.createElement("canvas");
		var div = document.getElementById("divChart");
		mycanvas.id = "mycanvas";
		mycanvas.height = '500';
		mycanvas.width = '800';
		div.appendChild(mycanvas);
		var c = mycanvas.getContext("2d");
        let data = {
            labels: arr3,
            datasets: [{
                label: 'FilterCondition',
                pointStrokeColor: "#9133FF",
                backgroundColor: '#5F33FF',
                hoverBackgroundColor: '#33BDFF',
                data: a
            }]

        };
        let myBarChart = new Chart(c, {
            type: 'bar',
            data: data,
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        stacked: true,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
}