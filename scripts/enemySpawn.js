	var enemy = []; 		//Enemy Array
	
	var seagullImage = new Image();
	seagullImage.src = "img/enemy_seagull.png";
	
	setTimeout(enemy_gen,200); 	//Set enemy generation / spawn 

	var enemyint = setInterval(enemy_gen,700);
	
function enemy_gen()
{
	var ranY = Math.floor(Math.random()*500)+50;
	enemy[enemy.length] = {x:800, y:ranY, image:seagullImage, type:"_3way", speed:10, bullet_speed:24, frameCtr:0, ctrMax:4, spriteIdx:0, idxMax:3};
	
	var l = enemy.length;
	// bullet_generation( l ,135, 30);
	fire_Circlebullet(enemy.length-1,15);

	//fire_Nbullet(15);
	//setTimeout(fire_Nbullet,500,15);	
}