class Character extends MovableObject {
    y = 150;
    x = 80;
    width = 270;
    height = 270;
    speed = 4;
    atackBubble = false;
    swim_up = false;
    swim_down = false;
    electroHit = false;


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
        this.move_animate();
        this.atack_animate();


    }

    move_animate() {

        setInterval(() => {




            //Right
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x
                && !this.bottomSideBarrierDouble && !this.topSideBarrierDouble && !this.barrierBlock) {
                this.barrierBlock = false;
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
            if (this.world.keyboard.LEFT && this.x > 80 && !this.bottomSideBarrierDouble && !this.topSideBarrierDouble) {
                this.x -= this.speed;
                this.otherDirection = true;
                this.barrierBlock = false;
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
            if (this.world.keyboard.UP && this.y > -100 && !this.topSideBarrierDouble) {
                this.y -= this.speed;
                this.x += this.speed;
                this.barrierBlock = false;



                if (!this.swim_up) {
                    this.playAnimation(this.IMAGES_SWIMMING_UP_DEGREE)
                    this.swim_up = true;
                }



            }
            //down
            if (this.world.keyboard.DOWN && this.y < 250 && !this.bottomSideBarrierDouble && !this.barrierBlock) {
                this.y += this.speed;
                this.x += this.speed;
                this.barrierBlock = false;

                if (!this.swim_down) {
                    this.playAnimation(this.IMAGES_SWIMMING_DOWN_DEGREE)
                    this.swim_down = true;
                }

            }





            this.world.camera_x = -this.x + 150;

        }, 1000 / 60);

        setInterval(() => {


            this.playAnimation(this.IMAGES_SWIMMING)



            if (this.isDead()) {
                if (this.electroHit) {
                    this.playAnimation(this.electroDead)
                } else {
                    this.playAnimation(this.IMAGES_DEAD)
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
        setInterval(() => {
            if (this.world.keyboard.D && !this.world.keyboard.SPACE) {
                this.playAnimation(this.withBubbleAnimation);
                this.world.checkThrowObjects();

            }

            //special atack with D and Space
            if (this.world.keyboard.D && this.world.keyboard.SPACE) {
                if (this.specialBubble) {
                    this.playAnimation(this.withBubbleAnimationSpecial)
                    this.world.checkSpecialBubble();
                    console.log('test ')
                } else {
                    this.playAnimation(this.withoutBubbleAnimationSpecial)
                }


            }


            //slap with space

            if (this.world.keyboard.SPACE && !this.world.keyboard.D) {

                console.log('x =', this.x + this.width - 60);
                console.log('y =', this.y + 140)

            }

        }, 150);
    }



}


