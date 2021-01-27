import React, { useState } from 'react';
import data from './data';
import Questions from './Question';

const App = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          <Questions questions={questions} />;
        </section>
      </div>
    </main>
  );
};

export default App;
