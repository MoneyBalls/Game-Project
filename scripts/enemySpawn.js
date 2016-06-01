	
	var enemy = []; 	//Enemy Array
	var enemySpawnMax;	//The maximum of enemies that spawn.
	var enemyint;		//Interval for spawning enemies.
	
	var seagullImage = new Image();
	seagullImage.src = "img/enemy_seagull.png";	
	
	//setTimeout(enemy_gen, 200);	//Starts to spawn enemies (in this case) 0.2 seconds after the level starts.
	//enemyint = setInterval(enemy_gen, 700);	//Starts spawning enemies every (in this case) 0.7 seconds.
	//enemySpawnMax = 35;	//Maximum amount of enemies that spawn.
	
function enemy_gen()
{
	var ranY = Math.floor(Math.random() * 500) + 50;
	enemy[enemy.length] = {hp:4, x:800, y:ranY, image:seagullImage, type:"_3way", speed:10, bullet_speed:24, frameCtr:0, ctrMax:4, spriteIdx:0, idxMax:3};
	
	var l = enemy.length;
	// bullet_generation( l ,135, 30);
	fire_Circlebullet(enemy.length - 1, 15);
	enemySpawnMax--;
	
	if (enemySpawnMax == 0)	//Stops spawning enemies after the appropriate amount of enemies spawn.
	{
		clearInterval(enemyint);
	}
	
	//console.log(enemySpawnMax);
	//fire_Nbullet(15);
	//setTimeout(fire_Nbullet,500,15);	
}

function levelChecker()
{
	if (currentLevel == 2)
	{
		clearInterval(enemyint);
		enemy.length = 0;
		enemy_bullet.length = 0;
		
		enemyint = setInterval(enemy_gen, 700);
		enemySpawnMax = 40;
	}
}	
