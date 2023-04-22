
// Target the select element in the dom
let select = document.querySelector("select");

// ** Function to get all options and display on the dom ** //

function getOptions() {
  // Call the API that you added to the server
  fetch("/api/allZodiacs")
    .then((res) => res.json())
    .then((data) => {

      // Gets all keys in an object and returns an array
      let keys = Object.keys(data);

      // Loop through the array of keys and create an option for each one, then append it to the dropdown menu (select)
      // Use i < keys.length - 1 to not display the last element "unknown" as an option
      for (let i = 0; i < keys.length - 1; i++) {
        let option = document.createElement("option");
        option.innerText = keys[i];
        select.appendChild(option);
      }
    });
}

// run the function when the page loads
getOptions();

// ** Function to get selected option, which you already have. 
// Just replace input.value with select.value ** //
document.querySelector("button").addEventListener("click", zodiacOptions);

function zodiacOptions() {
  let userSelection = select.value;

  console.log(userSelection);
  // api call here
}

const revealBtn = document.querySelector('#reveal').addEventListener('click', getZodiac);
let sentenceDisplay = document.querySelector('#displayZodiac');


function getZodiac() {
  const zodiac = document.querySelector('select').value
  const url = `/api/${zodiac}`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#displayZodiac').innerText = data.displayZodiac
      document.querySelector('#funFacts').innerText = data.funFacts
      document.querySelector('#drag').innerText = data.drag
    })
}
