// Go Fish Pseudocode
// implementation of the game
// Author: Joey Longo & Chase Croy-Perrett
// Date: Oct 20 2023

// 1) Create a deck (an array of 52 items) of playing cards, 4 of each card type, and shuffle them randomly.
// 2) Ask how many players will play the game, awaiting a numerical input from 2 to 6.
    //2.1) If an invalid input is given, display an error and repeat the prompts.
// 3) Create a match variable for each person, representing each player's "points" twoards victory. Initialize each at 0.
// 4) Give each player 7 cards from the deck into their hand, removing them from the top of the deck array and inserting them into the different “hand” arrays.
// 5) Randomly order a list of player names to represent player order.
// Begin game loop
  // 6) Display each player’s current hand on their screen.
  // 7) Begin the next player’s turn.
    // 7.1) If a player has no cards, draw a card from the deck and skip to step 10.
  // 8) Have player select another player
  // 9) Have player select a card type (Kings, Queens, Jacks, etc.) that they contain in their hand.
    // 9.1)  if that player has 1 or more cards of that card type:
      // 9.1.1) remove all cards of that type from selected player’s hand
      // 9.1.2) If the player now has 4 of the same card type, remove those cards from their hand and add 1 to that person’s match.
  // 9.2) if else
    // 9.2.1) the player who asked draws 1 card from the deck
  // 10) Display to all players who asked a card from whom (if any), how many cards were taken (if any), and who drew a card from the deck (if any).
  // 11) Move the current player to the end of the turn order.
  // 12) If there still exists some cards in the deck or any player’s hands, return to step 6.
  // 13) Else, Whichever player has the most match points here is the winner, and the game terminates.
