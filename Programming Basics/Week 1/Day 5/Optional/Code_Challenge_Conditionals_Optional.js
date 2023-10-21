function rewardYourself() {
    var now = new Date();
    var hours = now.getHours();

    if (hours < 10) {
        console.log("Enjoy a latte!");
    } else if (hours >= 10 && hours < 15) {
        console.log("Treat yourself to a hot chocolate!");
    } else if (hours >= 15 && hours < 18){
        if (hours % 2 === 0) {
            var evenOptions = ["ice cream", "cookies", "candy"];
            var selectedOption = getRandomOption(evenOptions);
            console.log(`Savor some ${selectedOption}!`);
        } else {
            var oddOptions = ["hot chocolate", "tea", "cake"];
            var selectedOption = getRandomOption(oddOptions);
            console.log(`Treat yourself to some ${selectedOption}!`);
        }
    } else if (hours >= 18 && hours < 22) {
        console.log("Savor some ice cream!");
    } else {
        console.log("It's time to sleep, no more treats for now.");
    }
}

rewardYourself();
