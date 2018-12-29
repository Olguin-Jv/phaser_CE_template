
if (!window.orientation) {
	gameX = 800;
	gameY = 600;
}
if (window.orientation == 0 || window.orientation == 90 || window.orientation == -90) {
	gameX = 400;
	gamey = 500;
	showControls = true;
}

var game = new Phaser.Game(gameX, gameY, Phaser.AUTO);
game.parent = 'game-area';
game.transparent = false;

//this cause issues in mobile devices
game.resolution = window.devicePixelRatio / window.devicePixelRatio;

var gameSettings = {
    /*VIEW*/
    background: './assets/view/menu-bkg.jpg',
    /*UI*/
    button: './assets/ui/button.png'
}

game.state.add('menu', stage.menu);
game.state.add('lvl1', stage.lvl1);

game.state.start('menu');