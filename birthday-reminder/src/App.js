import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const [isCleared, setIsCleared] = useState(false);
  const [removedData, setRemovedData] = useState([]); // Use state for removed data
  const [showUndo, setShowUndo] = useState(false);

  const handleRemove = () => {
    const newPeople = people.filter((person) => !person.isFavorite);
    const removedPeople = people.filter((person) => person.isFavorite);
    setRemovedData([...removedData, removedPeople]); // Add a new nested array
    setPeople(newPeople);
    setShowUndo(true); // Show the undo button
  };

  const toggleFavorite = (id) => {
    const updatedPeople = people.map((person) =>
      person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
    );
    setPeople(updatedPeople);
  };

  const handleClear = () => {
    if (!isCleared) {
      setRemovedData([...removedData, people]); // Add the whole people array as a nested array
      setPeople([]);
      setIsCleared(true);
      if (showUndo) {
        setShowUndo(false); // Hide the undo button
      }
    } else {
      if (removedData.length > 0) {
        setShowUndo(true); // Hide the undo button
      }
      setIsCleared(false);
      setPeople(removedData[removedData.length - 1]);
      setRemovedData(removedData.slice(0, -1));
    }
  };

  const handleUndo = () => {
    if (removedData.length > 0) {
      const lastRemoved = removedData[removedData.length - 1];
      setRemovedData(removedData.slice(0, -1)); // Remove the last nested array
      setPeople((prevPeople) => [...prevPeople, ...lastRemoved]);
      if (removedData.length === 1) {
        setShowUndo(false); // Hide the undo button if no more removals left
      }
    } else {
      setShowUndo(false); // Hide the undo button
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-200">
      <section className="w-11/12 max-w-md bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-normal text-gray-800 mb-8">{people.length} Friends</h3>
        <List people={people} toggleFavorite={toggleFavorite} />
        {showUndo && (
          <button
            onClick={handleUndo}
            className="w-full bg-pink-500 text-white py-2 rounded-lg mt-4 transition hover:bg-pink-600"
          >
            Undo
          </button>
        )}
        <button
          onClick={handleRemove}
          className="w-full bg-pink-500 text-white py-2 rounded-lg mt-4 transition hover:bg-pink-600"
        >
          Clear Selected
        </button>
        <button
          onClick={handleClear}
          className="w-full bg-pink-500 text-white py-2 rounded-lg mt-4 transition hover:bg-pink-600"
        >
          {isCleared ? 'Undo Clear All' : 'Clear All'}
        </button>
      </section>
    </main>
  );
}

export default App;

