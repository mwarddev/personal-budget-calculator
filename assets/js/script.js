// Wait for DOM to finish loading before running JS
// Add event listeners to all buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("type") === "submit") {
                calculateResult();
            } else {
                addBox();
            }
        })
    }
})

// Add event listener and functionality for the currency select option.

let selectedCurrency = document.getElementById("currency");
selectedCurrency.addEventListener("click", function() {
    let currencyPlaceholders = document.getElementsByTagName("input");
    
    for(currencyPlaceholder of currencyPlaceholders) {
        currencyPlaceholder.placeholder = selectedCurrency.value;
    }
})

/**
 * Calculates the input depending on the period selected
 */
// function calculatePeriod() {
    
//     let selectedPeriods = document.getElementsByClassName("period");    

//     let userInput = document.getElementsByTagName("input")

//     for(let selectedPeriod of selectedPeriods) {
        
//         if(selectedPeriod.value === "daily") {
//             return userInput.value * 30.41;
//         } else if(selectedPeriod.value === "weekly") {
//             return userInput.value * 4.34;
//         } else if(selectedPeriod.value === "yearly") {
//             return userInput.value / 12;
//         } else {
//             return userInput.value;
//         }
//     }
//     selectedPeriods.addEventListener("click", calculatePeriod);
// }



function calculateIncome() {
    let userIncome = document.getElementsByClassName('income');
    let totalIncome = 0;

    for(let i of userIncome) {
        totalIncome += parseFloat(i.value);
    }
    return totalIncome;
}

function calculateExpenses() {
    let userExpense = document.getElementsByClassName('expense');
    let totalExpense = 0;

    for(let e of userExpense) {
        totalExpense += parseFloat(e.value);
    }
    return totalExpense;
}

function calculateResult() {

}

function addBox() {

}

