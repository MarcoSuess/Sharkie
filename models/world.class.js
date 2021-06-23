class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    posionBar = new PosionBar();
    coinsBar = new coins_bar();
    throwableObjects = [new ThrowableObjects(-400)];
    throwableObjectsSpecial = [];
    stopPosionBarTrigger;
    specialBubble;
    bubble;



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();



    };


    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();

        }, 10);
    }

    playSpecialBubble(otherDirection) {



        setTimeout(() => {

            if (this.throwableObjectsSpecial.length <= 0) {
                if (otherDirection) {
                    this.specialBubble = new SpecialBubble(this.character.x - 40, this.character.y + 120, otherDirection);
                } else {
                    this.specialBubble = new SpecialBubble(this.character.x + this.character.width - 40, this.character.y + 120, otherDirection);
                }

                this.throwableObjectsSpecial.push(this.specialBubble)
            }
            this.stopPosionBarTrigger = setInterval(() => {

                this.posionBar.setPercentage(this.character.posionsBar -= 10)

                if (this.character.posionsBar <= 0) {
                    clearInterval(this.stopPosionBarTrigger)
                }

            }, 200);

        }, 200);

        setInterval(() => {
            this.checkSpecialBubble()
        }, 200);

    }

    checkSpecialBubble() {
        this.throwableObjectsSpecial.forEach(specialBubble => {
            // collison with endboSS
        });
    }




    checkThrowObjects(otherDirection) {

        this.character.throwTime = new Date().getTime();
        setTimeout(() => {
            if (otherDirection) {
                this.bubble = new ThrowableObjects(this.character.x - 40, this.character.y + 120 , otherDirection);
            } else {
                this.bubble = new ThrowableObjects(this.character.x + this.character.width - 40, this.character.y + 120 , otherDirection);
            }

            this.throwableObjects.push(this.bubble)
            this.character.atackBubble = false;

        }, 200);
        setInterval(() => {
            this.checkBubble();
        }, 300);
    }


    checkBubble() {



        this.level.jelly_fish.forEach((jelly_fish, index) => {

            this.throwableObjects.forEach((bubble) => {

                if (this.character.checkCollisonBubble(jelly_fish, bubble)) {

                    jelly_fish.bubbleHitDead = true;

                    this.throwableObjects.splice(bubble, 1)

                    console.log(this.throwableObjects)
                    setTimeout(() => {
                        this.level.jelly_fish.splice(index, 1)
                    }, 850);

                }
            });
        });


    }

    checkCollisions() {
        this.checkCollisionsEnemy();
        this.checkCollisionsBarrier();
        this.checkCollisionsCoins();
        this.checkCollisionsPosion();

    }


    checkCollisionsPosion() {
        this.level.posion.forEach((posion, index) => {

            if (this.character.isColliding(posion)) {
                console.log('posion', posion)
                this.posionBar.setPercentage(this.character.posionsBar += 35)
                this.level.posion.splice(index, 1)
                this.throwableObjectsSpecial.splice(0, 1)

            }
        });
        if (this.character.posionsBar >= 100) {
            this.character.specialBubble = true;
        } else {
            this.character.specialBubble = false;
        }



    }



    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                console.log('coin !', coin)
                this.coinsBar.setPercentage(this.character.coins += 10)
                this.level.coins.splice(index, 1)
            }
        });

    }

    checkCollisionSlap() {
        this.level.enemies.forEach((pufferFish, index) => {



            if (this.character.isColliding(pufferFish)) {
                console.log('slap', pufferFish)
                pufferFish.slap = true;

                setTimeout(() => {
                    this.level.enemies.splice(index, 1)
                }, 400);


            } else {
                pufferFish.slap = false;
            }



        });
    }

    checkCollisionsEnemy() {

        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy) && !enemy.otherDirection) {
                this.character.electroHit = false;
                this.character.hit();
                this.statusBar.setPercentage(this.character.HP)

            }

        })

        this.level.jelly_fish.forEach(jelly_fish => {


            if (this.character.isColliding(jelly_fish)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.HP)

                if (jelly_fish.electroHit) {
                    this.character.electroHit = true;
                    this.statusBar.setPercentage(this.character.HP = 0)
                } else {
                    this.character.electroHit = false;

                }
            }

        });


    }

    checkCollisionsBarrier() {

        this.level.barrier.forEach((barrier) => {

            this.character.barrierBlock = this.character.isCollidingBarrier(barrier);

            if (this.character.isCollidingBarrier(barrier)) {



                if (this.character.otherDirection) {
                    this.character.barrierBlockLeft = true;  //  check move left
                    this.character.barrierBlockRight = false;
                    this.character.x += 10;

                } else {
                    this.character.barrierBlockRight = true; // check move right
                    this.character.barrierBlockLeft = false;
                    this.character.x -= 10;
                }

                if (this.character.otherDirectionUpAndDown) {
                    this.character.y -= 10;
                    this.character.barrierBlockDown = true; // check move Down
                    this.character.barrierBlockUp = false;
                } else {
                    this.character.y += 10;
                    this.character.barrierBlockDown = false;
                    this.character.barrierBlockUp = true;   // check move Up
                }


                console.log('collision with', barrier)

            }

        })

        //Barrier double 
        this.character.isCollidingBarrierDouble(this.level.barrierDouble[0])
        if (this.character.topSideBarrierDouble) {
            this.character.y += 2;
        }
        if (this.character.bottomSideBarrierDouble) {
            this.character.y -= 2;
        }

    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectstoMap(this.level.backgroundObjects);
        this.addObjectstoMap(this.level.barrierDouble);
        this.addObjectstoMap(this.level.barrier);
        this.addObjectstoMap(this.level.coins);
        this.addObjectstoMap(this.level.posion);
        this.addToMap(this.character)
        this.ctx.translate(-this.camera_x, 0);
        // ------Space for fixed objects -----
        this.addToMap(this.statusBar);
        this.addToMap(this.posionBar);
        this.addToMap(this.coinsBar);
        this.ctx.translate(this.camera_x, 0);


        this.addObjectstoMap(this.level.enemies);
        this.addObjectstoMap(this.level.jelly_fish);


        this.addObjectstoMap(this.throwableObjects);
        this.addObjectstoMap(this.throwableObjectsSpecial);


        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })

    };

    addObjectstoMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });

    };

    addToMap(mo) {

        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }


    };


}

