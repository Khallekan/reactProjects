import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='color'
            placeholder='#f15025'
            className={isError ? `error` : null}
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor color={color} key={index} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
