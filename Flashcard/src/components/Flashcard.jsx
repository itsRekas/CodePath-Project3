import React, { useState } from 'react';

const Flashcard = (props) => {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div onClick={() => props.canFlip ? setFlip(!flip) : ""} className={`card ${flip ? "flip" : ""}`}>
        <div className='front'>
          {props.flashcard[props.index].question}
        </div>
        <div className='back'>
          {props.flashcard[props.index].answer}
        </div>
      </div>
    </>
  );
};

export default Flashcard;
