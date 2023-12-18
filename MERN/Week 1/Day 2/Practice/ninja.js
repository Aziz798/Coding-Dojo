class Ninja{
    constructor(name){
        this.name=name;
        this.health=90;
        this.speed=3;
        this.stregth=3;
    }
    sayName(){
        console.log(`Ninja name : ${this.name}`);
    }
    showStats(){
        console.log(`${this.ninja}'s strength: ${this.stregth} , speed: ${this.speed} , and health: ${this.health}`);
    }
    drinShake(){
        this.health+=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinShake();
ninja1.showStats();

