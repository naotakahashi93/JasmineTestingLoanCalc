window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() { // gets the values of the input that the user inputted and returns in form of object
  return {
    amount: +(document.getElementById("loan-amount").value), // the value of the amount that the user inputted
    years: +(document.getElementById("loan-years").value),// the value of the years that the user inputted
    rate: +(document.getElementById("loan-rate").value),// the value of the rate that the user inputted
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 10000, years: 7, rate: 4.5 }; // the initial set of values to set up
  const amountUI = document.getElementById("loan-amount"); // creating a variable for the loan amount field which has the element ID "loan-amount"
  amountUI.value = values.amount; // inputting the value the user puts for "amount" 
  const yearsUI = document.getElementById("loan-years");  //creating a variable for the loan amount field which has the element ID "loan-years"
  yearsUI.value = values.years;// inputting the value the user puts for "years" 
  const rateUI = document.getElementById("loan-rate"); // ""
  rateUI.value = values.rate; //""
  update(); // a function that is called when the use inputs new information on the calc
}

// // Get the current values from the UI
// // Update the monthly payment
function update() {

  const currentUIValues = getCurrentUIValues(); // calling the function that gives us the object of the user inputted values
  updateMonthly(calculateMonthlyPayment(currentUIValues)); // calling the function to update the monthly payment (and show on screen) by using the calculateMonthlyPayment function with the current UI values
}

// // Given an object of values (a value has amount, years and rate ),
// // calculate the monthly payment.  The output should be a string
// // that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  
//  P = Amount of principle
// i = periodic interest rate (in our case yearly rate ÷ 12)
// n = total number of payments (years × 12)

  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12); // round number down to nearest integer
  const p = values.amount
  return (
    (p * i) /
    (1 - Math.pow((1 + i), -n)) // math.pow takes the base amount (1+i) to the power of -n
  ).toFixed(2); // to fixed rounds to the nearest 2 decimals (passed in as 2) and returns the value as a string

}

// // Given a string representing the monthly payment value,
// // update the UI to show the value.

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}