import React from 'react';

const Result = ({ term, secretNum }) => {
  let result = '';

  if (term) {
    const guess = parseInt(term, 10);

    if (guess < secretNum) {
      result = 'You guessed Lower';
    } else if (guess > secretNum) {
      result = 'You guessed Higher';
    } else {
      result = '🎉 Yippee, guessed it!';
    }
  }

  return <h3 style={{ marginTop: '20px' }}>{result}</h3>;
};

export default Result;
