const studentInput = document.getElementById("name");
const addBtn = document.getElementById("add-inp-btn");
const inputDiv = document.getElementById("inputs");
const submitBtn = document.getElementById("submit-btn");
const resultP = document.getElementById("result");
const avgForm = document.getElementById("avgForm");

addBtn.addEventListener("click", () => {
  let node = document.createElement("input");
  node.setAttribute("placeholder", "Addtional Score");
  node.setAttribute("type", "number");
  node.setAttribute("class", "scores a-scores");

  inputDiv.appendChild(node);
});

submitBtn.addEventListener("click", () => {
  const inputsLength = document.querySelectorAll(".scores").length;
  let totalInputs = 0;
  const studentName = studentInput.value ? studentInput.value : "Student";
  let totalScore = 0;

  for (let i = 0; i < inputsLength; i++) {
    let inputVal = document.getElementsByClassName("scores")[i].value;

    if (inputVal) {
      totalScore += Number(inputVal);
      totalInputs++;
    }
  }

  totalInputs > 0
    ? (resultP.innerHTML = `${studentName} has averaged ${totalScore /
        totalInputs} in math.`)
    : (resultP.innerHTML = `No data entered`);
  removeExtraInputs();
  avgForm.reset();
});

const removeExtraInputs = () => {
  const elements = document.getElementsByClassName("a-scores");

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
};
