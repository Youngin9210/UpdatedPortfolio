// array selecting all myWork images seperately to loop through later
const myWorkImgs = [
  (myWork1 = $("#myWork1")),
  (myWork2 = $("#myWork2")),
  (myWork3 = $("#myWork3")),
  (myWork4 = $("#myWork4")),
  (myWork5 = $("#myWork5")),
  (myWork6 = $("#myWork6")),
];

// array of urls to loop through later and match with images
const myWorkUrls = [
  (myWork1 = "https://youngin9210.github.io/WorkDay-Schedule-Tracker/"),
  (myWork2 = "https://youngin9210.github.io/JS-Code-Quiz/"),
  (myWork3 = "https://youngin9210.github.io/Weather-Dashboard/"),
  (myWork4 = "https://youngin9210.github.io/Passwords-for-Dayzzz/"),
  (myWork5 = "https://moagermo.github.io/Dinner-And-Drinkz/"),
  (myWork6 = "https://youngin9210.github.io/Portfolio"),
];

// defining a variable to check use as a media query
const screenSize = window.matchMedia("(max-width: 768px)");

function checkScreenSize(e) {
  // checking if the event matches the variable passed through
  if (e.matches) {
    // then adding a tap listener to open a url when tapped on mobile phones and tablets
    for (let i = 0; i < myWorkImgs.length; i++) {
      let img = myWorkImgs[i];
      let url = myWorkUrls[i];
      img.on("tap", function () {
        window.open(url);
      });
    }
  }
}

// adding an event listener to check to see if the screenSize variable matches
screenSize.addListener(checkScreenSize);

// calling a function to check the screen size on page load
checkScreenSize(screenSize);
