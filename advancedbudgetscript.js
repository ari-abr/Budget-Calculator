//add listener to the form button
const submitButton = document.querySelector('.calcBtn');
submitButton.addEventListener('click', calculateBudget);

//main function
function calculateBudget(event) {
  event.preventDefault();

  //add up numbers: savings1 + savings2 + savings3
  function calculateTotals(htmlItem) {
    var budgetVar = 0;

    var input = document.querySelectorAll(htmlItem);
    input.forEach(function (element) {
        if(element.value){
      budgetVar = budgetVar + parseFloat(element.value);
        }
    });

    return budgetVar;
  }

  //calculate budget: budget = income - savings - expenses
  function calculateBudget(income, savings, expenses) {
    var incomeTotal = calculateTotals(income);
    var savingsTotal = calculateTotals(savings);
    var expensesTotal = calculateTotals(expenses);

    return incomeTotal - savingsTotal - expensesTotal;
  }

  //set up variables for easier calculations
  var monthSav, monthExp, monthBudget, annualSav, annualExp, annualBudget = 0;
  monthSav = calculateTotals('.monthly-savings');
  monthExp = calculateTotals('.monthly-expenses');
  monthBudget = calculateBudget('.monthly-incomes','.monthly-savings', '.monthly-expenses');
  annualSav = monthSav * 12;
  annualExp = monthExp * 12 + calculateTotals('.annual-expenses');
  annualBudget = calculateTotals('.monthly-incomes') * 12 - annualSav - annualExp;

  //display numbers on the web page
  document.querySelector('.total-monthly-savings').value = monthSav;
  document.querySelector('.total-monthly-expenses').value = monthExp;
  document.querySelector('.total-monthly-budget').value = monthBudget;
  document.querySelector('.total-annual-savings').value = annualSav;
  document.querySelector('.total-annual-expenses').value = annualExp;
  document.querySelector('.total-annual-budget').value = annualBudget;
}
