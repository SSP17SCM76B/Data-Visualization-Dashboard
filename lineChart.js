class lineChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3) {
		document.getElementById("divChart").innerHTML="";
		var mycanvas2 = document.createElement("canvas");
		var div2 = document.getElementById("divChart");
		mycanvas2.id = "mycanvas2";
		mycanvas2.height = '500';
		mycanvas2.width = '800';
		div2.appendChild(mycanvas2);
		var c = mycanvas2.getContext("2d");
        let a = [];
        for (let i = 0; i < arr1.length; i++) {
            a[i] = arr1[i].toString();
        }

        var data = {
            labels: arr3,
            datasets: [{
                label: 'FilterCondition',
                data: a,
                backgroundColor: "rgba(75,192,192,0.4)",
                pointStrokeColor: '#9133FF',
                hoverBackgroundColor: '#33BDFF'

            }]

        };
        var myLineChart = new Chart(c, {
            type: 'line',
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