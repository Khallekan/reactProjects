import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const SingleQuestion = ({ title, info }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button
            type='button'
            className='btn'
            onClick={() => setIsShown(!isShown)}
          >
            {isShown ? <FaMinus /> : <FaPlus />}
          </button>
        </header>
        {isShown && <p>{info}</p>}
      </article>
    </>
  );
};

export default SingleQuestion;
