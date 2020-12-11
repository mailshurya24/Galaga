var player, playerImg;
var backgroundImg,rand_sprites;
var edges,enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemyImg,enemy_array=[];
var playerBullet1Img,playerBullet2Img;
var enemyBulletImg,bossBulletImg;
var score = 0; 

function preload()
{
    playerImg = loadImage('spacecraft.png');
    backgroundImg = loadImage('background.jpg'); 
    playerBullet1Img = loadImage('Bullet1.png');
    playerBullet2Img = loadImage('Bullet2.png');
    enemyBulletImg = loadImage('EnemyBullet.png');
    bossBulletImg= loadImage('BossBullet.png');
    enemyImg = loadImage('Enemy.png');
    bossImg = loadImage('Boss.png');
}

function setup()
{
    var canvas =  createCanvas(1600,1200);
    var x = (windowWidth - width)/2;
    var y = 1200;
    canvas.position(x,y);
    
    

    player = createSprite(450,1150);
    player.addImage(playerImg);
    player.scale = 0.18;    

    bullet1Group = new Group();
    bullet2Group = new Group();

    enemy1 = createSprite(canvas.width/2-250,450,30,30);
    enemy1.addImage(enemyImg);
    enemy1.scale = 0.1;
    enemy1.velocityY=2;
    //console.log(canvas.width/2);

    enemy2 = createSprite(canvas.width/2-200,450,30,30);
    enemy2.addImage(enemyImg);
    enemy2.scale = 0.1;
    enemy2.velocityY=2;

    enemy3 = createSprite(canvas.width/2-150,450,30,30);
    enemy3.addImage(enemyImg);
    enemy3.scale = 0.1;
    enemy3.velocityY=2;

    enemy4= createSprite(canvas.width/2-100,450,30,30);
    enemy4.addImage(enemyImg);
    enemy4.scale = 0.1;
    enemy4.velocityY=2;

    enemy5= createSprite(canvas.width/2-50,450,30,30);
    enemy5.addImage(enemyImg);
    enemy5.scale = 0.1;
    enemy5.velocityY=2;

    enemy6 = createSprite(canvas.width/2,450,30,30);
    enemy6.addImage(enemyImg);
    enemy6.scale = 0.1;
    enemy6.velocityY=2;

    enemy7 = createSprite(canvas.width/2+50,450,30,30);
    enemy7.addImage(enemyImg);
    enemy7.scale = 0.1;
    enemy7.velocityY=2;

    enemy8 = createSprite(canvas.width/2+100,450,30,30);
    enemy8.addImage(enemyImg);
    enemy8.scale = 0.1;
    enemy8.velocityY=2;

    enemy9= createSprite(canvas.width/2+150,450,30,30);
    enemy9.addImage(enemyImg);
    enemy9.scale = 0.1;
    enemy9.velocityY=2;

    enemy10= createSprite(canvas.width/2+200,450,30,30);
    enemy10.addImage(enemyImg);
    enemy10.scale = 0.1;
    enemy10.velocityY=2;

    enemy11= createSprite(canvas.width/2+250,450,30,30);
    enemy11.addImage(enemyImg);
    enemy11.scale = 0.1;
    enemy11.velocityY=2;

    enemy_array.push(enemy1);
    enemy_array.push(enemy2);
    enemy_array.push(enemy3);
    enemy_array.push(enemy4);
    enemy_array.push(enemy5);
    enemy_array.push(enemy6);
    enemy_array.push(enemy7);
    enemy_array.push(enemy8);
    enemy_array.push(enemy9);
    enemy_array.push(enemy10);
    enemy_array.push(enemy11);

    edges =  createEdgeSprites();
}

