class Menu extends Phaser.Scene{
    constructor() {
        super('menuScene');
    }

    preload() {

    };

    create() {
        this.gameOver = false;
        //add background
        this.sky = this.add.tileSprite(0,0, 700, 500, 'background').setOrigin(0,0);
    }

    update(){
        if (!this.gameOver) {
            this.sky.tilePostionY -= 4;
        }
    }
}