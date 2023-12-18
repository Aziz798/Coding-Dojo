class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            if (target.res<=0){
                console.log(`${target.name} has been defeated!`);
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    checkStats() {
        console.log(`${this.name} stats: power:${this.power} , res: ${this.res}`);
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit) {
            if(this.stat==='resilience'){
                target.res+=this.magnitude;
            }
            else{
                target.power+=this.magnitude;
            }
        }
        else {
            throw new Error("Target must be a unit!");
        }
    }

}

const redBeltNinja= new Unit('Red Belt Ninja',3,3,4);

const blackBeltNinja= new Unit('Black Belt Ninja',4,5,4);

const hardAlgorithm = new Effect('Hard Algorithm',2,'increase target resilience by 3','resilience',3);

const unhandledPromiseRejection=new Effect('Unhandled Promise Rejection',1,"reduce target's resilience by 2",'resilience',-2);

const pairProgramming= new Effect("Pair Programming",3,"	increase target's power by 2",'power',2);

hardAlgorithm.play(redBeltNinja);

unhandledPromiseRejection.play(redBeltNinja);

pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);

redBeltNinja.checkStats();

blackBeltNinja.checkStats();