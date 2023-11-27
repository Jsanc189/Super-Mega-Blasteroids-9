// Name: Jackie Sanchez
// Super Mega Blasteroids 9
// Date: 11/19/2023

//music:

//approx hours spend on project: 

let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 500,
    physics: {
        default: 'arcade',
        arcade:{
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene:[Load, Menu, Play, Ending, Credits]
}

let game = new Phaser.Game(config);

//keys
let keyW, keyA, keyS, keyD, keySPACE;

//set user Interface sizes

let gameWidth = game.config.width;
let gameHeight = game.config.height;
let centerX = gameWidth / 2;
let centerY = gameHeight / 2;