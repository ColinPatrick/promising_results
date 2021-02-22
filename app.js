// slowMath.add( 6, 2 )
// .then ((sum) => {
//     console.log(sum);
//     return slowMath.multiply(sum, 2);
// }).then ((product) => {
//     console.log(product);
//     return slowMath.divide(product, 4);
// }).then ((quotient) => {
//     console.log(quotient);
//     return slowMath.subtract(quotient, 3);
// }).then ((difference) => {
//     console.log(difference);
//     return slowMath.add(difference, 98);
// }).then ((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 2);
// }).then ((remainder) => {
//     console.log(remainder);
//     return slowMath.multiply(remainder, 50);
// }).then ((product) => {
//     console.log(product);
//     return slowMath.remainder(product, 40);
// }).then ((remainder) => {
//     console.log(remainder);
//     return slowMath.add(remainder, 32);
// }).then ((sum) => {
//     console.log(`The final result is ${sum}`)
// }).catch ((err) => {
//     console.log("There was an error!");
//     console.log(err);
// });

async function doMath() {
    try {
        let mathResult = await slowMath.add(6, 2);
        console.log(mathResult);
        mathResult = await slowMath.multiply(mathResult, 2);
        console.log(mathResult);
        mathResult = await slowMath.divide(mathResult, 4);
        console.log(mathResult);
        mathResult = await slowMath.subtract(mathResult, 3);
        console.log(mathResult);
        mathResult = await slowMath.add(mathResult, 98);
        console.log(mathResult);
        mathResult = await slowMath.remainder(mathResult, 2);
        console.log(mathResult);
        mathResult = await slowMath.multiply(mathResult, 50);
        console.log(mathResult);
        mathResult = await slowMath.remainder(mathResult, 40);
        console.log(mathResult);
        mathResult = await slowMath.add(mathResult, 32);
        console.log(`The final result is ${mathResult}`);
    } catch (err) {
        console.log("There has been an error!");
        console.log(err);
    };
};

doMath();