
Number.prototype.isPrime = function () {
    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}
//Optimized time
Number.prototype.isPrime = function () {
    if (this <= 1) {
        return false;
    }
    if (this <= 3) {
        return true;
    }
    if (this % 2 === 0 || this % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= this; i += 6) {
        if (this % i === 0 || this % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}
//****************************************************************************************************************** 
// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);
//iterative takes less time 

//****************************************************************************************************************** 

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
let reversed2 = ""
for (let i = story.length; i >= 0; i--) {
    reversed2 += story[i]
}
