class Ending extends Phaser.Scene{
    constructor() {
        super('endingScene');
    }

    create() {
        //add background
        this.end_sky = this.add.tileSprite(0,0,700, 500, 'background').setOrigin(0,0);
        this.screen = this.add.tileSprite(0,0, 700, 500, 'screen').setOrigin(0,0);
        this.screen.depth = 1;

        //play effect for adding score
        this.score_effect = this.sound.add('score',{
            mute:false,
            volumn:.75,
            rate: 1,
            loop:false
        });

        this.score_effect.play();

        //add score to screen
        this.score_addition = 0;
        this.score_text = this.add.bitmapText(gameWidth/2, gameHeight/7, 'minogram',
        'SCORE:', 75).setOrigin(0.5);
        this.score_count = this.add.bitmapText(gameWidth/2, gameHeight/7*2+10, 'minogram',
        this.score_addition.toString(), 100).setOrigin(0.5).setTint(0xcc3f3f);

        this.hscore_test = this.add.bitmapText(gameWidth/2, gameHeight/7*3+50, 'minogram',
        'HIGH SCORE:', 75).setOrigin(0.5);
        this.high_score_text = this.add.bitmapText(gameWidth/2, gameHeight/7*4+60, 'minogram',
        high_score.toString(), 100).setOrigin(0.5).setTint(0xcc3f3f);

        //restart of go to main menu
        this.change_scene_text = this.add.bitmapText(gameWidth/2, gameHeight/7 *6, 'minogram',
        '   Press Spacebar to retry\nPress M to return to the Menu', 35).setOrigin(0.5);

        this.tweens.add({
            targets: this.change_scene_text,
            alpha:{
                from: 1,
                to: 0 
            },
            ease: 'Sine.InOut',
            duration: 1000,
            repeat: -1,
            yoyo: true
        });

        //define key
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        //move background
        this.end_sky.tilePositionY -= 2;

        //update score text
        if (this.score_addition < end_score){
            this.score_addition += 10;
            this.score_count.text = this.score_addition;
        }

        if (this.score_addition > localStorage.getItem('SMB9HighScore')){
            high_score += 10;
            localStorage.setItem('SMB9HighScore', high_score);
            this.hscore_test.text = 'NEW HIGH SCORE!';
            this.high_score_text.text = high_score.toString();
        }

        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.play('select');
            this.score_effect.stop();
            this.scene.start('playScene');
        }

        if (Phaser.Input.Keyboard.JustDown(keyM)) {
            this.sound.play('select');
            this.score_effect.stop();
            this.scene.start('menuScene');
        }


    }
}