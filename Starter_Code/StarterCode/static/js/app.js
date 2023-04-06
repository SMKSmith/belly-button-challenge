//Set variable for url link
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Initializing page

function charts(sampleName) {
  d3.json(url).then((data) => {
    var metaData = data.samples;
    var sample = metaData.filter(
      (sampleData) => sampleData.id == sampleName
    )[0];

    console.log(sample);
    var id = sample.otu_ids;
    var label = sample.otu_labels;
    var sValues = sample.sample_values;


    // Create Horizontal Bar Chart

    var barChar = {
      x: sValues.slice(0, 10).reverse(),
      y: id
        .slice(0, 10)
        .map((otu) => `OTU ${otu}`)
        .reverse(),
      text: label.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h",
    };

    var data = [barChar];

    var layout = {
      title: "Top 10 Cultures Found",
      xaxis: { autorange: true },
      yaxis: { autorange: true },
      margin: { t: 70, l: 100 },
      height: 380,
    };

    Plotly.newPlot("bar", data, layout);


    // Create Bubble Chart

    var bubChar = {
      x: id,
      y: sValues,
      text: label,
      mode: "markers",
      marker: {
        color: id,
        size: sValues,
        colorscale: "Earth",
      },
    };

    var data = [bubChar];

    var layout = {
      margin: { t: 0 },
      xaxis: { title: "OTU ID" },
      hovermode: "closest",
      width: window.width,
    };

    Plotly.newPlot("bubble", data, layout);
  });
}

// Setting selectors for demographic info box 

function demo(sampleName) {
  d3.json(url).then((data) => {
    var metaData = data.metadata;
    var sample = metaData.filter(
      (sampleData) => sampleData.id == sampleName
    )[0];
    var demoInfo = d3.select("#sample-metadata");
    demoInfo.html("");
    Object.entries(sample).forEach(([key, value]) => {
      demoInfo.append("h5").text(`${key}: ${value}`);
    });

    
    // Create Gauge Chart
    
    var gaugeChar = [
      {
        domain: { x: [0, 5], y: [0, 1] },
        value: sample.wfreq,
        text: sample.wfreq,
        type: "indicator",
        mode: "gauge+number",
        delta: { reference: 10 },
        gauge: {
          axis: { range: [0, 9] },
          steps: [
            {range: [0, 1], color: "floralwhite"},
            {range: [1, 2], color: "beige"},
            {range: [2, 3], color: "wheat"},
            {range: [3, 4], color: "palegoldenrod"},
            {range: [4, 5], color: "greenyellow"},
            {range: [5, 6], color: "yellowgreen"},
            {range: [6, 7], color: "darkseagreen"},
            {range: [7, 8], color: "darkolivegreen"},
            {range: [8, 9], color: "darkgreen"},

          ],
        },
      },
    ];

    var layout = {
      title: "<b>Belly Button Washing Frequency</b> <br>Scrubs Per Week</br>",
      width: 350,
      height: 350,
      margin: { t: 50, r: 25, l: 25, b: 25 },
    };
    Plotly.newPlot("gauge", gaugeChar, layout);
  });
}

// Pull data into the console

function init() {
  d3.json(url).then(function (data) {
    console.log("samples.json:", data);
    // Set up the DropDown:
    let DropDown = d3.select(`#selDataset`);

    data.names.forEach((name) => {
      DropDown.append(`option`).text(name).property(`value`, name);
    });

    
    // Reset charts when page is refreshed
    const resetData = data.names[0];
    charts(resetData);
    demo(resetData);
  });
}

// Pull new metadata 
function optionChanged(newData) {
  charts(newData);
  demo(newData);
}

init();