import React, { useState , useEffect} from "react";
import "./style.css";

function GridBox(props) {
  const { row, column } = props;
  const [matrix, setMatrix] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);

  useEffect(() => {
    let count = 1;
    const newMatrix = Array.from({ length: row }, (_, i) =>
      Array.from({ length: column }, (_, j) => ({
        position: { i, j },
        index: count++,
      })),
    );
    setMatrix(newMatrix);
  }, [row, column]);

  function isCellSelected(i, j) {
    if (!startCell || !endCell) return false;
    const minRow = Math.min(startCell.position.i, endCell.position.i);
    const maxRow = Math.max(startCell.position.i, endCell.position.i);
    const minCol = Math.min(startCell.position.j, endCell.position.j);
    const maxCol = Math.max(startCell.position.j, endCell.position.j);
    return i >= minRow && i <= maxRow && j >= minCol && j <= maxCol;
  }

  return <div></div>;
}

export default GridBox;
