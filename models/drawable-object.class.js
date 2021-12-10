
/**
 * This module is fora all drawable objects.
 * @module DrawableObject
 */
class DrawableObject {
  img;
  imageCache = {};
  currentImage = 0;
  x = 30;
  y = 100;
  height = 150;
  width = 100;

  /**
   * This function declare the img. 
   * 
   * @param {string} path - this is the path from the img. 
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }


/**
 * This function iterate the images.
 * 
 * @param {array} arr - this is the array from images. 
 */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }


  /**
   * this function draw the object.
   * 
   * @param {object} ctx - this is the object. 
   */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /*    drawFrame(ctx) {

        if (this instanceof Character || this instanceof puffer_fish || this instanceof Endboss ||
            this instanceof barrier || this instanceof jelly_fish || this instanceof ThrowableObjects) {
            //border for collision
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red'
            ctx.rect(this.x, this.y, this.width, this.height)
            ctx.stroke();
        }
    } */


  /**
   * This function check the percentage and return the index for the image.
   * 
   * @param {integer} percentage  
   * @returns - index
   */  
  resolveImageIndex(percentage) {
    if (percentage >= 100) {
      return 5;
    } else if (percentage > 80) {
      return 4;
    } else if (percentage > 60) {
      return 3;
    } else if (percentage > 40) {
      return 2;
    } else if (percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
