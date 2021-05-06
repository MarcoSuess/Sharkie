class puffer_fish extends MovableObject {

    x = 400
    y = 300;
    height = 100;
    width = 100;
    
    constructor() {
        super().loadImage('Sprites_Sharkie/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 400 + Math.random() * 500;
        this.y = 100 + Math.random() * 200;
    }

    

}