const convertNum = () => {
  let numToConvert = document.querySelector("input").value;
  document.querySelector(
    "div"
  ).innerHTML = `<p>The itemName that you would like to purchase is ${numToConvert}cm.</p>
  <p>The itemName is ${(numToConvert / 2.54).toPrecision(
    1
  )} long in inches.</p>`;
};

document.querySelector("button").addEventListener("click", convertNum);
