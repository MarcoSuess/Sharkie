class Endboss extends MovableObject {

    height = 500;
    width = 300;
    y = -50;

    IMAGES_SWIMMING = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 5100;
        this.animate_swimming();
    }


    animate_swimming() {
       
        setInterval(() => {
             this.playAnimation(this.IMAGES_SWIMMING);
        }, 100);
       
    }


}