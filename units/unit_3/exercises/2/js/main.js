const convertToOunces = () => {
  const input = document.querySelector("input"); //HTML INPUT ELEMENT
  const amountInLiters = input.value; // VALUE OF THE HTML INPUT ELEMENT UPON SUBMISSION
  const pTag = document.querySelectorAll("p"); // THE ENTIRE COLLECTION OF P TAG HTML ELEMENTS
  const ouncesDrank = amountInLiters * 33.814; // CALCULATION OF OUNCES BASED OFF INPUT VALUE
  const cupsDrank = amountInLiters * 4.227; // CALCULATION OF CUPS BASED OFF INPUT VALUE

  /* FOR LOOP USED TO ITERATE THROUGH THE COLLECTION OF HTML P TAG ELEMENTS. MAKES USE OF A CONDITIONAL TO OUTPUT TO THE FIRST OR THE SECOND P TAG ELEMENT. */
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

  /* EXTRA CREDIT OUTPUT OF CUPS OF WATER */
  pTag[2].textContent = `That comes out to ${cupsDrank.toFixed(
    1
  )} cups of water.`;

  input.value = "";
};

/* CLICK LISTENER GRABBING THE FIRST BUTTON ELEMENT IN HTML FILE */
document.querySelector("button").addEventListener("click", convertToOunces);
