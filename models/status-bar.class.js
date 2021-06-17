class StatusBar extends DrawableObject {

    HP_BAR = [
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_0.png',
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_20.png',
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_40.png',
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_60.png',
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_80.png',
        'Sprites_Sharkie/4. Marcadores/green/Life/HP_100.png'

 ];


    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.HP_BAR);
        this.x = 10;
        this.y = 0;
        this.width = 190;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.HP_BAR[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[path];
    }

    
  




}