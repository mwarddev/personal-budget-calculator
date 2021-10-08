// Wait for DOM to finish loading before running JS
// Add event listeners to all buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(button of buttons) {
        button.addEventListener("click", function() {
            if(this.getAttribute('id') === "calc-btn") {
                calculateResult();
                drawChart();
            } else if(this.getAttribute('id') === "finances") {   
                addBox('expense', 'finances-btn');
            } else if(this.getAttribute('id') === "savings") {
                addBox('expense', 'savings-btn');
            } else if(this.getAttribute('id') === "bills") {
                addBox('expense', 'bills-btn');
            } else if(this.getAttribute('id') === "insurance") {
                addBox('expense', 'insurance-btn');
            } else if(this.getAttribute('id') === "subscriptions") {
                addBox('expense', 'subscriptions-btn');
            } else if(this.getAttribute('id') === "transport") {
                addBox('expense', 'transport-btn');
            } else if(this.getAttribute('id') === "living") {
                addBox('expense', 'living-btn');
            } else if(this.getAttribute('id') === "family") {
                addBox('expense', 'family-btn');
            } else if(this.getAttribute('id') === "leisure") {
                addBox('expense', 'leisure-btn');
            } else if(this.getAttribute('id') === "income") {
                addBox('income', 'income-btn');
            } else if(this.getAttribute('id') === "reset-btn") {
                window.location.reload();
            }
        })
    }
})

// Redraw chart on window resize
window.onresize = drawChart;

// Add event listener and functionality for the currency select option.

let selectedCurrency = document.getElementById("currency");
selectedCurrency.addEventListener("click", function() {
    let currencyPlaceholders = document.getElementsByTagName("input");
    
    for(currencyPlaceholder of currencyPlaceholders) {
        currencyPlaceholder.placeholder = selectedCurrency.value;
    }
})



/**
 * Calculates the result of total income minus total expenditure and outputs data to the DOM
 */
function calculateResult() {
    // Calculate drop down adjustments for user input.
    let selectedPeriod = document.getElementsByClassName("period");
    let userInput = document.getElementsByClassName('user-input');

    for(let i = 0; i < selectedPeriod.length; i++) {
        
        if(selectedPeriod[i].selectedIndex == [0]) {
            userInput[i+1].value *= 30.41;
        } else if(selectedPeriod[i].selectedIndex == [1]) {
            userInput[i+1].value *= 4.34;
        } else if(selectedPeriod[i].selectedIndex == [3]) {
            userInput[i+1].value /= 12;
        } else {
            userInput[i+1].value;
        }
    }

    // Calculate total income
    let userIncome = document.getElementsByClassName("income");
    let totalIncome = 0;

    for(let i of userIncome) {
        
        if(i.value) {
            totalIncome += parseFloat(i.value);
        } else {
            totalIncome += 0;
        }        
    }
    // Calculate total expenses
    let userExpense = document.getElementsByClassName('expense');
    let totalExpense = 0;

    for(let e of userExpense) {
        
        if(e.value) {
            totalExpense += parseFloat(e.value); 
        } else {
            totalExpense += 0;
        }        
    }
    
    // Output conditional results to the DOM
    let outcome = totalIncome - totalExpense;
    let resHtml = 
    `
    <div id="incomeTotal">
        <h3>Total Income</h3>
        <p>${selectedCurrency.value}${Math.round(totalIncome* 100) / 100}</p>
    </div>
    <div id="expenseTotal">
        <h3>Total Expenditure</h3>
        <p>${selectedCurrency.value}${Math.round(totalExpense* 100) / 100}</p>
    </div>
    <div id="outcome">
        <h3>Total Remaining</h3>
        <p>${selectedCurrency.value}${Math.round(outcome* 100) / 100}</p>
    </div>
    <div id="chart" class="chart-style">
    </div>
    `;

    document.getElementById('results').innerHTML = resHtml;
       
    // Style the outcomes using conditional statements
    if(totalIncome > 0) {
        document.getElementById('incomeTotal').style.color = "#00b200";
    } else {
        document.getElementById('incomeTotal').style.color = "#ff0000";
    }

    if(outcome > 0) {
        document.getElementById('outcome').style.color = "#00b200";
    } else {
        document.getElementById('outcome').style.color = "#ff0000";
    }

    document.getElementById('results').style.display = "block";
}

