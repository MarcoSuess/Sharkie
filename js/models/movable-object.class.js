class MovableObject {
    img;
    x = 120;
    y = 300;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    moveRight() { }


    moveLeft() { }


}