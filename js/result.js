const zodiacSign = sessionStorage.getItem("zodiacSign");
const zodiacDate = sessionStorage.getItem("zodiacDate");
if (!zodiacSign) {
  location.href = "./index.html";
}
document.title = "your zodiac - ${zodiacSign}";
const imageElement = document.querySelector("img");
imageElement.src = "./icons/${zodiacSign}.svj";
imageElement.alt = zodiacSign;

document.getElementById("zodiac-sign").innerHTML = zodiacSign;
document.getElementById("zodiac-date").innerHTML = zodiacDate;
