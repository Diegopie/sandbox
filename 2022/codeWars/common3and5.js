function solution(number) {
    
    let sum = 0;

    for (let i = 1; i < number; i++) {
        console.log("Loop Number " + i);
        let three;
        let five;

         // * Check Multiples of 3
        const divide3 = i / 3;
        // console.log("--");
        // console.log(divide3);
        if (Number.isInteger(divide3)) {
            console.log({i});
            three = i;
            console.log({three});
        }
        // * Check Multiples of 5
        const divide5 = i / 5;
        // console.log("--");
        // console.log(divide5);
        if (Number.isInteger(divide5)) {
            console.log({i});
            five = i;
        }

        // * Check if 3 and 5 are the same
        if (three !== five) {
            if (three) {
                sum += three;
            }
            if (five) {
                sum += five
            }
            
        }
        console.log({sum});
    }
    return sum
}

solution(168);