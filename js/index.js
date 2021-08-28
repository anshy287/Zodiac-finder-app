let dateOfBirth = document.querySelector('input[type="date"]');
const findZodiac = (event) => {
  event.preventDefault();
  dateOfBirth = new Date(dateOfBirth.value);
  const month = dateOfBirth.getmonth();
  const day = dateOfBirth.getdate();

  let zodiacDate = "";
  let zodiacSign = "";
  if ((month === 0 && day >= 20) || (month === 1 && day <= 18)) {
    zodiacSign = "Aquarius";
    zodiacDate = "20th January - 18th February";
  } else if ((month === 1 && day >= 19) || (month === 2 && day <= 20)) {
    zodiacSign = "Pisces";
    zodiacDate = "19th February-20th March";
  } else if ((month === 2 && day >= 21) || (month === 3 && day <= 20)) {
    zodiacSign = "Aries";
    zodiacDate = "21st March - 20th June";
  } else if ((month === 3 && day >= 20) || (month === 4 && day <= 20)) {
    zodiacSign = "Taurus";
    zodiacDate = "20th April - 20th May";
  } else if ((month === 4 && day >= 21) || (month === 5 && day <= 20)) {
    zodiacSign = "Gemini";
    zodiacDate = "21st May - 20th June";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 22)) {
    zodiacSign = "Cancer";
    zodiacDate = "21st June - 22nd July";
  } else if ((month === 6 && day >= 23) || (month === 7 && day <= 22)) {
    zodiacSign = "Leo";
    zodiacDate = "23rd July - 22nd August";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    zodiacSign = "Virgo";
    zodiacDate = "23rd August - 22nd September";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    zodiacSign = "Libra";
    zodiacDate = "23rd September - 22nd October";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 21)) {
    zodiacSign = "Scorpio";
    zodiacDate = "23rd October - 21st November";
  } else if ((month === 10 && day >= 22) || (month === 11 && day <= 21)) {
    zodiacSign = "Sagittarius";
    zodiacDate = "22nd November- 21st December";
  } else if ((month === 11 && day >= 22) || (month === 0 && day <= 19)) {
    zodiacSign = "Capricorn";
    zodiacDate = "22nd December -  19th January";
  }
  sessionStorage.setItem("zodiacSign", zodiacSign);
  sessionStorage.setItem("zodiacDate", zodiacDate);
  location.href = "./result.html";
};
