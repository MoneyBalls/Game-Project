<<<<<<< HEAD
	
	var leftPressed = false;
	var rightPressed = false;
	var upPressed = false;
	var downPressed = false;
	var zPressed = false;
	
	window.addEventListener("keydown", playerMove);
	window.addEventListener("keyup", playerStop);
	
function playerMove(e)
{
	switch(e.keyCode)
	{
		case 37: // Left.
			leftPressed = true;
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
		break;
		
		case 39: // Right.
			rightPressed = false;
		break;
		
		case 38: // Up.
			upPressed = false;
		break;
		
		case 40: // Down.
			downPressed = false;
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
=======
	
	var leftPressed = false;
	var rightPressed = false;
	var upPressed = false;
	var downPressed = false;
	var zPressed = false;
	
	window.addEventListener("keydown", playerMove);
	window.addEventListener("keyup", playerStop);
	
function playerMove(e)
{
	switch(e.keyCode)
	{
		case 37: // Left.
			leftPressed = true;
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
		break;
		
		case 39: // Right.
			rightPressed = false;
		break;
		
		case 38: // Up.
			upPressed = false;
		break;
		
		case 40: // Down.
			downPressed = false;
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
>>>>>>> refs/remotes/origin/New-moon
}