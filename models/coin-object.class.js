class coin extends MovableObject {

    SOUND_COIN = new Audio('Sprites_Sharkie/sounds/character/coin.mp3');

    coinsAnimationImg = [
        'Sprites_Sharkie/4. Marcadores/1. Coins/1.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_1.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_2.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_3.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_4.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_5.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_6.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_7.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_8.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_9.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_10.png',
        'Sprites_Sharkie/4. Marcadores/coins_animation/animation_11.png',
    ]




    constructor(x, y) {
        super().loadImage('Sprites_Sharkie/4. Marcadores/1. Coins/1.png');
        this.height = 50;
        this.width = 50;
        this.x = x;
        this.y = y;
        this.loadImages(this.coinsAnimationImg);
        this.coinAnimation();


    }

    coinAnimation() {
        setInterval(() => {
            this.playAnimation(this.coinsAnimationImg)
        }, 1000 / 15);
    }

}