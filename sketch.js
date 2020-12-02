var player, playerImg;
var backgroundImg;
var edges;
var playerBullet1Img,playerBullet2Img;
var enemyBulletImg,bossBulletImg;

function preload()
{
    playerImg = loadImage('images/spacecraft.png');
    backgroundImg = loadImage('images/background.jpg'); 
  //  playerBullet1Img = loadImage('images/Bullet1.png');
  //  playerBullet2Img = loadImage('images/Bullet2.png');
    enemyBulletImg = loadImage('images/Enemy Bullet.png');
    bossBulletImg= loadImage('images/Boss Bullet.png');
}

function setup()
{
    var canvas =  createCanvas(800,1200);
    var x = (windowWidth - width)/2;
    var y = (windowHeight - height)/2;
    canvas.position(x,y);

    player = createSprite(400,1150);
    player.addImage(playerImg);
    player.scale = 0.18;    

    edges =  createEdgeSprites();
}

function draw()
{
    background(backgroundImg);

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


   
    spawnEnemy();
    drawSprites();
}

function  spawnEnemy()
{
    if(frameCount % 50 === 0)
    {
        var enemy = new Enemy(400,50);
        enemy.display();
        enemy.lifetime = 60;
    }
}

function spawnBoss()
{
//spawn boss

}

function firePB1()
{
//fire bullet 1 on space pressed
}

function firePB2()
{
//fire bullet 2 on Z pressed

}

function enemyFiring()
{
//enemy firing

}

function bossFiring()
{
//boss firing

}