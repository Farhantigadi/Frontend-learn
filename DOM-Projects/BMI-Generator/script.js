let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let height = parseFloat(document.querySelector('#height').value);
    let weight = parseFloat(document.querySelector('#weight').value);
    let result = document.querySelector('#result');
    
    if (isNaN(height) || height <= 0) {
        result.innerHTML = "Please provide a valid height.";
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please provide a valid weight.";
    } else {
        let bmi = weight / ((height * height)/10000).toFixed(2);
        result.innerHTML = `Your BMI is <span>${bmi}</span>`;
    }
});
