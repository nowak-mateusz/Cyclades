$(window).load(function() {
  game.init();
});

var game = {
  init: function(){
    loader.init();
    
    // Hide all game layers and display the start screen
    $('.gamelayer').hide();
    $('#gamestartscreen').show();
    //Get handler for game canvas and context
    game.canvas = $('#gamecanvas')[0];
    game.context = game.canvas.getContext('2d');
  },

} 
