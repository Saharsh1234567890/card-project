"use strict";

const btnSubmitOne = document.querySelector("#submit-button-one");
const btnSubmitTwo = document.querySelector("#submit-button-two");
const btnSubmitThree = document.querySelector("#submit-button-three");
const btnSubmitFour = document.querySelector("#submit-button-four");
const btnSubmitFive = document.querySelector("#submit-button-five");
const btnSubmitSix = document.querySelector("#submit-button-six");
const btnSubmitSeven = document.querySelector("#submit-button-seven");
const btnSubmitEight = document.querySelector("#submit-button-eight");

let storageOne = 0;
let submitFunctionOne;

btnSubmitOne.addEventListener("click", function () {
  submitFunctionOne = Number(document.querySelector("#card-no-input").value);
  storageOne = submitFunctionOne;
});

let storageTwo = "";
let submitFunctionTwo;

btnSubmitTwo.addEventListener("click", function () {
  submitFunctionTwo = document.querySelector("#name-input").value;
  storageTwo = submitFunctionTwo;
})

let storageThree = "";
let submitFunctionThree;

btnSubmitThree.addEventListener("click", function () {
  submitFunctionThree = document.querySelector("#description-input").value;
  storageThree = submitFunctionThree;
})

let storageFour = "";
let submitFunctionFour;

btnSubmitFour.addEventListener("click", function () {
  submitFunctionFour = document.querySelector("#img-input").value;
  storageFour = submitFunctionFour;
})

let storageFive = "";
let submitFunctionFive;

btnSubmitFive.addEventListener("click", function () {
  submitFunctionFive = document.querySelector("#button-text-input").value;
  storageFive = submitFunctionFive;
})

let storageSix = "";
let submitFunctionSix;

btnSubmitSix.addEventListener("click", function () {
  submitFunctionSix = document.querySelector("#button-link-input").value;
  storageSix = submitFunctionSix;
})

let storageSeven = "";
let submitFunctionSeven;

btnSubmitSeven.addEventListener("click", function () {
  submitFunctionSeven = document.querySelector("#bg-input").value;
  storageSeven = submitFunctionSeven;
})

let storageEight = "";
let submitFunctionEight;

btnSubmitEight.addEventListener("click", function () {
  submitFunctionEight = document.querySelector("#text-color-input").value;
  storageEight = submitFunctionEight;
})

function functionHTML() {

  document.getElementById("name-input").value = "Galaxy";
  document.getElementById("description-input").value = "A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.";
  document.getElementById("img-input").value = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/310px-NGC_4414_%28NASA-med%29.jpg";
  document.getElementById("button-text-input").value = "Learn More";
  document.getElementById("button-link-input").value = "https://en.wikipedia.org/wiki/Galaxy";
  document.getElementById("bg-input").value = "#000";
  document.getElementById("text-color-input").value = "#fff";

  let cardStorage = "";
  for (let index = 0; index < storageOne; index++) {
    const cityName = storageTwo;
    const cityDescription = storageThree;
    const imageAddress = submitFunctionFour;
    const buttonText = submitFunctionFive;
    const buttonLink = submitFunctionSix;
    const bgColor = submitFunctionSeven;
    const textColor = submitFunctionEight;

    cardStorage += cardHTML(cityName, cityDescription, imageAddress, buttonText, buttonLink, bgColor, textColor);
  }
  document.getElementById("cardDiv").innerHTML = cardStorage;

  function cardHTML(city, description, imageSrc, btnText, btnLink, bgCol, textCol) {
    let letCardHTML;
    letCardHTML =
      `
  <div class="card mt-4 ml-5 mb-4" style="width: 18rem; background-color: ${bgCol}; color: ${textCol}; border-radius: 10px;">
  <img
    src="${imageSrc}"
    alt="Input the Image Address in the Input Field"
    style="height: 13rem;
    class="mb-2"
  />
  <div class="card-body">
    <h5 class="card-title pl-1">${city}</h5>
    <p class="card-text pl-1">${description}</p>
    <a href="${btnLink}" target="_blank">${btnText}</a>
  </div>
</div>`;
    return letCardHTML;
  }
}
