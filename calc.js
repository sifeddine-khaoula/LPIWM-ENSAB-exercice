function calculateSavings() {
    var salary = parseFloat(document.getElementById('baseSalary').value);
    var years = parseInt(document.getElementById('savingYears').value);
    var raisePercentage = parseFloat(document.getElementById('raisePercentage').value) / 100;
    var savingPercentage = parseFloat(document.getElementById('savingPercentage').value) / 100;
    var savings = 0;
    var currentSalary = 0;

    for (let x = 1; x <= years; x++) {
      currentSalary = (raisePercentage * currentSalary) + salary;
      savings = (savingPercentage * currentSalary) + savings;
    }

    document.getElementById('result').value = savings.toFixed(2);
    
  }