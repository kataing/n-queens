/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  for(var i = 0; i < n; i++) {
    for(var j= 0; j < n; j++) {
      solution.togglePiece(i, j);
      if(solution.hasAnyRooksConflicts()) {
        solution.togglePiece(i,j);
      } 
    }
  } 

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = n;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n: n});
  var row = 0;
  var col = 0;
  
  function helper() {

    if(n <= 0) {
      return solution;
    }
    
    var queenCount = 0;
    solution.togglePiece(row, col);
    queenCount++;

    for(var i = 0; i < n; i++) {
      for(var j= 0; j < n; j++) {
        if (solution.get(i)[j] !== 1) {
          solution.togglePiece(i,j);
          queenCount++;
        }
        
        if(solution.hasAnyQueensConflicts()) {
          solution.togglePiece(i,j);
          queenCount--;
        }
      }
    }
    
    if(queenCount !== n) {
      solution = new Board({n: n});
      if(col === n-1) {
        row ++;
        col = 0;
      } else {
        col++;
      }
      if(row < n && col < n) {
        helper();
      }
    }

  }
  helper();
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
