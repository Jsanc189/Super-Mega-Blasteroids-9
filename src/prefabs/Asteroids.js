class Asteroids extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, velocity, gameHeight) {
        super(scene, x, y, texture);

        this.parentScene = scene;

        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.body.setSize(70, 80);
        this.setVelocityY(velocity);
        this.setImmovable(true);
        this.height = gameHeight;
        this.childAsteroid = true;
    }

    update() {
        if (this.childAsteroid && this.x < gameHeight/5) {
            this.parentScene.addAsteroid(this.parentScene, this.setVelocityY);
            this.childBarrier = false;
        }
        
        if (this.y > this.height) {
            this.destroy();
        }
    }

    reset() {
        this.x = Phaser.Math.Between(50, 650);
        this.y = 0;
    }
}