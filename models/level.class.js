class Level {
    enemies;
    backgroundObjects;
    barrierDouble;
    barrier;
    level_end_x = 5100;

    constructor(enemies, backgroundObjects, barrierDouble, barrier) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.barrierDouble = barrierDouble;
        this.barrier = barrier;

    }
}