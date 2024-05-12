// dom
const yearSelector = document.querySelector("#yearSelector");
const search = document.querySelector("#search");
const modalTitle = document.querySelector("#modalTitle");
const modalImg = document.querySelector("#modalImg");

// limit for searching
const startYear = 1920;
const endYear = 2024;

// data storage
let zodiacDataNumber = "";
const zodiacQueqe = [
  "Pig",
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Goat",
  "Monkey",
  "Rooster",
  "Dog",
];

// render yearSelector
for (let i = startYear; i < endYear + 1; i++) {
  yearSelector.innerHTML += `
        <option value="${i}" class = 'Value'>
        ${i}
        </option>
  `;
}

// yearSelector function Desc :  select a year within the fixed limit (on click), fetch its value then sore it thru variable 'zodiacDataNumber'
yearSelector.addEventListener("change", function onSelectorClicked(event) {
  const selcetedYear = event.target.value;
  zodiacDataNumber = selcetedYear;
});

// search function Desc : render modal page with the stored value
search.addEventListener("click", function Search() {
  zodiacDataNumber = Number(zodiacDataNumber) % 12;
  modalTitle.innerText = `Your Chinese Zodiac Animal is : ${zodiacQueqe[zodiacDataNumber]} `;
  modalImg.innerHTML = `<img src="./public/${zodiacDataNumber}.jpg" alt="${zodiacQueqe[zodiacDataNumber]}" class="img">`;
  zodiacDataNumber = "";
});
