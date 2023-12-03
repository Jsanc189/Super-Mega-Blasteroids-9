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
            volumn:.75,
            rate: 1,
            loop: true
        });

        this.menu_bgm.play();
        
        //text configuration
        this.title_message = this.add.bitmapText(gameWidth/2, gameHeight/3, 'minogram',
        'SUPER MEGA BLASTEROIDS 9', 48).setOrigin(0.5).setTint(0xcc3f3f);
        this.title_message.depth = 1;

        this.select_message = this.add.bitmapText(gameWidth/2, gameHeight/3*2, 'minogram',
        '  Press S to start\nPress C for credits', 30).setOrigin(0.5);
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

        if (Phaser.Input.Keyboard.JustDown(keyS)) {
            this.sound.play('select');
            this.menu_bgm.stop();
            this.scene.start('playScene');
        }

        if (Phaser.Input.Keyboard.JustDown(keyC)) {
            this.sound.play('select');
            this.menu_bgm.stop()
            this.scene.start('creditScene');
        }
    }
}