class chartSelection {
    getRadioVal(name) {
        let val;
        let radios = document.myForm.elements[name];
        for (let i = 0, len = radios.length; i < len; i++) {
            if (radios[i].checked) {
                val = radios[i].value;
                break;
            }
        }
        return val;
    }
    drawChart(name, dataset, arr1, arr3) {
        switch (name) {
            case "Bar":
                {
                    let bar = new barChart();
                    bar.displayChart(name, dataset, arr1, arr3);
                    break;
                }
            case "Line":
                {
                    let line = new lineChart();
                    line.displayChart(name, dataset, arr1, arr3);
                    break;
                }
            case "Pie":
                {
                    let pie = new pieChart();
                    pie.displayChart(name, dataset, arr1, arr3);
                    break;
                }
            case "Doughnut":
                {
                    let doughnut = new doughnutChart();
                    doughnut.displayChart(name, dataset, arr1, arr3);
                    break;
                }
        }
    }
    drawChart1(name, dataset, arr1, arr3, arr4) {
        switch (name) {
            case "Stack":
                {
                    let stack = new stackChart();
                    stack.displayChart(name, dataset, arr1, arr3, arr4);
                    break;
                }
            case "Pivot":
                {
                    console.log("inside pivot switch")
                    let pivot = new pivotChart();
                    console.log("runnin pivot")
                    pivot.displayChart(name, dataset, arr1, arr3, arr4);
                    break;
                }
        }
    }
}