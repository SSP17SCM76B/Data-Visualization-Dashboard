class stackChart extends chartSelection {
    displayChart(name, dataset, arr1, arr3, arr4) {
        document.getElementById("divChart").innerHTML="";
		var mycanvas4 = document.createElement("canvas");
		var div4 = document.getElementById("divChart");
		mycanvas4.id = "mycanvas2";
		mycanvas4.height = '500';
		mycanvas4.width = '800';
		div4.appendChild(mycanvas4);
		var c = mycanvas4.getContext("2d");
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
                    pointStrokeColor: "#9133FF",
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
        let myStackChart = new Chart(c, {
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
                    }],
                    xAxes: [{
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