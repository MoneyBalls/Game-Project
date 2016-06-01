
function render_main()
{
		surface.fillStyle="black";
	surface.clearRect(0, 0, canvas.width, canvas.height); // x, y, w, h
	// Render bg image
	for (var bg = 0; bg < 2; bg++)
	{
		surface.drawImage(map[bg].image,map[bg].x,0, 800, 600);
	}
	
	// Render player
	surface.drawImage(player.image, 0, spriteIdx * 123, 190, 123, player.x, player.y, 84, 60);
	
	// Render enemy
	for (var i= 0; i < enemy.length; i++)
		{
		surface.drawImage(enemy[i].image, enemy[i].spriteIdx*62, 0 , 62, 52, enemy[i].x, enemy[i].y,70,70);
		}
	if (bossexit == true)
        {
			if (locofboss < 0)
                {
                    surface.drawImage(imageboss,700,-locofboss,100,100);
                    if (boss2hp <= 100)
                        {
                           // console.log(locofboss);
                            if (locofboss >= -100 || locofboss <= -375)
                                {surface.drawImage(chase,0,-locofboss,800,40); }
                            else{
                                surface.drawImage(chase,100,-locofboss,700,40);
                            }
                          //surface.drawImage(chase,100,-locofboss,700,40);  
                        }
                    //surface.drawImage(chase,100,-locofboss,700,40);
                      //surface.drawImage(chase,100,-locofboss,700,40);
                    if (locofboss <= -505)
                        {locofboss = 500;}
                    for (var i = 0; i < carm.length; i++)
                        {
                    //surface.drawImage(carm[i].img,carm[i].x,carm[i].y,100,50);
                            surface.drawImage(carm[i].img,carm[i].x,carm[i].y,100,50);
                        }
                }
            else
                {
            surface.drawImage(imageboss,700,locofboss,100,100);
                    if (boss2hp <= 100)
                        {
                             if (locofboss <= 100 || locofboss >= 375)
                                {surface.drawImage(chase,0,locofboss,800,40); }
                            else{
                                surface.drawImage(chase,100,locofboss,700,40);
                            }
                          //surface.drawImage(chase,100,locofboss,800,40);  
                        }
                     //surface.drawImage(chase,100,locofboss,700,40);
                     for (var i = 0; i < carm.length; i++)
                         {
                    //surface.drawImage(carm[i].img,carm[i].x,carm[i].y,100,50);
                              surface.drawImage(carm[i].img,carm[i].x,carm[i].y,100,50);
                         }
                }
            //locofboss -= 10;
        }
	for (var i = 0; i < pickups.length; i++)
	{
			surface.drawImage(pickups[i].img, pickups[i].spriteIdx*32,0,32,32, pickups[i].x, pickups[i].y,40,40);
	}
	render_bullets();
	render_UI();
}