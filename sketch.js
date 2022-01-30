// Creating the constants

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

// Creating the variables

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() 
{
  // Pre-loading the images

  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() 
{
  // Creating the canvas
  canvas = createCanvas(windowWidth, windowHeight);

  // Creating my own engine  
  engine = Engine.create();
  
  // Creating the world
  world = engine.world;

  // Styling
  angleMode(DEGREES);

  // Creating the player base, player & player archer

  var options = 
  {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)

  playerArcher = new PlayerArcher( 340, playerBase.position.y - 112, 120, 120);
}

function draw() 
{
  // Updating the engine
  Engine.update(engine);
  
  // Displaying the background image
  background(backgroundImg);

  // Displaying the player base
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);

  // Displaying the player
  image(playerimage,player.position.x,player.position.y,50,180);

  // Displaying the player archer
  playerArcher.display();

  // Displaying "EPIC ARCHERY"

  fill("White");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}