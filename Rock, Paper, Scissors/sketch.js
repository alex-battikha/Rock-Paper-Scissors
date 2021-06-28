//Rock, Paper, Scissors!
//Developed by Alex Battikha
//@ Copyright 2021 - Battikha, Alex

var rock;

var paper;

var scissors;

//images
var rockImage, paperImage, scissorsImage;

var choiceArray;

var playerScore, computerScore;

var randomCompChoice;

var player;

var stuntFont;

function preload() {
  rockImage = loadImage("assets/images/rock.png");
  paperImage = loadImage("assets/images/paper.png");
  scissorsImage = loadImage("assets/images/scissors.png");

  stuntFont = loadFont("assets/fonts/Stuntv2.ttf");
}

function setup() {
  createCanvas(600, 600);

  rock = createSprite(120, 320);
  rock.addImage(rockImage);
  rock.scale = 0.34;

  paper = createSprite(320, 320);
  paper.addImage(paperImage);
  paper.scale = 0.25;

  scissors = createSprite(490, 320);
  scissors.addImage(scissorsImage);
  scissors.scale = 0.2;

  choiceArray = [rock, paper, scissors];
  
  playerScore = 0;
  computerScore = 0;
}

function draw() {
  background(45); 

  //text
  textSize(36);
  textFont(stuntFont);
  text("Rock, Paper, Scissors", 70, 55);

  textSize(22);
  text("Player Score: " + playerScore, 30, 110);
  text("Computer Score: " + computerScore, 330, 110);

  //random comp number for comp's choice
  randomCompChoice = floor(random(0, 3));
  
  drawSprites();
}