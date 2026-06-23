import React from "react";

function useTicTacToe() {
  const [board, setBoard] = useState(Array(size * size).fill(null));
  const [player, setPlayer] = useState("X");
  const [isWin, setIsWin] = useState(false);

  return <div>useTicTacToe</div>;
}

export default useTicTacToe;
