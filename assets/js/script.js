// Wait for DOM to finish loading before running JS
// Add event listeners to all buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute("type") === "button") {
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
    let userIncome = document.getElementsByClassName("income");
    let totalIncome = 0;

    for(let i of userIncome) {
        
        if(i.value) {
            totalIncome += parseFloat(i.value);
        } else {
            totalIncome += 0;
        }
        
    }
    return totalIncome;
}

function calculateExpenses() {
    let userExpense = document.getElementsByClassName('expense');
    let totalExpense = 0;

    for(let e of userExpense) {
        
        if(e.value) {
            totalExpense += parseFloat(e.value); 
        } else {
            totalExpense += 0;
        }
        
    }
    return totalExpense;
}

function calculateResult() {

    
    let outcome = parseFloat(calculateIncome() - calculateExpenses());
    let resHtml = 
    `
    <div id="incomeTotal">
        <h3>Total Income</h3>
        <p>${selectedCurrency.value}${Math.round(parseFloat(calculateIncome())* 100) / 100}</p>
    </div>
    <div id="expenseTotal">
        <h3>Total Expenditure</h3>
        <p>${selectedCurrency.value}${Math.round(parseFloat(calculateExpenses())* 100) / 100}</p>
    </div>
    <div id="outcome">
        <h3>Total Remaining</h3>
        <p>${selectedCurrency.value}${Math.round(parseFloat(outcome)* 100) / 100}</p>
    </div>
    <div id="chart">
    </div>
    `;
    document.getElementById('results').innerHTML = resHtml;
       
// Style the outcomes depending on outcomes
    if(calculateIncome() > 0) {
        document.getElementById('incomeTotal').style.color = "#00b200";
    } else {
        document.getElementById('incomeTotal').style.color = "#ff0000";
    }

    if(outcome > 0) {
        document.getElementById('outcome').style.color = "#00b200";
    } else {
        document.getElementById('outcome').style.color = "#ff0000";
    }

// Add chart to results section

}

function addBox() {

}

