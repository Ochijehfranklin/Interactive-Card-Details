// Get the input elements
const cardNameInput = document.getElementById("card-name");
const cardNumberInput = document.getElementById("card-number");
const cardMonthInput = document.getElementById("card-month");
const cardYearInput = document.getElementById("card-year");
const cvcInput = document.getElementById("cvc1");

// Get the elements to update
const cardHolderNameElement = document.getElementById("card-holder-name");
const monthDisplayElement = document.getElementById("month-display");
const yearDisplayElement = document.getElementById("year-display");
const cvcElement = document.getElementById("cvc");
const cardHolderNumberElement = document.getElementById("number");

//const submitButtonElement = document.getElementById("submission");
//const form = document.querySelector("form");

//const firstPage = document.querySelector(".right-side);

// Add event listener to the card name input
cardNameInput.addEventListener("keyup", () => {
  cardHolderNameElement.textContent = cardNameInput.value.toUpperCase();
});


cardNumberInput.addEventListener("keyup", setCardDigit);
function setCardDigit () {
  cardHolderNumberElement.textContent = cardNumberInput.value.replace(/(\d{4})/g, '$1 ');
}

// Add event listener to the card month input
cardMonthInput.addEventListener("keyup", () => {
  // Update the month display
  monthDisplayElement.textContent = cardMonthInput.value;
});

// Add event listener to the card year input
cardYearInput.addEventListener("keyup", () => {
  // Update the year display
  yearDisplayElement.textContent = cardYearInput.value;
});

cvcInput.addEventListener("keyup", setCvc);
function setCvc () {
  cvcElement.textContent = cvcInput.value;
}


// Get the button element
const buttonElement = document.getElementById("submission");

//Hidden page
const hiddenPage = document.getElementById("hidden");

//continue button
const endButtonElement = document.getElementById("end");

buttonElement.addEventListener('click', handleClick);
function handleClick(event) {
    // Prevent the default form submission or page reload
    event.preventDefault();
    const form = document.getElementById('form');
    if (form.style.display === "block") {
        hiddenPage.style.display = "none";
      } else {
        hiddenPage.style.display = "block";
        form.style.display = "none";
    }}



