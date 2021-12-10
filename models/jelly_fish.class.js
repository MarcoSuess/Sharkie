/**
 *  This Module is for the enemy Jelly Fish.
 * @module jelly_fish
 */
class jelly_fish extends MovableObject {
  startX;
  endX;
  bubbleHitDead;
  electroHit = false;
  AUDIO_Dead = new Audio("Sprites_Sharkie/sounds/enemy/jellyFish_dead.mp3");

  regularDamage = [
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png",
  ];
  superDangerous = [
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png",
  ];
  dead = [
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y1.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y2.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y3.png",
    "Sprites_Sharkie/2.Enemy/2 Jelly fish/Dead/Yellow/y4.png",
  ];

  constructor(x, y, startX, endX) {
    super().loadImage(
      "Sprites_Sharkie/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png"
    );
    this.loadImages(this.regularDamage);
    this.loadImages(this.superDangerous);
    this.loadImages(this.dead);
    this.height = 130;
    this.width = 110;
    this.x = x;
    this.y = y;
    this.startX = startX;
    this.endX = endX;
    this.animate();
    this.move();
  }


  /**
   * This function animate the object.
   */
  animate() {
    setInterval(() => {
      if (this.bubbleHitDead) {
        this.checkDead();
      } else {
        this.playAnimation(this.regularDamage);

        if (this.otherDirection == false) {
          this.playAnimation(this.superDangerous);
          this.electroHit = true;
        } else {
          this.electroHit = false;
        }
      }
    }, 200);
  }

  /**
   * This function set a interval for the move and right animation.
   */
  move() {
    setInterval(() => {
      this.moveRightandLeft();
    }, 300);
  }


  /**
   * This function is for move the object.
   */
  moveRightandLeft() {
    if (this.x <= this.endX) {
      this.moveRight();
      this.y += 5;

      this.otherDirection = true;
    } else if (this.x >= this.startX) {
      this.moveLeft();
      this.y -= 5;
      this.otherDirection = false;
    }
  }


  /**
   * This function check the dead.
   */
  checkDead() {
    setInterval(() => {
      this.playAnimation(this.dead, 3);
      this.height -= 3;
      this.width -= 3;
    }, 100);
  }
}
