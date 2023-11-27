class Load extends Phaser.Scene{
    constructor(){
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) =>{
            //reset the loading fill in bar
            loadingBar.clear();

            loadingBar.fillStyle(0xFFFFFF, 1);

            loadingBar.fillRect(0, centerY, gameWidth * value, 5);
        });

        this.load.on('Complete', ()=>{
            //destroy the bar
            loadingBar.destroy();
        });

        //load assets
        //graphics
        //backgrounds
        this.load.image('background', './assets/star_BG.png');

        //player
        this.load.spritesheet('character', './assets/ship_sheet.png',{
            frameWidth: 60,
            frameHeight: 90
        });

        //player info sprites
        this.load.image('bullet', './assets/bullet.png');
        this.load.image('life', './assets/life.png');

        //enemy sprites
        this.load.image('asteroid', './assets/asteroid.png');
        this.load.image('alien', './assets/alien_ship.png');

        //sound
        //music
        this.load.audio('menu_bgm', './assets/boss_time_15.mp3');
        this.load.audio('game_bgm', './assets/boss_time_full.mp3');

        //Sounds
        this.load.audio('select', './assets/select.wav');
    }

    create(){
        this.scene.start('menuScene')
    }
}