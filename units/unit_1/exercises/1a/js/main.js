const input = document.getElementById("num-input");
const resultP = document.getElementById("result-status");
const isFarenheit = document.getElementById("isFarenheit");

input.addEventListener("input", () => {
  renderResult();
});

isFarenheit.addEventListener("change", () => {
  renderResult();
});

const convertToFar = numInput => numInput * 1.8 + 32;

const convertToCel = numInput => (numInput - 32) * 0.5556;

const renderResult = () => {
  const inputVal = input.value;

  if (inputVal) {
    if (Number.isNaN(inputVal)) {
      resultP.innerHTML = "Enter valid number";
    } else {
      const convertedNum = isFarenheit.checked
        ? convertToFar(inputVal)
        : convertToCel(inputVal);

      let degreeType = isFarenheit.checked ? "F" : "C";

      resultP.innerHTML = `${convertedNum.toFixed(1)}${degreeType}`;
    }
  } else {
    resultP.innerHTML = "Result will appear here";
  }
};
