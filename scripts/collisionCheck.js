	
	var score = 0; 	// +=1 for every kill
	
	var seagullDeath = new Audio();
	seagullDeath.src = "sound/seagull-death.mp3";
	
	var coll_effect = [];
	
	var orange_hitImg = new Image();
	orange_hitImg.src = "img/orange_hit.png";
	
function collision_check()
{
    //Player bullet & Enemy
	for (var j=0; j<bullet.length; j++)
	{
		for (var i=0; i<enemy.length; i++)
		{
			if (!(bullet[j].y+bullet[j].h < enemy[i].y || bullet[j].y > enemy[i].y+60 || bullet[j].x+bullet[j].w < enemy[i].x || bullet[j].x-20 > enemy[i].x+40))
			{
				collision_effect(enemy[i].x,enemy[i].y,2);
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
		if (!(player.y+50 < enemy_bullet[i].y || player.y+10 > enemy_bullet[i].y || player.x+60 < enemy_bullet[i].x || player.x > enemy_bullet[i].x))
		{
			collision_effect(enemy_bullet[i].x,enemy_bullet[i].y, 2);
			//score--;
		   reduceLives();
			enemy_bullet.splice(i,1);		  
		}	  
	}
    
    //Player & Enemy
    for (var i = 0; i < enemy.length; i++)
	{
		if (!(player.y+50 < enemy[i].y || player.y+10 > enemy[i].y+40 || player.x+60 < enemy[i].x || player.x-10 > enemy[i].x+40))
		{
			// collision_effect(enemy_bullet[i].x,enemy_bullet[i].y, 2);
			// score--;
			reduceLives(); 
			enemy_bullet.splice(i,1);	  
		}	  
	}
    
}

function collision_effect(x,y, color) /* 1 for blue, 2 for orange */
{
	if (color == 2)
	{
		coll_effect[coll_effect.length] = {x: x, y: y, image:orange_hitImg, frameCtr:0, ctrMax:3, spriteIdx:0, idxMax:3}
	}
}