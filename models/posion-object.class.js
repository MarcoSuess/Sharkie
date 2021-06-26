class posion extends MovableObject {

    

    SOUND_PosionCollect = new Audio('Sprites_Sharkie/sounds/character/posion.mp3')



    constructor(img, x, y) {
        super().loadImage(img);
        this.height = 130;
        this.width = 90;
        this.x = x;
        this.y = y;




    }

}