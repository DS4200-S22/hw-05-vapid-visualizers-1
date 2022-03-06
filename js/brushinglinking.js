// Set margins and dimensions 
const margin = { top: 50, right: 50, bottom: 50, left: 200 };
const width = 900; //- margin.left - margin.right;
const height = 650; //- margin.top - margin.bottom;

// Append svg object to the body of the page to house Scatterplot1
const svg1 = d3.select("#vis-holder")
                .append("svg")
                .attr("width", width - margin.left - margin.right)
                .attr("height", height - margin.top - margin.bottom)
                .attr("viewBox", [0, 0, width, height]); 

// Initialize brush for Scatterplot1 and points. We will need these to be global. 
let brush1; 
let myCircles1; 

//append svg object to the body of the page to house Scatterplot2 (call it svg2)
const svg2 = d3.select("#vis-holder")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

//Initialize brush for Scatterplot2 and points. We will need these to be global.
let brush2;
let myCircles2;

//append svg object to the body of the page to house bar chart
const svg3 = d3.select("#vis-holder")
    .append("svg")
    .attr("width", width - margin.left - margin.right)
    .attr("height", height - margin.top - margin.bottom)
    .attr("viewBox", [0, 0, width, height]);

//Initialize bars. We will need these to be global.
let bars;

// Define color scale
const color = d3.scaleOrdinal()
                .domain(["setosa", "versicolor", "virginica"])
                .range(["#FF7F50", "#21908dff", "#fde725ff"]);

