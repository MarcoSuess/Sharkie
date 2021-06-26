class puffer_fish extends MovableObject {

    x = 400
    y = 300;
    height = 80;
    width = 90;
    startX;
    endX;
    slap;
    SOUND_Dead = new Audio('Sprites_Sharkie/sounds/enemy/pufferFish_dead.mp3');
    

    IMAGES_SWIMMING = [
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png',];

    transition = [
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition1.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition2.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition3.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition4.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/2.transition/1.transition5.png',
    ];
    bubbleswim = [
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim1.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim2.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim3.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim4.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/3.Bubbleeswim/1.bubbleswim5.png',
    ];
    dead = [
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/deadGreen1.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/deadGreen2.png',
        'Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/4.DIE/deadGreen3.png'

    ]







    constructor(x, y, startX, endX) {
        super().loadImage('Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.transition);
        this.loadImages(this.bubbleswim);
        this.loadImages(this.dead);
        this.x = x;
        this.y = y;
        this.startX = startX;
        this.endX = endX;
        this.speed = 0.15;
        this.animate_swimming();


    }


    animate_swimming() {


        setInterval(() => {


            if (this.slap) {
                this.deadMove();
            } else {



                this.playAnimation(this.IMAGES_SWIMMING);
                this.moveRightandLeft()



                if (!this.otherDirection) {
                    this.playAnimation(this.transition);
                    this.playAnimation(this.bubbleswim);
                }




            }

        }, 200);

    }






    deadMove() {
        this.playAnimation(this.dead);
        this.speed = 0;
        this.x -= 80;
        this.y += 70;
    }




    moveRightandLeft() {


        if (this.x <= this.endX) {


            this.moveRight();
            this.y += 3;
            this.otherDirection = true;



        } else if (this.x >= this.startX) {


            this.moveLeft();
            this.y -= 3;
            this.otherDirection = false;


        }




    }
}