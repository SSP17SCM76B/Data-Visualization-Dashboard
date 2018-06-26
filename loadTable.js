let dfObject = null;
let dfArr = null;
let dfArr1 = null;
let columns = null;
let columns1 = null;
let arr2 = [];
let noofColumns = null;
let row = null;
let chartData = [];
let values = [];
let values2 = [];
let seldata = null;
let disarr = [];
let disarr1 = [];
let value1;
let value2;
let arr1 = [];
let arr3 = [];
let filterVal;

var loadTable = (dataset) => {
    var tab = document.getElementById('data');
    var name = dataset.name;
    var dataset = dataset.id;
    tab.innerHTML = '<div>' +
        '<h1 style="text-align:center;font-size: 20px;">' +
        '<font size="6" face="calibri"><b>' + name + '</b></font>' +
        '</h1></div>';
	document.getElementById("divChart").innerHTML="";
    document.getElementById('displayColumns').innerHTML = "";
    document.getElementById('displayRows').innerHTML = "";
    document.getElementById('checkbtn').innerHTML = "";
    document.getElementById("filter1").innerHTML = "";
    document.getElementById("filter2").innerHTML = "";
    document.getElementById("columnLabel").innerHTML = "";
    document.getElementById("rowlabel").innerHTML = "";
    document.getElementById("displayFilters").innerHTML = "";
    document.getElementById("filterlbl").innerHTML = "";
    document.getElementById("displayChart").innerHTML = "";
    document.getElementById("chartlbl").innerHTML = "";
    document.getElementById("drop").innerHTML = "";
    document.getElementById("apply").innerHTML = "";
    //document.getElementById("divChart").innerHTML="";
    var divTable = document.getElementById('dataTable');
    divTable.setAttribute('class', 'contents');
    //var dataset=dataset.value;
    seldata = dataset;
    var DataFrame = dfjs.DataFrame;
    DataFrame.fromCSV(dataset).then(
        df => {
            var col = df.dim()[1]
            dfArr = df.toArray();
            columns = df.listColumns();
            createTable(columns, dfArr, col);
            displayColumns();

        }
    );

}

var loaddf = (dataset) => {
	document.getElementById("rowlabel").innerHTML = "";
	document.getElementById("filter1").innerHTML = "";
    document.getElementById("filter2").innerHTML = "";
    var divTable1 = document.getElementById('dataTable');
    //var dataset2=dataset.value;
    var DataFrame = dfjs.DataFrame;
    DataFrame.fromCSV(dataset).then(
        df => {
            df = df.restructure(values);
            var col = df.dim()[1];
            dfArr1 = df.toArray();
            columns1 = df.listColumns();
            df = df.distinct(values[0]);
            arr2 = [];
            for (var i = 0; i < df.dim()[0]; i++) {
                arr2[i] = df.toArray()[i];
            }
            createTable(columns1, dfArr1, col);
            displayRows();
        }
    );
}

var include = () => {
	document.getElementById("filterlbl").innerHTML = "";
    var divTable2 = document.getElementById('dataTable');
    var DataFrame = dfjs.DataFrame;
    DataFrame.fromCSV(seldata).then(
        df => {
            df = df.restructure(values);
            var n = values2.length;
            df = df.filter(row => row.get(values2[0]) == values2[n - 1])
            columns1 = df.listColumns();
            var col = df.dim()[1];
            dfArr1 = df.toArray();
            columns1 = df.listColumns();
            createTable(columns1, dfArr1, col);

        }
    );
    filterConditions();
}

var exclude = () => {
	document.getElementById("filterlbl").innerHTML = "";
    var divTable2 = document.getElementById('dataTable');
    var DataFrame = dfjs.DataFrame;
    DataFrame.fromCSV(seldata).then(
        df => {
            df = df.restructure(values);
            var n = values2.length;
            df = df.filter(row => row.get(values2[0]) != values2[n - 1])
            columns1 = df.listColumns();
            var col = df.dim()[1];
            dfArr1 = df.toArray();
            columns1 = df.listColumns();
            createTable(columns1, dfArr1, col);

        }
    );
    filterConditions();
}




var createTable = (columns, dfArr, col) => {
    document.getElementById("dataTable").innerHTML = "";
    var table = document.createElement("TABLE");
    table.border = "1";
    noofColumns = col;
    row = table.insertRow(-1);

    for (var i = 0; i < noofColumns; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = columns[i];
        row.appendChild(headerCell);
    }


    for (var i = 0; i < dfArr.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < noofColumns; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = dfArr[i][j];
        }
    }

    var divTable = document.getElementById("dataTable");
    divTable.innerHTML = "";
    divTable.appendChild(table);

}

