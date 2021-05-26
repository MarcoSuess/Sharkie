let canvas;
let world;
let keyboard = new Keyboard(); 




function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('my Character is', world.character)

}

window.addEventListener('keydown', (e) => {
  
    console.log(e)

    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.Down = true;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    } 

  
});

window.addEventListener('keyup', (e) => {
  
  

    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.Down = false;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    } 

  
});
