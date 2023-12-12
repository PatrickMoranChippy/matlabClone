//Start of simplified MATLAB clone.
//Created by Patrick Moran.
//06/12/2023.

//Compute determinant function.
const computeDeterminant = array => {
    //Validate user input.
    if (array.length != array[0].length){
        console.log("Error - not a square matrix.");
    }

    let determinant;

    //Compute determinant for a 2x2 matrix.
    const nEqualsTwo = twoArray => {
        let localDeterminant = (twoArray[0][0]*twoArray[1][1])-(twoArray[0][1]*twoArray[1][0]);
        return localDeterminant;
    }
    
    //Compute determinant for a nxn matrix.
    const nEqualsThree = threeArray => {
        let localDeterminant = 0;
        let sign = -1;
        let j = 2;
        let cofactorsArray = threeArray.splice(0,1);    //Preserves the first row for future calculation. Mutates input array to a 2x3.
        for (let i = 0; i < threeArray.length + 1; i++){
            let mutatedArray = [(threeArray[0].toSpliced(j,1)),(threeArray[1].toSpliced(j,1))];
            let intDeterminant = nEqualsTwo(mutatedArray);
            sign = sign * -1;
            localDeterminant += (sign * cofactorsArray[0][j] * intDeterminant);
            j--;
        }
        return localDeterminant;
    }
    if (array.length == 2){
        determinant = nEqualsTwo(array);
    } else if (array.length == 3){
        determinant = nEqualsThree(array);
    }

    return determinant;
}

//TEST:
let testArray = [[1,2,5],
                [4,5,3],
                [7,2,8]];
//The above test structure is the same as [[[00],[01]],[[10],[11]]].
//That is, array[n] contains the rows, and array[n][m] is the data for the row, with [m] changing as the column changes.

let test = computeDeterminant(testArray);

console.log(test);