var displayColumns = () => {

    var divColumnSlicing = document.getElementById("displayColumns");
    var buttondiv = document.getElementById("checkbtn");
    var labelcol = document.getElementById("columnLabel");
    var text = document.createTextNode("Select Columns for Filtering");
    labelcol.appendChild(text);
	document.getElementById("columnLabel").style.fontSize = "x-large";
    var button = document.createElement("button");
    button.setAttribute('class', 'button2');
    button.innerText = 'Filter Columns';
    buttondiv.appendChild(button);
    for (var i = 0; i < noofColumns; i++) {
        divColumnSlicing.appendChild(createCheckbox(columns[i], columns[i], i + 1));
        divColumnSlicing.innerHTML += columns[i];
    }
}

var displayRows = () => {
    var filterDiv1 = document.getElementById("filter1");
    var filterDiv2 = document.getElementById("filter2");
    var inclButton = document.createElement("button");
    var exclButton = document.createElement("button");
    document.getElementById('displayRows').innerHTML = "";
    var divRowSlicing = document.getElementById("displayRows");
    var row = document.getElementById("rowlabel");
    var text = document.createTextNode("Select a Row for Filtering");
    row.appendChild(text);
	document.getElementById("rowlabel").style.fontSize = "x-large";
    for (var i = 0; i < arr2.length; i++) {
        divRowSlicing.appendChild(createRadio(arr2[i], i + 1));
        divRowSlicing.innerHTML += arr2[i];
    }
    inclButton.innerText = 'Include Filter';
    exclButton.innerText = 'Exclude Filter';
    inclButton.setAttribute('class', 'button2');
    exclButton.setAttribute('class', 'button2');
    filterDiv1.appendChild(inclButton);
    filterDiv2.appendChild(exclButton);
}

var send_query = () => {
    var check = document.getElementsByTagName('input');
    values.length = 0;
    for (var i = 0; i < check.length; i++) {
        if (check[i].type.toLowerCase() == 'checkbox') {
            for (i = 0; i < check.length; i++) {
                if (check[i].checked == true) {
                    values.push(check[i].value);
                }
            }
        }
    }
    loaddf(seldata);
}


var createCheckbox = (name, value, id) => {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = name;
    checkbox.value = value;
    checkbox.id = id;
    return checkbox;

}

var createRadio = (value, id) => {
    var radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'radiotype';
    //document.write(id);
    radio.value = value;
    radio.id = id;
    return radio;

}

var radioData = () => {

    values2.length = 0;
    var check2 = document.getElementsByTagName('input');
    for (var i = 0; i < check2.length; i++) {
        if (check2[i].type.toLowerCase() == 'radio') {
            for (i = 0; i < check2.length; i++) {
                if (check2[i].checked == true) {
                    values2.push(check2[i].value);
                }
            }
        }
    }
}


var displayDrop = () => {
    var dropDiv = document.getElementById("drop");
    var applyDiv = document.getElementById("apply");
    document.getElementById('drop').innerHTML = "";
    document.getElementById('apply').innerHTML = "";
    var drop1 = document.createElement('select');
    var drop2 = document.createElement('select');
    drop1.setAttribute("id", "mySelect1");
    drop2.setAttribute("id", "mySelect2");
    dropDiv.appendChild(drop1);
    dropDiv.appendChild(drop2);
    var dropdown = document.getElementById("mySelect1");
    var dropdown2 = document.getElementById("mySelect2");
    var option1 = document.createElement("option");
    var option2 = document.createElement("option");
    dropdown.appendChild(option1);
    dropdown2.appendChild(option2);
    option1.textContent = "Select x-values";
    option2.textContent = "Select y-values";
    var applyBtn = document.createElement("button");
    applyBtn.innerText = 'Apply';
    applyBtn.setAttribute('class', 'button2');
    applyDiv.appendChild(applyBtn);

    var i = 0,
        j = 0;
    while (i <= columns.length - 1 && j <= 1) {
        if (i <= columns.length - 3) {
            disarr[i] = columns[i];
            dropdown.appendChild(createDrop(disarr[i], i + 1));
        } else {
            disarr1[j] = columns[i];
            dropdown2.appendChild(createDrop(disarr1[j], j + 1));
            j++;
        }
        i++;
    }

    var fillradios = document.filterForm.elements['radioFilter'];
    for (var i = 0, len = fillradios.length; i < len; i++) {
        if (fillradios[i].checked) {
            filterVal = fillradios[i].value;
        }
    }

}


