class doughnutChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3) {
        let a = [];
        for (let i = 0; i < arr1.length; i++) {
            a[i] = arr1[i].toString();
        }
        document.getElementById("divChart").innerHTML="";
		var mycanvas6 = document.createElement("canvas");
		var div6 = document.getElementById("divChart");
		mycanvas6.id = "mycanvas2";
		mycanvas6.height = '500';
		mycanvas6.width = '800';
		div6.appendChild(mycanvas6);
		var c = mycanvas6.getContext("2d");
        let data = {
            labels: arr3,
            datasets: [{
                label: 'FilterCondition',
                data: a,
                backgroundColor: '#5F33FF',
                hoverBackgroundColor: '#33BDFF'
            }]

        };
        let mydoughnutChart = new Chart(c, {
            type: 'doughnut',
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