function draw()
{
    background(backgroundImg);

  //  console.log(windowWidth);
    
    player.velocityX = 0;
    player.velocityY = 0;

    if(keyDown(UP_ARROW))
    {
        player.velocityY = -5;
    }

    if(keyDown(DOWN_ARROW))
    {
        player.velocityY = 5;
    }

    if(keyDown(LEFT_ARROW))
    {
        player.velocityX = -5;
    }

    if(keyDown(RIGHT_ARROW))
    {
        player.velocityX = 5;
    }

    player.collide(edges);

    if(keyDown("space"))
    {
     firePB1();
    }

    if(keyDown("b"))
    {
     firePB2();
    }
   
    for(var i=0;i<enemy_array.length;i++)
    {
      if(enemy_array[i].y === 500)
        {
            enemy_array[i].velocityY=0;          
        }
    }
    
    spawnEnemy();

  for(var i = 0; i<enemy_array.length; i++)
    {
    if(bullet1Group.isTouching(enemy_array[i]))
    {
       enemy_array[i].destroy();
       score = score + 3;
    }

    if(bullet2Group.isTouching(enemy_array[i]))
    {
        enemy_array[i].destroy();
        score = score + 3;
    }

    }
    drawSprites();

}    
   

function spawnEnemy()
{
    if(frameCount % 50 === 0)
    {
       /* var enemy = new Enemy(400,50);
        enemy.display();
        enemy.lifetime = 60;*/

        /*var canvas =  createCanvas(800,1200);
        var x = (windowWidth - width)/2;
        var y = 1200;
        canvas.position(x,y);*/

        rn = Math.round(random(1,2));
            switch(rn)
            {
                case 1: if(player.x > enemy1.x)
                {
                            enemy1.rotation = -15;
                            enemy1.velocityX=2;
                            enemy1.velocityY=3;
                }
                        else
                {
                            enemy1.rotation = -35;
                            enemy1.velocityX= -2;
                            enemy1.velocityY=3;
                }
                        break;

                        
                case 2: if(player.x > enemy2.x)
                {
                    enemy2.rotation = -15;
                    enemy2.velocityX=2;
                    enemy2.velocityY=3;
                }
                else
                {
                    enemy2.rotation = -35;
                    enemy2.velocityX=-2;
                    enemy2.velocityY=3;
                }
                        break;

                        
                case 3: if(player.x < canvas.width/4)
                {
                    enemy3.rotation = -15;
                    enemy3.velocityX=2;
                    enemy3.velocityY=3;
                }
                else
                {
                    enemy3.rotation = -35;
                    enemy3.velocityX=-2;
                    enemy3.velocityY=3;
                }
                        break;


                case 4: if(player.x < canvas.width/4)
                {
                    enemy4.rotation = -15;
                    enemy4.velocityX=2;
                    enemy4.velocityY=3;
                }
                else
                {
                    enemy4.rotation = -35;
                    enemy4.velocityX=-2;
                    enemy4.velocityY=3;
                }
                        break;


                case 5: if(player.x < canvas.width/4)
                {
                    enemy5.rotation = -15;
                    enemy5.velocityX=2;
                    enemy5.velocityY=3;
                }
                else
                {
                    enemy5.rotation = -35;
                    enemy5.velocityX=-2;
                    enemy5.velocityY=3;
                }
                        break;


                case 6: if(player.x < canvas.width/4)
                {
                    enemy6.rotation = -15;
                    enemy6.velocityX=2;
                    enemy6.velocityY=3;
                }
                else
                {
                    enemy6.rotation = -35;
                    enemy6.velocityX=-2;
                    enemy6.velocityY=3;
                }
                        break;


                case 7: if(player.x < canvas.width/4)
                {
                    enemy7.rotation = -15;
                    enemy7.velocityX=2;
                    enemy7.velocityY=3;
                }
                else
                {
                    enemy7.rotation = -35;
                    enemy7.velocityX=-2;
                    enemy7.velocityY=3;
                }
                        break;


                case 8: if(player.x < canvas.width/4)
                {
                    enemy8.rotation = -15;
                    enemy8.velocityX=2;
                    enemy8.velocityY=3;
                }
                else
                {
                    enemy8.rotation = -35;
                    enemy8.velocityX=-2;
                    enemy8.velocityY=3;
                }
                        break;


                case 9: if(player.x < canvas.width/4)
                {
                    enemy9.rotation = -15;
                    enemy9.velocityX=2;
                    enemy9.velocityY=3;
                }
                else
                {
                    enemy9.rotation = -35;
                    enemy9.velocityX=-2;
                    enemy9.velocityY=3;
                }
                        break;


                case 10: if(player.x < canvas.width/4)
                {
                    enemy10.rotation = -15;
                    enemy10.velocityX=2;
                    enemy10.velocityY=3;
                }
                else
                {
                    enemy10.rotation = -35;
                    enemy10.velocityX=-2;
                    enemy10.velocityY=3;
                }
                        break;

                        
                case 11: if(player.x < canvas.width/4)
                {
                    enemy11.rotation = -15;
                    enemy11.velocityX=2;
                    enemy11.velocityY=3;
                }
                else
                {
                    enemy11.rotation = -35;
                    enemy11.velocityX=-2;
                    enemy11.velocityY=3;
                }
                        break;
            }
    }
}

