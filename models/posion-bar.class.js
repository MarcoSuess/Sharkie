class PosionBar extends DrawableObject {

    SOUND_PosionFull = new Audio('Sprites_Sharkie/sounds/character/specialAtackisReady.mp3')

    PosionBar = [
        'Sprites_Sharkie/4. Marcadores/Purple/0_.png',
        'Sprites_Sharkie/4. Marcadores/Purple/20_.png',
        'Sprites_Sharkie/4. Marcadores/Purple/40_.png',
        'Sprites_Sharkie/4. Marcadores/Purple/60_.png',
        'Sprites_Sharkie/4. Marcadores/Purple/80_.png',
        'Sprites_Sharkie/4. Marcadores/Purple/100_.png',
    ]

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.PosionBar);
        this.x = 10;
        this.y = 50;
        this.width = 190;
        this.height = 60;
        this.setPercentage(0);
    }

    setPercentage(percentage) {

        this.percentage = percentage; // -> 0 ... 5
        let path = this.PosionBar[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];


    }


}


