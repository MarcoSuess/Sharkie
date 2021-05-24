class puffer_fish extends MovableObject {

    x = 400
    y = 300;
    height = 80;
    width = 80;

    IMAGES_SWIMMING = [
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',]
        
    currentImage = 0;


    constructor() {
        super().loadImage('Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 400 + Math.random() * 500;
        this.y = 100 + Math.random() * 200;

        this.animate_swimming();
    }


    animate_swimming() {

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imageCache[path];
            this.currentImage++;

        }, 100);
    }


}