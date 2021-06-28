let canvas;
let world;
let keyboard = new Keyboard();



function fullScreen() {

    canvas.requestFullscreen();
}

function closeGameMenu() {
    document.getElementById('gameExplanation').classList.add('d-none')
}

function checkforGameOver() {
    setInterval(() => {
        if (world.gameOverScreen) {
            document.getElementById('newStart').classList.remove('d-none')
        }

        if (world.win) {
            setTimeout(() => {
                window.location = 'index.html';
            }, 5000);

        }


    }, 300);
}

function tryAgainGame() {

}

function openGameExplanation() {
    document.getElementById('gameExplanation').classList.remove('d-none')
}

function startGame() {
    checkforGameOver();
    document.getElementById('startScreen').classList.add('d-none')
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('my Character is', world.character)



    window.addEventListener('keydown', (e) => {
        if (e.keyCode == 38) {
            keyboard.UP = true;
        }
        if (e.keyCode == 40) {
            keyboard.DOWN = true;
        }
        if (e.keyCode == 39) {
            keyboard.RIGHT = true;
        }
        if (e.keyCode == 37) {
            keyboard.LEFT = true;
        }
        if (e.keyCode == 68) {
            keyboard.D = true;

        }
        if (e.keyCode == 32) {
            keyboard.SPACE = true;
        }



    });

    window.addEventListener('keyup', (e) => {



        if (e.keyCode == 38) {
            keyboard.UP = false;
        }
        if (e.keyCode == 40) {
            keyboard.DOWN = false;
        }
        if (e.keyCode == 39) {
            keyboard.RIGHT = false;

        }
        if (e.keyCode == 37) {
            keyboard.LEFT = false;
        }
        if (e.keyCode == 68) {
            keyboard.D = false;
            world.character.throwTime = new Date().getTime();
        }
        if (e.keyCode == 32) {
            keyboard.SPACE = false;
            world.character.throwTime = new Date().getTime();
        }




    });
}