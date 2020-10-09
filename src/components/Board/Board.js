import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {
  const v = props.tiles.map((tile) => (<Tile {...tile} />))

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' style={gridConfig}>
      {v}
    </div>
  )
}

export default Board
