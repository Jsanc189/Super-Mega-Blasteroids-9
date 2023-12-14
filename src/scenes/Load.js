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

        //instruction image
        this.load.image('info', './assets/instruct.png');

        //player
        this.load.spritesheet('character', './assets/Ship_sheet.png',{
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
        this.load.audio('menu_bgm', './assets/audio/boss_time_15.mp3');
        this.load.audio('game_bgm', './assets/audio/boss_time_full.mp3');

        //SFX
        this.load.audio('select', './assets/audio/select.wav');
        this.load.audio('shoot', './assets/audio/laserShoot.wav');
        this.load.audio('explosion', './assets/audio/explosion.wav');
        this.load.audio('hurt', './assets/audio/hurt.wav');
        this.load.audio('score', './assets/audio/score.wav');

        //font
        this.load.bitmapFont('minogram', './assets/fonts/minogram.png', './assets/fonts/minogram.xml');
    }

    create(){
        this.load_message = this.add.bitmapText(gameWidth/2, gameHeight/3*2, 'minogram',
        'Press Spacebar', 50).setOrigin(0.5);

        this.tweens.add({
            targets: this.load_message,
            alpha:{
                from: 1,
                to: 0 
            },
            ease: 'Sine.InOut',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //console.log("starting game")
            this.sound.play('select');
            this.scene.start('menuScene');
        }
    }
}