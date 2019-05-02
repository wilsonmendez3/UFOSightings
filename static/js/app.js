// from data.js
var tableData = data;

// YOUR CODE HERE!
tableData.forEach(function(ufo_sightings) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");

    Object.entries(ufo_sightings).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);

    });

});


// BONUS


var button = d3.select("#filter-btn");

//date filter button
button.on("click", function(){  
    d3.event.preventDefault();

    var inputField = d3.select("#datetime").property("value");
    function filterDate() {
        var filteredData = tableData.filter(entry => entry.datetime === inputField);
        console.log(filteredData);
        filteredData.forEach(function(ufo_sightings){
            tbody = d3.select("tbody");
            row = tbody.append("tr");

            Object.entries(ufo_sightings).forEach(function([key, value]) {
                cell = row.append("td")
                cell.text(value);
            });

        });

    }

    if (inputField != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1 ; i >= 0; i--) {
            table.deleteRow(i);
        }
        filterDate();
    }
    
});


// var inputValue = inputField.property("value");
// console.log(inputValue);
// console.log(tableData);
// var filteredData = tableData.filter(entry => entry.datetime === inputValue);

