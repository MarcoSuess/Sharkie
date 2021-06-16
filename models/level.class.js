class Level {
    enemies;
    backgroundObjects;
    barrierDouble;
    barrier;
    jelly_fish;
    coins;

    level_end_x = 5100;

    constructor(enemies, jelly_fish, backgroundObjects, barrierDouble, barrier, coins) {
        this.enemies = enemies;
        this.backgroundObjects = backgroundObjects;
        this.barrierDouble = barrierDouble;
        this.barrier = barrier;
        this.jelly_fish = jelly_fish;
        this.coins = coins;


    }
}