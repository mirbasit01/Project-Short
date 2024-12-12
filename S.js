const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let today = new Date();
  let inputDate = new Date(document.getElementById("data-input").value);
  let birthMonth, brithDate, brithYear;

  let brithDetails = {
    data: inputDate.getDate(),
    month: inputDate.getMonth() + 1,
    year: inputDate.getFullYear(),
  };
  let currentYera = today.getFullYear();
  let currentMonth = today.getMonth() + 1;
  let currentDate = today.getDate();

  LeapChecker(currentYera);

  if (
    brithDetails.year > currentYera ||
    (brithDetails.month > currentMonth && brithDetails.year == currentYera) ||
    (brithDetails.data > currentDate &&
      brithDetails.month == currentMonth &&
      brithDetails.year == currentYera)
  )
    alert("Not Born Yet");
  return;
}
brithYear = currentYera - brithDetails.year;

if(currentMonth >= brithDetails.month){
    birthMonth =  currentMonth - brithDetails.month;
} else{
    brithYear--;
    birthMonth  = 12 + currentMonth -brithDetails.month
}
if(
    currentDate >= brithDetails.data){
        brithDate = currentDate - brithDetails.data;

    }
    else{
        birthMonth--;
        let days  = months[currentMonth - 2];
        brithDate = days + currentDate - brithDetails.data;
        if(birthMonth < 0){
            birthMonth = 11;
            brithYear--;

        }
    }
    displayResult(brithDate,birthMonth,brithYear);
    // console.log(brithYear, birthMonth, brithDate);
    function displayResult(bDate,bmonth,bYear){
      document.getElementById("years").textContent = bYear;
      document.getElementById("months").textContent = bmonth;
      document.getElementById("days").textContent = bDate;
      
    }


function LeapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
  console.log(year, months[1]);
}