function spawnBoss()
{
//spawn boss
if(score>33)
{
    boss1 = createSprite(canvas.width/2-250,450,30,30);
    boss1.addImage(enemyImg);
    boss1.scale = 0.1;
    boss1.velocityY=2;
    //console.log(canvas.width/2);

    boss2 = createSprite(canvas.width/2-200,450,30,30);
    boss2.addImage(enemyImg);
    boss2.scale = 0.1;
    boss2.velocityY=2;

    boss3 = createSprite(canvas.width/2-150,450,30,30);
    boss3.addImage(enemyImg);
    boss3.scale = 0.1;
    boss3.velocityY=2;

    boss4= createSprite(canvas.width/2-100,450,30,30);
    boss4.addImage(enemyImg);
    boss4.scale = 0.1;
    boss4.velocityY=2;

    boss5= createSprite(canvas.width/2-50,450,30,30);
    boss5.addImage(enemyImg);
    boss5.scale = 0.1;
    boss5.velocityY=2;

    boss6 = createSprite(canvas.width/2,450,30,30);
    boss6.addImage(enemyImg);
    boss6.scale = 0.1;
    boss6.velocityY=2;

    boss7 = createSprite(canvas.width/2+50,450,30,30);
    boss7.addImage(enemyImg);
    boss7.scale = 0.1;
    boss7.velocityY=2;

  /*  enemy8 = createSprite(canvas.width/2+100,450,30,30);
    enemy8.addImage(enemyImg);
    enemy8.scale = 0.1;
    enemy8.velocityY=2;

    enemy9= createSprite(canvas.width/2+150,450,30,30);
    enemy9.addImage(enemyImg);
    enemy9.scale = 0.1;
    enemy9.velocityY=2;

    enemy10= createSprite(canvas.width/2+200,450,30,30);
    enemy10.addImage(enemyImg);
    enemy10.scale = 0.1;
    enemy10.velocityY=2;*/

}

}

function firePB1()
{
//fire bullet 1 on space pressed
var bullet1 = createSprite(200,300,20,20);
bullet1.x = player.x;
bullet1.y = player.y - 50;
bullet1.velocityY = -2;
//bullet1.shapeColor = "yellow";
bullet1.addImage(playerBullet1Img);
bullet1.scale=0.05;

bullet1Group.add(bullet1);
}

function firePB2()
{
//fire bullet 2 on B pressed
var bullet2 = createSprite(200,300,20,20);
bullet2.x = player.x;
bullet2.y = player.y - 50;
bullet2.velocityY = -2;
//bullet2.shapeColor = "green";
bullet2.addImage(playerBullet2Img);
bullet2.scale=2;

bullet2Group.add(bullet2);
}

function bossFiring()
{
//boss firing

}