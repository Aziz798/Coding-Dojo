var superHeros=['spiderman','batman','jedi']; //Global scop variable

function printHero(list){
    //list block scope variable : can be seen only inside the function
    console.log(list[0]);
};

printHero(superHeros);
console.log("*********");

for (var i=0;i<superHeros.length;i++){
    var hero=superHeros[i];
    console.log(hero);
};