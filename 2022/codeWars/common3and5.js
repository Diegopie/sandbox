function solution(number) {
    
    let sum = 0;

    for (let i = 1; i < number; i++) {
        const divide3 = i / 3;
        // console.log("--");
        // console.log(divide3);
        if (Number.isInteger(divide3)) {
            console.log({i});
            sum += i
        }
        const divide5 = i / 5;
        // console.log("--");
        // console.log(divide5);
        if (Number.isInteger(divide5)) {
            console.log({i});
            sum += i
        }
        console.log(sum);
    }
    return sum
}

solution(10);