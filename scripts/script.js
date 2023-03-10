var ticTacToe = (function() {

    const blocks        = document.getElementsByClassName("grid-block");
    const vsAISlider    = document.querySelector(".slider");
   
    let vsAI    = true;
    let player1Turn = true;
   
    const board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    const emptyBlock         = 0;
    const player1       = 1;
    const player2OrAI   = 2;
    const winStreak     = 3;

    _render();

    function _render() {
        _setGridButtonFunctionality();
        _setVsButtonFunctionality();
    }

    function _setGridButtonFunctionality() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener("click", function() {
                _setMarker(blocks[i], i);
            })
        }
    } 

    function clearGrid() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].textContent = "";
        }
    }
    

    function _setMarker(block, index) {
        if (vsAI) {
            if (board[index] === emptyBlock) {
                block.textContent = "X";
                board[index] = 1;
                _aiTurn();
                console.log(board);
            }

        } else if (player1Turn) {
            if (board[index] === emptyBlock) {
                block.textContent = "X";
                board[index] = 1;
                player1Turn = false;
            }

        } else {
            block.textContent = "O";
            player1Turn = true;
        }
    }

    function _setVsButtonFunctionality() {
        vsAISlider.addEventListener("click", function() {
            console.log("clicked");

            if (vsAI) {
                vsAI = false;
            } else {
                vsAI = true;
            }

            clearGrid();
        })
    }

    function _aiTurn() {

    }

    function _minMax() {

    }

    function _isGameWon() {
        
    }

    // Logic needs adjusting
    function _isLineWon(index1, index2, index3) {
        if ((board[index1] + board[index2] + board[index3]) === winStreak) {
            return true;
        }s

        return false;
    }

    return {
        clearGrid : clearGrid,

    }

})();