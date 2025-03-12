function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    if (weight > 0 && height > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        document.getElementById("bmiResult").textContent = `Your BMI is ${bmi}`;
    } else {
        document.getElementById("bmiResult").textContent = "Please enter valid values.";
    }
}