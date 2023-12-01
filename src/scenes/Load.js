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
        this.load.spritesheet('lives', './assets/lives.png', {
            frameWidth: 115,
            frameHeight: 50
        });

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
        let loadConfig = {
            fontFamily: 'Calibri',
            fontSize: '50px',
            backgroundColor: '#000000',
            color: '#FFFFFF',
            align: 'center',
            padding:{
                top:5,
                bottom:5
            },
            fixedWidth: 600
        }

        this.load_message = this.add.text(gameWidth/2, gameHeight/3*2,
        'Press Spacebar', loadConfig).setOrigin(0.5);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //console.log("starting game")
            this.sound.play('select');
            this.scene.start('menuScene')
        }
    }
}