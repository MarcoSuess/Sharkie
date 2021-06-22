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










    applyLift() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObjects) { // Throwable object should always fall
            return true;
        } else {
            return this.y < 180;
        }
    }


    playAnimation(images, endDeadAnimation, lastImg) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;


        if (this.img == this.imageCache[images[lastImg]]) {
            clearInterval(endDeadAnimation)
            this.moveAnimationDead();

        }
    }

    moveAnimationDead() {
        setInterval(() => {
            if (this.y < 200) {
                this.y += 30;
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
            enemies.x + enemies.width > bubble.x &&
            enemies.y < bubble.y + bubble.height
    }

    stopHitAnimation(hitAnimation) {
        setTimeout(() => {
            clearInterval(hitAnimation)
        }, 200);

    }

    setBack() {
        var hitAnimation = setInterval(() => {
            if (this.otherDirection) {
                this.x += 5;
            } else {
                this.x -= 5;
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
        console.log(this.throwTime)
        let timepassed = new Date().getTime() - this.throwTime;
        timepassed = timepassed / 1000;

        return timepassed > 0.6
    }






}
