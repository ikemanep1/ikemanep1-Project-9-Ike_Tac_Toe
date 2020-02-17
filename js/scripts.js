// Back-End, program logic
function Players() {
  this.playerOne = 1;
  this.playerTwo = 0;
  this.mark;
  this.drawCount = 0;
  this.playerOneTotal = [];
  this.playerTwoTotal = [];
}

Players.prototype.oneWin = function() {
  $(".user_interface").hide();
  $(".playerOneWinMessage").show();
}
Players.prototype.twoWin = function() {
  $(".user_interface").hide();
  $(".playerTwoWinMessage").show();
}
Players.prototype.drawCheck = function() {
  this.drawCount ++;
  console.log(this.drawCount);
  if (this.drawCount >= 9) {
    $(".user_interface").hide();
    $(".drawMessage").show();
  }
}

Players.prototype.engine = function() {
    this.drawCheck();
  if (this.playerOne === 1) {
    this.insertion = [];
    this.insertion.push("X");
    this.playerOne -= 1;
    this.playerTwo += 1;
    this.playerOneTotal.push(this.mark);
    this.oneCheckWin();
  }
  else if (this.playerTwo === 1) {
    this.insertion = [];
    this.insertion.push("O");
    this.playerTwo -= 1;
    this.playerOne += 1;
    this.playerTwoTotal.push(this.mark);
    this.twoCheckWin();
  }
};

Players.prototype.oneCheckWin = function() {
  if (this.playerOneTotal.includes(1) && this.playerOneTotal.includes(2) && this.playerOneTotal.includes(3)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(4) && this.playerOneTotal.includes(5) && this.playerOneTotal.includes(6)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(7) && this.playerOneTotal.includes(8) && this.playerOneTotal.includes(9)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(1) && this.playerOneTotal.includes(4) && this.playerOneTotal.includes(7)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(2) && this.playerOneTotal.includes(5) && this.playerOneTotal.includes(8)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(3) && this.playerOneTotal.includes(6) && this.playerOneTotal.includes(9)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(1) && this.playerOneTotal.includes(5) && this.playerOneTotal.includes(9)) {
    this.oneWin();
  } else if (this.playerOneTotal.includes(3) && this.playerOneTotal.includes(5) && this.playerOneTotal.includes(7)) {
    this.oneWin();
  }
  console.log(this.playerOneTotal.sort().join(""))
  console.log(this.playerTwoTotal.sort().join(""))
};

Players.prototype.twoCheckWin = function() {
  if (this.playerTwoTotal.includes(1) && this.playerTwoTotal.includes(2) && this.playerTwoTotal.includes(3)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(4) && this.playerTwoTotal.includes(5) && this.playerTwoTotal.includes(6)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(7) && this.playerTwoTotal.includes(8) && this.playerTwoTotal.includes(9)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(1) && this.playerTwoTotal.includes(4) && this.playerTwoTotal.includes(7)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(2) && this.playerTwoTotal.includes(5) && this.playerTwoTotal.includes(8)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(3) && this.playerTwoTotal.includes(6) && this.playerTwoTotal.includes(9)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(1) && this.playerTwoTotal.includes(5) && this.playerTwoTotal.includes(9)) {
    this.twoWin();
  } else if (this.playerTwoTotal.includes(3) && this.playerTwoTotal.includes(5) && this.playerTwoTotal.includes(7)) {
    this.twoWin();
  }
  console.log(this.playerOneTotal.sort().join(""))
  console.log(this.playerTwoTotal.sort().join(""))
};

$(document).ready(function() {
  $("#gameStart").click(function(event){
    $("#gameStart").hide();
    $(".user_interface").show();
    var game = new Players();
    $("#item1").click(function(event){
      if (!$("#item1").hasClass("clicked")) {
      $("#item1").addClass("clicked");
      game.mark = 1;
      game.engine();
      $("#item1").text(game.insertion);
    }
    });
    $("#item2").click(function(event){
      if (!$("#item2").hasClass("clicked")) {
      $("#item2").addClass("clicked");
      game.mark = 2;
      game.engine();
      $("#item2").text(game.insertion);
    }
    });
    $("#item3").click(function(event){
      if (!$("#item3").hasClass("clicked")) {
      $("#item3").addClass("clicked");
      game.mark = 3;
      game.engine();
      $("#item3").text(game.insertion);
    }
    });
    $("#item4").click(function(event){
      if (!$("#item4").hasClass("clicked")) {
      $("#item4").addClass("clicked");
      game.mark = 4;
      game.engine();
      $("#item4").text(game.insertion);
    }
    });
    $("#item5").click(function(event){
      if (!$("#item5").hasClass("clicked")) {
      $("#item5").addClass("clicked");
      game.mark = 5;
      game.engine();
      $("#item5").text(game.insertion);
    }
    });
    $("#item6").click(function(event){
      if (!$("#item6").hasClass("clicked")) {
      $("#item6").addClass("clicked");
      game.mark = 6;
      game.engine();
      $("#item6").text(game.insertion);
    }
    });
    $("#item7").click(function(event){
      if (!$("#item7").hasClass("clicked")) {
      $("#item7").addClass("clicked");
      game.mark = 7;
      game.engine();
      $("#item7").text(game.insertion);
    }
    });
    $("#item8").click(function(event){
      if (!$("#item8").hasClass("clicked")) {
      $("#item8").addClass("clicked");
      game.mark = 8;
      game.engine();
      $("#item8").text(game.insertion);
    }
    });
    $("#item9").click(function(event){
      if (!$("#item9").hasClass("clicked")) {
      $("#item9").addClass("clicked");
      game.mark = 9;
      game.engine();
      $("#item9").text(game.insertion);
    }
    });
  });
});
