// Name: Jackie Sanchez
// Super Mega Blasteroids 9
// Date: 11/19/2023

//music: Background music via https://www.FesliyanStudios.com
// "Boss Time" by David Fesliyan

//Text art: frostyfreeze via https://frostyfreeze.itch.io/pixel-bitmap-fonts-png-xml

//technically interesting: Implemented Bitmap text for style.  Utilized camera shake for effect.

//approx hours spend on project: 

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
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
    autoCenter: Phaser.Scale.CENTER_BOTH,
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