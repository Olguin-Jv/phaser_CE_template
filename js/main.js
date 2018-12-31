
if (!window.orientation) {
	gameX = 800;
    gameY = 600;
}
if (window.orientation == 0 || window.orientation == 90 || window.orientation == -90) {
	gameX = 400;
    gamey = 500;
	showControls = true;
    document.getElementById('rotate').classList.add('rotate');
}

var game = new Phaser.Game(gameX, gameY, Phaser.AUTO);
game.parent = 'game-area';
game.transparent = false;

//this cause issues in mobile devices
game.resolution = window.devicePixelRatio / window.devicePixelRatio;

var gameSettings = {
    /*VIEW*/
    background: './assets/view/menu-bkg.jpg',
    background2: './assets/view/night_bkg.jpg',
    /*UI*/
    button: './assets/ui/button.png',
    /*GAME*/
    char1: './assets/game/idle_small.png',
    char2: './assets/game/knight3_attack_small.png',
    char3: './assets/game/knight1_attack_hurt_small.png'
}

game.state.add('menu', stage.menu);
game.state.add('lvl1', stage.lvl1);

game.state.start('menu');