class coins_bar extends DrawableObject {

    
    coinsBar = [
        'Sprites_Sharkie/4. Marcadores/orange/0_  copia 2.png',
        'Sprites_Sharkie/4. Marcadores/orange/20_  copia 2.png',
        'Sprites_Sharkie/4. Marcadores/orange/40_  copia 2.png',
        'Sprites_Sharkie/4. Marcadores/orange/60_  copia 2.png',
        'Sprites_Sharkie/4. Marcadores/orange/80_  copia 2.png',
        'Sprites_Sharkie/4. Marcadores/orange/100_  copia 2.png'

    ]

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
        let path = this.coinsBar[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    
}