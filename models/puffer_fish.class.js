class puffer_fish extends MovableObject {

    x = 400
    y = 300;
    height = 80;
    width = 90;
    start;
    end;

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
    






    constructor(x, y, start, end) {
        super().loadImage('Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.transition);
        this.loadImages(this.bubbleswim);
        this.x = x;
        this.y = y;
        this.start = start;
        this.end = end;
        this.speed = 0.15;
        this.animate_swimming();
        this.action();

    }


    animate_swimming() {


        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);

            if (this.otherDirection == false) {
                this.playAnimation(this.transition);
                this.playAnimation(this.bubbleswim);
            }



        }, 100);

    }

    action() {
        setInterval(() => {
            this.moveRightandLeft()


        }, 300);




    }




    moveRightandLeft() {
        if (this.x <= this.end) {
            this.moveRight();

            this.otherDirection = true;

        } else if (this.x >= this.start) {
            this.moveLeft();

            this.otherDirection = false;

        }
    }
}