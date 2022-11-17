const inputTextEl = document.getElementById("unit-text-input");
const resultsContainerEl = document.getElementById("results-container");

function convert() {
  let number = inputTextEl.value;
  if (number === "" || Number(number) === 0) {
    alert("please enter number to convert");
    return;
  }
    resultsContainerEl.innerHTML = `
<div class="result">
  <h2>Length (Meter/Feet)</h2>
  <p id="meters-feets">
    ${number} meters = ${(number * 3.2808399).toFixed(
      3
    )} feet | ${number} feet = ${(number * 0.3048).toFixed(3)} meters
  </p>
</div>
<div class="result">
  <h2>Volume (Liters/Gallons)</h2>
  <p id="liters-gallons">
      ${number} liters = ${(number * 0.264172052).toFixed(
      3
    )} gallons | ${number} gallons = ${(number * 3.78541178).toFixed(3)} liters
  </p>
</div>
<div class="result">
    <h2>Mass (Kilograms/Pounds)</h2>
    <p id="kilos-pounds">
      ${number} kilos = ${(number * 2.20462262).toFixed(
      3
    )} pounds | ${number} pounds = ${(number * 0.45359237).toFixed(3)} kilos
    </p>
</div>
  `;
}
