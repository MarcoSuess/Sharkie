class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 30;
    y = 100;
    height = 150;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
  
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    drawFrame(ctx) {

        if (this instanceof Character || this instanceof puffer_fish || this instanceof Endboss ||
            this instanceof barrier || this instanceof jelly_fish || this instanceof ThrowableObjects) {
            //border for collision
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red'
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
    }

   



}