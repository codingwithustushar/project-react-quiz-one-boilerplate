import React from 'react';

export default class QuizComponent extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="quiz-box">
          <h1>Question</h1>
          <p className='current-number'>1 of 15</p>
          <h3 className='question-text'>Which is the only mammal that can jump? </h3>
          <div className="options">
            <button>Dog</button>
            <button>Elephant</button>
            <button>Goat</button>
            <button>Lion</button>
          </div>
          <div className="change-page">
            <button className='previous-btn'>Previous</button>
            <button className='next-btn'>Next</button>
            <button className='quit-btn'>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}
