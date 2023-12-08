//Start of simplified MATLAB clone.
//Created by Patrick Moran.
//06/12/2023.

//Compute determinant function.
const computeDeterminant = array => {
    //Validate user input.
    if (array.length != array[0].length){
        console.log("Error - not a square matrix.");
    }
    //Compute determinant for a 2x2 matrix.
    const nEqualsTwo = twoArray => {
        let localDeterminant = (twoArray[0][0]*twoArray[1][1])-(twoArray[0][1]*twoArray[1][0]);
        return localDeterminant;
    }

            //TEST:
            //let testReturn = nEqualsTwo(array);
            //return testReturn;
    
    //Compute determinant for a nxn matrix.
    const nGreaterTwo = nArray => {
        let determinant;
        if(array.length = 2){
            determinant = nEqualsTwo(nArray);
        } else{
            //CURRENT WORK POINT. Logic to compute expansion of the determinant.
        }
        
        return determinant;
    }
}

//TEST:
//let testArray = [[[10],[23]],
                 //[[74],[105]]];
//The above test structure is the same as [[[00],[01]],[[10],[11]]].
//That is, array[n] contains the rows, and array[n][m] is the data for the row, with [m] changing as the column changes.

//let test = computeDeterminant(testArray);

//console.log(test);