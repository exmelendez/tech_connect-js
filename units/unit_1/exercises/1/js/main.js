let input = Number(prompt("Enter Celsius Value"));

while (Number.isNaN(input)) {
  input = Number(prompt("Enter Correct Celsius Value"));
}

const farenheit = input * 1.8 + 32;
alert(`The temperature is ${farenheit.toFixed(1)}F`);
