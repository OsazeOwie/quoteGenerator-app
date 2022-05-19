//Assigning variables to HTML elements
const quoteTxt = document.getElementById("quotes");
const author = document.getElementById("aurthor");
const quoteBtn = document.getElementById("btn");
const bgColor = document.getElementById("body");
const borderColor = document.getElementById("container");

/*Function that randomly displays a quote with the corresponding
aurthors name with the use of an API and also changes the color of the background
*/
function generateQuote() {
      const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
                'X-RapidAPI-Key': '5cc4be791bmsh4f1e14656a36b6dp1bd2e9jsnba59f6029352'
            }
        };
        
        if (options !== null) {
            fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${ response.status }`);
                }
                return response.json();
              })
              .then((response) => {
                quoteTxt.innerHTML = response.content;
                author.innerHTML = response.originator.name;
                const random = Math.floor(Math.random() * bgColorArr.length);
                bgColor.style.background = bgColorArr[random];
                borderColor.style.borderColor = borderColorArr[random];
                quoteBtn.style.backgroundColor = borderColorArr[random];
                quoteBtn.style.color = "black";
              })
              .catch((err) => console.error(err.message));
          }
        }


//An array of backgroundcolors
const bgColorArr = ["rgb(46, 69, 96)", "rgb(206, 69, 236)", "rgb(184, 69, 203)",
                 "rgb(211, 69, 184)", "rgb(226, 69, 184)", "rgb(226, 69, 224)", 
                 "rgb(199, 69, 226)", "rgb(164, 69, 141)", "rgb(164, 69, 141)", 
                 "rgb(219, 69, 182)", "rgb(173, 69, 189)", "rgba(163, 69, 78, 0.61)"];

const borderColorArr = ["rgb(466, 100, 853)", "rgb(606, 285, 236)", "rgb(184, 285, 603)",
"rgb(211, 286, 184)", "rgb(285, 196, 184)", "rgb(856, 184, 624)", 
"rgb(685, 184, 226)", "rgb(164, 685, 165)", "rgb(185, 612, 141)", 
"rgb(219, 856, 182)", "rgb(163, 185, 689)", "rgba(163, 685, 978, 0.69)"]

