let canvas;
let world;
let keyboard = new Keyboard();
let musicVolume = 2;
let soundVolume = 10;
let start;

function loadMusicAndSoundSettings() {
    if (start) {
        world.musicVolumetoGame = musicVolume / 10;
        world.soundVolumetoGame = soundVolume / 10;
    } 
    document.getElementById('soundVolume').innerHTML = soundVolume * 10 + '%';

    document.getElementById('musicVolume').innerHTML = musicVolume * 10 + '%';
}

function subtractMusicVolume() {
    if (musicVolume == 0) {
        musicVolume = 0;
    } else {

        musicVolume -= 1
    }
    loadMusicAndSoundSettings();
}

function subtractSoundVolume() {
    if (soundVolume == 0) {
        soundVolume = 0;
    } else {

        soundVolume -= 1
    }
    loadMusicAndSoundSettings();
}

function plusMusicVolume() {
    if (musicVolume == 10) {
        musicVolume = 10;
    } else {

        musicVolume += 1
    }
    loadMusicAndSoundSettings();

}

function plusSoundVolume() {
    if (soundVolume == 10) {
        soundVolume = 10;
    } else {

        soundVolume += 1
    }
    loadMusicAndSoundSettings();

}



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
    window.location = 'index.html';
}

function openGameExplanation() {
    document.getElementById('gameExplanation').classList.remove('d-none')
}


function startGame() {

    start = true;
    document.getElementById('startScreen').classList.add('d-none')
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, soundVolume / 10, musicVolume / 10 );
    console.log('my Character is', world.character)
    checkforGameOver();
    checkKeyDown();
    checkKeyUp();



}



function checkKeyDown() {

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
}

function checkKeyUp() {
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