var car1,car2,car3;
var wall;
var speed,weight;
var output;
var deformation;
function setup(){  
    createCanvas(500,500);
    car1=createSprite(100,100,20,20);
    car1.velocityX=60;
    car1.speed=car1.velocityX;
    car1.weight=2260;
    car2=createSprite(100,200,20,20);
    car2.velocityX=50;
    car2.speed=car2.velocityX;
    car2.weight=1522;
    car3=createSprite(100,300,20,20);
    car3.velocityX=45;
    car3.speed=car3.velocityX;
    car3.weight=3000;
    wall=createSprite(480,250,20,500)
}
function draw(){
    background("black");
    if(isTouching(wall,car1)){
    car1.velocityX=0;
    car1.x=450;
    deform(car1);
    }
    if(isTouching(wall,car2)){
        car2.velocityX=0;
        car2.x=450;
        deform(car2);
    }
    if(isTouching(wall,car3)){
        car3.velocityX=0;
        car3.x=450;
        deform(car3);
    }
    drawSprites();
}
function deform(object){
    if(((object.speed*object.weight*object.speed*0.5)/22500)<=100){
        output="good";
        object.shapeColor="green";
    }else
    if(((object.speed*object.weight*object.speed*0.5)/22500)>100&&((object.speed*object.weight*object.speed*0.5)/22500)<180){
        output="average";
        object.shapeColor="yellow";
    }else
    if(((object.speed*object.weight*object.speed*0.5)/22500)>=180){
        output="lethal";
        object.shapeColor="red";
    }
}
function isTouching(object1,object2){
if(object1.x-object2.x<object2.width/2+object1.width/2){
        return true;
    }else{
        return false;
    }
}