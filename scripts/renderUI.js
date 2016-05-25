
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
	
	// Render Weapon UI
		surface.font = "20px Verdana";
		surface.fillText("1", 50,525);
				surface.fillText("2", 100,525);
		surface.fillText("3", 150,525);
		surface.beginPath();
		var weapon_slot;
		if (player.current_weapon == player.weapon_one)
			weapon_slot = 1;
		else if (player.current_weapon == player.weapon_two)
			weapon_slot = 2;
		else if (player.current_weapon == player.weapon_three)
			weapon_slot = 3;
		else
			console.log("weapon slot error");
		
		switch (weapon_slot)
		{
			case 1:
			surface.rect(50,500,25,25);
			break;
			case 2:
			surface.rect(100,500,25,25);
			break;
			case 3:
			surface.rect(150,500,25,25);
			break;
			default:
			console.log("No weapon");
			break;
			
		}
		surface.stroke();
		
}