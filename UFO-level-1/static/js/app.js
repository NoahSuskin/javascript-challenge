var tableData = data;
//data.forEach(ele => console.log(ele.city))

// Loading Data into the Table

var tbod = d3.select('tbody')



function loadData(data) {
    var row = tbod.append('tr')
    Object.entries(data).forEach(([key, value]) => {
        var cell = row.append('td')
        cell.text(value)
    })
}

data.forEach(loadData)

// FILTER

var form = d3.select('#form')
var button = d3.select('#filter-btn')


function runEnter() {
    d3.event.preventDefault();
    var input = d3.select('#datetime')
    var inputVal = input.property('value')
    console.log(inputVal)
    console.log(tableData)
    var inputFilter = tableData.filter(data => data.datetime === inputVal)
    // delete previous table
    tbod.html('')
    // load in new data
    var newData = inputFilter.forEach(loadData)
    console.log(inputFilter)
    
    
}

button.on("click", runEnter);
form.on("submit",runEnter);


