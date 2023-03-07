var ticTacToe = (function() {

    const blocks        = document.getElementsByClassName("grid-block");
    const vsAISlider    = document.getElementsByClassName("slider");
    let vsAI    = true;
    player1Turn = true;

    render();

    function render() {
        setGridButtonFunctionality();
        setVsButtonFunctionality();
    }

    function setGridButtonFunctionality() {
        for (let i = 0; i < blocks.length; i++) {
            blocks[i].addEventListener("click", function() {
                setMarker(blocks[i]);
            })
        }
    } 

    function setMarker(block) {
        if (vsAI) {
            block.textContent = "X";
        } else if (player1Turn) {
            block.textContent = "X";
            player1Turn = false;
        } else {
            block.textContent = "O";
        }
    }

    function setVsButtonFunctionality() {
        vsAISlider[0].addEventListener("click"), function() {
            vsAI = false;
        }
    }

})();