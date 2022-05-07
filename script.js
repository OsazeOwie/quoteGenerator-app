//My first javaScript project with no tutorials
//A Random Quote Generator

//Assigning variables to HTML elements
const quoteTxt = document.getElementById("quotes");
const aurthor = document.getElementById("aurthor");
const quoteBtn = document.getElementById("btn");
const bgColor = document.getElementById("body");
const borderColor = document.getElementById("container");

/*Function that randomly displays a quote with the corresponding
aurthors name and also changes the color of the background
*/
const changeText = () => {

    const random = Math.floor(Math.random() * quotesArr.length);
    quoteTxt.innerHTML = quotesArr[random]
    aurthor.innerHTML = nameArr[random]
    bgColor.style.background = bgColorArr[random]
    borderColor.style.borderColor = borderColorArr[random]
    quoteBtn.style.backgroundColor = borderColorArr[random]
    quoteBtn.style.color = "black"
}

//An array of quotes
const quotesArr = ["\“A dream is what makes people love life even when it is painful\”",

    "\“True, we love life, not because we are used to living, but because we are used to loving. There is always some madness in love, but there is also always some reason in madness.\”",

    "\“Don’t quit. Suffer now and live the rest of your life as a champion.\”",

    "\ “Don’t grieve. Anything you lose comes around in another form.\”",

    "\“Though nobody can go back and make a new beginning… Anyone can start over and make a new ending.\”",

    "\“Instead of worrying about what you cannot control, shift your energy to what you can create.\”",

    "\“Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.\”",

    "\“Don’t quit. Suffer now and live the rest of your life as a champion.\”",

    "\“Some beautiful paths can’t be discovered without getting lost.\”",

    "\“The more difficult the victory, the greater the happiness in winning.\”",

    "\ “Sometimes the greatest thing to come out of all your hard work isn’t what you get for it, but what you become for it.\”",

    "\“I am not someone who is ashamed of my past. I’m actually really proud. I know I made a lot of mistakes, but they, in turn, were my life lessons.\”"];

//An array of the aurthors
const nameArr = ["—Theodore Zeldin", "—Petrach",
    "—Muhammad Ali", "—Chico Xavier", "—Roy T. Bennett", "—Rumi",
    "—Roy T. Bennett", "—Muhammad Ali", "—Erol Ozan", "—Pele",
    "—Steve Maraboli", "—Drew Barrymore"];

//An array of backgroundcolors
const bgColorArr = ["rgb(46, 69, 96)", "rgb(206, 69, 236)", "rgb(184, 69, 203)",
                 "rgb(211, 69, 184)", "rgb(226, 69, 184)", "rgb(226, 69, 224)", 
                 "rgb(199, 69, 226)", "rgb(164, 69, 141)", "rgb(164, 69, 141)", 
                 "rgb(219, 69, 182)", "rgb(173, 69, 189)", "rgba(163, 69, 78, 0.61)"];

const borderColorArr = ["rgb(466, 100, 853)", "rgb(606, 285, 236)", "rgb(184, 285, 603)",
"rgb(211, 286, 184)", "rgb(285, 196, 184)", "rgb(856, 184, 624)", 
"rgb(685, 184, 226)", "rgb(164, 685, 165)", "rgb(185, 612, 141)", 
"rgb(219, 856, 182)", "rgb(163, 185, 689)", "rgba(163, 685, 978, 0.69)"]



//The click event that will initiate the changeText function above
quoteBtn.addEventListener("click", changeText)
