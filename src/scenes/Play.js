class Play extends Phaser.Scene{
    constructor() {
        super('playScene');
    }

    create() {
        //play music for background
        this.bgmusic = this.sound.add('game_bgm',{
            mute: false,
            volume: .2,
            rate: 1,
            loop:true
        });

        this.bgmusic.play();
        
        //add background
        this.p_sky = this.add.tileSprite(0, 0, 700, 500, 'background').setOrigin(0,0);

        this.gameOver = false;

        //add player and physics
        this.player = this.physics.add.sprite(gameWidth/2, gameHeight/10* 8, 'character', 0).setScale(1);
        this.player.body.setCollideWorldBounds(true);
        this.player.body.setImmovable(true);
        this.player.body.setSize(32, 72);
        this.PLAYER_VELOCITY = 200;
    }

    update() {
        if(!this.gameOver) {
            this.p_sky.tilePositionY -=2;
        }
    }
}