var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30); 
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  obj1 = createSprite(100,240,34,20);
  obj2 = createSprite(200,200,26,20);
  obj3 = createSprite(148,148,24,34);
  obj4 = createSprite(360,240,30,40);

  obj1.shapeColor  = "blue";
  obj2.shapeColor  = "orange";
  obj3.shapeColor  = "pink";
  obj4.shapeColor  = "yellow";


}


function draw() {
  background(0,0,0); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

     if ( isTouching(movingRect,obj3) ) { 
        
       movingRect.shapeColor = "BLACK";
      
       obj3.shapeColor = "black"; 
       
     }

        else {

           movingRect.shapeColor = "green";
           obj3.shapeColor  = "pink";
             
           
         }
 
    drawSprites();

}


 function  isTouching (object1,object2)  {

//fixed = 2

  if   (object1.x - object2.x < object2.width/2 + object1.width/2 

       &&   object2.x - object1.x < object2.width/2 + object1.width/2
  
       &&   object1.y - object2.y < object2.height/2 + object1.height/2
  
       &&   object2.y - object1.y < object2.height/2 + object1.height/2 ){
  
       
  
return true;

         }
   
  else {

  return false;


  }



}


