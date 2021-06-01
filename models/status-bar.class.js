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
        this.x = 30;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage; // -> 0 ... 5
        let path = this.HP_BAR[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(){
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }




}