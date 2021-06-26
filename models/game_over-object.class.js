class GameOver extends MovableObject {


    GameOverScreen = [
        'Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 9.png',
        'Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 10.png',
        'Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 11.png',
        'Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 12.png',
        'Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 13.png'
    ]



    constructor() {
        super().loadImage('Sprites_Sharkie/6.Botones/Tittles/Game Over/Recurso 9.png');
        this.loadImages(this.GameOverScreen)
        this.height = 130;
        this.width = 90;
        this.x = 0;
        this.y = 0;




    }


}