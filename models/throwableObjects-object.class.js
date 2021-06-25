class ThrowableObjects extends MovableObject {


    bubbleAnimation = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animation/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animation/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animation/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animation/4.png'
    ];





    constructor(x, y, otherDirection) {
        super().loadImage('Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.loadImages(this.bubbleAnimation);
        this.x = x;
        this.y = y;
        this.height = 65;
        this.width = 65;
        this.otherDirection = otherDirection
        this.throw();
        this.playBubbleAnimation();

    }

    throw() {

        this.speedY = 20;
        this.applyLift();

        setInterval(() => {
            if (!this.moveUp) {
                if (this.otherDirection) {
                    this.x -= 10;
                } else {
                    this.x += 10;
                }
            }

            if (this.moveUp && !this.otherDirection) {
                this.x += 8;
                this.x -= 5;
            } else {
                this.x += 5;
                this.x -= 8;
            }




        }, 30);
    }

    playBubbleAnimation() {

        setInterval(() => {


            this.playAnimation(this.bubbleAnimation)






        }, 100);

    }



}