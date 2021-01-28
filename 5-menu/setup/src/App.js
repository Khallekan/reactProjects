import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const App = () => {
  const allCategories = [
    'all',
    ...new Set(items.map((category) => category.category)),
  ];

  const [menu, setMenu] = useState(items);

  const [categories, setCategories] = useState(allCategories);

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    return setMenu(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterMenu={filterMenu} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};

export default App;
