
function render_UI()
{
	// Render hit effect
	for (var c = 0; c < coll_effect.length; c++)
	{
		surface.drawImage(coll_effect[c].image, coll_effect[c].spriteIdx*45, 0 , 45,50, coll_effect[c].x, coll_effect[c].y,50,50);
	}

	// Render score
	surface.font="30px Verdana";
	surface.fillText("Score:", 600,50);
	surface.fillText(score, 750, 50);

	// Render lives
	surface.font = "30px Verdana";
	surface.fillText("Lives: ", 50, 50);
	surface.fillText(playerLives, 200, 50);
	
	// Coin
	surface.font = "30px Verdana";
	surface.fillText("Coins: ", 400,50);
	surface.fillText(coin,550,50);
	// Render Weapon UI
		surface.font = "20px Verdana";
		surface.fillText("1", 50,525);
				surface.fillText("2", 100,525);
		surface.fillText("3", 150,525);
		surface.beginPath();
		var weapon_slot;
		if (player.current_weapon == player.weapon_one)
			weapon_slot = 1;
		else if (player.current_weapon == player.weapon_two)
			weapon_slot = 2;
		else if (player.current_weapon == player.weapon_three)
			weapon_slot = 3;
		else
			console.log("weapon slot error");
		
		switch (weapon_slot)
		{
			case 1:
			surface.rect(50,500,25,25);
			break;
			case 2:
			surface.rect(100,500,25,25);
			break;
			case 3:
			surface.rect(150,500,25,25);
			break;
			default:
			console.log("No weapon");
			break;
			
		}
		surface.stroke();
		
}


function initializer()
{
	surface.clearRect(0, 0, canvas.width, canvas.height); 
	playerLives = 10;
	player.x = 50;
	player.y = 300;
	bossexit=false;
	count = 0;
slowmotion = 0;
locofboss = 700;
bossexit = false;
boss2hp = 300;
chase = new Image();
chase.src = "img/redLaserRay.png";
 missile = new Image();
missile.src = "img/Laser_Red_Thick_512[1].png";
countmissile = 0;
lunch = false;
miss = 600;
carm=[];
	clearInterval(enemyint);
	if (mainmenu_interval)
	clearInterval(mainmenu_interval);
	
}

function mainmenu_render()
{
	
	surface.drawImage(menuImage, 0, 60, 800,600, 0,0,800,600);
	surface.drawImage(menuImage, 0,0,256,60,280,350,256,60);	//start
	surface.drawImage(menuImage, 256,0,256,60,280,420,256,60);	//Weapon shop
	surface.drawImage(menuImage, 512,0,246,60,280,490,256,60);	//Option
	surface.drawImage(menuImage, 758,0,55,60,220,350+mainmenu_option*70,60,60);	//arrow
	
}

function win()
{
	unlockedlevel++;
	clearInterval(uIval);
	clearTimeout(enemyint); 
	stageSound.pause();
	for (var i = 0 ; i < 100; i++)
	{
		carm.splice(0,1);
		bullet.splice(0,1);
		enemy.splice(0,1);
		enemy_bullet.splice(0,1);
	}
	setTimeout(call_mainmenu,3000);
	win_interval = setInterval(win_msg,55);
}

function win_msg()
{
	//surface.clearRect(0, 0, 800,600);
	surface.fillStyle = "RGBA(0,200,200,0.8)";
	surface.fillRect(0,180,800,200);
	surface.fillStyle = "White";
	surface.fillText("Stage Cleared", 310,280);
	surface.fillStyle = "Black";
}
function weaponshop_render()
{
	
	surface.clearRect(0,0,800,600);
	surface.drawImage(shopImage,0,0,800,600);
	surface.fillStyle="RGBA(200,200,200,0.3)";
	surface.fillRect(100,100,600,350);
	surface.font = "30px Verdana";
	//surface.fillRect(0,0,800,600);
	
	surface.fillStyle="black";
	surface.fillText("Coins:", 100,50);
	surface.fillText(coin,200,50);
	
	surface.fillText("Gun 1",200,200);
	surface.fillText("Gun 2",200,250);
	surface.fillText("Gun 3",200,300);
	surface.fillText("Price",350,150);
	surface.drawImage(menuImage, 758,0,55,60,140,100+shop_option*50,60,60);
	for (var i = 1; i < 4; i++)
	{
	if (weapon[i].price == 0)
	{
		surface.fillText("Owned", 350,150+i*50);
	}
	else 
	{
		surface.fillText(weapon[i].price, 350,150+i*50);
	}
	
	}
	surface.fillText("Back",200,350);
	
}
function mapselect_render()
{
	surface.drawImage(mapselImage,0,0,800,600);
	surface.drawImage(menuImage, 758,0,55,60,30+mapselect_option*140,200,60,60);
	
	for (var i = unlockedlevel; i < 5; i++)
	{
		surface.fillStyle= "RGBA(0,0,0,0.9)";
		surface.fillRect(81+i*140,202,85,62);
		
	}
	
}