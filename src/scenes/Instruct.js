class Instruct extends Phaser.Scene{
    constructor() {
        super('instructScene');
    }


    create() {
        //story text
        this.story = this.add.bitmapText(gameWidth/2, gameHeight/7, 'minogram',
        'Hello Pilot!\nHumanity is under attack!  Evil aliens disguised as asteroids \nare approaching earth.',
        18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story.depth = 1;

        this.story2 = this.add.bitmapText(gameWidth/2, gameHeight/7*2, 'minogram', 
        'It is your job to expose them by shooting off their asteroid  \narmor before they approach earth.',
        18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story2.depth = 1;

        this.story3 = this.add.bitmapText(gameWidth/2, gameHeight/7*3, 'minogram',
        'Follow the instructions below to fight complete your task!   ', 18).setOrigin(0.5).setTint(0xcc3f3f);
        this.story3.depth = 1;

        //background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);
        //set up keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){
        this.sky.tilePositionY -= 2;
        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('playScene')
        }
    }
}