class Bullets extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, velocity, gameHeight) {
        super(scene, x, y, texture);

        this.parentScene = scene;
        this.parentScene.add.existing(this);
        this.parentScene.physics.add.existing(this);
        this.setImmovable(true);
        this.setVelocityY(velocity)
        this.height = gameHeight;   

    }

    update() {
        if (this.y > this.height) {
            this.destroy();
        }
    }
}