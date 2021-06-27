class World {
    character = new Character();
    endBoss = new Endboss();
    endBossBar = [new Endboss_bar(50, 120), new Endboss_bar(100, 120), new Endboss_bar(150, 120)];
    gameOver = new GameOver();
    gameOverScreen;
    winScreen = new YouWin();
    isWin;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    posionBar = new PosionBar();
    coinsBar = new coins_bar();
    throwableObjects = [];
    throwableObjectsSpecial = [];
    blockPosion;
    stopPosionBarTrigger;
    specialBubble;
    bubble;
    backgroundSound;
    endThemeSound;
    SOUND_BACKGROUND = new Audio('Sprites_Sharkie/sounds/background.mp3');
    SOUND_EndTheme = new Audio('Sprites_Sharkie/sounds/endBossTheme.mp3');
    SOUND_Win = new Audio('Sprites_Sharkie/sounds/win.mp3');
    SOUND_Lose = new Audio('Sprites_Sharkie/sounds/gameOver.mp3');






    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.backgroundMusic();


    };


    setWorld() {

        this.character.world = this;
    }

    run() {




        setInterval(() => {


            this.checkEndScreen();
            this.endRoundAction()
        }, 500);
        setInterval(() => {

            this.checkEndBossIntro();
            this.checkCollisions();
            this.endBossLifeBar();

        }, 50);
       


    }

    backgroundMusic() {
        this.SOUND_BACKGROUND.volume = 0.2;


        this.backgroundSound = setInterval(() => {
            this.SOUND_BACKGROUND.play();
        }, 1000);
    }

    checkEndScreen() {


        if (this.character.checkForLose) {
          
            this.SOUND_BACKGROUND.pause();

            this.gameOverScreen = true;
            this.SOUND_Lose.play();
            this.SOUND_EndTheme.pause();
            clearInterval(this.backgroundSound)
            this.character.checkForLose = false;
        }

        if (this.endBoss.dead && !this.win) {
            this.level.level_end_x = -100;
            this.SOUND_BACKGROUND.pause();
            clearInterval(this.backgroundSound)
            this.SOUND_Win.play();
            clearInterval(this.endThemeSound)
            this.SOUND_EndTheme.pause();
            this.win = true;

        }

    }




    endRoundAction() {

        if (this.endBoss.final && this.character.x <= 1800 && !this.endBoss.otherSide) {
            this.endBoss.otherSide = true;
            this.endBoss.x = 800;

            this.level.posion.push(new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png', 2600, 300),
                new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Right.png', 3622, 260),
                new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png', 4700, 300))

        }

        if (this.endBoss.resetPosion && this.character.x <= 4400) {


            this.newPosion();


        }

    }

    newPosion() {
        this.endBoss.resetPosion = false;
        this.level.posion.push(new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png', 1700, 250),
            new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Right.png', 3622, 260),
            new posion('Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png', 4000, 300))
    }


    endBossLifeBar() {

        this.endBossBar.forEach(lifeBar => {
            lifeBar.endBossX = this.endBoss.x;
            lifeBar.endBossY = this.endBoss.y;
        });


    }

    checkEndBossIntro() {


        if (this.character.x >= 2800) {
            this.endBoss.SOUND_EndBossIsNear.play();
            this.SOUND_BACKGROUND.pause();
        }

        if (this.character.intro) {
            this.endBoss.introReady = true;
        }

        if (this.endBoss.final) {
            this.endBoss.SOUND_EndBossIsNear.pause();
            this.SOUND_BACKGROUND.pause();
            this.SOUND_EndTheme.volume = 0.2
            this.SOUND_EndTheme.play();
        }






    }


    playSpecialBubble(otherDirection) {

        this.character.SOUND_SpecialAtack.volume = 1;

        setTimeout(() => {

            this.character.SOUND_SpecialAtack.play();
            if (this.throwableObjectsSpecial.length <= 0) {
                if (otherDirection) {
                    this.specialBubble = new SpecialBubble(this.character.x - 40, this.character.y + 120, otherDirection);
                } else {
                    this.specialBubble = new SpecialBubble(this.character.x + this.character.width - 40, this.character.y + 120, otherDirection);
                }

                this.throwableObjectsSpecial.push(this.specialBubble)
            }


        }, 200);

        this.stopPosionBarTrigger = setInterval(() => {
            this.blockPosion = true;
            this.posionBar.setPercentage(this.character.posionsBar -= 60)

            if (this.character.posionsBar < 0) {
                this.character.posionsBar = 0;
                this.character.specialBubble = false;
            }

        }, 0);



        setInterval(() => {
        
            if (this.character.posionsBar <= 0) {
                this.blockPosion = false;
                clearInterval(this.stopPosionBarTrigger)
            }
            this.checkSpecialBubble()
            this.spliceEndbossBar()
        }, 200);

    }

    checkSpecialBubble() {
        this.throwableObjectsSpecial.forEach((specialBubble, index) => {
            if (this.character.checkCollisonSpecialBubble(this.endBoss, specialBubble)) {
                this.endBoss.SOUND_Hurt.play();
                this.endBoss.lastHit = new Date().getTime();
                this.endBoss.HP -= 20;
                this.throwableObjectsSpecial.splice(index, 1)


            }


        });




    }

    spliceEndbossBar() {
     
        if (this.endBoss.HP == 80) {
            this.endBossBar.splice(2)
        }
        if (this.endBoss.HP == 60) {
            this.endBossBar.splice(1)
        }
        if (this.endBoss.HP == 40) {
            this.endBoss.dead = true;
            this.endBossBar.splice(0)
        }
    }


    checkThrowObjects(otherDirection) {

        this.character.throwTime = new Date().getTime();
        setTimeout(() => {
            this.character.SOUND_BubbleAtack.play();
            if (otherDirection) {
                this.bubble = new ThrowableObjects(this.character.x - 40, this.character.y + 120, otherDirection);
            } else {
                this.bubble = new ThrowableObjects(this.character.x + this.character.width - 40, this.character.y + 120, otherDirection);
            }

            this.throwableObjects.push(this.bubble)
            this.character.atackBubble = false;

        }, 200);
        setInterval(() => {
            this.checkBubble();
        }, 30);
    }


    checkBubble() {

        this.level.jelly_fish.forEach((jelly_fish, index) => {

            this.throwableObjects.forEach((bubble) => {
                if (bubble.y < -10) {
                    this.throwableObjects.splice(bubble, 1)
                }



                if (this.character.checkCollisonBubble(jelly_fish, bubble) && !jelly_fish.bubbleHitDead) {

                    jelly_fish.bubbleHitDead = true;
                    jelly_fish.AUDIO_Dead.play();
                    this.throwableObjects.splice(bubble, 1)

           
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
        this.checkEndBossAtackRange();



    }


    checkEndBossAtackRange() {
        this.endBoss.character_x = this.character.x;
        this.endBoss.character_y = this.character.y;



        if (this.character.endBossAtackRange(this.endBoss)) {
            this.endBoss.atack = true;
        } else {
            this.endBoss.atack = false;
        }

    }

    checkCollisionsPosion() {

        this.level.posion.forEach((posion, index) => {

            if (this.character.isColliding(posion) && !this.blockPosion) {
                posion.SOUND_PosionCollect.play();


                this.level.posion.splice(index, 1)
                /*  this.throwableObjectsSpecial.splice(0, 1) */

                this.posionBar.setPercentage(this.character.posionsBar += 35)

            }
        });
        if (this.character.posionsBar >= 100 && !this.character.specialBubble) {
            this.posionBar.SOUND_PosionFull.play();

            this.character.specialBubble = true;
        }





    }



    checkCollisionsCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {

                coin.SOUND_COIN.play();
                this.coinsBar.setPercentage(this.character.coins += 10)
                this.level.coins.splice(index, 1)
            }
        });

    }

    checkCollisionSlap() {
        this.level.enemies.forEach((pufferFish, index) => {



            if (this.character.isColliding(pufferFish)) {

                pufferFish.slap = true;
                pufferFish.SOUND_Dead.play();
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

        if (this.character.isCollidingEndBoss(this.endBoss)) {
            this.character.hit();
            this.statusBar.setPercentage(this.character.HP)
        }



    }

    checkCollisionsBarrier() {

        this.level.barrier.forEach((barrier) => {

            this.character.barrierBlock = this.character.isCollidingBarrier(barrier);

            if (this.character.isCollidingBarrier(barrier)) {

                this.character.y -= 10;
                /* 
                                if (this.character.otherDirection) {
                                    this.character.barrierBlockLeft = true;  //  check move left
                                    this.character.barrierBlockRight = false;
                                    this.character.x += 10;
                                    this.character.y -= 10;
                
                                } else {
                                    this.character.barrierBlockRight = true; // check move right
                                    this.character.barrierBlockLeft = false;
                                    this.character.x -= 10;
                                    this.character.y -= 10;
                                }
                
                                if (this.character.otherDirectionUpAndDown) {
                                    this.character.y -= 10;
                                    this.character.barrierBlockDown = true; // check move Down
                                    this.character.barrierBlockUp = false;
                                } else {
                                    this.character.y += 10;
                                    this.character.barrierBlockDown = false;
                                    this.character.barrierBlockUp = true;   // check move Up
                                } */


                

            }

        })

        //Barrier double 
        this.character.isCollidingBarrierDouble(this.level.barrierDouble[0])
        if (this.character.topSideBarrierDouble) {
            this.character.y += 10;
        }
        if (this.character.bottomSideBarrierDouble) {
            this.character.y -= 10;
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
        this.addToMap(this.endBoss)
        if (this.endBoss.final) {
            this.addObjectstoMap(this.endBossBar);
        }



        this.addToMap(this.character)
        this.ctx.translate(-this.camera_x, 0);
        // ------Space for fixed objects -----
        if (this.gameOverScreen) {
            this.addToMap(this.gameOver)
        }

        if (this.endBoss.dead && this.win) {
         
            this.addToMap(this.winScreen)

        }

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

