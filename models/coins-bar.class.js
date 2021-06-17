class coins_bar extends DrawableObject {


    coinsBar = [
        'Sprites_Sharkie/4. Marcadores/orange/0.png',
        'Sprites_Sharkie/4. Marcadores/orange/20.png',
        'Sprites_Sharkie/4. Marcadores/orange/40.png',
        'Sprites_Sharkie/4. Marcadores/orange/60.png',
        'Sprites_Sharkie/4. Marcadores/orange/80.png',
        'Sprites_Sharkie/4. Marcadores/orange/100.png'
       

    ]

    percentage = 0;

    constructor() {
        super();
        this.loadImages(this.coinsBar);
        this.x = 10;
        this.y = 100;
        this.width = 190;
        this.height = 60;
        this.setPercentage(0);
    }


    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.coinsBar[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }


}