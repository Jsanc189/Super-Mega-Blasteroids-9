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
            debug: false,
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
let keyS, keyF, keyC, keySPACE, cursors;

//life tracking animation
let lives_left = 'lives_3';

//set user Interface sizes

let gameWidth = game.config.width;
let gameHeight = game.config.height;
let centerX = gameWidth / 2;
let centerY = gameHeight / 2;