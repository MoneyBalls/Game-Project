
	var projectSpeed = 10; 	//Projectile Speed(?)
	var bullet = []; 		//Bullet Array
	var zPressed = false;
	
	var bulletImg = new Image();
	bulletImg.src = "img/bullet.png";
	
	var bullet_trig = true;
	
	var playerBlaster = new Audio();
	playerBlaster.src = "sound/blaster.wav";
	
	window.addEventListener("keydown", playerShoot);
	window.addEventListener("keyup", playerStopShoot);

function playerShoot(e)
{
	if (e.keyCode == 90)
	{
		
		playerBlaster.currentTime = 0;
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

function player_Nbullet()  // weapon id = 1
{
	playerBlaster.play();
	bullet[bullet.length] = {name:"Normal", dmg: 2, type:"normal", w:25, h:15, xspeed:24, yspeed:0, x:player.x+60 , y:player.y+25};
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
	playerBlaster.play();
	for (var i = 0; i < 5; i++)
	{
		
		rannum = Math.floor(Math.random()*5);
		angle = rannum * 10 + 335;
		rads = Math.PI/180 * angle;
		
		xspd = Math.round(speed * Math.cos(rads));
		yspd = Math.round(speed * Math.sin(rads));
		
		// bullet[bullet.length] = {width:7, height:7, xspeed:xspd, y:yspd, x:player.x+60, y:player.y+25 };
		bullet[bullet.length] = {name:"Shotgun", dmg: 2, type: "normal", w:15, h:10, xspeed:xspd, yspeed:yspd, x:player.x+50+i*10 , y:player.y+25};
	}
	
}

function player_cannon()
{
	var angle = 360;
	var speed = 15;
	
    var rads = Math.PI/180 * angle;
    var xspd= Math.round(speed * Math.cos(rads));
    var yspd= Math.round(speed * Math.sin(rads));
    
    bullet[bullet.length] = {name:"Cannon", dmg:3, type: "pierce", w:140, h:110, x: player.x , y: player.y , xspeed: xspd, yspeed: yspd}; 
}

function player_homing()
{
	
}
function player_fire()
{
	switch (player.current_weapon)
	{
		
		case 1:
		player_Nbullet();
		
			break;
			
		case 2:
		player_Spray();
			break;
			
		case 3:
		player_cannon();
			break;
		case 4: // and so on to add new weapons
		break;
		default:
		console.log("faulty player.current_weap");
		console.log(player.current_weapon);
		break;
		
	}
	
}
function playerBulletCheck()
{
	// player bullet generation
	if ( zPressed == true && bullet_trig == true )
	{
		//console.log("fired");
		player_fire();
		//player_Spray();
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
