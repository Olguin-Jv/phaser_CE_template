var gameWidth,
    gameHeight,
    centerX,
    centerY;

var stage = {};

var menuTxt = { font: 'Roboto', fontSize: '32px', fill: '#000000' }

stage.menu = function () { };
stage.menu.prototype = {
    preload: function () {
        this.load.image('bkg', gameSettings.background);
        this.load.image('btn', gameSettings.button);
    },
    create: function () {
        //important
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        gameWidth = game.world.width;
        gameHeight = game.world.height;
        centerX = game.world.centerX;
        centerY = game.world.centerY;
        showDimensions();

        this.add.image(0, 0, 'bkg');

        createBtn(centerX, centerY, 'btn', 'PLAY', goGame, menuTxt);
    
    },
    update: function () { }
}

function createBtn(x, y, img, txt, fn, style){
    game.add.button(x, y, img, fn).anchor.setTo(.5);
    game.add.text(x, y, txt, style).anchor.setTo(.5);
}

function goGame(){
    game.state.start('lvl1');
}