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
        this.BULLET_VELOCITY = -200;
        
        //make a group of bullets
        this.bullet_group = this.add.group({})

        //keep track of scoring
        this.score = 0;

        //life tracking and animation
        this.lives = 3;
        this.life_count = this.physics.add.sprite(gameWidth - 80, 30, 'lives', 0).setScale(.75);
        this.life_count.depth = 1;
        this.anims.create({
            key: 'lives_3',
            frameRate: 5,
            repeat:-1,
            frames: this.anims.generateFrameNumbers('lives', {
                start: 0,
                end: 0
            })
        });

        this.anims.create({
            key:'lives_2',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('lives', {
                start: 1,
                end: 1
            }) 
        });

        this.anims.create({
            key: 'lives_1',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('lives', {
                start: 2,
                end: 2
            })
        });

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

    //helper function to spawn asteroids
    addAsteroid() {
        let asteroid = new Asteroids(this, Phaser.Math.Between(25, 625), -50, 'asteroid', this.ASTEROID_VELOCITY, gameHeight);
        this.asteroid_group.add(asteroid);
    }

    //helper function to spawn bullets
    addBullet() {
        let bullet = new Bullets(this, this.player.x, this.player.y, 'bullet', this.BULLET_VELOCITY, gameHeight);
        this.bullet_group.add(bullet);
    }

    update() {
        //game phase active
        if(!this.gameOver) {
            //reset playever vector and move sky sprite
            let playerVector = new Phaser.Math.Vector2(0,0);
            this.p_sky.tilePositionY -=2;

            //player movement update velocities
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

            if(Phaser.Input.Keyboard.JustUp(keyF)) {
                this.addBullet();
            }
            playerVector.normalize();
            this.player.setVelocity(this.PLAYER_VELOCITY * playerVector.x, this.PLAYER_VELOCITY * playerVector.y);
            this.player.play('moving', true);

            //check if player collides with asteroid and update life count
            this.physics.world.collide(this.player, this.asteroid_group, (player, asteroid) =>{
                this.lives -= 1;
                this.sound.play('hurt');
                asteroid.destroy();
                this.addAsteroid();
            });

            if(this.lives == 3){
                lives_left = 'lives_3';
            }

            else if(this.lives == 2){
                lives_left = 'lives_2';
            }
            else if(this.lives == 1){
                lives_left = 'lives_1';
            }
            else{
                this.gameOver = true;
            }

            this.life_count.play(lives_left, true);

            //check if a bullet has collided with asteroid and update score
            this.physics.world.collide(this.asteroid_group, this.bullet_group, (asteroid, bullet) =>{
                this.sound.play('explosion');
                asteroid.destroy();
                this.addAsteroid();
                bullet.destroy();
                this.score += 100;

            })
        }

        //end of game phase
        else {
            this.bgmusic.stop();
            this.scene.start('menuScene');
        }
    }

    

}