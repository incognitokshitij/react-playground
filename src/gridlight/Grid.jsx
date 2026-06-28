import React, { useState } from "react";
import "./style.css";

function GridBox() {
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
                index: count++
            }))
        );
        setMatrix(newMatrix);
    }, [row, column]);
  return <div></div>;
}

export default GridBox;
