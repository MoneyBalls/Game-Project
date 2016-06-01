	
	var score = 0; 	// +=1 for every kill
	
	var seagullDeath = new Audio();
	seagullDeath.src = "sound/seagull-death.mp3";
	
	var coll_effect = [];
	
	var orange_hitImg = new Image();
	orange_hitImg.src = "img/orange_hit.png";
	
function collision_check()
{
    //Player bullet & Enemy
	for (var j = 0; j < bullet.length; j++)
	{
		for (var i = 0; i < enemy.length; i++)
		{
			if (!(bullet[j].y + bullet[j].h < enemy[i].y || bullet[j].y > enemy[i].y + 60 || bullet[j].x+bullet[j].w < enemy[i].x || bullet[j].x - 20 > enemy[i].x + 40))
			{
				collision_effect(enemy[i].x, enemy[i].y, 2);
				enemy[i].hp -= bullet[j].dmg;
				if (enemy[i].hp <= 0)
				{
					
                    pickups.unshift({img:tempPU.img, x:enemy[i].x, y:enemy[i].y, frameCtr:0, ctrMax:2, spriteIdx:0, idxMax:7});
					setTimeout(function(){pickups.splice((pickups.length-1),1)},10000);
					//pickups[activePU].active = true;
					
					enemy.splice(i, 1);
					seagullDeath.play();
					score++;
				}
				if (!(bullet[j].type == "pierce"))
				{
					bullet.splice(j, 1);
				}
				if (score == 15)
                    {
						console.log("10!");
                        bossexit = true;
                    }
			}
		}
	
	// player bullet & boss1
	 if (!(bullet[j].y+bullet[j].h < locofboss || bullet[j].y > locofboss+100 || bullet[j].x+bullet[j].w <700 || bullet[j].x-20 > 700+100))
            {
                boss2hp -= bullet[j].dmg;
				console.log("hit");
				console.log(boss2hp);
				collision_effect(750,locofboss,2);
                if (boss2hp <= 0)
                    {
						win();
                        console.log(locofboss);
                        bossexit = false;
						boss2hp = 300;
                    }
               
            }
	}
	//Player & Enemy bullet
	for (var i = 0; i < enemy_bullet.length; i++)
	{
		if (!(player.y + 50 < enemy_bullet[i].y || player.y + 10 > enemy_bullet[i].y || player.x + 60 < enemy_bullet[i].x || player.x > enemy_bullet[i].x))
		{
			collision_effect(enemy_bullet[i].x, enemy_bullet[i].y, 2);
			reduceLives();
			enemy_bullet.splice(i, 1);		  
		}	  
	}
    
    //Player & Enemy
    for (var i = 0; i < enemy.length; i++)
	{
		if (!(player.y + 50 < enemy[i].y || player.y + 10 > enemy[i].y + 40 || player.x + 60 < enemy[i].x || player.x-10 > enemy[i].x+40))
		{
			collision_effect(enemy[i].x, enemy[i].y, 2);
			enemy[i].hp -= 10;
			if (enemy[i].hp <= 0)
			{
				enemy.splice(i, 1);
				seagullDeath.play();
				score++;
			}
			reduceLives(); 
			
		}
		
		if (enemy[i].x < -100)
		{
			enemy.splice(i, 1);
		}
	}
	//here is boss weapon
    if ( bossexit == true)
        {
    if (locofboss < 0)
        {
            var polocofboss = -locofboss;
        }
    else{
        var polocofboss = locofboss;
        }
    //if ((player.y+50 > polocofboss && player.y < polocofboss+50) && (player.x + 50 > 80) && boss2hp <= 70)
//{
  //  playerLives -= 0.1;
//}
            if (polocofboss <= 100 || polocofboss >= 375)
        {
            if ((player.y+50 > polocofboss && player.y < polocofboss+50) && boss2hp <= 100)
                {
                     reduceLives();
                }
        }
        else{
         if ((player.y+50 > polocofboss && player.y < polocofboss+50)&&(player.x + 50 > 80) && boss2hp <= 70)
            {
    reduceLives();
        }
        }
    //missile
    for (var l = 0; l < carm.length; l++)
	{
		if (!(player.y+50 < carm[l].y || player.y+10 > carm[l].y+50 || player.x+60 < carm[l].x || player.x > carm[l].x+50))
		{
			//collision_effect(carm[l].x,carm[l].y, 2);
            reduceLives();
			carm.splice(l,1);		  
		}	  
	}
        }
		
		for (var i = 0; i < pickups.length; i++)
	{
		if (!( player.y > pickups[i].y +50 || //Player.top > Pickup.bottom
			   player.y+50 < pickups[i].y  || // Player.bottom < Pickup.top
			   player.x > pickups[i].x+50  || // Player.left > Pickup.right
			   player.x+50 < pickups[i].x )) // Player.right < Pickup.left				
		{ // runs if colliding.
			pickups.splice(i,1);
			coin++;
			
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