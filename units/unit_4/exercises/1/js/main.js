const SEARCH_BTN = document.querySelector("button");
const SELECT_ELEM1 = document.querySelectorAll("select")[0];
const SELECT_ELEM2 = document.querySelectorAll("select")[1];
const INPUT_ELEM = document.querySelector("input");
const DIV_ELEM = document.querySelector("div");

const OPTION_NODE_GENERATE = textNode => {
  const OPTION_TAG = document.createElement("option");
  OPTION_TAG.textContent = textNode;
  return OPTION_TAG;
};

(() => {
  const SUITE_LIST = [
    "100 Level",
    "200 Level",
    "300 Level - The Lounges",
    "300 Level - Chase Bridge",
    "300 Level - West Balcony",
    "400 Level - Blue Seats",
    "Event level - Suites",
    "Madison Club",
    "Lexus Level - Suites",
    "Signature Level - Suites",
    "Tao Lounge",
    "Floor Seats"
  ];

  const SELECT_TAG1 = document.querySelectorAll("select")[0];
  const SELECT_TAG2 = document.querySelectorAll("select")[1];

  for (let i = 0; i < SUITE_LIST.length; i++) {
    const OPTION_TAG = OPTION_NODE_GENERATE(SUITE_LIST[i]);

    SELECT_TAG1.appendChild(OPTION_TAG);
  }

  for (let i = 1; i < 101; i++) {
    const OPTION_TAG = OPTION_NODE_GENERATE(i);
    SELECT_TAG2.appendChild(OPTION_TAG);
  }
})();

const ERROR_MSG = msg => {
  DIV_ELEM.innerHTML = `<p style="color: red"><strong>${msg}</strong></p>`;
};

const SUCCESS_MSG = (level, section, cost, qty) => {
  DIV_ELEM.innerHTML = `<p style="color: green"><strong>${level} seats in section ${section} cost $${cost} each. For ${qty} your total is $${cost *
    qty}.</strong></p>`;
};

const PRICE_LEVEL_CHECKER = (level_name, sect_num, qty) => {
  const FORM = document.querySelector("form");

  switch (level_name) {
    case "100 Level":
      if (sect_num >= 101 && sect_num <= 120) {
        SUCCESS_MSG(level_name, sect_num, 375.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }

      break;

    case "200 Level":
      if (sect_num >= 201 && sect_num <= 227) {
        SUCCESS_MSG(level_name, sect_num, 150.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }

      break;

    case "300 Level - The Lounges":
      if (sect_num >= 301 && sect_num <= 309) {
        SUCCESS_MSG(level_name, sect_num, 125.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }

      break;

    case "300 Level - Chase Bridge":
      if (
        (sect_num > 309 && sect_num < 317) ||
        (sect_num > 323 && sect_num < 329)
      ) {
        SUCCESS_MSG(level_name, sect_num, 175.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "300 Level - West Balcony":
      if (sect_num > 316 && sect_num < 324) {
        SUCCESS_MSG(level_name, sect_num, 200.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "400 Level - Blue Seats":
      if (sect_num > 411 && sect_num < 422) {
        SUCCESS_MSG(level_name, sect_num, 250.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Event level - Suites":
      if (sect_num > 0 && sect_num < 19) {
        SUCCESS_MSG(level_name, sect_num, 1250.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Madison Club":
      if (sect_num > 58 && sect_num < 67) {
        SUCCESS_MSG(level_name, sect_num, 650.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Lexus Level - Suites":
      if (sect_num > 0 && sect_num < 59) {
        SUCCESS_MSG(level_name, sect_num, 750.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Signature Level - Suites":
      if (sect_num > 0 && sect_num < 19) {
        SUCCESS_MSG(level_name, sect_num, 400.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Tao Lounge":
      if (sect_num === 303) {
        SUCCESS_MSG(level_name, sect_num, 350.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    case "Floor Seats":
      if (sect_num > 0 && sect_num < 13) {
        SUCCESS_MSG(level_name, sect_num, 1500.0, qty);
        FORM.reset();
      } else {
        ERROR_MSG(`${sect_num} is not within section range.`);
      }
      break;

    default:
      break;
  }
};

SEARCH_BTN.addEventListener("click", () => {
  const SELECT_VALUE1 = SELECT_ELEM1.value;
  const SELECT_VALUE2 = SELECT_ELEM2.value;
  const INPUT_VALUE = INPUT_ELEM.value;

  if (
    SELECT_VALUE1 !== "Select Level" &&
    INPUT_VALUE !== "" &&
    SELECT_VALUE2 !== "Select Quantity"
  ) {
    PRICE_LEVEL_CHECKER(
      SELECT_VALUE1,
      Number(INPUT_VALUE),
      Number(SELECT_VALUE2)
    );
  } else {
    ERROR_MSG("Not a valid selection");
  }
});
