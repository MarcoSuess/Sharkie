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
    throwableObjects = [];





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
            this.checkBubble();
        }, 50);

        setInterval(() => {
            this.checkCollisions();
        }, 200);
    }

    checkThrowObjects() {

        setTimeout(() => {
            let bubble = new ThrowableObjects(this.character.x + this.character.width - 40, this.character.y + 120);
            this.throwableObjects.push(bubble)
            this.character.atackBubble = false;
        }, 200);



    }

    checkBubble() {


        this.level.jelly_fish.forEach(jelly_fish => {
            this.throwableObjects.forEach(bubble => {


                if (this.character.checkCollisonBubble(jelly_fish, bubble)) {
                    jelly_fish.bubbleHitDead = true;
                    this.throwableObjects.splice(bubble, 1)
                    console.log(jelly_fish)


                    setTimeout(() => {
                        this.level.jelly_fish.splice(jelly_fish, 1)
                    }, 1000);

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
        this.level.posion.forEach(posion => {
            if (this.character.isColliding(posion)) {
                console.log('posion', posion)
                this.posionBar.setPercentage(this.character.posions += 35)
                this.level.posion.splice(posion, 1)
            }
        });
    }



    checkCollisionsCoins() {
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin)) {
                console.log('coin !', coin)
                this.coinsBar.setPercentage(this.character.coins += 10)
                this.level.coins.splice(coin, 1)
            }
        });

    }

    checkCollisionsEnemy() {

        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy)) {
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

