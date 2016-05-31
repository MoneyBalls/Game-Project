	
	var playerLives = 999; //var for player lives set to 3. 

function reduceLives()
{
	if (playerLives > 0)
    {
		playerLives--;
    }
	
    else if (playerLives == 0)
	{
		death();
	}   
}

function death()
{	
	clearInterval(uIval);
	clearTimeout(enemyint); //Stops enemies from spawning.
	stageSound.pause();
	alert("Your score was " + score);
}