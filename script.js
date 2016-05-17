var _stage = document.getElementById("stage");
var _canvas = document.querySelector("canvas");
var surface = _canvas.getContext("2d"); // d is lowercase!

const ROWS = 6;
const COLS = 8;
const SIZE = 100;
const scroll = 5;

_canvas.width = COLS*SIZE;
_canvas.height = ROWS*SIZE;

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var zPressed = false;
var projectSpeed = 10;
var bullet =[];
var enemy = [];
var enemy_bullet = [];
var map = []; // = new Array(ROWS);
var player = {x:SIZE*2, y:SIZE*3, speed:10, 
              dX:0, dY:0, image:null};
var uIval = setInterval(update, 33.34); // 30fps
// var initBullet = {width:10, height:10, speed:30, x:player.x , y:player.y};
var bulletImg = new Image();
var bullet_trig = true;
bulletImg.src = "img/bullet.png";
//animation vars
var frameCtr = 0;
var ctrMax = 4;
var spriteIdx = 0;
var idxMax = 3;
var bgImage = new Image();
bgImage.src = "img/purple_woods.jpg";
var pImage = new Image();
	pImage.src = "img/bird.png";
	player.image = pImage;
var seagullImage = new Image();
seagullImage.src = "img/enemy_seagull.png";
var enemy_bulletImg = new Image();
enemy_bulletImg.src = "img/orange_bullet.png";
var coll_effect = [];
var orange_hitImg = new Image();
var seagullDeath = new Audio();
seagullDeath.src = "sound/seagull-death.mp3";
var laser = new Audio();
laser.src = "sound/laser.wav";
orange_hitImg.src = "img/orange_hit.png";
initGame();
//viewinfo();
setTimeout(enemy_gen,200);
var enemyint = setInterval(enemy_gen,700);
var score = 0; // +=1 for every kill


function initGame()
{
	
	//generateMap();
	map[0] = {image:bgImage, x:0};
	map[1] = {image:bgImage, x:800};
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
}

function update() // Going to run 30fps
{
	movePlayer();
	scrollMap();
	projectile();
	
	// move enemies
	move_enemies();
	collision_check();
	player_animation();
	// animate sprites
	effect_animation();
	render();
}

function enemy_gen()
{
    var ranY = Math.floor(Math.random()*500)+50;
    enemy[enemy.length] = { x: 800, y: ranY, image: seagullImage, type: "_3way", speed:10, bullet_speed:24, frameCtr:0, ctrMax:4, spriteIdx:0, idxMax:3 };
	
	var l = enemy.length;
    // bullet_generation( l ,135, 30);
	fire_Circlebullet(enemy.length-1,15);

	//fire_Nbullet(15);
	//setTimeout(fire_Nbullet,500,15);
	
	
	
	
}


function fire_Circlebullet(i, speed)
{
	var angle;
	for (var j = 0; j < 360; j +=10)
	{	
	bullet_generation( i, j, speed);
	}
	
}


function fire_Nbullet(speed)
{
	bullet_generation( enemy.length-1, 155, speed);
	bullet_generation( enemy.length-1, 170, speed);
	bullet_generation( enemy.length-1, 180, speed);
	bullet_generation( enemy.length-1, 190, speed);
	bullet_generation( enemy.length-1, 205, speed);
}
function bullet_generation( i, angle, speed)
{
    
	
    var rads = Math.PI/180 * angle;
    var xspd= Math.round(speed * Math.cos(rads));
    var yspd= Math.round(speed * Math.sin(rads));
	// enemy_bullet[enemy_bullet.length] = {width:7, height:7, speed:24, x: player.x , y:player.y - 20};
    enemy_bullet[enemy_bullet.length] = {x: enemy[i].x , y: enemy[i].y , xspeed: xspd, yspeed: yspd, image:enemy_bulletImg, type: "normal" }; 
    
}
function move_enemies()
{
    for (var i = 0; i < enemy.length; i++)
    {
        enemy[i].x -= enemy[i].speed;
    }
    
}

function player_animation()
{
    if (frameCtr == ctrMax)
			{
				frameCtr = 0;
				spriteIdx++;
				if (spriteIdx == idxMax)
					spriteIdx = 0;
			}
	frameCtr++;
	
	// + enemy_animation
	
	for (var i =0 ; i < enemy.length; i++)
	{
	    if (enemy[i].frameCtr == enemy[i].ctrMax)
	        {
	            enemy[i].frameCtr = 0;
	            enemy[i].spriteIdx++;
	            if (enemy[i].spriteIdx == enemy[i].idxMax)
	                enemy[i].spriteIdx = 0;
	        }
	    enemy[i].frameCtr++;
	}
	
	
}

function effect_animation()
{
	for (var i =0 ; i < coll_effect.length; i++)
	{
	    if (coll_effect[i].frameCtr == coll_effect[i].ctrMax)
	        {
	            coll_effect[i].frameCtr = 0;
	            coll_effect[i].spriteIdx++;
	            if (coll_effect[i].spriteIdx == coll_effect[i].idxMax)
	                coll_effect.splice(i,1);
	        }
	    coll_effect[i].frameCtr++;
	}
}

