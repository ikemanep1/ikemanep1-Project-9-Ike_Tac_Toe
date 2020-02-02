// Back-End, program logic
function Players() {
  this.playerOne = 1;
  this.playerTwo = 0;
  this.insertion = [];
  this.OneWinCheck = [];
  this.TwoWinCheck = [];
}

// Players.prototype.turnCheck();
//
//
//
//
//








Players.prototype.engine = function() {
  if (this.playerOne === 1) {
    this.mark = "X";
    this.playerOne -= 1;
    this.playerTwo += 1;
  }
  else if (this.playerTwo === 1) {
    this.mark = "O";
    this.playerTwo -= 1;
    this.playerOne += 1;
  };
};




// Front-End, user interface


$(document).ready(function() {
  $("#gameStart").click(function(event){
    $(".user_interface").show();
    var game = new Players()
    $("#item1").click(function(event){
      game.engine();
      $("#item1").text(game.mark);
      console.log(game.mark);
    });
    $("#item2").click(function(event){
      game.engine();
      $("#item2").text(game.mark);
      console.log(game.mark);
    });
    $("#item3").click(function(event){
      game.engine();
      $("#item3").text(game.mark);
      console.log(game.mark);
    });
    $("#item4").click(function(event){
      game.engine();
      $("#item4").text(game.mark);
      console.log(game.mark);
    });
    $("#item5").click(function(event){
      game.engine();
      $("#item5").text(game.mark);
      console.log(game.mark);
    });
    $("#item6").click(function(event){
      game.engine();
      $("#item6").text(game.mark);
      console.log(game.mark);
    });
    $("#item7").click(function(event){
      game.engine();
      $("#item7").text(game.mark);
      console.log(game.mark);
    });
    $("#item8").click(function(event){
      game.engine();
      $("#item8").text(game.mark);
      console.log(game.mark);
    });
    $("#item9").click(function(event){
      game.engine();
      $("#item9").text(game.mark);
      console.log(game.mark);
    });
  });
});
