// findPythagoreanTriples(positive integer to start from, max integer to consider, Boolean:whether only primitive triples should be considered, exponent for equation (possible values:2,3));
findPythagoreanTriples(1, 10000, true, 3);
function findPythagoreanTriples(start, chunk_size, checkForPrimitive, exponent) {
    if (start <= 0 || chunk_size < start) throw "Invalid range!";
    if (exponent == 3) console.log("Finding integer solutions for a^3 + b^3 = c^3...bit pointless after they proved Fermat's Last Theorem, isn't it?")
    else console.log("Finding integer solutions for a^2 + b^2 = c^2...")
    notCompleted = true;
    let count = 0;
    while (notCompleted) {
        let list = [];
        for (let a = start; a <= chunk_size; a++) {
            for (let b = start; b <= chunk_size; b++) {
                let c_squared = Math.pow(a, exponent) + Math.pow(b, exponent);
                let c;
                if (exponent == 3) { c = Math.cbrt(c_squared); }
                else { c = Math.sqrt(c_squared); }
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
                        if (!notPrimitive) {
                            count++;
                            console.log(`Found a primitive pythagorean triple, ${a}^2 + ${b}^2 = ${c}^2`)
                        }
                    }
                    else {
                        count++;
                        console.log(`Found a pythagorean triple, ${a}^2 + ${b}^2 = ${c}^2`);
                    }
                }

            }
        }
        notCompleted = false;
    }
    console.log(`Finished after finding ${count} triples.`)
}