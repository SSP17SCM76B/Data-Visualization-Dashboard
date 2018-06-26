class pieChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3) {

        let r = Math.floor(Math.random() * 200);
        let g = Math.floor(Math.random() * 200);
        let b = Math.floor(Math.random() * 200);


        let a = [];
        for (let i = 0; i < arr1.length; i++) {
            a[i] = arr1[i].toString();
        }

        document.getElementById("divChart").innerHTML="";
		var mycanvas3 = document.createElement("canvas");
		var div3 = document.getElementById("divChart");
		mycanvas3.id = "mycanvas2";
		mycanvas3.height = '500';
		mycanvas3.width = '800';
		div3.appendChild(mycanvas3);
		var c = mycanvas3.getContext("2d");
        let data = {
            labels: arr3,
            datasets: [{
                label: 'FilterCondition',
                data: a,
                backgroundColor: 'rgb(' + r + ', ' + g + ', ' + b + ')',
                pointStrokeColor: "#9133FF",
                hoverBackgroundColor: '#33BDFF'

            }]

        };

        let myPieChart = new Chart(c, {
            type: 'pie',
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