import React, { useState, useEffect } from 'react';

import MyComponent from './SingleQuestion';
const Question = (questions) => {
  const [data] = useState(questions.questions);
  // console.log(data);

  useEffect(() => {
    const buttons = Array.from(document.getElementsByClassName('btn'));
    console.log(buttons);
  }, []);

  return (
    <>
      {data.map((item, index) => {
        return <MyComponent key={item.id} {...item} />;
      })}
    </>
  );
};

export default Question;
