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

        }, 200);
    }

    checkSpecialBubble() {

        setTimeout(() => {
            let specialBubble = new SpecialBubble(this.character.x + this.character.width - 40, this.character.y + 120);
            this.throwableObjects.push(specialBubble)
            setInterval(() => {


                if (this.character.posionsBar > 0) {
                    this.posionBar.setPercentage(this.character.posionsBar -= 10)
                }




            }, 200);

        }, 200);
    }

    checkThrowObjects() {
        console.log(this.throwableObjects)
        this.character.throwTime = new Date().getTime();
        setTimeout(() => {

            let bubble = new ThrowableObjects(this.character.x + this.character.width - 40, this.character.y + 120);
            this.throwableObjects.push(bubble)
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


                    setTimeout(() => {
                        this.level.jelly_fish.splice(index, 1)
                    }, 950);




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
            }



        });


        /*         console.log(this.throwableObjects) */
        this.throwableObjects.forEach(toxicBubble => {

            if (this.character.posionsBar >= 100) {
                this.character.specialBubble = true;
                toxicBubble.specialBubble = true;

            } else {
                this.character.specialBubble = false;
                toxicBubble.specialBubble = false;
            }
        });


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
                } else {
                    this.character.electroHit = false;

                }
            }

        });


    }

    checkCollisionsBarrier() {

        this.level.barrier.forEach((barrier) => {



            if (this.character.isCollidingBarrier(barrier)) {

                this.character.barrierBlock = true;

                console.log('collision with', barrier)

            }

        })

        //Barrier double 
        this.character.isCollidingBarrierDouble(this.level.barrierDouble[0])

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

