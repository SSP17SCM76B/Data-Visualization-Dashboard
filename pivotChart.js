class pivotChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3, arr4) {

        document.getElementById("divChart").innerHTML="";
		var mycanvas5 = document.createElement("canvas");
		var div5 = document.getElementById("divChart");
		mycanvas5.id = "mycanvas2";
		mycanvas5.height = '500';
		mycanvas5.width = '800';
		div5.appendChild(mycanvas5);
		var c = mycanvas5.getContext("2d");
        let a = [];
        for (let i = 0; i < arr1.length; i++) {
            a[i] = arr1[i].toString();
        }

        let b = [];
        for (let i = 0; i < arr4.length; i++) {
            b[i] = arr4[i].toString();
        }

        let data = {
            labels: arr3,
            datasets: [{
                    label: 'FilterCondition',
                    data: a,
                    pointStrokeColor: "#9413EF",
                    backgroundColor: '#5F33FF',
                    hoverBackgroundColor: '#33BDFF'
                },
                {
                    label: 'Count',
                    data: b,

                    pointStrokeColor: "#9133FF",
                    backgroundColor: '#FF9733',
                    hoverBackgroundColor: '#FFDC33'
                }
            ]

        };
        let mypivotChart = new Chart(c, {
             type: 'bar',
            data: data,
            options: {
                responsive: false,
                scales: {
                    yAxes: [{
                        stacked: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        stacked: false,
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

    }
}