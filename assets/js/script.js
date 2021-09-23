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


/**
 * Calculates the total income
 */
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

/**
 * calculates the total expenditure
 */
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

/**
 * Calculates the result of total income minus total expenditure and outputs data to the DOM
 */
function calculateResult() {

    
    let outcome = calculateIncome() - calculateExpenses();
    let resHtml = 
    `
    <div id="incomeTotal">
        <h3>Total Income</h3>
        <p>${selectedCurrency.value}${Math.round(calculateIncome()* 100) / 100}</p>
    </div>
    <div id="expenseTotal">
        <h3>Total Expenditure</h3>
        <p>${selectedCurrency.value}${Math.round(calculateExpenses()* 100) / 100}</p>
    </div>
    <div id="outcome">
        <h3>Total Remaining</h3>
        <p>${selectedCurrency.value}${Math.round(outcome* 100) / 100}</p>
    </div>
    `;

    document.getElementById('results').innerHTML = resHtml;
       
    // Style the outcomes using conditional statements
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

    // Calculate sum of section data for pie chart
    let financeAndDebt = document.getElementsByClassName("finances");
    let financeAndDebtSum = 0;

    for(let finance of financeAndDebt) {
        
        if(finance.value) {
            financeAndDebtSum += parseFloat(finance.value);
        } else {
            financeAndDebtSum += 0;
        }
        return financeAndDebtSum;
    }

    let savingsSection = document.getElementsByClassName("savings");
    let savingsSum = 0;
    
    for(let saving of savingsSection) {
            
        if(saving.value) {
            savingsSum += parseFloat(saving.value);
        } else {
            savingsSum += 0;
        }
        return savingsSum;
    }

    let billsSection = document.getElementsByClassName("bills");
    let billsSum = 0;
    
    for(let bill of billsSection) {
            
        if(bill.value) {
            billsSum += parseFloat(bill.value);
        } else {
            billsSum += 0;
        }
        return billsSum;
    }

    let insuranceSection = document.getElementsByClassName("insurance");
    let insuranceSum = 0;
    
    for(let insure of insuranceSection) {
            
        if(insure.value) {
            insuranceSum += parseFloat(insure.value);
        } else {
            insuranceSum += 0;
        }
        return insuranceSum;
    }

    let subAndDdSection = document.getElementsByClassName("subscriptions");
    let subAndDdSum = 0;
    
    for(let sub of subAndDdSection) {
            
        if(sub.value) {
            subAndDdSum += parseFloat(sub.value);
        } else {
            subAndDdSum += 0;
        }
        return subAndDdSum;
    }

    let livingSection = document.getElementsByClassName("living");
    let livingSum = 0;
    
    for(let live of livingSection) {
            
        if(live.value) {
            livingSum += parseFloat(live.value);
        } else {
            livingSum += 0;
        }
        return livingSum;
    }

    let familySection = document.getElementsByClassName("family");
    let familySum = 0;
    
    for(let fam of familySection) {
            
        if(fam.value) {
            familySum += parseFloat(fam.value);
        } else {
            familySum += 0;
        }
        return familySum;
    }

    let leisureSection = document.getElementsByClassName("leisure");
    let leisureSum = 0;
    
    for(let l of leisureSection) {
            
        if(l.value) {
            leisureSum += parseFloat(l.value);
        } else {
            leisureSum += 0;
        }
        return leisureSum;
    }
}


function addBox() {

}