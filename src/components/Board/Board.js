import './Board.css';
import { Row } from 'react-bootstrap';
import generateBoard from '../../utils/generateBoard.js'

function Board({size}){

  const onClickGrid = (row, col) => {
    console.log("masuk bos");
  }
  const board = generateBoard(size, onClickGrid);
  return (
    <>
      <div className="game-board">
        {board.map((index, rowIndex = 1) => (
        <Row key={rowIndex}> 
          {index}
        </Row>))}
      </div>
    </>    
  )
}

export default Board;