	
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
	
	//var uIval = setInterval(update, 33.34); 	//30fps
	var map = []; 			// = new Array(ROWS);
	
	var bgImage = new Image();
	bgImage.src = "img/purple_woods.jpg";
	
	var player = {x:SIZE*2, y:SIZE*3, speed:10, dX:0, dY:0, image:null};
	var initBullet = {width:10, height:10, speed:30, x:player.x , y:player.y};
	
	var pImage = new Image();
	pImage.src = "img/bird.png";
	player.image = pImage;


//==========================================================================================
//==========================================================================================
	
	var teamLogoImage = new Image(); //Team logo for intro
    teamLogoImage.src = "img/teamLogoImage.jpg";

	var psyBirdLogoImage = new Image(); //Game Logo for intro AND Main Menu
    psyBirdLogoImage.src = "img/psyBirdLogoImage.jpg";

	var menuArrow = new Image(); //Arrow sprite for main menu navigation
	menuArrow.src = "img/menuArrow.png";


    //MAIN MENU BUTTONS

	var startGameButton = new Image(); //START GAME BUTTON
	startGameButton.src = "img/startGameButton.png";

	var weaponShopButton = new Image(); //WEAPON SHOP BUTTON
	weaponShopButton.src = "img/weaponShopButton.png";

	var optionsButton = new Image(); //OPTIONS BUTTON
	optionsButton.src = "img/optionsButton.png";

    


	    
	    
	    


	function renderMainMenu() {

	    surface.drawImage(psyBirdLogoImage, 0, 0, 800, 600);

	    surface.drawImage(startGameButton, 270, 370, 250, 60);
	    surface.drawImage(weaponShopButton, 270, 450, 250, 60);
	    surface.drawImage(optionsButton, 265, 525, 250, 60);

	}

   
	renderMainMenu();
    

	addEventListener("keyup", function (e) {


	    if (e.keyCode == 49) {

	        //clear screen??
	        context.clearRect(0, 0, canvas.width, canvas.height);
	        initGame();
	    }


	}, false);
     
	initGame;


//====================================================================================
//====================================================================================



	
function initGame()
{
	//generateMap();
	map[0] = {image:bgImage, x:0};
	map[1] = {image:bgImage, x:800};
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

function viewInfo() {
    document.getElementById("info").innerHTML = "ctrMax = " + ctrMax + "<br> idxMax = " + idxMax + "<br> bullet.speed = " + 24;
}

