class Character extends MovableObject {
    y = 150;
    x = 80;
    width = 270;
    height = 270;
    speed = 15;
    atackBubble = false;
    swim_up = false;
    swim_down = false;
    electroHit = false;
    idleTime = 0;
    longAFK;
    lastKeyboardTime;
    stopIntro;
    keyboard;
    atackMove;





    IMAGES_SWIMMING = [
        'Sprites_Sharkie/1.Sharkie/3.Swim/1.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/2.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/3.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/4.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/5.png',
        'Sprites_Sharkie/1.Sharkie/3.Swim/6.png'];

    IMAGES_SWIMMING_UP_DEGREE = [
        'Sprites_Sharkie/1.Sharkie/SwimUP/rotate_10_degree_A1.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/rotate_20_degree_A2.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/rotate_30_degree_A3.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/rotate_40_degree_A4.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/rotate_45_degree_A5.png',
    ];

    IMAGES_SWIMMING_UP = [
        'Sprites_Sharkie/1.Sharkie/SwimUP/swim_up_A1.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/swim_up_A2.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/swim_up_A3.png',
        'Sprites_Sharkie/1.Sharkie/SwimUP/swim_up_A4.png',

    ];
    IMAGES_SWIMMING_DOWN_DEGREE = [
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_rotate_1.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_rotate_2.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_rotate_3.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_rotate_4.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_rotate_5.png',
    ];

    IMAGES_SWIMMING_DOWN = [
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_animation_1.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_animation_2.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_animation_3.png',
        'Sprites_Sharkie/1.Sharkie/SwimDown/swim_down_animation_4.png',

    ];

    IMAGES_DEAD = [
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/1.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/2.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/3.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/4.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/5.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/6.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/7.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/8.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/9.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/10.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/11.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/1.Poisoned/12.png',

    ];

    IMAGES_HURT = [
        'Sprites_Sharkie/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'Sprites_Sharkie/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'Sprites_Sharkie/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'Sprites_Sharkie/1.Sharkie/5.Hurt/1.Poisoned/5.png',
    ]


