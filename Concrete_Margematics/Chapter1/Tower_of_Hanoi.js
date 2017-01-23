function getNumberOfMoves_Recursion(numberOfDiscs) {
    var numberOfMoves;

    if (numberOfDiscs == 0) {
        numberOfMoves = 0;
    } else {
        numberOfMoves = 2 * (getNumberOfMoves_Recursion(numberOfDiscs - 1)) + 1;
    }
    return numberOfMoves;
}


function getNumberOfMoves_Cycle(numberOfDiscs) {
    var numberOfMoves = 0;

    for (var i = 1; i <= numberOfDiscs; i++) {

        numberOfMoves = 2*numberOfMoves + 1;
    }

    return numberOfMoves;
}

// i (numberOfDiscs) = 1, numberOfMoves = 2*0 + 1 = 1;
// i (numberOfDiscs) = 2, numberOfMoves = 2*1 + 1 = 3;
// i (numberOfDiscs) = 3, numberOfMoves = 2*3 + 1 = 7;
// i (numberOfDiscs) = 4, numberOfMoves = 2*7 + 1 = 15;
// i (numberOfDiscs) = 5, numberOfMoves = 2*1 + 1 = 31;
// i (numberOfDiscs) = 6, numberOfMoves = 2*15 + 1 = 62;
// i (numberOfDiscs) = 7, numberOfMoves = 2*15 + 1 = 127;
// i (numberOfDiscs) = 8, numberOfMoves = 2*15 + 1 = 255;