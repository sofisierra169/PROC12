var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;


function preload(){
  pathImg = loadImage ("path.png")//loadImage de path (camino)
  boyImg = loadAnimation ("jake1.png", "jake2.png", "jake3.png","jake4.png","jake5.png")//loadAnimation de boy (niño)
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite ( 100,400,100,400)//crear sprite de path (camino) 
path.addAnmation ("pathImg")//agregar imagen de path
path.velocityY = 4//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.scale=1.2;

 boy = createSprite (150,5,10,15)//crear sprite de boy (niño)
 boy.addAnmation("running" , boyImg)//agregar animación para boy
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible =  false //establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)

rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false       //establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  
  path.velocityY = 4;
  
  boy.X =World.mouseX// boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  boy.velocityX= boy.velocityY + 0.5
   boy.collide(leftBoundary)
   
   boy.velocityX= boy.velocityY + 0.5
   boy.collide(rightBoundary)
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
