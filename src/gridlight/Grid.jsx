import React from 'react'
import "./style.css";
import Grid from "./Grid";

function Grid() {
  return (
    <div className='container'>
            <div className='content'>
                <div className='header'>Selectable Grid</div>
                <Grid row={10} column={10} />
            </div>
        </div>
  )
}

export default Grid