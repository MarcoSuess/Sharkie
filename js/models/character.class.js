class Character extends MovableObject {
    y = 150;
    x = 0;
    width = 270;
    height = 270;

    IMAGES_SWIMMING = 
    ['Sprites_Sharkie/1.Sharkie/3.Swim/1.png',
    'Sprites_Sharkie/1.Sharkie/3.Swim/2.png',
    'Sprites_Sharkie/1.Sharkie/3.Swim/3.png',
    'Sprites_Sharkie/1.Sharkie/3.Swim/4.png',
    'Sprites_Sharkie/1.Sharkie/3.Swim/5.png',
    'Sprites_Sharkie/1.Sharkie/3.Swim/6.png',]
    currentImage = 0;

    constructor() {
        super().loadImage('Sprites_Sharkie/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);

        this.moveRight();
        console.log(this.background_x)

        
    }

    animate_swimming() {
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = this.IMAGES_SWIMMING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        document.addEventListener('keydown', e => {
            const k = e.key;
            console.log(k)

            if (k == 'ArrowRight') {
                this.x += 30
                this.animate_swimming();

            }
        });
    }




}


