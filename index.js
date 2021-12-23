"use strict";

function functionHTML() {
  let arr = [
    [
      "New York",
      "New York, often called New York City to distinguish it from New York State, or NYC for short, is the most populous city in the United States.",
      "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
    ],
    [
      "Paris",
      "Paris is located in northern central France, in a north-bending arc of the river Seine whose crest includes two islands. It is known for it's Eifill Tower",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwW13pHNCXhnrCOvnY5_3cI-agOPOEtfKM0rqLdS5vzwV32tL0oSFwmxRQ4bQ-I4zDDOY&usqp=CAU",
    ],
    [
      "London",
      "London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km)",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiQfFvh1Ka1TEvD0fIgFVj-DbkcTidG-t8bKA2UDt7pFB9ncb2SEb3NtncNOiKcdEJySQ&usqp=CAU",
    ],
    [
      "Bangkok",
      "Bangkok is the capital and most populous city of Thailand, also known by its endonym Krung Thep Maha Nakhon or colloquially Krung Thep",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdxMWkmoUBuJSoLswiFWq86O8mCvC1QjW-xuPDY9s4aVNHGdSnGMskGBRFz7AqQqju3XA&usqp=CAU",
    ],
    [
      "Dubai",
      "Dubai is the most populous city in the United Arab Emirates (UAE) and the capital of the Emirate of Dubai established in the 18 Century",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLQqXbbiTkTGpr4q32xRI1JbbSlkTfERixCDCdqzSaZCfP7T3h9_TPjDSv4AryU-lr-M&usqp=CAU",
    ],
  ];

  let cardStorage = "";
  for (let index = 0; index < arr.length; index++) {
    const cityName = arr[index][0];
    const cityDescription = arr[index][1];
    const imageAddress = arr[index][2];
    cardStorage += cardHTML(cityName, cityDescription, imageAddress);
  }
  document.getElementById("cardDiv").innerHTML = cardStorage;

  function cardHTML(city, description, imageSrc) {
    let letCardHTML;
    letCardHTML =
      `
  <div class="card mt-4 ml-5 mb-2" style="width: 18rem;">
  <img
    src="` +
      imageSrc +
      `"
    alt="Error"
    style="height: 13rem;
    class="mb-2"
  />
  <div class="card-body">
    <h5 class="card-title pl-1">` +
      city +
      `</h5>
    <p class="card-text pl-1">` +
      description +
      `</p>
    <button class="btn btn-primary">Visit Now</button>
  </div>
</div>`;
    return letCardHTML;
  }
}
