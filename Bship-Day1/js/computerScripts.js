//Business Logic**********************************************************


///Selection of Squares
var board1 =
   [0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0]

var board2 =
   [0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0]

///Global Variables
var player1Value = [];
var player2Value = [];
var index = 2;
var boxes;

///Changing turn between Player 1 and Player 2
var changeTurn = function(index){
  if(index === 0){
     return index += 1;
  } else if (index === 1){
     return index -= 1;
  };
};

///Computer Random function
var computerRand = function(){
  return Math.floor(Math.random() * 36) + 1;
};

///Computer Selection function
var compSelect = function(){
  for(i=0;i<boxes;i++){
    var compValue = computerRand();
    while(board2[compValue-1] === 1){
      compValue = computerRand();
    };
    board2[compValue-1]= 1;
  };
};

///Computer AI Turn function
var computerTurn = function(){
  var compValue = computerRand();
  while(board1[compValue-1] === 2){
    compValue = computerRand();
  };
  if(index === 0 && board1[compValue-1] != 2){
    if(board1[compValue-1] === 1){
      alert("Computer has hit a square.");
      $("#a"+compValue).removeClass("purplebox");
      $("#a"+compValue).addClass("hit");
      board1[compValue-1] = 2;
      winning(board1);
      computerTurn();
    } else if (board1[compValue-1] === 0){
      alert("computer miss");
      $("#a"+compValue).removeClass("purplebox");
      $("#a"+compValue).addClass("miss");
      board1[compValue-1] = 2;
      index = changeTurn(index);
    };
  };
};

///Winning function
var winning = function(board){
  var value = true;
  board.forEach(function(bo) {
    if(bo === 1){
      value = false;
    };
  });
  if(value === true){
    if(index === 1){
      alert("you win");
      for(i=0;i<36;i++){
        if(board1[i] === 1){
          $("#a"+(i+1)).removeClass("purplebox");
          $("#a" + (i+1)).addClass("remain");
        }
      }
    } else if(index === 0){
      alert("Computer win")
      for(i=0;i<36;i++){
        if(board2[i] === 1){
          $("#b"+(i+1)).removeClass("greenbox");
          $("#b" + (i+1)).addClass("remain");
        }
      }
    };
    index = 2;
  };
};

///Set a number of ships
var boxCk = function(){
  boxes = parseInt(prompt("How many squares do you want to deploy?"));
  if (boxes <= 36 && boxes >= 1) {
  }
  else {
    alert("Please select a number of squares between 1 and 35");
    boxCk();
  }
}



//User Interface Logic**********************************************************

$(document).ready(function(){

  var player1 = prompt("Player1, Enter your name : ");
  $("span").text(player1);
  boxCk();

$("#c1, #c2 , #c3, #c4, #c5, #c6, #c7, #c10 , #c15, #c16, #c21, #c22, #c8, #c11 , #c14, #c17, #c20, #c23, #c9, #c12 , #c13, #c18, #c19, #c24, #c25, #c26, #c27, #c28, #c29, #c30, #c36, #c35, #c34, #c33, #c32, #c31").click(function(){
  $(this).find("input[type=checkbox]").attr("checked", true);
  $(this).addClass("select");
});

  $("form.player1Board").submit(function(event){
     event.preventDefault();
     $("input:checkbox[name=player1]:checked").each(function(){
       var value = $(this).val();
       player1Value.push(value);
     });
    if(player1Value.length === boxes){
      player1Value.forEach(function(value){
        board1[value] = 1;
      })
      $(".player1").hide();
      $(".combined").show();
      index = 1;
      compSelect();
    } else {
      alert("Please put the correct number of squares")
      player1Value = [];
      $("#c1, #c2 , #c3, #c4, #c5, #c6, #c7, #c10 , #c15, #c16, #c21, #c22, #c8, #c11 , #c14, #c17, #c20, #c23, #c9, #c12 , #c13, #c18, #c19, #c24, #c25, #c26, #c27, #c28, #c29, #c30, #c36, #c35, #c34, #c33, #c32, #c31").removeClass("select");
      $("#c1, #c2 , #c3, #c4, #c5, #c6, #c7, #c10 , #c15, #c16, #c21, #c22, #c8, #c11 , #c14, #c17, #c20, #c23, #c9, #c12 , #c13, #c18, #c19, #c24, #c25, #c26, #c27, #c28, #c29, #c30, #c36, #c35, #c34, #c33, #c32, #c31").find("input[type=checkbox]").attr("checked", false);
      return player1Value;
    }
  });

  $("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b28, #b29, #b30, #b31, #b32, #b33, #b34, #b35, #b36").click(function() {
    var playerID = this.id;
    var number = parseInt(playerID.replace("b",""));
    if(index === 1 && board2[number-1] != 2){
      if(board2[number-1] === 1){
        alert("you hit a Square");
        $(this).addClass("hit");
        board2[number-1] = 2;
        winning(board2);
      } else if (board2[number-1] === 0){
        alert("you miss");
        $(this).addClass("miss");
        board2[number-1] = 2;
        index = changeTurn(index);
        computerTurn();
      };
    };
  });

  $("button#restart").click(function(){
      location.reload();
  });
});
