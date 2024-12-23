const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalvalue = document.getElementById("final-value");
// Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 30, value: 2 },
  { minDegree: 31, maxDegree: 90, value: 1 },
  { minDegree: 91, maxDegree: 150, value: 6 },
  { minDegree: 151, maxDegree: 210, value: 5 },
  { minDegree: 221, maxDegree: 270, value: 4 },
  { minDegree: 271, maxDegree: 330, value: 3 },
  { minDegree: 331, maxDegree: 360, value: 2 },
];

// Size of each piece
const data = [16, 16, 16, 16, 16, 16];
// Background color for each piece
var pieColors = [
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
  "#8b35bc",
  "#b163da",
];

// Create chart
let myChart = new Chart(wheel, {
  // Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  // Chart type: pie
  type: "pie",
  data: {
    // Labels (values which are to be displayed on the chart)
    labels: [1, 2, 3, 4, 5, 6],
    // Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    // Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      // Hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      // Display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
// Display value based on the  randomangel
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //  if the angleValue is between min and mx then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalvalue.innerHTML = `<h4> Value : ${i.value}</h4>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

// spinner count
let count = 0;
// 100 rotations for  animation and last  rotation for result
let resultValue = 101;
// start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  // Empty final value
  finalvalue.innerHTML = `<h4> Good Luck! </h4>`;
  // Generate random degress to stop  at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //    Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    // set rotation for piechert
    // Initially to make the piechert   rotate faster we set
    //  resultValue to 101 so it rotates 101 degress at a time and
    //  this reducess by i with every count. Eventually on last rotation we rotate by 1 degree at a time

    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
