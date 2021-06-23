class SpecialBubble extends MovableObject {


    bubbleAnimationSpecial = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animationSpecial/0.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animationSpecial/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animationSpecial/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animationSpecial/3.png'
    ]





    constructor(x, y, otherDirection) {
        super().loadImage('Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/bubble_animationSpecial/0.png');
        this.loadImages(this.bubbleAnimationSpecial);
        this.x = x;
        this.y = y;
        this.height = 100;
        this.width = 100;
        this.otherDirection = otherDirection;
        this.throw();
        this.playBubbleAnimation();

    }

    throw() {


        setInterval(() => {
            if (this.otherDirection) {
                this.x -= 20;
            } else {
                this.x += 20;
            }

        }, 30);
    }

    playBubbleAnimation() {

        setInterval(() => {




            this.playAnimation(this.bubbleAnimationSpecial)


        }, 100);

    }

}



