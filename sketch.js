const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world =  engine.world;
 
  var option = {
    isStatic : true
  }

  var ball_opt = 
  {
    restitution : 1.5
  }


 ground = Bodies.rectangle(200,350,400,50,option);
 World.add(world , ground);

ball = Bodies.circle(200,100,15,ball_opt)
World.add(world , ball) ; 
 
 console.log(ground)

}

function draw() {
  background("lightblue");
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y , 15 ,15)
}