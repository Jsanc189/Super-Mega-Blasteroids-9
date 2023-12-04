class Credits extends Phaser.Scene{
    constructor() {
        super('creditScene');
    }

    create() {
       //credits text
        this.credits = this.add.bitmapText(gameWidth/2, gameHeight/5, 'minogram',
        'CREDITS', 48).setOrigin(0.5).setTint(0xcc3f3f);
        this.spriteCred = this.add.bitmapText(gameWidth/2, gameHeight/5*2, 'minogram',
        'SPRITE ART:     JACKIE SANCHEZ', 30).setOrigin(0.5).setTint(0xffffff);
        this.sceneCred = this.add.bitmapText(gameWidth/2, gameHeight/5*2 + 40, 'minogram',
        'SETTING ART:    JACKIE SANCHEZ', 30).setOrigin(0.5).setTint(0xffffff);
        this.musicCred = this.add.bitmapText(gameWidth/2, gameHeight/5*2 + 90, 'minogram',
        'MUSIC:            "A Bit of Hope"\n   BY:              DAVID FESLIYAN', 
        30).setOrigin(0.5).setTint(0xffffff);
        this.textCred = this.add.bitmapText(gameWidth/2, gameHeight/5*2 + 140, 'minogram',
        'TEXT ART:           frostyfreeze', 30).setOrigin(0.5).setTint(0xffffff);
        this.levelCred = this.add.bitmapText(gameWidth/2, gameHeight/5*2 + 180, 'minogram',
        'LEVEL DESIGN:   JACKIE SANCHEZ', 30).setOrigin(0.5).setTint(0xffffff);

        //main menu text
        this.goToMenu = this.add.bitmapText(gameWidth/2, gameHeight/7*6, 'minogram',
        'Press SPACE to return to the main menu.', 20).setOrigin(0.5).setTint(0xcc3f3f);

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.sound.play('select');
            this.scene.start('menuScene');
        }
    }
}