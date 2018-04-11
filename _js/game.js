var Cyclades = window.Cyclades || {};
Cyclades.Game = (function($)
{
	var Game = function()
	{
		this.init = function()
		{
			$(".but_start_game").bind("click", startGame);
		};
	};
	
	var startGame = function()
	{
		$(".but_ start_game" ).unbind("click");
		Cyclades.ui.hideDialog();
	};
	
	return Game;
})(jQuery);

$(document).ready(function()
{
	$(function()
	{
		var game = new Cyclades.Game();
		game.init();
	})
});