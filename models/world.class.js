/**
 * This Module is for all objects.
 * @module World
 */
class World {
  character = new Character();
  endBoss = new Endboss();
  endBossBar = [
    new Endboss_bar(50, 120),
    new Endboss_bar(100, 120),
    new Endboss_bar(150, 120),
  ];
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
  musicVolumetoGame;
  soundVolumetoGame;

  SOUND_BACKGROUND = new Audio("Sprites_Sharkie/sounds/background.mp3");
  SOUND_EndTheme = new Audio("Sprites_Sharkie/sounds/endBossTheme.mp3");
  SOUND_Win = new Audio("Sprites_Sharkie/sounds/win.mp3");
  SOUND_Lose = new Audio("Sprites_Sharkie/sounds/gameOver.mp3");

  constructor(canvas, keyboard, soundVolumetoGame, musicVolumetoGame) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.musicVolumetoGame = musicVolumetoGame;
    this.soundVolumetoGame = soundVolumetoGame;
    this.draw();
    this.setWorld();
    this.run();
    this.backgroundMusic();
  }

  /**
   * declare the sounds.
   */
  setSoundVolume() {
    this.level.jelly_fish.forEach((jelly_fish) => {
      this.level.enemies.forEach((pufferFish) => {
        this.setSoundEnemys(jelly_fish, pufferFish);
        this.setSoundCharacter();

        this.SOUND_Win.volume = this.soundVolumetoGame;
        this.SOUND_Lose.volume = this.soundVolumetoGame;
      });
    });
  }

  /**
   * declare the sounds for character.
   */
  setSoundCharacter() {
    this.character.SOUND_SpecialAtack.volume = this.soundVolumetoGame;
    this.character.SOUND_BubbleAtack.volume = this.soundVolumetoGame;
    this.character.SOUND_SpecialAtack.volume = this.soundVolumetoGame;
    this.character.SOUND_Slap.volume = this.soundVolumetoGame;
    this.character.SOUND_SWIM.volume = this.soundVolumetoGame;
    this.character.SOUND_ElectroDead.volume = this.soundVolumetoGame;
    this.character.SOUND_DEAD.volume = this.soundVolumetoGame;
    this.character.SOUND_Sleep.volume = this.soundVolumetoGame;
    this.character.SOUND_Hurt.volume = this.soundVolumetoGame;
  }

  /**
   * declare the sounds for all Enemys.
   *
   * @param {Object} jelly_fish - This is the object for declare the audio sound.
   * @param {Object} pufferFish -  This is the object for declare the audio sound.
   */
  setSoundEnemys(jelly_fish, pufferFish) {
    jelly_fish.AUDIO_Dead.volume = this.soundVolumetoGame;
    pufferFish.SOUND_Dead.volume = this.soundVolumetoGame;
    this.endBoss.SOUND_Atack.volume = this.soundVolumetoGame;
    this.endBoss.SOUND_Dead.volume = this.soundVolumetoGame;
    this.endBoss.SOUND_Hurt.volume = this.soundVolumetoGame;
    this.endBoss.SOUND_Intro.volume = this.soundVolumetoGame;
  }

  /**
   * This function delcare the Music volume.
   */
  setMusicVolume() {
    this.SOUND_BACKGROUND.volume = this.musicVolumetoGame;
    this.SOUND_EndTheme.volume = this.musicVolumetoGame;
    this.endBoss.SOUND_EndBossIsNear.volume = this.musicVolumetoGame;
  }

  /**
   * This function set the difference to become the world.
   */
  setWorld() {
    this.character.world = this;
  }

  /**
   * This function run the interval to check some actions.
   */
  run() {
    setInterval(() => {
      this.checkEndScreen();
      this.endRoundAction();
      this.setSoundVolume();
      this.setMusicVolume();
    }, 500);
    this.endThemeSound = setInterval(() => {
      this.checkEndBossIntro();
      this.checkCollisions();
      this.endBossLifeBar();
    }, 50);
  }

  /**
   * This function run the background music in a interval.
   */
  backgroundMusic() {
    this.backgroundSound = setInterval(() => {
      this.SOUND_BACKGROUND.play();
    }, 1000);
  }

  /**
   * This function check The end screen.
   */
  checkEndScreen() {
    if (this.character.checkForLose) {
      this.SOUND_BACKGROUND.pause();
      this.gameOverScreen = true;
      this.SOUND_Lose.play();
      this.SOUND_EndTheme.pause();
      clearInterval(this.backgroundSound);
      this.character.checkForLose = false;
    } else if (this.endBoss.dead && !this.win) {
      this.level.level_end_x = -100;
      this.SOUND_BACKGROUND.pause();
      clearInterval(this.backgroundSound);
      this.SOUND_Win.play();
      clearInterval(this.endThemeSound);
      this.SOUND_EndTheme.pause();
      this.win = true;
    }
  }

  /**
   * This function change the coordinates for the endboss and posions in the Final Round.
   */
  endRoundAction() {
    if (
      this.endBoss.final &&
      this.character.x <= 1800 &&
      !this.endBoss.otherSide
    ) {
      this.endBoss.otherSide = true;
      this.endBoss.x = 900;
      this.setPosion();
    }

    if (this.endBoss.resetPosion && this.character.x <= 4400) {
      this.newPosion();
    }
  }

  /**
   * This function generate new Posions
   */
  setPosion() {
    this.level.posion.push(
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png",
        2600,
        300
      ),
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Right.png",
        3622,
        260
      ),
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png",
        4700,
        300
      )
    );
  }

  /**
   * This function generate new Posions
   */
  newPosion() {
    this.endBoss.resetPosion = false;
    this.level.posion.push(
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png",
        1700,
        250
      ),
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Right.png",
        3622,
        260
      ),
      new posion(
        "Sprites_Sharkie/4. Marcadores/Posión/Dark - Left.png",
        4000,
        300
      )
    );
  }

  /**
   * This function navigate the Endboss life bar.
   */
  endBossLifeBar() {
    this.endBossBar.forEach((lifeBar) => {
      lifeBar.endBossX = this.endBoss.x;
      lifeBar.endBossY = this.endBoss.y;
    });
  }

  /**
   * This function check the Endboss intro.
   */
  checkEndBossIntro() {
    if (this.character.x >= 2800) {
      this.endBoss.SOUND_EndBossIsNear.play();
      this.SOUND_BACKGROUND.pause();
      clearInterval(this.backgroundSound);
    }
    if (this.character.intro) {
      this.endBoss.introReady = true;
    }
    if (this.endBoss.final) {
      this.endBoss.SOUND_EndBossIsNear.pause();
      this.SOUND_BACKGROUND.pause();
      this.SOUND_EndTheme.play();
    }
  }

  /**
   * This function play the special Bubble.
   *
   * @param {boolean} otherDirection - This is the direction for moving.
   */
  playSpecialBubble(otherDirection) {
    setTimeout(() => {
      this.character.SOUND_SpecialAtack.play();
      if (this.throwableObjectsSpecial.length <= 0) {
        if (otherDirection) {
          this.specialBubble = new SpecialBubble(
            this.character.x - 40,
            this.character.y + 120,
            otherDirection
          );
        } else {
          this.specialBubble = new SpecialBubble(
            this.character.x + this.character.width - 40,
            this.character.y + 120,
            otherDirection
          );
        }
        this.throwableObjectsSpecial.push(this.specialBubble);
      }
    }, 200);
    this.stopPosionBarAnimaton();
  }

  /**
   * This function play and stop the Posion bar Animation.
   */
  stopPosionBarAnimaton() {
    this.stopPosionBarTrigger = setInterval(() => {
      this.blockPosion = true;
      this.posionBar.setPercentage((this.character.posionsBar -= 60));
      if (this.character.posionsBar < 0) {
        this.character.posionsBar = 0;
        this.character.specialBubble = false;
      }
    }, 0);
    setInterval(() => {
      if (this.character.posionsBar <= 0) {
        this.blockPosion = false;
        clearInterval(this.stopPosionBarTrigger);
      }
      this.checkSpecialBubble();
      this.spliceEndbossBar();
    }, 200);
  }

  /**
   * This function check the collision for the special Bubble.
   */
  checkSpecialBubble() {
    this.throwableObjectsSpecial.forEach((specialBubble, index) => {
      if (
        this.character.checkCollisonSpecialBubble(this.endBoss, specialBubble)
      ) {
        this.endBoss.SOUND_Hurt.play();
        this.endBoss.lastHit = new Date().getTime();
        this.endBoss.HP -= 20;
        this.throwableObjectsSpecial.splice(index, 1);
      }
    });
  }

  /**
   * This function splice the EndBoss bar
   */
  spliceEndbossBar() {
    if (this.endBoss.HP == 80) {
      this.endBossBar.splice(2);
    }
    if (this.endBoss.HP == 60) {
      this.endBossBar.splice(1);
    }
    if (this.endBoss.HP == 40) {
      this.endBoss.dead = true;
      this.endBossBar.splice(0);
    }
  }

  /**
   * This function check the Throw objects for collision.
   *
   * @param {boolean} otherDirection - This is the direction from the Throw object.
   */
  checkThrowObjects(otherDirection) {
    this.character.throwTime = new Date().getTime();
    setTimeout(() => {
      this.character.SOUND_BubbleAtack.play();
      if (otherDirection) {
        this.bubble = new ThrowableObjects(
          this.character.x - 40,
          this.character.y + 120,
          otherDirection
        );
      } else {
        this.bubble = new ThrowableObjects(
          this.character.x + this.character.width - 40,
          this.character.y + 120,
          otherDirection
        );
      }
      this.throwableObjects.push(this.bubble);
      this.character.atackBubble = false;
    }, 200);
    setInterval(() => {
      this.checkBubble();
    }, 30);
  }

  /**
   * This function check The bubble for collision.
   */
  checkBubble() {
    this.level.jelly_fish.forEach((jelly_fish, index) => {
      this.throwableObjects.forEach((bubble) => {
        if (bubble.y < -10) {
          this.throwableObjects.splice(bubble, 1);
        } else if (
          this.character.checkCollisonBubble(jelly_fish, bubble) &&
          !jelly_fish.bubbleHitDead
        ) {
          jelly_fish.bubbleHitDead = true;
          jelly_fish.AUDIO_Dead.play();
          this.throwableObjects.splice(bubble, 1);
          setTimeout(() => {
            this.level.jelly_fish.splice(index, 1);
          }, 850);
        }
      });
    });
  }

  /**
   * This function check The many collisions.
   */
  checkCollisions() {
    this.checkCollisionsEnemy();
    this.checkCollisionsBarrier();
    this.checkCollisionsCoins();
    this.checkCollisionsPosion();
    this.checkEndBossAtackRange();
  }

  /**
   * This function check the atack range from the Endboss
   */
  checkEndBossAtackRange() {
    this.endBoss.character_x = this.character.x;
    this.endBoss.character_y = this.character.y;
    if (this.character.endBossAtackRange(this.endBoss)) {
      this.endBoss.atack = true;
    } else {
      this.endBoss.atack = false;
    }
  }

  /**
   * This function check the collisions for the posions.
   */
  checkCollisionsPosion() {
    this.level.posion.forEach((posion, index) => {
      if (this.character.isColliding(posion) && !this.blockPosion) {
        posion.SOUND_PosionCollect.play();
        this.level.posion.splice(index, 1);
        this.posionBar.setPercentage((this.character.posionsBar += 35));
      }
    });
    if (this.character.posionsBar >= 100 && !this.character.specialBubble) {
      this.posionBar.SOUND_PosionFull.play();
      this.character.specialBubble = true;
    }
  }

  /**
   * This function check the collisions for the Coins
   */
  checkCollisionsCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        coin.SOUND_COIN.play();
        this.coinsBar.setPercentage((this.character.coins += 10));
        this.level.coins.splice(index, 1);
      }
    });
  }

  /**
   * This function check the collisions from the Slap atack .
   */
  checkCollisionSlap() {
    this.level.enemies.forEach((pufferFish, index) => {
      if (this.character.isColliding(pufferFish) && !pufferFish.slap) {
        pufferFish.slap = true;
        pufferFish.SOUND_Dead.play();
        setTimeout(() => {
          this.level.enemies.splice(index, 1);
        }, 400);
      } else {
        pufferFish.slap = false;
      }
    });
  }

  /**
   * This function check the collisions for all enemy's .
   */
  checkCollisionsEnemy() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy) && !enemy.otherDirection) {
        this.character.electroHit = false;
        this.character.hit();
        this.statusBar.setPercentage(this.character.HP);
      }
    });
    this.checkCollisionJellyFish();
    if (this.character.isCollidingEndBoss(this.endBoss)) {
      this.character.hit();
      this.statusBar.setPercentage(this.character.HP);
    }
  }

  /**
   * This function check the collisions for jelly fish .
   */
  checkCollisionJellyFish() {
    this.level.jelly_fish.forEach((jelly_fish) => {
      if (this.character.isColliding(jelly_fish) && !jelly_fish.bubbleHitDead) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.HP);

        if (jelly_fish.electroHit) {
          this.character.electroHit = true;
          this.statusBar.setPercentage((this.character.HP = 0));
        } else {
          this.character.electroHit = false;
        }
      }
    });
  }

  /**
   * This function check the collisions for the barrier.
   */
  checkCollisionsBarrier() {
    this.level.barrier.forEach((barrier) => {
      this.character.barrierBlock = this.character.isCollidingBarrier(barrier);

      if (this.character.isCollidingBarrier(barrier)) {
        this.character.y -= 20;
      }
    });

    //Barrier double
    this.character.isCollidingBarrierDouble(this.level.barrierDouble[0]);
    if (this.character.topSideBarrierDouble) {
      this.character.y += 10;
    }
    if (this.character.bottomSideBarrierDouble) {
      this.character.y -= 10;
    }
  }

  /**
   * This function draw all objects.
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    this.addObjectstoMap(this.level.backgroundObjects);
    this.addObjectstoMap(this.level.barrierDouble);
    this.addObjectstoMap(this.level.barrier);
    this.addObjectstoMap(this.level.coins);
    this.addObjectstoMap(this.level.posion);
    this.addToMap(this.endBoss);

    if (this.endBoss.final) {
      this.addObjectstoMap(this.endBossBar);
    }

    this.addToMap(this.character);
    this.ctx.translate(-this.camera_x, 0);
    // ------Space for fixed objects -----
    if (this.gameOverScreen) {
      this.addToMap(this.gameOver);
      clearInterval(this.endThemeSound);
    }

    if (this.endBoss.dead && this.win) {
      this.addToMap(this.winScreen);
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

    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * This function add the objects to the canvas.
   *
   * @param {Object} objects  - this the object to draw to the canvas.
   */
  addObjectstoMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /**
   * This function draw the object to the canvas and check the direction.
   *
   * @param {Object} mo  - this the object to draw to the canvas.
   */
  addToMap(mo) {
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }
    mo.draw(this.ctx);

    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
