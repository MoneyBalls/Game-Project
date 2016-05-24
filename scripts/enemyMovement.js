
function move_enemies()
{
    for (var i = 0; i < enemy.length; i++)
    {
        enemy[i].x -= enemy[i].speed;
    }
    
}