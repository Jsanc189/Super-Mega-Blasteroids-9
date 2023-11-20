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
        
        this.gameOver = false;
        //add background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);
    }

    update(){
        if (!this.gameOver) {
            //console.log("starting game")
            this.sky.tilePositionY -= 4;

        }
    }
}