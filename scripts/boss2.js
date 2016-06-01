var imageboss = new Image();
    imageboss.src = "Boss2/phe11.png";
 var bosslist = ["Boss2/phe11.png","Boss2/phe22.png","Boss2/phe33.png","Boss2/phe44.png","Boss2/phe55.png","Boss2/phe66.png"];
var count = 0;
var slowmotion = 0;
var locofboss = 700;
var bossexit = false;
var boss2hp = 11;
var chase = new Image();
chase.src = "img/redLaserRay.png";
var missile = new Image();
missile.src = "img/Laser_Red_Thick_512[1].png";
var countmissile = 0;
var lunch = false;
var miss = 600;
var carm = [];
function motionboss()
        {
            if (slowmotion == 6)
                {
            imageboss.src = bosslist[count];
                    
                }
            count++;
            slowmotion++;
            //console.log(slowmotion);
            if (slowmotion == 7)
                {
                    slowmotion = 0;
                }
            if (count == 6)
                {   countmissile++;
                    count = 0;}
            if (countmissile == 5)
                {
                    countmissile = 0;
                    lunch = true;
                }
            if (boss2hp >=70)
                {
                    locofboss -= 5;
                }
            else{
            locofboss -= 10;
            }
             if (lunch == true)
                        {
                             if (locofboss < 0)
                        {
                          var polocofboss = -locofboss;
                        }
                             else{
                          var polocofboss = locofboss;
                                }
                            carm[carm.length] = {img:missile, x:700,y:polocofboss,hp:5};
                            lunch = false;
                        }
                    for (var i = 0; i < carm.length; i++)
                        {
                            /*if (player.x < carm[i].x)
                            {carm[i].x-=11;
                            }
                            else if (player.x >= carm[i].x)
                                 {carm[i].x+=11;}
                            if (player.y < carm[i].y)
                            {carm[i].y-=5;}
                            else if (player.y >= carm[i].y)
                                 {carm[i].y+=5;}
                            
                            */
                            carm[i].x-=15;
                            
                            
                        }
        }