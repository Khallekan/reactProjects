import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(list));
  } else {
    return [];
  }
};

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const removeItem = (id) => {
    showAlert(true, `danger`, `item removed`);
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setInput(item.title);
  };

  const clearList = () => {
    setList([]);
    showAlert(true, `danger`, `empty list`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      showAlert(true, 'danger', 'please enter a value');
      setInput(`Type in a grocery item`);
    } else if (input && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: input };
          }
          return item;
        })
      );
      setInput('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true, `success`, `value changed`);
    } else {
      showAlert(true, 'success', 'item added to list');
      setInput('');
      const newItem = { id: new Date().getTime().toString(), title: input };
      setList([...list, newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert removeAlert={showAlert} {...alert} list={list} />}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            submit
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={() => clearList()}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
