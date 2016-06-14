	
	var playerLives = 1; //var for player lives set to 3. 

function reduceLives()
{
	if (playerLives <= 0)
		death();
    else
		playerLives--;
}

function death()
{	

	clearInterval(uIval);
	clearTimeout(enemyint); //Stops enemies from spawning.
	stageSound.pause();
	/*
	surface.clearRect(0,0,800,600);
	surface.fillStyle = "Black";
	surface.fillRect(0,0,800,600);
	surface.fillStyle = "White";
	surface.fillText(wDead[lz], 300,300);
	surface.fillStyle = "Black";
	*/
	
	setTimeout(call_mainmenu,2000);
	death_interval = setInterval(death_msg,55);
	for (var i = 0 ; i < 100; i++)
	{
		carm.splice(0,1);
		bullet.splice(0,1);
		enemy.splice(0,1);
		enemy_bullet.splice(0,1);
	}
	
}
function death_msg()
{
	//surface.clearRect(0, 0, 800,600);
	surface.fillStyle = "RGBA(0,0,0,0.3)";
	surface.fillRect(0,180,800,200);
	surface.fillStyle = "White";
	surface.fillText("You are dead", 320,290);
	surface.fillStyle = "Black";
}
