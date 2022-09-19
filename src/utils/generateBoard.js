import { Col } from 'react-bootstrap';

export default function generateBoard(size, onClick){
  const elements = [];

  for(let i = 0; i < size; i++){
    elements.push([]);
    for(let j = 0; j < size; j++){
      elements[i].push(
       	<Col key={`${i+1} ${j+1}`} className="tile p-0" onClick={onClick}>
          {/*<p> Test </p>*/}
        </Col>
      );
    }
  }
  return elements;
}