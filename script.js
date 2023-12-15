//Start of simplified MATLAB clone.
//Created by Patrick Moran.
//06/12/2023.

//Compute determinant function.
const computeDeterminant = array => {
    let determinant;

    //Compute determinant for a 2x2 matrix.
    const nEqualsTwo = twoArray => {
        let localDeterminant = (twoArray[0][0]*twoArray[1][1])-(twoArray[0][1]*twoArray[1][0]);
        return localDeterminant;
    }
    
    //Compute determinant for a 3x3 matrix.
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

    //Compute determinant for a 4x4 matrix.
    const nEqualsFour = fourArray => {
        let localDeterminant = 0;
        let sign = 1;
        let j = 3;
        let cofactorsArray = fourArray.splice(0,1);
        for (let i = 0; i < fourArray.length + 1; i++){
            let mutatedArray = [(fourArray[0].toSpliced(j,1)),(fourArray[1].toSpliced(j,1)),(fourArray[2].toSpliced(j,1))];
            let intDeterminant = nEqualsThree(mutatedArray);
            sign = sign * -1;
            localDeterminant += (sign * cofactorsArray[0][j] * intDeterminant);
            j--;
        }
        return localDeterminant;
    }

    if (array.length == 2){
        //Validate user input.
        if (array.length != array[0].length || array.length != array[1].length){
            console.log("Error - not a square matrix.");
        } else {
            determinant = nEqualsTwo(array);
        }
    } else if (array.length == 3){
        //Validate user input.
        if (array.length != array[0].length || array.length != array[1].length || array.length != array[2].length){
            console.log("Error - not a square matrix.");
        } else {
            determinant = nEqualsThree(array);
        }
    } else if (array.length == 4){
        //Validate user input.
        if (array.length != array[0].length || array.length != array[1].length || array.length != array[2].length || array.length != array[3].length){
            console.log("Error - not a square matrix.");
        } else {
            determinant = nEqualsFour(array);
        }
    }

    return determinant;
}

//Compute inverse of a 2x2 matrix.
const computeInverse = twoArray => {
    let inverse;
    
    //Input validation
    if (twoArray.length != twoArray[0].length || twoArray.length != twoArray[1].length){
        console.log("Error - not a square matrix.");
    } else if (twoArray.length > 2){
        console.log("Error - not a 2x2 matrix.");
    } else {
        inverse = [[(1/computeDeterminant(twoArray)) * twoArray[1][1],(-1/computeDeterminant(twoArray)) * twoArray[0][1]],[(-1/computeDeterminant(twoArray)) * twoArray[1][0],(1/computeDeterminant(twoArray)) * twoArray[0][0]]];
    }
    return inverse;
}

//Compute dot product function.
const computeDot = (arrayOne, arrayTwo) => {
    let dotProduct = new Array(arrayOne.length);                        //Initialise array
    if (arrayOne[0].length != arrayTwo.length){ //ie. If number of columns in arrayOne does not equal number of rows in arrayTwo.
        console.log("Error - Number of columns in first matrix does not equal number of rows in second matrix.")
    } else {
        for(let i = 0; i < arrayOne.length; i++){                       //Row count
            dotProduct[i] = new Array(arrayTwo[0].length);              //Make a new row
            for(let j = 0; j < arrayTwo[0].length; j++){                //Element per row
                dotProduct[i][j] = 0;
                for (let k = 0; k < arrayOne[0].length; k++){           //Term per element
                        dotProduct[i][j] += (arrayOne[i][k] * arrayTwo[k][j]);
                }
            }
        }
    }
    return dotProduct;
}

//TEST:
let testArrayOne = [[1,2],
                    [4,5],
                    [-9,-8]];
let testArrayTwo = [[4,-9,90],
                    [-3,17,76]];
//The above test structure is the same as [[[00],[01]],[[10],[11]]...].
//That is, array[n] contains the rows, and array[n][m] is the data for the row, with [m] changing as the column changes.

let test = computeDot(testArrayOne, testArrayTwo);

console.log(test);