import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const [isCleared, setIsCleared] = useState(false);
  const [removedData, setRemovedData] = useState([]);
  const [showUndo, setShowUndo] = useState(false);

  const handleClear = () => {
    let checker = 0;
    if (!isCleared) {
      setRemovedData(people); // Store removed data
      setPeople([]);
      setIsCleared(true);
      if (showUndo) {
        checker = 1;
        setShowUndo(false); // Hide the undo button
      }
    } else {
      setPeople(data);
      setIsCleared(false);
      if (checker === 1) {
        checker = 0;
        setShowUndo(false); // Hide the undo button
      }
      }
  };

  const handleRemove = () => {
    const newPeople = people.filter((person) => !person.isFavorite);
    setRemovedData(people.filter((person) => person.isFavorite)); // Store removed data
    setPeople(newPeople);
    setShowUndo(true); // Show the undo button
  };

  const handleUndo = () => {
    setPeople(removedData); // Restore removed data
    setShowUndo(false); // Hide the undo button
  };

  const toggleFavorite = (id) => {
    const updatedPeople = people.map((person) =>
      person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
    );
    setPeople(updatedPeople);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} toggleFavorite={toggleFavorite} />
        {showUndo && (
          <button onClick={handleUndo}>
            Undo
          </button>
        )}
        <button onClick={handleRemove}>
          Clear Selected
        </button>
        <button onClick={handleClear}>
          {isCleared ? 'Undo Clear All' : 'Clear All'}
        </button>
      </section>
    </main>
  );
}

export default App;
