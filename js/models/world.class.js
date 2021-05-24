class World {

    character = new Character();
    enemies = [
        new puffer_fish(),
        new puffer_fish(),
        new puffer_fish(),
        new puffer_fish()

    ]


    backgroundObjects = [
        new backgroundObject('Sprites_Sharkie/3. Background/Layers/5. Water/d1.png', 0),
        new backgroundObject('Sprites_Sharkie/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new backgroundObject('Sprites_Sharkie/3. Background/Layers/2. Floor/D1.png', 0),
        new backgroundObject('Sprites_Sharkie/3. Background/Layers/1. Light/1.png', 0),
        
        
    ]

    canvas;
    ctx;


    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        console.log(this.character)
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectstoMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectstoMap(this.enemies);






        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        })

    }

    addObjectstoMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });

    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }


    



}

