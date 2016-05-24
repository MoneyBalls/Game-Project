
function render_main()
{
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
	
	render_bullets();
	render_UI();
}