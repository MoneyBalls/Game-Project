
	var projectSpeed = 10; 	//Projectile Speed(?)
	var bullet = []; 		//Bullet Array
	var zPressed = false;
	
	var bulletImg = new Image();
	bulletImg.src = "img/bullet.png";
	
	var bullet_trig = true;
	
	var laser = new Audio();
	laser.src = "sound/laser.wav";
	
	window.addEventListener("keydown", playerShoot);
	window.addEventListener("keyup", playerStopShoot);
	
function player_Nbullet()  // Normal bullet
{
	bullet[bullet.length] = {width:7, height:7, xspeed:24, yspeed:0, x:player.x+60 , y:player.y+25 };
}

function playerShoot(e)
{
	if (e.keyCode == 90)
	{
		zPressed = true;
	}
}

function playerStopShoot(e)
{
	if (e.keyCode == 90)
	{
		zPressed = false;
		bullet_trig = true;
	}
}

function player_Spray()
{
	var speed = 24;
	//spray angle 30 - 330, 0~30 330~360
	var rannum;
	var rads;
	var xspd;
	var yspd;
	var angle;
	
	for (var i = 0; i < 5; i++)
	{
		
		rannum = Math.floor(Math.random()*5);
		angle = rannum * 10 + 335;
		rads = Math.PI/180 * angle;
		
		xspd = Math.round(speed * Math.cos(rads));
		yspd = Math.round(speed * Math.sin(rads));
		
		// bullet[bullet.length] = {width:7, height:7, xspeed:xspd, y:yspd, x:player.x+60, y:player.y+25 };
		bullet[bullet.length] = {width:7, height:7, xspeed:xspd, yspeed:yspd, x:player.x+50+i*10 , y:player.y+25 };
	}
	
}

function playerBulletCheck()
{
	// player bullet generation
	if ( zPressed == true && bullet_trig == true )
	{
		//console.log("fired");
		player_Spray();
		laser.play();
		//player_Nbullet();
		bullet_trig = false;
	}
	
	// player bullet movement
	for (var i = 0; i < bullet.length ; i++)
	{
		bullet[i].x += bullet[i].xspeed;
		bullet[i].y += bullet[i].yspeed;
	}
	
	// player + enemy bullet deletion outside of boundary
	for (var a = 0; a < bullet.length ; a++)
	{
		if (bullet[a].x > 800)
		{
			bullet.splice(a,1);
		}
	}
}
