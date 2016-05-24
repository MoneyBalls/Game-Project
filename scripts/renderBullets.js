
function render_bullets()
{
	// Render player bullet
	for (var b = 0; b < bullet.length; b++)
	{
		surface.drawImage(bulletImg, bullet[b].x, bullet[b].y);
		
	}
    
    // Render enemy bullet
    for (var j = 0; j < enemy_bullet.length; j++)
    {
        surface.drawImage(enemy_bulletImg, enemy_bullet[j].x, enemy_bullet[j].y,20,15);
    }
}