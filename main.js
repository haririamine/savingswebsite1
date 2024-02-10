document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.querySelector('.calculate-btn');

    calculateBtn.addEventListener('click', function() {
        const entryAge = parseFloat(document.querySelector('.entry-age').value);
        const age = parseFloat(document.querySelector('.age').value);
        const desiredAmount = parseFloat(document.querySelector('.desired-amount').value);
        const annualSalary = parseFloat(document.querySelector('.annual-salary').value);
        const savingsPercentage = parseFloat(document.querySelector('.savings-percentage').value);
        const raisePercentage = parseFloat(document.querySelector('.raise-percentage').value);

        const numberOfWorkingYears = age - entryAge;
        const accumulatedSavings = calculateAccumulatedSavings(annualSalary, raisePercentage, numberOfWorkingYears, savingsPercentage);

        document.getElementById('accumulated-savings').innerText = '$' + accumulatedSavings.toFixed(2);

        const numberOfYearsNeeded = calculateNumberOfYearsNeeded(annualSalary, raisePercentage, savingsPercentage, desiredAmount);
        document.getElementById('number-of-years-needed').innerText = numberOfYearsNeeded + 'y';
    });

    function calculateAccumulatedSavings(annualSalary, raisePercentage, numberOfWorkingYears, savingsPercentage) {
        let accumulatedSavings = 0;

        for (let year = 1; year <= numberOfWorkingYears; year++) {
            accumulatedSavings += annualSalary * (savingsPercentage / 100);
            annualSalary *= (1 + raisePercentage / 100);
        }

        return accumulatedSavings;
    }

    function calculateNumberOfYearsNeeded(annualSalary, raisePercentage, savingsPercentage, desiredAmount) {
        let accumulatedSavings = 0;
        let years = 0;

        while (accumulatedSavings < desiredAmount) {
            accumulatedSavings += annualSalary * (savingsPercentage / 100);
            annualSalary *= (1 + raisePercentage / 100);
            years++;
        }

        return years;
    }
});