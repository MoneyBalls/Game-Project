
function render_UI()
{
	// Render hit effect
	for (var c = 0; c < coll_effect.length; c++)
	{
		surface.drawImage(coll_effect[c].image, coll_effect[c].spriteIdx*45, 0 , 45,50, coll_effect[c].x, coll_effect[c].y,50,50);
	}

	// Render score
	surface.font="30px Verdana";
	surface.fillText("Score", 550,50);
	surface.fillText(score, 700, 50);

	// Render lives
	surface.font = "30px Verdana";
	surface.fillText("Lives: ", 50, 50);
	surface.fillText(playerLives, 200, 50);
}