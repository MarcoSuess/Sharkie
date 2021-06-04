class Level {
    enemies;
    backgroundObjects;
    barrier;
    level_end_x = 5100;

    constructor(enemies, backgroundObjects, barrier ) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.barrier = barrier;
    }
}