    withBubbleAnimation = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ]

    withoutBubbleAnimation = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png'
    ]

    withBubbleAnimationSpecial = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ]

    withoutBubbleAnimationSpecial = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/8.png'
    ]

    electroHitImage = [
        'Sprites_Sharkie/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'Sprites_Sharkie/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'Sprites_Sharkie/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ]
    electroDead = [
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'Sprites_Sharkie/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ]

    slap = [
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/1.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/2.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/3.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/4.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/5.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/6.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/7.png',
        'Sprites_Sharkie/1.Sharkie/4.Attack/Fin slap/8.png'
    ]

    idle = [
        'Sprites_Sharkie/1.Sharkie/1.IDLE/1.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/2.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/3.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/4.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/5.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/6.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/7.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/8.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/9.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/10.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/11.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/12.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/13.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/14.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/15.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/16.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/17.png',
        'Sprites_Sharkie/1.Sharkie/1.IDLE/18.png'
    ]

    longIdle = [
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i1.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i2.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i3.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i4.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i5.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i6.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i7.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i8.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i9.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i10.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i11.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i12.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i13.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i14.png'

    ]

    longIdleSleep = [
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i11.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i12.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i13.png',
        'Sprites_Sharkie/1.Sharkie/2.Long_IDLE/i14.png'
    ]


    world;
    /* swimming_sound = new Audio('pfad'); */

    constructor() {

        super().loadImage('Sprites_Sharkie/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_SWIMMING_UP_DEGREE);
        this.loadImages(this.IMAGES_SWIMMING_UP);
        this.loadImages(this.IMAGES_SWIMMING_DOWN);
        this.loadImages(this.IMAGES_SWIMMING_DOWN_DEGREE);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.withBubbleAnimation);
        this.loadImages(this.electroHitImage);
        this.loadImages(this.electroDead);
        this.loadImages(this.withBubbleAnimationSpecial);
        this.loadImages(this.withoutBubbleAnimationSpecial);
        this.loadImages(this.slap);
        this.loadImages(this.withoutBubbleAnimation);
        this.loadImages(this.idle);
        this.loadImages(this.longIdle);
        this.loadImages(this.longIdleSleep);
        this.checkForAFK();
        this.move_animate();
        this.atack_animate();
        this.checkXForEndbossIntro();

    }


    checkXForEndbossIntro() {
        this.stopIntro = setInterval(() => {

            if (this.x >= 4500) {
                this.intro = true;
                this.endIntro();
                this.playAnimation(this.idle)

            }


        }, 200);






    }

    endIntro() {
        setTimeout(() => {
            if (this.intro) {

                clearInterval(this.stopIntro);
                this.intro = false;
            }


        }, 1000);
    }



    checkForAFK() {

        this.longAFK = false;


        setInterval(() => {
            this.checkKeyboard();
        }, 50);

        var stopAFK = setInterval(() => {



            if (this.idleTime < 15000 && !this.intro && this.checkKeyboard() && !this.isDead()) {
                this.playAnimation(this.idle)

                setTimeout(() => {
                    if (this.checkKeyboard() && !this.isDead()) {
                        this.longAFK = true;
                    }

                }, 4000);

            } else if (this.longAFK && this.checkKeyboard() && !this.intro) {


                this.playAnimation(this.longIdle, stopAFK, 9)


            }






        }, 150);

    }













    move_animate() {







        this.keyboard = setInterval(() => {






            //Right
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x
                && !this.bottomSideBarrierDouble && !this.topSideBarrierDouble
                && !this.barrierBlockRight && !this.intro && !this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                this.playAnimation(this.IMAGES_SWIMMING)
                this.barrierBlockLeft = false;
                this.barrierBlockRight = false;
                this.barrierBlockUp = false;
                this.barrierBlockDown = false;
                this.x += this.speed;
                this.otherDirection = false;



                if (this.swim_up) {
                    this.playAnimation(this.IMAGES_SWIMMING_UP_DEGREE.reverse())
                    this.swim_up = false;
                }
                if (this.swim_down) {
                    this.playAnimation(this.IMAGES_SWIMMING_DOWN_DEGREE.reverse())
                    this.swim_down = false;
                }

            }
            //left
            if (this.world.keyboard.LEFT && this.x > 80 && !this.bottomSideBarrierDouble
                && !this.topSideBarrierDouble && !this.barrierBlockLeft && !this.intro && !this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                this.x -= this.speed;
                this.playAnimation(this.IMAGES_SWIMMING)
                this.otherDirection = true;
                this.barrierBlockRight = false;
                this.barrierBlockLeft = false;
                this.barrierBlockUp = false;
                this.barrierBlockDown = false;
                this.swim_up = false;
                if (this.swim_up) {
                    this.playAnimation(this.IMAGES_SWIMMING_UP_DEGREE.reverse())
                    this.swim_up = false;
                }
                if (this.swim_down) {
                    this.playAnimation(this.IMAGES_SWIMMING_DOWN_DEGREE.reverse())
                    this.swim_down = false;
                }
            }
            //up
            if (this.world.keyboard.UP && !this.topSideBarrierDouble
                && !this.barrierBlockUp && this.y > -100 && !this.intro && !this.world.keyboard.DOWN) {
                if (this.otherDirection) {
                    this.y -= this.speed;
                    this.x -= this.speed;
                } else {
                    this.y -= this.speed;
                    this.x += this.speed;
                }

                this.otherDirectionUpAndDown = false;
                this.barrierBlockLeft = false;
                this.barrierBlockRight = false;
                this.barrierBlockUp = false;
                this.barrierBlockDown = false;


                if (!this.swim_up) {
                    this.playAnimation(this.IMAGES_SWIMMING_UP_DEGREE)
                    this.swim_up = true;
                }



            }
            //down
            if (this.world.keyboard.DOWN && !this.bottomSideBarrierDouble &&
                !this.barrierBlockDown && this.y < 250 && !this.intro && !this.world.keyboard.UP) {
                if (this.otherDirection) {
                    this.y += this.speed;
                    this.x -= this.speed;
                } else {
                    this.y += this.speed;
                    this.x += this.speed;
                }



                this.barrierBlockLeft = false;
                this.barrierBlockRight = false;
                this.barrierBlockUp = false;
                this.barrierBlockDown = false;
                this.otherDirectionUpAndDown = true;



                if (!this.swim_down) {
                    this.playAnimation(this.IMAGES_SWIMMING_DOWN_DEGREE)
                    this.swim_down = true;
                }

            }






            this.world.camera_x = -this.x + 150;

        }, 1000 / 30);







        var stopDeadAnimation = setInterval(() => {



            if (this.isDead()) {
                if (this.electroHit) {
                    this.playAnimation(this.electroDead, stopDeadAnimation, 9)
                    clearInterval(this.keyboard)
                    clearInterval(this.atackMove)


                } else {
                    this.playAnimation(this.IMAGES_DEAD, stopDeadAnimation, 11)
                    clearInterval(this.keyboard)
                    clearInterval(this.atackMove)
                }

            }

            if (this.isHurt()) {
                if (this.electroHit) {
                    this.playAnimation(this.electroHitImage)
                } else {
                    this.playAnimation(this.IMAGES_HURT)
                }

            }


            if (this.swim_up) {
                this.playAnimation(this.IMAGES_SWIMMING_UP)

            }

            if (this.swim_down) {
                this.playAnimation(this.IMAGES_SWIMMING_DOWN)

            }

            if (!this.world.keyboard.DOWN && !this.world.keyboard.UP) {
                this.swim_up = false;
                this.swim_down = false;
            }
        }, 150);

    }


    atack_animate() {



        // atack with D --- Bubble normal
        this.atackMove = setInterval(() => {
            if (this.world.keyboard.D && !this.world.keyboard.SPACE && this.keyboardIntervall() && !this.intro) {
                this.world.checkThrowObjects(this.otherDirection);
                this.playAnimation(this.withBubbleAnimation);
            } else if (this.world.keyboard.D && !this.keyboardIntervall()) {
                this.playAnimation(this.withoutBubbleAnimation);
            }











            //special atack with D and Space
            if (this.world.keyboard.D && this.world.keyboard.SPACE && !this.intro) {

                if (this.specialBubble) {
                    console.log('world')
                    this.playAnimation(this.withBubbleAnimationSpecial)
                    this.world.playSpecialBubble(this.otherDirection);


                } else {
                    this.playAnimation(this.withoutBubbleAnimationSpecial)
                }


            }


            //slap with space

            if (this.world.keyboard.SPACE && !this.world.keyboard.D && this.keyboardIntervall() && !this.intro) {

                console.log('x =', this.x + this.width - 60);
                console.log('y =', this.y + 140)
                this.world.checkCollisionSlap();
                this.playAnimation(this.slap)


            }

        }, 150);
    }



    checkKeyboard() {

        if (!this.world.keyboard.SPACE && !this.world.keyboard.DOWN
            && !this.world.keyboard.UP && !this.world.keyboard.LEFT
            && !this.world.keyboard.RIGHT && !this.world.keyboard.D) {


            this.idleTime = new Date().getTime() - this.lastKeyboardTime;


            return true;

        } else {
            this.lastKeyboardTime = new Date().getTime();

            return false;

        }









    }

}


