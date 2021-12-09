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

  /**
   * This function move the object down and then up.
   */
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

  /**
   * This function check the instance of Throwable objects.
   *
   * @returns {true}
   */
  isAboveGround() {
    if (this instanceof ThrowableObjects) {
      // Throwable object should always fall
      return true;
    }
  }

  /**
   * This function play the animation in a modulo
   *
   * @param {string} images
   * @param {function} endDeadAnimation - this is the function with a interval.
   * @param {string} lastImg
   * @param {boolean} action
   */
  playAnimation(images, endDeadAnimation, lastImg, action) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;

    if (this.img == this.imageCache[images[lastImg]]) {
      clearInterval(endDeadAnimation);
      if (this.longAFK && !this.isDead()) {
        this.moveAnimateSleep();
      }
      if (action) {
        // END BOSS
        this.SOUND_Dead.pause();
        this.animation();
      }
      if (this.isDead()) {
        console.log("dead", this.isDead());
        this.moveAnimationDead();
      }
    }
  }


  /**
   * This function is for the sleep animation.
   */
  moveAnimateSleep() {
    var sleep = setInterval(() => {
      this.playAnimation(this.longIdleSleep);
      if (this.y < 200 && this.checkKeyboard()) {
        this.y += 30;
      }

      if (!this.checkKeyboard()) {
        this.checkForAFK();
        clearInterval(sleep);
      }
    }, 250);
  }


  /**
   * This function is for the dead animation.
   */
  moveAnimationDead() {
    if (this.electroHit) {
      this.loadImage(this.electroDead[9]);
    } else {
      this.loadImage(this.IMAGES_DEAD[11]);
    }
    setInterval(() => {
      if (this.y < 200) {
        this.y += 30;
        this.checkForLose = true;
      }
    }, 250);
  }


  /**
   * This function is for moving object right.
   */
  moveRight() {
    setInterval(() => {
      this.x += this.speed;
    }, 1000 / 60);
  }


  /**
   * This function is for moving object left.
   */
  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }



  /**
   * This function check colliding with object.
   * 
   * @param {Object} mo - This is the object. 
   * @returns {any}  - returns some checks.
   */
  isColliding(mo) {
    return (
      this.x + this.width - 60 > mo.x && // check front
      this.y + this.height - 80 > mo.y && //  check under
      this.x < mo.x && // check behind
      this.y + 140 < mo.y + mo.height
    ); // check up
  }


   /**
   * This function check colliding with object end Boss.
   * 
   * @param {Object} mo - This is the object end boss. 
   * @returns {any}  - returns some checks.
   */
  isCollidingEndBoss(mo) {
    return (
      this.x + this.width - 60 > mo.x && // check front
      this.y + this.height - 80 > mo.y && //  check under
      this.x - this.width < mo.x && // check behind
      this.y + 140 < mo.y + mo.height  // check up
    );
  }


 /**
   * This function check colliding with barrier.
   * 
   * @param {Object} mo - This is the barrier object. 
   * @returns {any}  - returns some checks.
   */
  isCollidingBarrier(mo) {
    return (
      this.x + this.width - 60 > mo.x && // check front
      this.y + this.height - 80 > mo.y - 10 && //  check under
      this.x + 50 < mo.x + mo.width && // check behind
      this.y + 140 < mo.y + mo.height  // check up
    ); 
  }


  /**
   * This function check colliding with barrier.
   * 
   * @param {Object} mo - This is the barrier object. 
   * @returns {any}  - returns some checks.
   */
  isCollidingBarrierDouble(mo) {
    //bottom side
    this.bottomSideBarrierDouble =
      this.x + this.width - 60 > mo.x && // front x
      this.x + 50 < mo.x + mo.width && // back x
      this.y + this.height - 80 > mo.y + mo.height - 120; // y

    //top side
    this.topSideBarrierDouble =
      this.x + this.width - 60 > mo.x && // front x
      this.x + 50 < mo.x + mo.width && // back x
      this.y + 140 < mo.y + 120; // y
  }



  /**
   * This function check collision from the bubble.
   * 
   * @param {Object} enemies 
   * @param {Object} bubble 
   * @returns {any}  - returns some checks.
   */
  checkCollisonBubble(enemies, bubble) {
    return (
      enemies.x < bubble.x &&
      enemies.y < bubble.y + bubble.height &&
      enemies.y + enemies.height > bubble.y &&
      enemies.x + enemies.width > bubble.x
    );
  }


    /**
   * This function check collision from the special bubble.
   * 
   * @param {Object} endBoss 
   * @param {Object} specialBubble 
   * @returns {any}  - returns some checks.
   */
  checkCollisonSpecialBubble(endBoss, specialBubble) {
    return (
      endBoss.x < specialBubble.x + specialBubble.width && // front
      endBoss.y + 250 < specialBubble.y + specialBubble.height && // up
      endBoss.y + endBoss.height - 130 > specialBubble.y && // down
      endBoss.x + endBoss.width - 20 > specialBubble.x  // behind
    );
  }



  /**
   * This function checked the endboss range.
   * 
   * @param {object} boss - this is the endBoss
   * @returns {any} - return some checks
   */
  endBossAtackRange(boss) {
    return (
      boss.x - 100 < this.x + this.width - 60 && // front
      boss.y + 250 < this.y + this.height - 80 && // up
      boss.y + boss.height - 130 > this.y + 140 && // down
      boss.x + boss.width + 100 > this.x + 50
    ); // behind
  }



  /**
   * This function stop the hit animation.
   * 
   * @param {function} hitAnimation  - this is the function for the hit animation.
   */
  stopHitAnimation(hitAnimation) {
    setTimeout(() => {
      clearInterval(hitAnimation);
    }, 200);
  }



  /**
   * This function set the object back after hit animation.
   */
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


  /**
   * This function check the hit and set the hp.
   */
  hit() {
    this.HP -= 5;
    this.setBack();
    if (this.HP < 0) {
      this.HP = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }


  /**
   *  This function check the dead.
   * 
   * @returns 
   */
  isDead() {
    return this.HP == 0;
  }


  /**   
   * This function checked the time from is hurt.
   * 
   * @returns 
   */
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Difference in ms
    timepassed = timepassed / 1000; // Difference in s
    return timepassed < 0.5;
  }


  /**
   * This function check the keyboard press.
   * 
   * @returns 
   */
  keyboardIntervall() {
    let timepassed = new Date().getTime() - this.throwTime;
    timepassed = timepassed / 1000;

    return timepassed > 0.6;
  }
}
