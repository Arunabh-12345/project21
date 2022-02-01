
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide;
var ball_options;

function preload()
{
	
}

function setup() {
	createCanvas(800,700);
    
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;
 }

	//Create the Bodies Here.
    ball = Bodies.circle(200,100,20,ball_options)
  World.add(world,ball)
  
  groundObj=new ground(width/2,670,width,20)
  leftSide =new(1120,600,20,120)
function draw() {

	ellipse(ball.position.x,ball.position.y,20)
	Engine.update(engine);
    groundObj.display();


}