class MovableObject extends DrawableObject {
    //barrier
    barrierBlockDown;
    barrierBlockRight;
    barrierBlockLeft;
    barrierBlockUp;
    // ---


    //barrier Double block
    topSideBarrierDouble;
    bottomSideBarrierDouble;
    // ---

    speed = 0.15;
    otherDirection = false;
    otherDirectionUpAndDown;
    HP = 100;
    coins = 0;
    posionsBar = 0;
    lastHit = 0;
    acceleration = 2.5;
    speedY = 0;
    specialBubble = false;
    throwTime = 0;
    down;
    up;
    intro;
    moveUp;
    checkForWin;
    checkForLose;







    applyLift() {
        setInterval(() => {
            if (this.isAboveGround() && !this.moveUp) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;

                if (this.y > 470) {
                    this.moveUp = true;
                }
            }
            if (this.moveUp) {
                
                this.y -= 15;
            }

        }, 1000 / 25);
    }



    isAboveGround() {
        if (this instanceof ThrowableObjects) { // Throwable object should always fall
            return true;
        }


    }


    playAnimation(images, endDeadAnimation, lastImg, action) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;


        if (this.img == this.imageCache[images[lastImg]]) {
            clearInterval(endDeadAnimation)



            if (this.longAFK && !this.isDead()) {

                this.moveAnimateSleep();
            }

            if (action) { // END BOSS 
                this.SOUND_Dead.pause();
                this.animation();

            }
            if (this.isDead()) {
                console.log('dead', this.isDead())
                this.moveAnimationDead();
            }


        }
    }

    moveAnimateSleep() {


        var sleep = setInterval(() => {
            this.playAnimation(this.longIdleSleep)
            if (this.y < 200 && this.checkKeyboard()) {
                this.y += 30;

            }

            if (!this.checkKeyboard()) {

                this.checkForAFK();
                clearInterval(sleep);
            }



        }, 250);


    }

    moveAnimationDead() {
        if (this.electroHit) {
            this.loadImage(this.electroDead[9])
        } else {
            this.loadImage(this.IMAGES_DEAD[11])
        }


        setInterval(() => {
            if (this.y < 200) {
                this.y += 30;
                this.checkForLose = true;
            }
        }, 250);

    }




    moveRight() {
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    //check colliding
    isColliding(mo) {
        return this.x + this.width - 60 > mo.x && // check front 
            this.y + this.height - 80 > mo.y && //  check under
            this.x < mo.x && // check behind
            this.y + 140 < mo.y + mo.height; // check up
    }

    isCollidingEndBoss(mo) {
        return this.x + this.width - 60 > mo.x && // check front 
            this.y + this.height - 80 > mo.y && //  check under
            this.x - this.width < mo.x && // check behind
            this.y + 140 < mo.y + mo.height; // check up
    }

    isCollidingBarrier(mo) {

        return this.x + this.width - 60 > mo.x && // check front 
            this.y + this.height - 80 > mo.y - 10 && //  check under
            this.x + 50 < mo.x + mo.width && // check behind
            this.y + 140 < mo.y + mo.height // check up
    }

    isCollidingBarrierDouble(mo) {

        //bottom side
        this.bottomSideBarrierDouble = this.x + this.width - 60 > mo.x // front x
            && this.x + 50 < mo.x + mo.width && // back x
            this.y + this.height - 80 > mo.y + mo.height - 120; // y

        //top side
        this.topSideBarrierDouble = this.x + this.width - 60 > mo.x && // front x
            this.x + 50 < mo.x + mo.width && // back x
            this.y + 140 < mo.y + 120 // y
    }

    checkCollisonBubble(enemies, bubble) {
        return enemies.x < bubble.x && enemies.y < bubble.y + bubble.height &&
            enemies.y + enemies.height > bubble.y &&
            enemies.x + enemies.width > bubble.x

    }

    checkCollisonSpecialBubble(endBoss, specialBubble) {
        return endBoss.x < specialBubble.x + specialBubble.width && // front
            endBoss.y + 250 < specialBubble.y + specialBubble.height && // up
            endBoss.y + endBoss.height - 130 > specialBubble.y && // down
            endBoss.x + endBoss.width - 20 > specialBubble.x  // behind

    }




    endBossAtackRange(boss) {
        return boss.x - 100 < this.x + this.width - 60 && // front
            boss.y + 250 < this.y + this.height - 80 && // up
            boss.y + boss.height - 130 > this.y + 140 && // down
            boss.x + boss.width + 100 > this.x + 50  // behind
    }


    stopHitAnimation(hitAnimation) {
        setTimeout(() => {
            clearInterval(hitAnimation)
        }, 200);

    }

    setBack() {
        var hitAnimation = setInterval(() => {
            if (this.otherDirection) {
                this.x += 2;
            } else {
                this.x -= 2;
            }
            this.stopHitAnimation(hitAnimation);
        }, 20);
    }

    hit() {
        this.HP -= 5;
        this.setBack();
        if (this.HP < 0) {
            this.HP = 0;
        } else {
            this.lastHit = new Date().getTime();
        }

    }

    isDead() {
        return this.HP == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.5;
    }

    keyboardIntervall() {

        let timepassed = new Date().getTime() - this.throwTime;
        timepassed = timepassed / 1000;

        return timepassed > 0.6;
    }






}
