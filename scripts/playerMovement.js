	
	var leftPressed = false;
	var rightPressed = false;
	var upPressed = false;
	var downPressed = false;
	var zPressed = false;
	var canPress = true;
	window.addEventListener("keydown", playerMove);
	window.addEventListener("keyup", playerStop);
	window.addEventListener("keydown", menuinput_down);
	window.addEventListener("keyup", menuinput_up);
	
function playerMove(e)
{
	switch(e.keyCode)
	{
		case 37: // Left.
			leftPressed = true;
			console.log("left");
		break;
		
		case 39: // Right.
			rightPressed = true;
		break;
		
		case 38: // Up.
			upPressed = true;
		break;
		
		case 40: // Down.
			downPressed = true;
		break;
		
	
	}
}

function playerStop(e)
{
	switch(e.keyCode)
	{
		case 37: // Left.
			leftPressed = false;
			canPress = true;
		break;
		
		case 39: // Right.
			rightPressed = false;
			canPress = true;
		break;
		
		case 38: // Up.
			upPressed = false;
		break;
		
		case 40: // Down.
			downPressed = false;
		break;
		case 49:
			if (player.weapon_one != 0)
				player.current_weapon = player.weapon_one;
			console.log(player.current_weapon);
		break;
		case 50:
			if (player.weapon_two != 0)
				player.current_weapon = player.weapon_two;
			console.log(player.current_weapon);
		break;
		case 51:
			if (player.weapon_three != 0)
				player.current_weapon = player.weapon_three;
			console.log(player.current_weapon);
		break;
	}
}

function movePlayer()
{
	if ( leftPressed == true && player.x > 10 ) 
		player.x -= player.speed;
	
	if ( rightPressed == true && player.x < 800 - 10 )
		player.x += player.speed;
	
	if ( upPressed == true && player.y > 10)
		player.y -= player.speed;
	
	if ( downPressed == true && player.y < 600 - 60)
		player.y += player.speed;
}


function menuinput_down(e)
{
	switch(e.keyCode)
	{
		case 38: // Up.
			upPressed = true;
			
		break;
		case 40: // Down.
		
			downPressed = true;
			
		break;
		case 90:
			zPressed = true;
			
		break;
	
	}
}

function menuinput_up(e)
{
	switch(e.keyCode)
	{
			
		case 38: // Up.
			upPressed = false;
			canPress = true;
		break;
		case 40: // Down.
		
			downPressed = false;
			canPress = true;
		break;
		case 90:
			zPressed = false;
			canPress = true;
		break;
	}	
	}


function menumove()
{
		
	if ( upPressed == true && mainmenu_option > 0 && canPress == true)
	{
		mainmenu_option --;
		canPress = false;
	}
	
	if ( downPressed == true && mainmenu_option < 2 && canPress == true)
	{
		mainmenu_option ++;
		canPress =false;
	}
	
	if ( zPressed == true && canPress == true)
	{
		switch (mainmenu_option)
		{
			case 0:
			call_mapselect();
			
			canPress = false;
			break;
			case 1:
			call_weaponshop();
			state = "weaponshop";
			canPress = false;
			break;
			case 2:
			call_option();
			state = "option";
			canPress = false;
			break;
		}
	}
}

function shopmove()
{
	if ( upPressed == true && shop_option > 1 && canPress == true)
	{
		shop_option --;
		canPress = false;
	}
	
	if ( downPressed == true && shop_option < 4 && canPress == true)
	{
		shop_option ++;
		canPress =false;
	}
	
	if ( zPressed == true && canPress == true)
	{
		switch (shop_option)
		{
			case 1:
				
			canPress = false;
			break;
			case 2:
			
			canPress = false;
			break;
			case 3:
			
			if (coin >= weapon[shop_option].price)
			{
			coin -= weapon[shop_option].price;
			weapon[shop_option].price = 0;
			
			player.weapon_three = 3;
			
			}
			canPress = false;
			
			break;
			case 4:
			canPress = false;
			call_mainmenu();
			console.log(shop_option);
			break;
			
		}
	} 
}
function mapmove()
{
	if ( leftPressed == true && mapselect_option > 0 && canPress == true)
	{
		mapselect_option --;
		canPress = false;
	}
	
	if ( rightPressed == true && mapselect_option < 4 && canPress == true)
	{
		mapselect_option ++;
		canPress =false;
	}
	
	if ( zPressed == true && canPress == true)
	{
		switch (mapselect_option)
		{
			case 0:
			if (unlockedlevel > mapselect_option)
			{
			currentLevel = 1;
			state = "ingame";
			call_ingame();
			}
			canPress = false;
			break;
			case 1:
			if (unlockedlevel > mapselect_option)
			{
			currentLevel =2;
			state = "ingame";
			
			call_ingame();
			}
			canPress = false;
			break;
			case 2:
			if (unlockedlevel > mapselect_option)
			{
			currentLevel = 3;
			state = "ingame";
			call_ingame();
			}
			canPress = false;
			
			break;
		}
	}
}