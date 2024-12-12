const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalvalue = Document.getElementById("final-value");
//   Object that store values of minimum and maximum  angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 221, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

// Size  of each piece
const data = [16, 16, 16, 16, 16, 16];
// background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#b835bc",
  "#b163da",
];

// Create chart 
let myChart = new Chart (wheel, {
    // plugin for displaying text on pice chart
    Plugins: [ChartDataLabels],
    // Chart type pie
    type: "pie",
    data: {
        // Labels (values which are to be display on chart)
        labels: [1, 2, 3, 4, 5, 6],
        // Settings  for dataset/pie 
        datasets:[
            {
                backgroungColor: pieColors,
                data:data,


        },
    ],
    },
    options: {},
});