function collision_check()
{
    //Player bullet & Enemy
	for (var j=0; j<bullet.length; j++)
	{
		for (var i=0; i<enemy.length; i++)
		{
		if (!(bullet[j].y+20 < enemy[i].y ||
				bullet[j].y > enemy[i].y+60 ||
				  bullet[j].x+20 < enemy[i].x ||
				  bullet[j].x-20 > enemy[i].x+40))
				  {
					  //collision_effect(enemy[i].x,enemy[i].y,2);
					  enemy.splice(i,1);
					  bullet.splice(j,1);
					  seagullDeath.play();
					  score++;
				  }
		}
	}
	
	//Player & Enemy bullet
	
	for (var i = 0; i < enemy_bullet.length; i++)
		{
		if (!(player.y+50 < enemy_bullet[i].y || 
				  player.y+10 > enemy_bullet[i].y ||
				  player.x+60 < enemy_bullet[i].x ||
				  player.x > enemy_bullet[i].x))
				  {
					  // collision_effect(enemy_bullet[i].x,enemy_bullet[i].y, 2);
					  // score--;
					  death(); 
					  enemy_bullet.splice(i,1);
					  
				  }	  
		}
    
    
    
    //Player & Enemy
    
    for (var i = 0; i < enemy.length; i++)
		{
		if (!(player.y+50 < enemy[i].y || 
				  player.y+10 > enemy[i].y+40 ||
				  player.x+60 < enemy[i].x ||
				  player.x-10 > enemy[i].x+40))
				  {
					  // collision_effect(enemy_bullet[i].x,enemy_bullet[i].y, 2);
					  // score--;
					  death(); 
					  enemy_bullet.splice(i,1);
					  
				  }	  
		}
    
}

function collision_effect(x,y, color) /* 1 for blue, 2 for orange */
{
	if (color == 2)
	{
		coll_effect[coll_effect.length] = {x: x, y: y, image:orange_hitImg, frameCtr:0, ctrMax:3, spriteIdx:0, idxMax:3 }
	}
}

function player_Nbullet()  // Normal bullet
{
	laser.play();
	bullet[bullet.length] = {width:7, height:7, xspeed:24, yspeed:0, x:player.x+60 , y:player.y+25 };
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
	


function projectile()
{
    // player bullet generation
	if ( zPressed == true && bullet_trig == true )
	{
		//console.log("fired");
		player_Spray();
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

function death()
{
		
	clearInterval(uIval);
	 
	alert("Your score was " + score);
	
	
}

function scrollMap()
{
    for (var i = 0; i < map.length; i++)
    {
        map[i].x -= scroll;
    }
    if (map[0].x == -800)
    {
        map.splice(0,1);
        map[1] = {image:bgImage, x:800};
    }
}

function render()
{
    
	surface.clearRect(0, 0, _canvas.width, _canvas.height); // x, y, w, h
	
	
	
	// Render bg image
		for (var bg = 0; bg < 2; bg++)
		{
	    surface.drawImage(map[bg].image,map[bg].x,0,800,600);
		}

	// Render player...
	surface.drawImage(player.image, 
	                   0,spriteIdx*123,190,123, 
	                   player.x, player.y , 84 ,60);
	// Render player bullet
	for (var b = 0; b < bullet.length; b++)
	{
		surface.drawImage(bulletImg, bullet[b].x, bullet[b].y);
		
	}
	
	// Render enemy
	for (var i= 0; i < enemy.length; i++)
	{
	    surface.drawImage(enemy[i].image, enemy[i].spriteIdx*62, 0 , 62, 52, enemy[i].x, enemy[i].y,70,70);
	}
    
    // Render enemy bullet
    for (var j = 0; j < enemy_bullet.length; j++)
    {
        surface.drawImage(enemy_bulletImg, enemy_bullet[j].x, enemy_bullet[j].y,20,15);
    }
	 // Render hit effect
	for (var c = 0; c < coll_effect.length; c++)
	{
		surface.drawImage(coll_effect[c].image, coll_effect[c].spriteIdx*45, 0 , 45,50, coll_effect[c].x, coll_effect[c].y,50,50);
	}

		// Render score
		surface.font="30px Verdana";
		surface.fillText("Score", 550,50);
		surface.fillText(score, 700,50);
	
	
}




function viewinfo() {
    document.getElementById("info").innerHTML = "ctrMax = " + ctrMax + "<br> idxMax = " + idxMax + "<br> bullet.speed = " + 24;
}

function onKeyDown(event)
{
	switch(event.keyCode)
	{
		case 37: // Left.
				if ( leftPressed == false )
					leftPressed = true;
				break;
		case 39: // Right.
				if ( rightPressed == false )
					rightPressed = true;
				break;
		case 38: // Up.
				if ( upPressed == false )
					upPressed = true;
				break;
		case 40: // Down.
				if ( downPressed == false )
				downPressed = true;
				break;
		case 90: //z
				if (zPressed == false )
				{
					zPressed = true;
					
					
				}
				break;
		default:
				console.log("Unhandled key.");
				break;
	}
}

function onKeyUp(event)
{
	switch(event.keyCode)
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
		case 90: //z
				zPressed = false;
				bullet_trig = true;
				console.log(bullet);
				console.log(bullet_trig);
				break;
		default:
				console.log("Unhandled key.");
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






