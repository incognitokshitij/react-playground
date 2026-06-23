import {useState} from "react";

function useTicTacToe(size) {
  const [board, setBoard] = useState(Array(size * size).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWin, setIsWin] = useState(false);

  function getMessage() {
    if (isWin) {
      return "Player " + (player === "X" ? "O" : "X") + " win";
    }
    let anyEmpty = board.some((cell) => !cell);
    if (!anyEmpty) {
      return "Match Draw";
    }

    return "Player " + player + " turn";
  }

  function resetGame() {
    setBoard(Array(size * size).fill(null));
    setPlayer("X");
    setIsWin(false);
  }
  function anyWin(currentBoard, playerTurn) {
    // diagonal
    let d1 = 0,
      d2 = 0;
    for (let i = 0; i < size; i++) {
      if (currentBoard[i * (size + 1)] === playerTurn) d1++;
      if (currentBoard[(i + 1) * (size - 1)] === playerTurn) d2++;
    }
    if (d1 === size || d2 === size) return true;

    // row
    for (let i = 0; i < size; i++) {
      let count = 0;
      for (let j = 0; j < size; j++) {
        if (currentBoard[i * size + j] === playerTurn) count++;
      }
      if (count === size) return true;
    }

    // col
    for (let i = 0; i < size; i++) {
      let count = 0;
      for (let j = 0; j < size; j++) {
        if (currentBoard[j * size + i] === playerTurn) count++;
      }
      if (count === size) return true;
    }

    return false;
  }
  console.log(player);

  function fill(index) {
    if (board[index] || isWin) return;
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    let win = anyWin(newBoard, player);
    setPlayer((prev) => (prev == "X" ? "O" : "X"));
    if (win) {
      setIsWin(true);
      return;
    }
  }

  return { board, getMessage, resetGame, fill };
}

export default useTicTacToe;
