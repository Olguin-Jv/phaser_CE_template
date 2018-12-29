stage.lvl1 = function () { };
stage.lvl1.prototype = {
    preload: function () { 
        this.load.image('night_bkg', gameSettings.background2);
        this.load.spritesheet('char1', gameSettings.char1, 232.714, 200, 7);
        this.load.spritesheet('char2', gameSettings.char2, 229.428, 200, 7);
        this.load.spritesheet('char3', gameSettings.char3, 281.428, 200, 7);
        
    },
    create: function () {
        this.add.image(0, 0, 'night_bkg');

        var char1, char2, char3;
        createCharacter(char1, 'char1', 200, 450, .5, .5, 'idle');
        setTimeout(function(){
            createCharacter(char3, 'char3', 430, 450, -.5, .5, 'hurt');
        }, 300);
        createCharacter(char2, 'char2', 400, 440, .5, .5, 'atack');
    },
    update: function () { }
}

function createCharacter(elem, spritesheet, x, y, scaleX, scaleY, animName){
    elem = game.add.sprite(x, y, spritesheet);
    elem.anchor.setTo(.5);
    elem.scale.setTo(scaleX, scaleY);
    elem.animations.add(animName);
    elem.animations.play(animName, 10, true);

}