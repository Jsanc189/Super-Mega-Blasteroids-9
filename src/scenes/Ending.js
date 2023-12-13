class Ending extends Phaser.Scene{
    constructor() {
        super('endingScene');
    }

    create() {
        this.end_sky = this.add.tileSprite(0,0,700, 500, 'background').setOrigin(0,0);
        
    }
}