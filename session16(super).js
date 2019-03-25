class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }

    applyDamage(damage) {
        this.hp -= damage;
    }

    attack(enemy) {
        enemy.applyDamage(this.damage);
    }
}

// Từ khóa super được sử dụng để gọi các hàm trên đối tượng cha.

class SuperHero extends Hero {
    constructor(name, hp, damage, lifeSteal) {
        super(name, hp, damage);
        this.lifeSteal = lifeSteal;
    }

    attack(enemy) {
        super.attack(enemy);
        this.hp == 100 ? console.log(`full hp`) : this.hp += this.lifeSteal;
    }
}

let heroA = new SuperHero('A', 98, 10, 2);
let heroB = new Hero('B', 200, 5);

console.log({
    heroA,
    heroB
});

heroA.attack(heroB);

console.log({
    heroA,
    heroB
});