// Plotting 
d3.csv("data/iris.csv").then((data) => {
  
  // We will need scales for all of the following charts to be global
  let x1, y1, x2, y2, x3, y3;  

  // We will need keys to be global
  let xKey1, yKey1, xKey2, yKey2, xKey3, yKey3;

  // Scatterplot1
  {
    let xKey1 = "Sepal_Length";
    let yKey1 = "Petal_Length";

    // Find max x
    let maxX1 = d3.max(data, (d) => {
      return d[xKey1];
    });

    // Create X scale
    let x1 = d3.scaleLinear()
        .domain([0, maxX1])
        .range([margin.left, width - margin.right]);

    // Add x axis 
    svg1.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x1))
        .attr("font-size", '20px')
        .call((g) => g.append("text")
            .attr("x", width - margin.right)
            .attr("y", margin.bottom - 4)
            .attr("fill", "black")
            .attr("text-anchor", "end")
            .text(xKey1)
        );


    // Find max y
    let maxY1 = d3.max(data, (d) => {
      return d[yKey1];
    });

    // Create Y scale
    let y1 = d3.scaleLinear()
        .domain([0, maxY1])
        .range([height - margin.bottom, margin.top]);

    // Add y axis 
    svg1.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y1))
        .attr("font-size", '20px')
        .call((g) => g.append("text")
            .attr("x", 0)
            .attr("y", margin.top)
            .attr("fill", "black")
            .attr("text-anchor", "end")
            .text(yKey1)
        );

    // Add points
    const myCircles1 = svg1.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("id", (d) => d.id)
        .attr("cx", (d) => x1(d[xKey1]))
        .attr("cy", (d) => y1(d[yKey1]))
        .attr("r", 8)
        .style("fill", (d) => color(d.Species))
        .style("opacity", 0.5);

    //Define a brush (call it brush1)
    const brush1 = d3.brush().extent([[0, 0], [width, height]]);

    // Add brush1 to svg1
    svg1.call(brush1
        .on("brush start", updateChart1));

  }

  //Scatterplot 2 (show Sepal width on x-axis and Petal width on y-axis)
  {
    let xKey2 = "Sepal_Width";
    let yKey2 = "Petal_Width";

    // Find max x
    let maxX2 = d3.max(data, (d) => { return d[xKey2]; });

    // Create X scale
    let x2 = d3.scaleLinear()
        .domain([0,maxX2])
        .range([margin.left, width-margin.right]);

    // Add x axis
    svg2.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x2))
        .attr("font-size", '20px')
        .call((g) => g.append("text")
            .attr("x", width - margin.right)
            .attr("y", margin.bottom - 4)
            .attr("fill", "black")
            .attr("text-anchor", "end")
            .text(xKey2)
        );

    // Find max y
    let maxY2 = d3.max(data, (d) => { return d[yKey2]; });

    // Create Y scale
    let y2 = d3.scaleLinear()
        .domain([0, maxY2])
        .range([height - margin.bottom, margin.top]);

    // Add y axis
    svg2.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y2))
        .attr("font-size", '20px')
        .call((g) => g.append("text")
            .attr("x", 0)
            .attr("y", margin.top)
            .attr("fill", "black")
            .attr("text-anchor", "end")
            .text(yKey2)
        );

    // Add points
    const myCircles2 = svg2.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("id", (d) => d.id)
        .attr("cx", (d) => x2(d[xKey2]))
        .attr("cy", (d) => y2(d[yKey2]))
        .attr("r", 8)
        .style("fill", (d) => color(d.Species))
        .style("opacity", 0.5);

    //Define a brush (call it brush1)
    const brush2 = d3.brush().extent([[0, 0], [width, height]]);

    // Add brush2 to svg2
    svg2.call(brush2
        .on("brush start", updateChart2));

  }

  //Barchart with counts of different species

    const data1 = [
        {Species: 'setosa', Count: 50},
        {Species: 'versicolor', Count: 50},
        {Species: 'virginica', Count: 50},
    ];

    let maxY3 = d3.max(data1, function(d) { return d.Count; });

    let yScale3 = d3.scaleLinear()
        .domain([0,maxY3])
        .range([height-margin.bottom,margin.top]);

    let xScale3 = d3.scaleBand()
        .domain(d3.range(data1.length))
        .range([margin.left, width - margin.right])
        .padding(0.1);

    svg3.append("g")
        .attr("transform", `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale3))
        .attr("font-size", '20px');

    svg3.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(xScale3)
            .tickFormat(i => data1[i].Species))
        .attr("font-size", '20px');

    svg3.selectAll(".bar")
        .data(data1)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", (d,i) => xScale3(i))
        .attr("y", (d) => yScale3(d.Count))
        .style("fill", (d) => color(d.Species))
        .attr("height", (d) => (height - margin.bottom) - yScale3(d.Count))
        .attr("width", xScale3.bandwidth());


    //Brushing Code---------------------------------------------------------------------------------------------
    
  // Call to removes existing brushes 
  function clear() {
      svg1.call(brush1.move, null);
      
      //TODO: add code to clear existing brush from svg2
  }

  // Call when Scatterplot1 is brushed (Ashraf)
  function updateChart1(brushEvent) {
      
      //TODO: Find coordinates of brushed region

      //TODO: Give bold outline to all points within the brush region in Scatterplot1

      //TODO: Give bold outline to all points in Scatterplot2 corresponding to points within the brush region in Scatterplot1

  }

  // Call when Scatterplot2 is brushed  (Ashraf)
  function updateChart2(brushEvent) {
    
    //TODO: Find coordinates of brushed region 

    //TODO: Start an empty set that you can store names of selected species in 
  
    //TODO: Give bold outline to all points within the brush region in Scatterplot2 & collected names of brushed species

    //TODO: Give bold outline to all points in Scatterplot1 corresponding to points within the brush region in Scatterplot2

    //TODO: Give bold outline to all bars in bar chart with corresponding to species selected by Scatterplot2 brush

  }

  //Finds dots within the brushed region
  function isBrushed(brush_coords, cx, cy) {
    if (brush_coords === null) return;

    var x0 = brush_coords[0][0],
        x1 = brush_coords[1][0],
        y0 = brush_coords[0][1],
        y1 = brush_coords[1][1];
    return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1; // This return TRUE or FALSE depending on if the points is in the selected area
  }
});
