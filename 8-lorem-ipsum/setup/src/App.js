import React, { useState } from 'react';
import data from './data';
const App = () => {
  const [input, setInput] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(input);
    if (input <= 0) {
      amount = 0;
      setInput(0);
    }
    if (input > 8) {
      amount = 8;
      setInput(8);
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form'>
        <label htmlFor='amount'>paragraphs: </label>
        <input
          type='number'
          name='amount'
          min='0'
          max='8'
          id='amount'
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className='btn' onClick={handleSubmit}>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
