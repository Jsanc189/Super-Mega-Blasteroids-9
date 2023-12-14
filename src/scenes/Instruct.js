class Instruct extends Phaser.Scene{
    constructor() {
        super('instructScene');
    }


    create() {
        //background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);

        //story text
        this.story = this.add.bitmapText(gameWidth/2, gameHeight/7, 'minogram',
        'Hello Pilot!\nHumanity is under attack!  Evil aliens disguised as asteroids \nare approaching earth.',
        18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story.depth = 1;

        this.story2 = this.add.bitmapText(gameWidth/2, gameHeight/7*2, 'minogram', 
        'It is your job to expose them by shooting off their asteroid  \narmor before they approach earth \nwithin 60 seconds.',
        18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story2.depth = 1;

        this.story3 = this.add.bitmapText(gameWidth/2, gameHeight/7*3, 'minogram',
        'Follow the instructions below to fight complete your task!   ', 18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story3.depth = 1;

        //game instructions
        this.info = this.add.bitmapText(gameWidth/4-13, gameHeight/7*4, 'minogram',
        '  Use arrow \nkeys to move.', 20).setOrigin(0.5)

        this.info2 = this.add.bitmapText(gameWidth/2, gameHeight/7*4-10, 'minogram',
        '  Press "F" \n key to fire \nyour weapon.', 20).setOrigin(0.5)
        this.instructions = this.add.sprite(gameWidth/2, gameHeight/7*5+10, 'info');

        this.info3 = this.add.bitmapText(gameWidth/4*3+25, gameHeight/7*4-10, 'minogram',
        'Avoid hitting   \n asteroids or\n  enemy ships', 20).setOrigin(0.5)

        this.start = this.add.bitmapText(gameWidth/2, gameHeight/7*6+30, 'minogram',
        'Press Spacebar to start', 40).setOrigin(0.5);

        this.tweens.add({
            targets: this.start,
            alpha:{
                from: 1,
                to: 0 
            },
            ease: 'Sine.InOut',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });

        //sound effect
        this.info_effect = this.sound.add('score',{
            mute:false,
            volumn:.75,
            rate: 1,
            loop:false
        });

        this.info_effect.play();

        //set up keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        this.sky.tilePositionY -= 2;
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.info_effect.stop();
            this.scene.start('playScene')
        }
    }
}