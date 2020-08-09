//UI Controller
const submitButton = document.querySelector('.calcBtn');
submitButton.addEventListener('click', calculateBudget);

function calculateBudget(event) {
  event.preventDefault();

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

  function calculateBudget(income, savings, expenses) {
      console.log('calculating budget!')
    var incomeTotal = calculateTotals(income);
    var savingsTotal = calculateTotals(savings);
    var expensesTotal = calculateTotals(expenses);

    return incomeTotal - savingsTotal - expensesTotal;
  }

  var monthSav, monthExp, monthBudget, annualSav, annualExp, annualBudget = 0;
  monthSav = calculateTotals('.monthly-savings');
  monthExp = calculateTotals('.monthly-expenses');
  monthBudget = calculateBudget('.monthly-incomes','.monthly-savings', '.monthly-expenses');
  annualSav = monthSav * 12;
  annualExp = monthExp * 12 + calculateTotals('.annual-expenses');
  annualBudget = calculateTotals('.monthly-incomes') * 12 - annualSav - annualExp;

  document.querySelector('.total-monthly-savings').value = monthSav;
  document.querySelector('.total-monthly-expenses').value = monthExp;
  document.querySelector('.total-monthly-budget').value = monthBudget;
  document.querySelector('.total-annual-savings').value = annualSav;
  document.querySelector('.total-annual-expenses').value = annualExp;
  document.querySelector('.total-annual-budget').value = annualBudget;
}
