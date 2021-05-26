class Character extends MovableObject {
    y = 150;
    x = 80;
    width = 270;
    height = 270;
    speed = 4;

    IMAGES_SWIMMING = [
        'Sprites_Sharkie/1.Sharkie/3.Swim/1.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/2.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/3.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/4.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/5.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/6.png'];
    world;
    /* swimming_sound = new Audio('pfad'); */

    constructor() {

        super().loadImage('Sprites_Sharkie/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.animate();


    }

    animate() {

        setInterval(() => {
            //Right
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            //left
            if (this.world.keyboard.LEFT && this.x > 80 ) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 80;

        }, 1000/ 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //swim animation
               this.playAnimation(this.IMAGES_SWIMMING)
            }

        }, 100);

    }






}


