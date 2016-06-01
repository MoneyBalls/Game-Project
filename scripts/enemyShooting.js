	
	var enemy_bulletImg = new Image();
	enemy_bulletImg.src = "img/orange_bullet.png";
	
	var enemy_bullet = []; 	//Enemy Bullet Array 
	
function fire_Circlebullet(i, speed)
{
	var angle;
	
	//Depending on the level, each enemy will have different bullet patterns.
	if (currentLevel == 2)	
	{
		for (var j = 0; j < 360; j += 18)
		{	
			bullet_generation(i, j, speed);
		}
	}
	
	if (currentLevel == 1)
	{
		for (var j = 150; j < 200; j += 10)
		{	
			bullet_generation(i, j, speed);
		}
	}
	
	if (currentLevel == 3)
	{
		
	}
}

function fire_Nbullet(speed)
{
	bullet_generation(enemy.length - 1, 155, speed);
	bullet_generation(enemy.length - 1, 170, speed);
	bullet_generation(enemy.length - 1, 180, speed);
	bullet_generation(enemy.length - 1, 190, speed);
	bullet_generation(enemy.length - 1, 205, speed);
}

function bullet_generation(i, angle, speed)
{
    var rads = Math.PI/180 * angle;
    var xspd= Math.round(speed * Math.cos(rads));
    var yspd= Math.round(speed * Math.sin(rads));
	// enemy_bullet[enemy_bullet.length] = {width:7, height:7, speed:24, x: player.x , y:player.y - 20};
    enemy_bullet[enemy_bullet.length] = {x: enemy[i].x , y: enemy[i].y , xspeed: xspd, yspeed: yspd, image:enemy_bulletImg, type: "normal"}; 
}

function enemyBulletCheck()
{
	for (var a = 0; a < enemy_bullet.length ; a++)
	{
		if (enemy_bullet[a].x > 1000)
		{
			enemy_bullet.splice(a,1);
		}
		else if (enemy_bullet[a].x < -100)
		{
			enemy_bullet.splice(a,1);
		}
		else if (enemy_bullet[a].y < -100)
		{
			enemy_bullet.splice(a,1);
		}
		else if (enemy_bullet[a].y > 1000)
		{
			enemy_bullet.splice(a,1);
		}
	}
	
	// enemy bullet movement
	for (var e = 0; e < enemy_bullet.length; e++)
	{
	    enemy_bullet[e].x += enemy_bullet[e].xspeed;
	    enemy_bullet[e].y -= enemy_bullet[e].yspeed;
	}
}