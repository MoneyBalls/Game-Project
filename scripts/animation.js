	//animation vars
	var frameCtr = 0;
	var ctrMax = 4;
	var spriteIdx = 0;
	var idxMax = 3;
	
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
}	

function enemy_animation()
{
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
			continue;
		}
	    coll_effect[i].frameCtr++;
	}
}

function coin_animation() {
    for (var i = 0 ; i < pickups.length; i++) {

        if (pickups[i].frameCtr == pickups[i].ctrMax) {
            pickups[i].frameCtr = 0;
            pickups[i].spriteIdx++;

            if (pickups[i].spriteIdx == pickups[i].idxMax)
                pickups[i].spriteIdx = 0;
            continue;
        }
        pickups[i].frameCtr++;
    }
}