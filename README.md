# Battleship Team Project Week: Intro

#### A program that allows users to play the board game Battleship. 10/2/17

#### By **Marcus Parmentier, Hansen, Isaac Niamatali, Sravanthi Velaga & Saneyee Sarkar**

## Description

Battleship is a guessing game for two players.It is played on board on which the players' fleets of ships are marked. The locations of the fleet are concealed from the other player. Players alternate turns calling "shots" at the other player's ships,which results in either 'Hit' or 'Miss' and the objective of the game is to destroy the opposing player's fleet.

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Gathers Player One's Ship Location Selections** | User input: Checked Box: 7 and 12 | Output: "[0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]" |
| **Program Gathers Player Two's Ship Location Selections** | User input: Checked Box: 7 and 12 | Output: "[0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]" |
| **Player guesses location on other Player board and misses**| Input: "Box: 18" | Output: "miss" |
| **Player guesses location on opponent's board and hits**| Input: "Box: 7" | Output: "hit" |
| **Player misses, program switches turns**| Input: "Box: 18" | Output: "miss", "Next player's turn" |
| **Player 1 guesses location on Player 2 board**| Input: "Bottom Board: Box: 18" | Output: "miss", "Next player's turn" |
| **Player hits an opponent's ship, the player's turn continues**| Input: "Box: 12" | Output: "hit", "Pick another location" |
| **Either player sinks all of the opponent's ships, runs winning condition and ends program**| Input: Player: "Box: 7 and 12" | Output: "hit", "hit", "You have won" |


## Prerequisites

* A browser capable of running HTML, JS, CSS, Bootstrap, Jquery.

## Deployment

* Enter webpage into browser.

## Built With

  * CSS
  * HTML
  * Atom
  * Command Prompt
  * Bootstrap
  * Github
  * Javascript
  * Jquery


## Github Pages

 * Site is published at


 ## Support and contact details

 _Email me at marcusjparmentier@gmail.com with any questions, comments, or concerns._


### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **Marcus Parmentier, Hansen, Isaac Niamatali, Sravanthi Velaga & Saneyee Sarkar**
