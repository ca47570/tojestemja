import React, { useState } from 'react';

export default function Praktyka() {
  const [word1, setWord1] = useState([]);
  const [word2, setWord2] = useState([]);
  const [availableWords, setAvailableWords] = useState([
    'Zmęczenie', 'Smutek', 'Otępienie', 'Lęk', 'Radość'
  ]);

  const correctWords = ['Smutek', 'Lęk', 'Radość'];

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData('word', word);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = (event, target) => {
    const draggedWord = event.dataTransfer.getData('word');

    if (correctWords.includes(draggedWord)) {
      if (target === 'word1' && !word1.includes(draggedWord)) {
        setWord1([...word1, draggedWord]);
      } else if (target === 'word2' && !word2.includes(draggedWord)) {
        setWord2([...word2, draggedWord]);
      }

      // Remove the correct word from the available words list
      setAvailableWords(prevWords => prevWords.filter(word => word !== draggedWord));
    }
  };

  const isAllCorrect = correctWords.every(word => word1.includes(word) || word2.includes(word));

  return (
    <div className="PraktykaApp">
      <h2 className='edu_h2'>Wskaż emocje:</h2>
      <div className="drop-target" onDragOver={handleDragOver} onDrop={event => handleDrop(event, 'word1')}>
        {word1.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <h2 className='edu_h2'>Przeciągnij nazwę z listy poniżej:</h2>
      <div onDragOver={handleDragOver} onDrop={event => handleDrop(event, 'word2')}>
        {word2.map((word, index) => (
          <p key={index}>{word}</p>
        ))}
      </div>
      <div className="words-list">
        {availableWords.map((word, index) => (
          <div key={index} className="word" draggable onDragStart={event => handleDragStart(event, word)}>
            {word}
          </div>
        ))}
      </div>
      {isAllCorrect ? <p>Super! Pozostałe wyrazy to nazwy stanów psychicznych.</p> : null}
    </div>
  );
}
