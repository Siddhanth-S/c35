var database;
var form, game, player;

var gameState = 0, playerCount;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

}

function draw(){
    game = new Game();
    
    game.getState();
    game.start();
}
