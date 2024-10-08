import React, { useState } from 'react';
import './App.css';
import FlashcardList from './components/FlashcardList';

function App() {
  const [flashcards, setFlashcards] = useState(FLASHCARDS);
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const lastCard = () => {
    setIndex((prevIndex) => (prevIndex - 1)>=0? (prevIndex - 1) : flashcards.length-1);
  };

  return (
    <div className='Home'>
      <div>
        <h1>Riddle Time</h1>
        <h2>Want to get tested on your mind power? Answer these 10 riddles...</h2>
      </div>
      <div className='Cover'>
        <FlashcardList flashcards={flashcards} flip={true} index={index} nextCard={nextCard} lastCard={lastCard}/>
      </div>
    </div>
  );
}

const FLASHCARDS = [
  {
    question: 'Why don’t skeletons fight each other?',
    answer: 'They don’t have the guts.',
  },
  {
    question: 'What has keys but can’t open locks?',
    answer: 'A piano.',
  },
  {
    question: 'What is always in front of you but can’t be seen?',
    answer: 'The future.',
  },
  {
    question: 'What has many teeth but can’t bite?',
    answer: 'A comb.',
  },
  {
    question: 'What has one eye but can’t see?',
    answer: 'A needle.',
  },
  {
    question: 'Why did the scarecrow win an award?',
    answer: 'Because he was outstanding in his field.',
  },
  {
    question: 'What can travel around the world while staying in the corner?',
    answer: 'A stamp.',
  },
  {
    question: 'Why can’t your nose be 12 inches long?',
    answer: 'Because then it would be a foot.',
  },
  {
    question: 'What’s orange and sounds like a parrot?',
    answer: 'A carrot.',
  },
  {
    question: 'Why can’t Elsa from Frozen have a balloon?',
    answer: 'Because she will let it go.',
  }
];

export default App;
