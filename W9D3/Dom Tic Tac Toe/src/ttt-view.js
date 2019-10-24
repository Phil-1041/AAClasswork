class View {
  constructor(game, $el) {
    this.game = game;
    this.$root = $el;
    this.setupBoard();
    this.bindEvents();
  }
  
  bindEvents() {
    let that = this;
  $("li").on("click", function(event) { 
    // debugger 
    let $li = $(event.currentTarget);
    let pos = $li.data().pos;
    that.makeMove($li);
    that.game.playMove(pos)});
  }

  makeMove($square) {
    let currentsymbol = this.game.currentPlayer;
    $square.addClass(currentsymbol);
  }

  setupBoard() {
    let $ul = $("<ul>");
    this.$root.append($ul);
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        let $li = $("<li>");
        $li.data('pos', [i,j]);
        $ul.append($li);
      }
    };
    
  }
}


module.exports = View;
