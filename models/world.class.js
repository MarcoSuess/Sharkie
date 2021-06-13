class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
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
            this.checkCollisions();
        }, 50);
    }

    checkThrowObjects() {

        setTimeout(() => {
            let bubble = new ThrowableObjects(this.character.x + this.character.width - 40, this.character.y + 120);
            this.throwableObjects.push(bubble)
            this.character.atackBubble = false;
        }, 200);



    }

    checkBubble() {
        // filter function einbauen und splice // 
        this.level.enemies.forEach(enemies => {
            this.throwableObjects.forEach(bubble => {
                if (this.character.checkCollisonBubble(enemies, bubble)) {
                    console.log('hit')
                   this.level.enemies[3].bubbleHitDead = true;
                   this.level.enemies[4].bubbleHitDead = true;

                   setTimeout(() => {
                        this.level.enemies.splice(3,0)
                   }, 2000);
                }
            });
        });
    }

    checkCollisions() {
        this.checkCollisionsEnemy();
        this.checkCollisionsBarrier();
        this.checkBubble();
    }

    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('collision with', enemy)
                this.character.hit();
                this.statusBar.setPercentage(this.character.HP)
            }

        })
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
        this.addToMap(this.character)
        this.ctx.translate(-this.camera_x, 0);
        // ------Space for fixed objects -----
        this.addToMap(this.statusBar);
        this.ctx.translate(this.camera_x, 0);


        this.addObjectstoMap(this.level.enemies);


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

