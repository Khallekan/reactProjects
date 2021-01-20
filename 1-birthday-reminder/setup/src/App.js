import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople(() => {
      return [];
    });
  };
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return <List key={person.id} {...person} />;
        })}
        <button type='button' onClick={clearAll}>
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
