// findPythagoreanTriples(positive integer to start from, max integer to consider, whether only primitive triples should be considered);
findPythagoreanTriples(1, 100, true);
function findPythagoreanTriples(start, chunk_size, checkForPrimitive) {
    if (start <= 0 || chunk_size < start) throw "Invalid range!";
    console.log("Finding solutions for a^2+b^2 = c^2...")
    notCompleted = true;
    while (notCompleted) {
        let list = [];
        for (let a = start; a <= chunk_size; a++) {
            for (let b = start; b <= chunk_size; b++) {
                let c_squared = Math.pow(a, 2) + Math.pow(b, 2);
                let c = Math.sqrt(c_squared);
                if (c % 1 == 0) {
                    if (list.includes(c)) continue;
                    list.push(c);
                    if (checkForPrimitive) {
                        let notPrimitive = false;
                        for (j = c - 1; j > 1; j--) {
                            if (a % j == 0 && b % j == 0 && c % j == 0) {
                                notPrimitive = true;
                                continue;
                            }
                        }
                        if (!notPrimitive) console.log(`Found a primitive pythagorean triple, ${a}^2 + ${b}^2 = ${c}^2`)
                    }
                    else {
                        console.log(`Found a pythagorean triple, ${a}^2 + ${b}^2 = ${c}^2`);
                    }
                }

            }
        }
        notCompleted = false;
    }
}