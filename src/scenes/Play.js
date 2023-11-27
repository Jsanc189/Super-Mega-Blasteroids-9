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
        cursors = this.input.keyboard.createCursorKeys();

        //player animation
        this.anims.create({
            key: 'moving',
            frameRate:5,
            repeat:-1,
            frames: this.anims.generateFrameNumbers('character',{
                start: 0,
                end: 1
            })
        });
    }

    update() {
        if(!this.gameOver) {
            let playerVector = new Phaser.Math.Vector2(0,0);
            this.p_sky.tilePositionY -=2;
            if(cursors.up.isDown) {
                playerVector.y = -1;
            }
            else if(cursors.down.isDown) {
                playerVector.y = 1;
            }

            if(cursors.left.isDown) {
                playerVector.x = -1;
            }
            else if(cursors.right.isDown) {
                playerVector.x = 1;
            }

            playerVector.normalize();

            this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y);
            this.player.play('moving', true);
        }
    }
}