// Load the Visualization API and the corechart package for the pie chart.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

/**
 * Calculate user input sections and use data to create a pie chart
 */
function drawChart() {   

    // Calculate sum of section data for pie chart
    let financeAndDebt = document.getElementsByClassName("finances");
    let financeAndDebtSum = 0;

    for(let finance of financeAndDebt) {
        
        if(finance.value) {
            financeAndDebtSum += parseFloat(finance.value);
        } else {
            financeAndDebtSum += 0;
        }
    }

    let savingsSection = document.getElementsByClassName("savings");
    let savingsSum = 0;
    
    for(let saving of savingsSection) {
            
        if(saving.value) {
            savingsSum += parseFloat(saving.value);
        } else {
            savingsSum += 0;
        }
    }

    let billsSection = document.getElementsByClassName("bills");
    let billsSum = 0;
    
    for(let bill of billsSection) {
            
        if(bill.value) {
            billsSum += parseFloat(bill.value);
        } else {
            billsSum += 0;
        }
    }

    let insuranceSection = document.getElementsByClassName("insurance");
    let insuranceSum = 0;
    
    for(let insure of insuranceSection) {
            
        if(insure.value) {
            insuranceSum += parseFloat(insure.value);
        } else {
            insuranceSum += 0;
        }
    }

    let subAndDdSection = document.getElementsByClassName("subscriptions");
    let subAndDdSum = 0;
    
    for(let sub of subAndDdSection) {
            
        if(sub.value) {
            subAndDdSum += parseFloat(sub.value);
        } else {
            subAndDdSum += 0;
        }
    }

    let livingSection = document.getElementsByClassName("living");
    let livingSum = 0;
    
    for(let live of livingSection) {
            
        if(live.value) {
            livingSum += parseFloat(live.value);
        } else {
            livingSum += 0;
        }
    }

    let familySection = document.getElementsByClassName("family");
    let familySum = 0;
    
    for(let fam of familySection) {
            
        if(fam.value) {
            familySum += parseFloat(fam.value);
        } else {
            familySum += 0;
        }
    }

    let leisureSection = document.getElementsByClassName("leisure");
    let leisureSum = 0;
    
    for(let l of leisureSection) {
            
        if(l.value) {
            leisureSum += parseFloat(l.value);
        } else {
            leisureSum += 0;
        }
    }    

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.    

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Expense');
    data.addColumn('number', 'Total');
    data.addRows([
        ['Finance & Debt', financeAndDebtSum],
        ['Savings', savingsSum],
        ['Household Bills', billsSum],
        ['Insurance', insuranceSum],
        ['Subscriptions & Direct Debits', subAndDdSum],
        ['Living Costs', livingSum],
        ['Family', familySum],
        ['Leisure', leisureSum]
        ]);

    // Set chart options
    var options = {'title':'Expenditure Overview',
                    is3D: true,
                    width:'100%',
                    height:'400'};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);   
}


/**
 * Add and remove input fields as and when required
 */
function addBox(incOrExp, btnAssign) {

    // template literal for new input fields + remove button
    let newBoxHtml = `
    <div class="newBox">
        <div class="rem-box">
            <button class="rem-box-btn" type="button">x</button>
        </div>
        <div class="user-input">
        <input type="text" class="new-box" name="new-box" placeholder="Name of expense">
        <input type="number" class="${incOrExp} ${btnAssign}" value="" placeholder="£" step="0.01" min="0">
        <select class="period" name="period">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly" selected>Monthly</option>
            <option value="yearly">Yearly</option>
        </div>
    </div>
    `;       
    
    // Add template literal to specific section with relevant class names
    let addBtnHtml = document.getElementById(btnAssign);
    addBtnHtml.insertAdjacentHTML('beforebegin', newBoxHtml);
    
    // Remove nearest new fields when remove button clicked
    let remButton = document.getElementsByClassName('rem-box-btn')

    for(rem of remButton) {
        rem.addEventListener("click", function(r) {
            r.target.closest('.newBox').remove();
        });                  
    }    
}