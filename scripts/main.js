	
	var stage = document.getElementById("stage");
	var canvas = document.querySelector("canvas");
	var surface = canvas.getContext("2d"); // d is lowercase!

	//Set the canvas size
	const ROWS = 6;
	const COLS = 8;
	const SIZE = 100;
	const scroll = 5;

	canvas.width = COLS*SIZE;
	canvas.height = ROWS*SIZE;
	
	var uIval = setInterval(update, 33.34); 	//30fps
	var map = []; 			// = new Array(ROWS);
	
	var player = {x:SIZE*2, y:SIZE*3, speed:10, dX:0, dY:0, image:null, current_weapon:1, weapon_one:0, weapon_two:0, weapon_three:0};
	player.weapon_one = 1;
	player.weapon_two = 2;
	player.weapon_three = 3;
	var initBullet = {width:10, height:10, speed:30, x:player.x , y:player.y};
	
	var bgImage = new Image();
	bgImage.src = "img/purple_woods.jpg";
	
	var pImage = new Image();
	pImage.src = "img/bird.png";
	player.image = pImage;
	
	var stageSound = new Audio();
	stageSound.src = "sound/sf5ken.mp3";	
	
var enemyGun = new Audio();
	enemyGun.src = "sound/shooter.wav";
	
	//var checkEnemyArray = setInterval(viewInfo, 700);	//Strictly for debugging and checking enemyArray to see if it properly deletes the objects of the array (it does).
	initLevelOne();
	
	var levelTwoButton = document.getElementById("levelTwo_button");
	levelTwoButton.addEventListener("click", initLevelTwo);	//Button transition betweens levels for now.
	
	var currentLevel = 1;	//Just to keep track on the level and adjust the code accordingly.
	
function initLevelOne()
{
	map[0] = {image:bgImage, x:0};
	map[1] = {image:bgImage, x:800};
	levelChecker();
	
	stageSound.currentTime = 0;
	stageSound.play();
	stageSound.loop = true;
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
	currentLevel = 3;
	levelChecker();
	stageSound.play();
	stageSound.loop = true;
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
	
	// animate sprites
	effect_animation();
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
