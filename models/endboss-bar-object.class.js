class Endboss_bar extends DrawableObject {

    endBossX;
    endBossY;
    moveX;
    moveY;

    life_bar = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/4.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/5.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/6.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/7.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/8.png'
    ];



    constructor(x, y) {
        super().loadImage('Sprites_Sharkie/2.Enemy/3 Final Enemy/life_bar/1.png');
        this.loadImages(this.life_bar);
        this.moveX = x;
        this.moveY = y;
        this.width = 50;
        this.height = 70;
        this.animation();
    }

    animation() {

        setInterval(() => {
          this.x = this.endBossX + this.moveX;
            this.y = this.endBossY + this.moveY;

        }, 5);

        setInterval(() => {
           

            let i = this.currentImage % this.life_bar.length;
            let path = this.life_bar[i];
            this.img = this.imageCache[path];
            this.currentImage++;



        }, 250);
    }

}