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
        console.log(`${this.name}'s strength: ${this.stregth} , speed: ${this.speed} , and health: ${this.health}`);
    }
    drinShake(){
        this.health+=10;
    }
}
class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health=200;
        this.speed=10;
        this.wisdom=10;
    }
    speakWisdom(){
        super.drinShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();