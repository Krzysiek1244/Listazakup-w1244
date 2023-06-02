import React, { useState, useEffect } from 'react';
import './styles.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [lists, setLists] = useState([]);
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    const savedLists = localStorage.getItem('shoppingLists');
    if (savedLists) {
      setLists(JSON.parse(savedLists));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('shoppingLists', JSON.stringify(lists));
  }, [lists]);

  const addItem = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== -1) {
        // Edycja istniejącego elementu
        const updatedItems = items.map((item, index) =>
          index === editIndex ? inputValue : item
        );
        setItems(updatedItems);
        setEditIndex(-1);
      } else {
        // Dodawanie nowego elementu
        setItems([...items, inputValue]);
      }
      setInputValue('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  const saveList = () => {
    if (items.length > 0) {
      if (currentList && currentList.name) {
        const updatedLists = lists.map((list) => {
          if (list.name === currentList.name) {
            return { ...list, items };
          }
          return list;
        });
        setLists(updatedLists);
      } else {
        const listName = prompt('Podaj nazwę listy');
        if (listName) {
          setLists([...lists, { name: listName, items }]);
        }
      }
      setItems([]);
      setCurrentList(null);
    }
  };

  const selectList = (index) => {
    setCurrentList(lists[index]);
    setItems(lists[index].items);
  };

  const removeList = (index) => {
    const updatedLists = lists.filter((_, i) => i !== index);
    setLists(updatedLists);
    setCurrentList(null);
    setItems([]);
  };

  return (
    <div className="container">
      <h1>Lista zakupów</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addItem}>
          {editIndex !== -1 ? 'Zapisz zmiany' : 'Dodaj'}
        </button>
      </div>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <div>
                <button onClick={() => editItem(index)}>Edytuj</button>
                <button onClick={() => removeItem(index)}>Usuń</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-message">Brak elementów na liście zakupów.</p>
      )}
      <div>
        <button onClick={saveList} disabled={items.length === 0}>
          Zapisz listę
        </button>
      </div>
      {lists.length > 0 && (
        <div>
          <h2>Twoje zapisane listy zakupów:</h2>
          <ul>
            {lists.map((list, index) => (
              <li key={index}>
                <button onClick={() => selectList(index)}>{list.name}</button>
                <button onClick={() => removeList(index)}>Usuń listę</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentList && (
        <div>
          <h2>Aktualna lista zakupów: {currentList.name}</h2>
          <ul>
            {currentList.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <ShoppingList />
    </div>
  );
};

export default App;
