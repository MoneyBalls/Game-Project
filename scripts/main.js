	var fps = 30;
	var stage = document.getElementById("stage");
	var canvas = document.querySelector("canvas");
	var surface = canvas.getContext("2d"); // d is lowercase!
	var state = "mainmenu"; // mainmenu, weaponshop, ingame, option
	var coin = 0;
	var tempPU = { img:null, x:0, y:0, frameCtr:0, ctrMax:2, spriteIdx:0, idxMax:7};
					tempPU.img = new Image();
					tempPU.img.src = "img/pickup.png";
	//Set the canvas size
	const ROWS = 6;
	const COLS = 8;
	const SIZE = 100;
	const scroll = 5;
	var pickups =[];
	
	canvas.width = COLS*SIZE;
	canvas.height = ROWS*SIZE;
	
	
	var uIval = setInterval(update, 1000/fps); 	//30fps
	var mainmenu_interval;
	var mapselect_interval;
	var shop_interval;
	var option_interval;
	var win_interval;
	var death_interval;
	var map = []; 			// = new Array(ROWS);
	var shop_option =1;
	var player = {x:SIZE*2, y:SIZE*3, speed:10, dX:0, dY:0, image:null, current_weapon:1, weapon_one:0, weapon_two:0, weapon_three:0};
		player.weapon_one = 1;
		player.weapon_two = 2;
		//player.weapon_three = 0;
	var weapon = [];
		weapon[1] = {price:0};
		weapon[2] = {price:0};
		weapon[3] = {price:1};
	
	var initBullet = {width:10, height:10, speed:30, x:player.x , y:player.y};
	var mapselImage = mapselImage[lz];
		//mapselImage.src = "img/level-selection.png";
	var bgImage = new Image();
		bgImage.src = "img/purple_woods.jpg";
	var unlockedlevel = 1;
	
	var shopImage = new Image();
		shopImage.src = "img/weaponshop.png";
	var pImage = new Image();
		pImage.src = "img/bird.png";
		player.image = pImage;
	
	var stageSound = new Audio();
		stageSound.src = "sound/sf5ken.mp3";	
	
	var enemyGun = new Audio();
		enemyGun.src = "sound/shooter.wav";
	var menuImage = menuImage[lz];
		//menuImage.src = wMenuImage.src;
	
	//var checkEnemyArray = setInterval(viewInfo, 700);	//Strictly for debugging and checking enemyArray to see if it properly deletes the objects of the array (it does).
	
	
	var levelTwoButton = document.getElementById("levelTwo_button");
	levelTwoButton.addEventListener("click", initLevelTwo);	//Button transition betweens levels for now.
	
	var currentLevel = 1;	//Just to keep track on the level and adjust the code accordingly.
	var mainmenu_option = 0; // 0 = start, 1 = weapon shop, 2= option,
	var mapselect_option = 0; // 0 = level 1, 1 = level 2,
	
	//
	clearInterval(uIval);
	menuImage.addEventListener("load", mainmenu_render);
	
	
	// CALLING STATE
	if (state == "mainmenu")
		call_mainmenu();
	
	
function initLevelOne()
{
	clearInterval(enemyint);
	map[0] = {image:bgImage, x:0};
	map[1] = {image:bgImage, x:800};
	levelChecker();
	
	stageSound.currentTime = 0;
	stageSound.play();
	stageSound.loop = true;
	window.uIval = setInterval(update, 33.34);
	enemyint = setInterval(enemy_gen, 700);
}

function initLevelTwo()
{
	bgImage.src = "img/maxresdefault.jpg";
	currentLevel = 2;
	levelChecker();
	
	stageSound.currentTime = 0;
	stageSound.play();
	stageSound.loop = true;
}

function initLevelThree()
{
	bgImage.src = "img/level3bg.png";
	currentLevel = 3;
	levelChecker();
	
	stageSound.currentTime = 0;
	stageSound.play();
	stageSound.loop = true;
}

function clear_int()
{
	clearInterval(mainmenu_interval);
	clearInterval(mapselect_interval);
	clearInterval(uIval);
	clearInterval(death_interval);
	clearInterval(win_interval);
	clearInterval(shop_interval);
	
}
function call_mainmenu()
{
	clear_int();
	clearInterval(win_interval);
	initializer();
	mainmenu_interval = setInterval(menu_update, 33.34);
}

function call_mapselect()
{
	clear_int();
	mapselect_interval = setInterval(mapselect_update, 33.34);
	
}
function call_ingame()
{
	score = 0;
	console.log("ingame");
	clear_int();
	initializer();
	if (currentLevel==2)
	{initLevelTwo();
	}
	if (currentLevel==3)
	{
		initLevelThree();
	}
	initLevelOne();
	
}

function call_weaponshop()
{
	console.log("weaponshop");
	clear_int();
	//initializer();
	shop_interval = setInterval(shop_update, 33);
}

function shop_update()
{
	surface.clearRect(0,0,800,600);
	weaponshop_render();
	shopmove();
	console.log("shop_update");
}

function call_option()
{
	console.log("option");
}
function menu_update()
{
	mainmenu_render();
	menumove();
}

function mapselect_update()
{
	mapselect_render();
	mapmove();
}

function update() // Going to run 30fps
{
	movePlayer();
	scrollMap();
	playerBulletCheck();
	enemyBulletCheck();
	
	// move enemies
	move_enemies();
	collision_check();
	player_animation();
	enemy_animation();
	coin_animation();
	// animate sprites
	effect_animation();
	if (bossexit == true)
		motionboss();
	render_main();
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

function viewInfo() 
{
    console.log(enemy);
}
