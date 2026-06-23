import React from "react";
import "./style.css";

function Index() {
  const size = 3;
    const { board, getMessage, resetGame, fill } = useTicTacToe(size);
    return (
        <div className='container'>
            <div>
                <div>
                    <div className='header'>Tic Tac Toe Game</div>
                    <div className='player-div'>
                        <div>{getMessage()}</div>
                        <button className='reset-btn' onClick={resetGame}>Reset Game</button>
                    </div>

                </div>
                <div className='board' style={{ gridTemplateColumns: `repeat(${size}, auto)` }}>
                    {board.map((cell, index) => {
                        return <div onClick={() => { fill(index) }} className={"cell" + (cell ? " disabledCell" : "")}>{cell}</div>
                    })}</div>
            </div>
        </div>
    )
}

export default Index;
