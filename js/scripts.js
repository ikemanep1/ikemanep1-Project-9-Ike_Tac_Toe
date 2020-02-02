// Back-End, program logic
function Players() {
  this.playerOne = 1;
  this.playerTwo = 0;
  this.playerBlockOne = 0;
  this.playerBlockTwo = 1;
  this.OneWinCheck = [];
  this.TwoWinCheck = [];
}

// Players.prototype.engine();
//
//
//
//
//


// Players.prototype.turnCheck = function() {
//   this.insertion = [];
//   if (this.insertion === ["X"]) {
//     alert("Nope!");
//   }
//   else if (this.insertion === ["O"]){
//     alert("Nope!");
//   } else {
//     this.engine();
//   }
// };





Players.prototype.engine = function() {
  if (this.playerOne === 1 && this.playerBlockOne === 0) {
    this.insertion = [];
    this.insertion.push("X");
    this.playerOne -= 1;
    this.playerTwo += 1;
    this.playerBlockOne += 1;
    this.playerBlockTwo -= 1;
    console.log(this.playerBlockOne);
    console.log(this.playerBlockTwo);
  }
  else if (this.playerTwo === 1 && this.playerBlockTwo === 0) {
    this.insertion = [];
    this.insertion.push("O");
    this.playerTwo -= 1;
    this.playerOne += 1;
    this.playerBlockOne -= 1;
    this.playerBlockTwo += 1;
    console.log(this.playerBlockOne);
    console.log(this.playerBlockTwo);

  }
};

Players.prototype.blockage = function() {
  if (this.playerOne === 1) {
    if (this.playerBlockOne === 1) {
      alert("rejected!");
    } else {
      this.engine();
    }
  } else {
    if (this.playerBlockTwo === 1) {
      alert("rejected!");
    } else {
      this.engine();
    }
  }
};

// Front-End, user interface


$(document).ready(function() {
  $("#gameStart").click(function(event){
    $(".user_interface").show();
    var game = new Players()
    $("#item1").click(function(event){
      game.blockage();
      $("#item1").text(game.insertion);
    });
    $("#item2").click(function(event){
      game.blockage();
      $("#item2").text(game.insertion);
    });
    $("#item3").click(function(event){
      game.blockage();
      $("#item3").text(game.insertion);
    });
    $("#item4").click(function(event){
      game.blockage();
      $("#item4").text(game.insertion);
    });
    $("#item5").click(function(event){
      game.blockage();
      $("#item5").text(game.insertion);
    });
    $("#item6").click(function(event){
      game.blockage();
      $("#item6").text(game.insertion);
    });
    $("#item7").click(function(event){
      game.blockage();
      $("#item7").text(game.insertion);
    });
    $("#item8").click(function(event){
      game.blockage();
      $("#item8").text(game.insertion);
    });
    $("#item9").click(function(event){
      game.blockage();
      $("#item9").text(game.insertion);
    });
  });
});
