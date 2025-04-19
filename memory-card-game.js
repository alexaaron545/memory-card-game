/* This function will ramdomize the order of the numbers (these numbers will be used as indexes for the cases
in the switch statement). This indexes will decide what image is inside each card (randomly)
*/
function randomize_cards_image() {
  cards_number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  random_index = 0;

  current_index = cards_number.length;

  while (current_index != 0) {
    random_index = Math.floor(Math.random() * current_index)
    current_index--;

    [cards_number[current_index], cards_number[random_index]] = [
      cards_number[random_index], cards_number[current_index]];
  }

  return cards_number
}

// This function checks if two cards are not pair, returns "true" if
// they don't match, and "false" if they match.
function check_if_cards_dont_match(index, index_of_card_array, cards) {
  index_of_card_array.push(index)
  
  console.log(index_of_card_array.length)
  if (index_of_card_array.length == 2) {
    if (cards[index_of_card_array[0]].children[0].src == cards[index_of_card_array[1]].children[0].src) {
      return false;
    } else {
      return true;
    }
  }

}

// This function flips back the cards if they are not the same
function flip_back_if_not_match(index_of_card_array, cards) {
  console.log(index_of_card_array)
  cards[index_of_card_array[0]].children[0].src = "images/pngwing.com(8).png"
  cards[index_of_card_array[1]].children[0].src = "images/pngwing.com(8).png"
  index_of_card_array.length = 0;
}

// Here ("main" function) will be most of the code
function main() {
  // make an array to contain the cards elements (divs)
  let cards = [];
  let index_of_card_array = [];
  result = "";

  // get the card elements from html, and store them inside the array variable that i created
  // so i am able to use it
  cards = document.querySelector(".cards-container").children;

  /* 
  Here we are calling the "randomize_cards_image function" and putting the value it returns
  inside the "cards_number_random" variable (the value is an array).
  */
  cards_number_random = randomize_cards_image();

  // Use a loop to add and "eventListener" to all the cards element.
  // This is a "Click" EventListener, now each time i click a card, it will do
  // whatever code that is inside the eventListener brackets "{}".
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {

      // if the result of the "check_if_cards_dont_match" function is equal to == "true"
      // (the cards don't match), the "flip_back_if_not_match" function is gonna flip or
      // return them to their original image (the question mark), if they do match
      // they are gonna stay flipped (the image can be seen).
      if (result == true) {
        flip_back_if_not_match(index_of_card_array, cards)
      } else if (result == false) {
        index_of_card_array.length = 0;
      }

      /* When you click a card, the switch statement detects what card you clicked and uses the 
      "card_number_random" array, that contains numbers from 1-11 randomly orderer, this numbers will be used
      in each "case" inside the switch to randomly choose in what card each image will be. It does this by changing
      the inner src inside the image.
      */
      switch (i) {
        case cards_number_random[0]:
        case cards_number_random[1]:
          cards[i].children[0].src = "images/pngwing.com(1).png";
          break;
        case cards_number_random[2]:
        case cards_number_random[3]:
          cards[i].children[0].src = "images/pngwing.com(2).png";
          break;
        case cards_number_random[4]:
        case cards_number_random[5]:
          cards[i].children[0].src = "images/pngwing.com(3).png";
          break;
        case cards_number_random[6]:
        case cards_number_random[7]:
          cards[i].children[0].src = "images/pngwing.com(4).png";
          break;
        case cards_number_random[8]:
        case cards_number_random[9]:
          cards[i].children[0].src = "images/pngwing.com(5).png";
          break;
        case cards_number_random[10]:
        case cards_number_random[11]:
          cards[i].children[0].src = "images/pngwing.com(6).png";
      }

      result = check_if_cards_dont_match(i, index_of_card_array, cards)
      console.log(result)

    })
  }
}

main()