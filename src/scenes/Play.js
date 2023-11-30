class Play extends Phaser.Scene{
    constructor() {
        super('playScene');
    }

    create() {
        //play music for background
        this.bgmusic = this.sound.add('game_bgm',{
            mute: false,
            volume: .75,
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
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

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

        //bullet velocity
        this.BULLET_VELOCITY = -100;
        
        //make a group of bullets
        this.bullet_group = this.add.group({})

        //keep track of scoring

        //make a group of asteroids
        this.ASTEROID_VELOCITY = 100;
        this.asteroid_group = this.add.group({
            runChildUpdate: true
        })



        //spawn asteroids
        this.time.delayedCall(500, ()=> {
            this.addAsteroid();
            this.time.delayedCall(1000, ()=>{
                this.addAsteroid();
            })
        })
    }

    addAsteroid() {
        let asteroid = new Asteroids(this, Phaser.Math.Between(25, 625), 0, 'asteroid', this.ASTEROID_VELOCITY, gameHeight);
        this.asteroid_group.add(asteroid);
    }

    addBullet() {
        let bullet = new Bullets(this, this.player.x, this.player.y, 'bullet', this.BULLET_VELOCITY, gameHeight);
        this.bullet_group.add(bullet);
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

            if(keyF.isDown) {
                this.addBullet();
            }

            playerVector.normalize();
            this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y);
            this.player.play('moving', true);

            this.physics.world.collide(this.player, this.asteroid_group, () =>{
                this.gameOver = true;
            });
        }

        else {
            this.bgmusic.stop();
            this.scene.start('menuScene');
        }
    }

    

}