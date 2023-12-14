// Name: Jackie Sanchez
// Super Mega Blasteroids 9
// Date: 11/19/2023

//music: Background music via https://www.FesliyanStudios.com
// "Boss Time" by David Fesliyan

//Text art: frostyfreeze via https://frostyfreeze.itch.io/pixel-bitmap-fonts-png-xml

//Phaser Components: Physics for player, asteroid, and enemy ship interaction and movement.
//                   Text object using BitMap, Animation for ship flying effect, tweens used
//                   for to draw attention to player info, camera shake and flashing effects
//                   used when player interacts with enemy ships or asteroids.


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
    scene:[Load, Menu, Instruct, Play, Ending, Credits]
}

let game = new Phaser.Game(config);

//keys
let keyS, keyF, keyC, keyM, keySPACE, cursors;

//life tracking animation
let lives_left = 'lives_3';

//ending_score tracking
let end_score = 0;
//highest score tracking
let high_score = 0;
localStorage.setItem('SMB9HighScore', high_score);

//set user Interface sizes

let gameWidth = game.config.width;
let gameHeight = game.config.height;
let centerX = gameWidth / 2;
let centerY = gameHeight / 2;