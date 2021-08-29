var bg, bg1;
var wolf, wolfimg;
var PLAY=1
var END=0
var tree, treeimg;
var toadstool, stoolimg;
var coin, coinimg
var edges;
var treesgroup;
var gameState = PLAY;
var overimg;

function preload() {
bg = loadImage("forest.png");
wolfimg = loadAnimation("wolf.gif");
treeimg = loadImage("tree stump.jpg");
overimg = loadImage("R.jpg");
}

function setup() {
    createCanvas(960,540)
    bg1 = createSprite(0,0,1200,600)
    bg1.addImage(bg) 
    bg1.velocityX = -10
    
    
    wolf = createSprite(150,450)
    wolf.addAnimation("wolfimg",wolfimg)
    wolf.scale = 0.5

    treesgroup = createGroup()

    edges = createEdgeSprites()
}

function draw() {
    background("black") 
    wolf.bounceOff(edges)
    
    if(gameState===PLAY) {
    
        if(wolf.isTouching(treesgroup)) {
            gameState = END
            wolf.velocityX = 0
            bg1.velocityX = 0
           treesgroup.setVelocityXEach(0)
        }

        if(bg1.x < 0) {
            bg1.x = width/2;
            }

            if(keyDown("SPACE")) {
                wolf.velocityY = -5
            }
    }

    //if(gameState===END) {}

    wolf.velocityY = wolf.velocityY + 0.2;

    spawnTrees()
    wolf.collide(tree)

    drawSprites()
}

function spawnTrees() {
    if(frameCount%150 ===0) {
        tree = createSprite(480,475)
        tree.addImage(treeimg)
        tree.velocityX = -9
        tree.scale = 0.03
        treesgroup.add(tree)
  }
}
