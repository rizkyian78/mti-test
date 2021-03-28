function compareTriplets(a, b) {
    // let alice = 0;
    // let bob = 0;
    // for(let i = 0; i < a.length; i++) {
    //         if(a[i] > b[i]) {
    //             alice++;
    //         } else if(a[i]< b[i]) {
    //             bob++;
    //         }
    // }
    return ``;
}

const result = (testStudent, testCase) => testStudent === testCase

    console.log(result(compareTriplets([
        5, 6, 7], [3,6,10]), `Draw`))

    console.log(result(compareTriplets([
        5, 6, 7], [7,6,10]), `Bob Win With Score: 2`))

    console.log(result(compareTriplets([
        10, 12, 7], [9,6,6]), `Alice Win With Perfect Score`))
        
    console.log(result(compareTriplets([
        13, 12, 7], [7,6,10]), `Alice Win bypoint`))