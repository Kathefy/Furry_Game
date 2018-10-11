import { Game } from "./game.js"

$( () =>  {

    document.addEventListener('keydown', function(event){
        game.turnFurry(event);
    });

    let game = new Game();
    game.showFurry();
    game.showCoin();
    game.startGame();

});


