// JavaScript for Calculator Functionality
const display = document.getElementById("display");

// Function to clear the display
function clearDisplay() {
    display.value = "";
}

// Function to delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to append values to the display
function appendValue(value) {
    display.value += value;
}

// Function to calculate the result
function calculate() {
    try {
        display.value = eval(display.value.replace(/%/g, "/100"));
    } catch (error) {
        alert("Invalid Input");
    }
}