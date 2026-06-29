import React, { useState } from "react";
import "./style.css";

function Index() {
  const N = 9;
  const SkipBox = [4];
  const grids = Array.from({ length: N }, (_, index) => index);
  const [selected, setSelected] = useState([]);

  function deactivateCells() {
    let timer = setInterval(() => {
      setSelected((prevSelected) => {
        const newSelected = [...prevSelected];
        newSelected.pop();
        if (newSelected.length === 0) {
          clearInterval(timer);
        }
        return newSelected;
      });
    }, 300);
  }

  function onClickHandler(index) {
    if (selected.includes(index)) return;
    let newOrder = [...selected, index];
    setSelected(newOrder);
    if (newOrder.length === N - SkipBox.length) {
      deactivateCells();
    }
  }

  return (
    <div className="container">
      <div className="container-view">
        <div className="heading">Grid Light</div>
        <div className="grid-container">
          {grids.map((index) => {
            return (
              <div
                key={index}
                className={`grid ${SkipBox.includes(index) && "hide"} ${
                  selected.includes(index) && "selected"
                }`}
                onClick={() => onClickHandler(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Index;
