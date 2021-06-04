class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false;
    HP = 100;
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
        // move right
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    //check colliding
    isColliding(mo) {
        return this.x + this.width - 60 > mo.x &&
            this.y + this.height - 80 > mo.y &&
            this.x < mo.x &&
            this.y + 140 < mo.y + mo.height;

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
