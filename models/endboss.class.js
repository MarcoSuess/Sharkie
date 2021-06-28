class Endboss extends MovableObject {

    height = 500;
    width = 300;
    y = -50;
    introReady;
    hurt;
    atack;
    dead;
    final;
    wait;
    character_x;
    character_y;
    otherSide;
    resetPosion;

    SOUND_Hurt = new Audio('Sprites_Sharkie/sounds/endBoss/endbossHurt.mp3');
    SOUND_Atack = new Audio('Sprites_Sharkie/sounds/endBoss/endbossAtack.mp3');
    SOUND_Intro = new Audio('Sprites_Sharkie/sounds/endBoss/endBossIntro.mp3');
    SOUND_EndBossIsNear = new Audio('Sprites_Sharkie/sounds/endBoss/sharkisNear.mp3');
    SOUND_Dead = new Audio('Sprites_Sharkie/sounds/enemy/pufferFish_dead.mp3');



    IMAGES_INTRO = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ]


    IMAGES_SWIMMING = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/4.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/5.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/6.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/7.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/8.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/9.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/10.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/11.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/12.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATACK = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/4.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/5.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Attack/6.png'
    ];

    IMAGES_DEAD = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png',
    ];

    IMAGES_HURT = [
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Hurt/1.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Hurt/2.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Hurt/3.png',
        'Sprites_Sharkie/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_ATACK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.x = 8050;
        this.playIntro();
    }


    playIntro() {


        var stopIntro = setInterval(() => {

            if (this.introReady) {
                this.x = 4850
                this.SOUND_Intro.play();
                this.resetPosion = true;




                this.playAnimation(this.IMAGES_INTRO, stopIntro, 9, this.introReady)

            }



        }, 200);


    }





    animation() {
        this.final = true;
        var action = setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);

            if (this.x <= 2300) {
                this.wait = true;
            }

            if (this.otherSide) {
                this.x += 35;
                this.otherDirection = true;

            }
            else {
                this.x -= 35;
            }






            if (this.character_y <= this.y + 150) {
                this.y -= 20;
            }
            if (this.character_y >= this.y + 150) {
                this.y += 20;
            }




            if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
             
            }

            if (this.dead) {
                this.playAnimation(this.IMAGES_DEAD, action, 4)
                this.SOUND_Dead.play();
            }

            if (this.atack) {
                this.playAnimation(this.IMAGES_ATACK)
                this.SOUND_Atack.play();
                if (!this.otherDirection) {
                    this.x -= 5;
                }
                if (this.otherDirection) {
                    this.x += 5

                }


            }



        }, 200);



    }





}