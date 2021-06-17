class MovableObject extends DrawableObject {
    //barrier
    barrierBlock;
    // ---


    //barrier Double block
    topSideBarrierDouble;
    bottomSideBarrierDouble;
    // ---

    speed = 0.15;
    otherDirection = false;
    HP = 100;
    coins = 0;
    posions = 0;
    lastHit = 0;
    acceleration = 2.5;
    speedY = 0;
    
  
    
  
   

    
    


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


    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
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
            this.x < mo.x && // check behindg
            this.y + 140 < mo.y + mo.height; // check up
    }

    isCollidingBarrier(mo) {

        return this.x + this.width - 60 > mo.x && // check front 
            this.y + this.height - 80 > mo.y && //  check under
            this.x < mo.x && // check behindg
            this.y + 140 < mo.y + mo.height; // check up
    }

    isCollidingBarrierDouble(mo) {

        //bottom side
        this.bottomSideBarrierDouble = this.x + this.width - 60 > mo.x && this.x < mo.x + mo.width &&
            this.y + this.height - 80 > mo.y + mo.height - 120;

        //top side
        this.topSideBarrierDouble = this.x + this.width - 60 > mo.x &&
            this.x < mo.x + mo.width && this.y + 140 < mo.y + 120
    }

    checkCollisonBubble(enemies, bubble) {
        return enemies.x < bubble.x && enemies.y < bubble.y + bubble.height &&
            enemies.y + enemies.height > bubble.y &&
            enemies.x + enemies.width > bubble.x &&
            enemies.y < bubble.y + bubble.height
    }



    hit() {
        this.HP -= 5;
        if (this.HP < 0) {
            this.HP = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
        /*     console.log(this.HP, 'energy') */
    }

    isDead() {
        return this.HP == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
        timepassed = timepassed / 1000; // Difference in s
        return timepassed < 0.5;
    }






}
