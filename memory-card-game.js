// make an array to contain the cards elements (divs)
let cards = [];

// get the card elements from html, and store them inside the array variable that i created
// so i am able to use it
cards = document.querySelector(".cards-container").children;

//
 

// Use a loop to add and "eventListener" to all the cards element.
// This is a "Click" EventListener, now each time i click a card, it will do
// whatever code that is inside the eventListener brackets "{}".
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    // Now i have to find a way to show the image inside the card when you click it.
    // i still haven't put an image inside any of the cards, i guess the way to do this
    // is to make a class, a class that will not be in the element by default.
    // When i click one of the cards, a new class will be added that will change the image
    // inside the card (it would be could if i could add a little animation to resembles
    // a card being turn around, i'll later see if i can add it)

    cards[i].children[0].src="images/pngwing.com(1).png"

  })
}