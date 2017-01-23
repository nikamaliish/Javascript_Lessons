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

// i = 1, numberOfMoves = 2*0 + 1 = 1;
// i = 2, numberOfMoves = 2*1 + 1 = 3;
// i = 3, numberOfMoves = 2*3 + 1 = 7;
// i = 4, numberOfMoves = 2*7 + 1 = 15;
// i = 5, numberOfMoves = 2*15 + 1 = 31;
// i = 6, numberOfMoves = 2*31 + 1 = 62;
// i = 7, numberOfMoves = 2*62 + 1 = 127;
// i = 8, numberOfMoves = 2*127 + 1 = 255;