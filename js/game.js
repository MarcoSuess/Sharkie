let canvas;
let world;
let keyboard = new Keyboard();
let musicVolume = 2;
let soundVolume = 10;
let start;

/**
 * This function load the sound and music.
 */
function loadMusicAndSoundSettings() {
  if (start) {
    world.musicVolumetoGame = musicVolume / 10;
    world.soundVolumetoGame = soundVolume / 10;
  }
  document.getElementById("soundVolume").innerHTML = soundVolume * 10 + "%";

  document.getElementById("musicVolume").innerHTML = musicVolume * 10 + "%";
}

/**
 * This function subtract the music volume.
 */
function subtractMusicVolume() {
  if (musicVolume == 0) {
    musicVolume = 0;
  } else {
    musicVolume -= 1;
  }
  loadMusicAndSoundSettings();
}

/**
 * This function subtract the sound volume.
 */
function subtractSoundVolume() {
  if (soundVolume == 0) {
    soundVolume = 0;
  } else {
    soundVolume -= 1;
  }
  loadMusicAndSoundSettings();
}

/**
 * This function elevated the music volume.
 */
function plusMusicVolume() {
  if (musicVolume == 10) {
    musicVolume = 10;
  } else {
    musicVolume += 1;
  }
  loadMusicAndSoundSettings();
}

/**
 * This function elevated the sound volume.
 */
function plusSoundVolume() {
  if (soundVolume == 10) {
    soundVolume = 10;
  } else {
    soundVolume += 1;
  }
  loadMusicAndSoundSettings();
}

/**
 * This function set the canvas to full screen.
 */
function fullScreen() {
  canvas.requestFullscreen();
}

/**
 * This function close the game menu.
 */
function closeGameMenu() {
  document.getElementById("gameExplanation").classList.add("d-none");
}

/**
 * This function restart the game if was game over.
 */
function checkforGameOver() {
  setInterval(() => {
    if (world.gameOverScreen) {
      document.getElementById("newStart").classList.remove("d-none");
    }

    if (world.win) {
      setTimeout(() => {
        window.location = "index.html";
      }, 5000);
    }
  }, 300);
}


/**
 * This function routes to index.html.
 */
function tryAgainGame() {
  window.location = "index.html";
}


/**
 * This function remove the class list for show canvas.
 */
function openGameExplanation() {
  document.getElementById("gameExplanation").classList.remove("d-none");
}

/**
 * This function start the Game.
 */
function startGame() {
  start = true;
  document.getElementById("startScreen").classList.add("d-none");
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard, soundVolume / 10, musicVolume / 10);
  console.log("my Character is", world.character);
  checkforGameOver();
  checkKeyDown();
  checkKeyUp();
}



/**
 * This function check the pressed key down.
 */
function checkKeyDown() {
  window.addEventListener("keydown", (e) => {
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

/**
 * This function check the pressed key up.
 */
function checkKeyUp() {
  window.addEventListener("keyup", (e) => {
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
