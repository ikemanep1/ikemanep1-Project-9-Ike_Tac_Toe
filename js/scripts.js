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
this.insertion.css("'background-color", 'red');
    this.playerOne -= 1;
    this.playerTwo += 1;
  }
  else if (this.playerTwo === 1) {
this.insertion.css("'background-color", 'blue');
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
      $("#item1").text(Players.insertion);
    });
    $("#item2").click(function(event){
      game.engine();
      $("#item2").text(Players.insertion);
    });
    $("#item3").click(function(event){
      game.engine();
      $("#item3").text(Players.insertion);
    });
    $("#item4").click(function(event){
      game.engine();
      $("#item4").text(Players.insertion);
    });
    $("#item5").click(function(event){
      game.engine();
      $("#item5").text(Players.insertion);
    });
    $("#item6").click(function(event){
      game.engine();
      $("#item6").text(Players.insertion);
    });
    $("#item7").click(function(event){
      game.engine();
      $("#item7").text(Players.insertion);
    });
    $("#item8").click(function(event){
      game.engine();
      $("#item8").text(Players.insertion);
    });
    $("#item9").click(function(event){
      game.engine();
      $("#item9").text(Players.insertion);
    });
  });
});
