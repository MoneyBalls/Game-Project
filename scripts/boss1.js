var imageboss= new Image();
imageboss.src=" imageboss.src = "FinalBoss/FinalBoss_01.png";
 var bosslist = ["FinalBoss/FinalBoss_01.png","FinalBoss/FinalBoss_02.png","FinalBoss/FinalBoss_03.png","FinalBpss/FinalBoss_04.png","FinalBoss/FinalBoss_05.png","FinalBoss/FinalBoss_06.png"];
 var slowmotion=0;
 var count =0;
 var locofboss=700;
 var bossexit=false;
 var boss1hp= 11;
 var chase=new Image();
 chase.src ="img/rLaser_red_thick_512[1].png";
 var lunch= false;
 var miss= 800;
 var carm=[];
 function motionboss()
 
  {
            if (slowmotion == 6)
                {
            imageboss.src = bosslist[count];
                    
                }
            count++;
            slowmotion++;
            
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
                            carm[carm.length] = {img:chase, x:700,y:polocofboss,hp:5};
                            lunch = false;
                        }
                    for (var i = 0; i < carm.length; i++)
                        {
						
						
						carm[i].x-=15;
						
						}
						
						
		}