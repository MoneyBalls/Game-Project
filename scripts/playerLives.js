	
	var playerLives = 3; //var for player lives set to 3. 

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
	alert("Your score was " + score);
}