var createDrop = (value, id) => {
    var el = document.createElement("option");
    el.textContent = value;
    el.value = value;
    return el;
}

var dropdata = () => {
    var e = document.getElementById("mySelect1");
    var f = document.getElementById("mySelect2");
    value1 = e.options[e.selectedIndex].value;
    value2 = f.options[f.selectedIndex].value;
}


var filterConditions = () => {
    filterArr = ['Maximum', 'Minimum', 'Mean', 'Sum', 'StandardDeviation'];
    var filter = document.getElementById("displayFilters");
    document.getElementById('displayFilters').innerHTML = "";
    var filterlbl = document.getElementById("filterlbl");
    var text1 = document.createTextNode("Select a Filter Condition");
	document.getElementById("filterlbl").style.fontSize = "x-large";
    filterlbl.appendChild(text1);
    for (var i = 0; i < filterArr.length; i++) {
        filter.appendChild(createFilterRadio(filterArr[i], i + 1));
        filter.innerHTML += filterArr[i];
    }
}

var createFilterRadio = (value, id) => {
    var filterradio = document.createElement('input');
    filterradio.type = 'radio';
    filterradio.name = 'radioFilter';
    //document.write(id);
    filterradio.value = value;
    filterradio.id = id;
    return filterradio;

}

var chartTypes = () => {
	document.getElementById("chartlbl").innerHTML = "";
    chartArr = ['Bar', 'Line', 'Pie', 'Stack', 'Doughnut', 'Pivot'];
    var chartfilter = document.getElementById("displayChart");
    document.getElementById('displayChart').innerHTML = "";
    var chartlbl = document.getElementById("chartlbl");
    var chartTxt = document.createTextNode("Select a Chart Type");
	document.getElementById("chartlbl").style.fontSize = "x-large";
    chartlbl.appendChild(chartTxt);
    for (var i = 0; i < chartArr.length; i++) {
        chartfilter.appendChild(createChartRadio(chartArr[i], i + 1));
        chartfilter.innerHTML += chartArr[i];
    }
}

var createChartRadio = (value, id) => {
    var chartradio = document.createElement('input');
    chartradio.type = 'radio';
    chartradio.name = 'chartType';
    //document.write(id);
    chartradio.value = value;
    chartradio.id = id;
    return chartradio;

}

var generateChart = () => {
    var arr1 = [];
    var arr3 = [];
    var arr4 = [];
    var divTable2 = document.getElementById('dataTable');
    var DataFrame = dfjs.DataFrame;
    DataFrame.fromCSV(seldata).then(
        df => {
            const groupedDF = df.groupBy(value1);
            groupedDF.aggregate(group => group.count()).rename('aggregation', 'groupCount');
            if (filterVal == 'Maximum') {
                a = df.groupBy(value1).aggregate(group => group.stat.max(value2)).rename('aggregation', 'groupMean');
            } else if (filterVal == 'Minimum') {
                a = df.groupBy(value1).aggregate(group => group.stat.min(value2)).rename('aggregation', 'groupMean');
            } else if (filterVal == 'Mean') {
                a = df.groupBy(value1).aggregate(group => group.stat.mean(value2)).rename('aggregation', 'groupMean');
            } else if (filterVal == 'Sum') {
                a = df.groupBy(value1).aggregate(group => group.stat.sum(value2)).rename('aggregation', 'groupMean');
            } else {
                a = df.groupBy(value1).aggregate(group => group.stat.sd(value2)).rename('aggregation', 'groupMean');
            }
            var v = a.select('groupMean');
            for (var ii = 0; ii < v.dim()[0]; ii++) {
                arr1[ii] = v.toArray()[ii];
            }
            b = df.groupBy(value1).aggregate(group => group.count()).rename('aggregation', 'groupCount');
            var v = b.select('groupCount');
            for (var ii = 0; ii < v.dim()[0]; ii++) {
                arr4[ii] = v.toArray()[ii];
            }
            a = df.distinct(value1);
            for (var ii = 0; ii < a.dim()[0]; ii++) {
                arr3[ii] = a.toArray()[ii];
            }
            var newchart = new chartSelection();
            var chartSelected = newchart.getRadioVal('chartType');
            if (chartSelected == 'Stack') {
                newchart.drawChart1(chartSelected, seldata, arr1, arr3, arr4);
            } else if (chartSelected == 'Pivot') {
                newchart.drawChart1(chartSelected, seldata, arr1, arr3, arr4);
            } else {
                newchart.drawChart(chartSelected, seldata, arr1, arr3);
            }
        }
    );
}