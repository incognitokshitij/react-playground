import React, { useState, useEffect } from "react";
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

  function handleMouseEnter(cell) {
    if (isDragging) {
      setEndCell(cell);
    }
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  function handleMouseDown(cell) {
    setIsDragging(true);
    setStartCell(cell);
    setEndCell(cell);
  }

  return (
    <div className="grid-container">
      <div className="grid-box">
        {matrix.map((row, i) => (
          <div key={i} className="grid-row">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`grid-cell ${isCellSelected(i, j) ? "selected" : ""}`}
                onMouseDown={() => handleMouseDown(cell)}
                onMouseEnter={() => handleMouseEnter(cell)}
                onMouseUp={handleMouseUp}
              >
                {cell.index}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GridBox;
