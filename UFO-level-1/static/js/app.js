// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

tableData.forEach((UFOData) => {
    var row = tbody.append("tr");
    Object.entries(UFOData).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
})

var button = d3.select("#filter-btn");

button.on("click", runEnter);
function runEnter(){
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
      
    var filteredData = tableData.filter(UFOData => UFOData.datetime === inputValue);
  
    console.log(filteredData);

    tbody.html("")

    filteredData.forEach((UFOData) => {
        var row = tbody.append("tr");
        Object.entries(UFOData).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    })
}