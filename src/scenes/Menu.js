class Menu extends Phaser.Scene{
    constructor() {
        super('menuScene');
    }

    preload() {

    };

    create() {
        //play music for background
        this.menu_bgm = this.sound.add('menu_bgm', {
            mute:false,
            volumn:1,
            rate: 1,
            loop: true
        });
        
        //text configuration
        let titleConfig = {
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

        this.title_message = this.add.text(gameWidth/2, gameHeight/3,
        'SUPER MEGA BLASTEROIDS 9', titleConfig).setOrigin(0.5);
        this.title_message.depth = 1;

        this.select_message = this.add.text(gameWidth/2, gameHeight/3*2,
        'Press Spacebar', titleConfig).setOrigin(0.5);
        this.select_message.setFontSize(30);
        this.select_message.depth = 1;
        this.tweens.add({
            targets: this.select_message,
            alpha:{
                from: 1,
                to: 0 
            },
            ease: 'Sine.InOut',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });

        //add background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);

        //define keys
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    

    
    }

    update(){
        this.sky.tilePositionY -= 2;
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //console.log("starting game")
            this.sound.play('select');
            this.select_message.text = 'Press S to start\nPress C for credits';
        }

        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.sound.play('select');
            this.scene.start('playScene');
        }

        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.sound.play('select');
            this.scene.start('creditScene');
        }
    }
}