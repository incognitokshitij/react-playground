import React, { useState } from "react";
import "./style.css";

function GridBox() {
  const { row, column } = props;
  const [matrix, setMatrix] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState(null);
  const [endCell, setEndCell] = useState(null);
  return <div></div>;
}

export default GridBox;
