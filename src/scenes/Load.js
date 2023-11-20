class Load extends Phaser.Scene{
    constructor(){
        super('loadScene');
    }

    preload() {
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) =>{
            //reset the loading fill in bar
            loadingBar.clear();

            loadingBar.fillStyle(0xFFFFFF, 1);

            loadingBar.fillRect(0, centerY, gameWidth * value, 5);
        });

        this.load.on('Complete', ()=>{
            //destroy the bar
            loadingBar.destroy();
        });

        //load assets
        //graphics
        //backgrounds
        this.load.image('background', './assets/star_BG.png');

        //sound
        //music
        this.load.audio('menu_bgm', './assets/boss_time_15.mp3');
        this.load.audio('game_bgm', './assets/boss_time_full.mp3');
    }

    create(){
        this.scene.start('menuScene')
    }
}