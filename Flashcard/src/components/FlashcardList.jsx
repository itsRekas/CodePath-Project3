import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = (props) => {
  const [streak, setStreak] = useState(0);
  const [highestStreak, setHighestStreak] = useState(0);
  const [guess, setGuess] = useState('');
  const [canFilp,setCanFlip] = useState(false);

  const handleSubmit = (e) => {
    setCanFlip(true);
    e.preventDefault();
    const currentAnswer = props.flashcards[props.index].answer.toLowerCase();
    const userGuess = guess.trim().toLowerCase();

    if (userGuess === currentAnswer) {
      setCanFlip(false);
      setStreak(streak + 1);
      setHighestStreak(Math.max(streak + 1, highestStreak));
      props.nextCard();
    } else {
      setStreak(0);
    }
    setGuess('');
  };

  const handleNextButtonClick = () => {
    setCanFlip(false);
    setStreak(0);
    props.nextCard();
  };

  const handleBackButtonClick = () => {
    setCanFlip(true);
    props.lastCard();
  };

  return (
    <>
      <div className='Streak'>
        <div>
          <p>Highest Streak: {highestStreak}</p>
          <p>Current Streak: {streak}</p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder='Enter your Guess'
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Flashcard flashcard={props.flashcards} flip={props.flip} index={props.index} canFlip={canFilp}/>
      <div className='btns'>
        <button className='NextBtn' onClick={handleBackButtonClick}>Back</button>
        <button className='NextBtn' onClick={handleNextButtonClick}>Next</button>
      </div>
      
    </>
  );
};

export default FlashcardList;
