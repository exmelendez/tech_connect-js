const convertToOunces = () => {
  const input = document.querySelector("input");
  const amountInLiters = input.value;
  const pTag = document.querySelectorAll("p");
  const ouncesDrank = amountInLiters * 33.814;
  const cupsDrank = amountInLiters * 4.227;

  for (let i = 0; i < pTag.length; i++) {
    i == 0
      ? (pTag[
          i
        ].textContent = `You have drank ${amountInLiters} liters of water.`)
      : (pTag[
          i
        ].textContent = `In total for the day you have finished ${ouncesDrank.toFixed(
          1
        )} ounces of water.`);
  }

  pTag[2].textContent = `That comes out to ${cupsDrank.toFixed(
    1
  )} cups of water.`;

  input.value = "";
};

document.querySelector("button").addEventListener("click", convertToOunces);
