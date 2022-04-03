const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It's nice and sunny outside. In case you're leaving, you might wanna wear shorts and some bright coloured t-shirt. Don't forget your sunglasses!!";
  } else if (choice === "rainy") {
    para.textContent =
      "It looks like rain is falling. You might want to dress up in your rain coat and some good boots if you're leaving the house. Also grab your umbrella!";
  } else if (choice === "snowing") {
    para.textContent =
      "It appears that the snow is comming down! Better stay inside near the fire or dress up and maybe go build a snowman?";
  } else if (choice === "overcast") {
    para.textContent =
      "It's not raining yet, but the sky turns grey and gloomy. Make sure you take your rain coat and umbrella with you, in case you're leaving the house!";
  } else {
    para.textContent = " ";
  }
}
