// const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// function ageCalculate() {
//   let today = new Date();
//   let inputDate = new Date(document.getElementById("data-input").value);
//   let birthMonth, brithDate, brithYear;

//   let brithDetails = {
//     data: inputDate.getDate(),
//     month: inputDate.getMonth() + 1,
//     year: inputDate.getFullYear(),
//   };
//   let currentYera = today.getFullYear();
//   let currentMonth = today.getMonth() + 1;
//   let currentDate = today.getDate();

//   LeapChecker(currentYera);

//   if (
//     brithDetails.year > currentYera ||
//     (brithDetails.month > currentMonth && brithDetails.year == currentYera) ||
//     (brithDetails.data > currentDate &&
//       brithDetails.month == currentMonth &&
//       brithDetails.year == currentYera)
//   )
//     alert("Not Born Yet");
//     displayResult("-","-","-")
//   return;
// }
// brithYear = currentYera - brithDetails.year;

// if(currentMonth >= brithDetails.month){
//     birthMonth =  currentMonth - brithDetails.month;
// } else{
//     brithYear--;
//     birthMonth  = 12 + currentMonth -brithDetails.month
// }
// if(
//     currentDate >= brithDetails.data){
//         brithDate = currentDate - brithDetails.data;

//     }
//     else{
//         birthMonth--;
//         let days  = months[currentMonth - 2];
//         brithDate = days + currentDate - brithDetails.data;
//         if(birthMonth < 0){
//             birthMonth = 11;
//             brithYear--;

//         }
//     }
//     displayResult(brithDate,birthMonth,brithYear);
//     // console.log(brithYear, birthMonth, brithDate);
//     function displayResult(bDate,bmonth,bYear){
//       document.getElementById("years").textContent = bYear;
//       document.getElementById("months").textContent = bmonth;
//       document.getElementById("days").textContent = bDate;

//     }



// function LeapChecker(year) {
//   if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
//     months[1] = 29;
//   } else {
//     months[1] = 28;
//   }
//   console.log(year, months[1]);
// }

// Array representing the number of days in each month
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// Function to calculate the age based on the input date
function ageCalculate() {
  // Get the current date
  let today = new Date();
  // Get the input date from the user
  let inputDate = new Date(document.getElementById("data-input").value);
  let birthMonth, birthDate, birthYear;

  // Object to store the birth date details
  let birthDetails = {
    date: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };

  // Get the current year, month, and date
  let currentYear = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  // Check if the current year is a leap year
  LeapChecker(currentYear);

  // Check if the birth date is valid (i.e., not in the future)
  if (
    birthDetails.year > currentYear ||
    (birthDetails.month > currentMonth && birthDetails.year == currentYear) ||
    (birthDetails.date > currentDate &&
      birthDetails.month == currentMonth &&
      birthDetails.year == currentYear)
  ) {
    // If the birth date is invalid, show an alert and return
    alert("Not Born Yet");
    displayResult("-", "-", "-");
    return;
  }

  // Calculate the birth year
  birthYear = currentYear - birthDetails.year;

  // Calculate the birth month
  if (currentMonth >= birthDetails.month) {
    birthMonth = currentMonth - birthDetails.month;
  } else {
    birthYear--; // Decrease the birth year if current month is less than birth month
    birthMonth = 12 + currentMonth - birthDetails.month;
  }

  // Calculate the birth date
  if (currentDate >= birthDetails.date) {
    birthDate = currentDate - birthDetails.date;
  } else {
    birthMonth--; // Decrease the birth month if current date is less than birth date
    let days = months[currentMonth - 2]; // Get the days in the previous month
    birthDate = days + currentDate - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11; // Reset to December if birth month goes negative
      birthYear--; // Decrease the birth year
    }
  }

  // Display the calculated age
  displayResult(birthDate, birthMonth, birthYear);
}

// Function to display the result on the web page
function displayResult(bDate, bMonth, bYear) {
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bDate;
}

// Function to check if a given year is a leap year
function LeapChecker(year) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    months[1] = 29; // Set February to 29 days if it's a leap year
  } else {
    months[1] = 28; // Set February to 28 days if it's not a leap year
  }
  console.log(year, months[1]);
}
  