// selects all the elements that have class .card and add them to a node list
const cards = document.querySelectorAll(".card");

// adds an event listener for a click event
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // calls removeActiveClasses to remove .active from all divs
    removeActiveClasses();
    // adds .active to card clicked
    card.classList.add("active");
  });
});

// removes .active from all active divs
function removeActiveClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
