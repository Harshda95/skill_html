function convertTemperature() {
    let result = document.getElementById('result');
    let celsiusValues = document.getElementById('celsius').value.split(',').map(val => parseFloat(val.trim()));
    let fahrenheitValues = celsiusValues.map(c => (c * 9/5) + 32);
    result.innerText = fahrenheitValues.join(", ") + "°F";
}