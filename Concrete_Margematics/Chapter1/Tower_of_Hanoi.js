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