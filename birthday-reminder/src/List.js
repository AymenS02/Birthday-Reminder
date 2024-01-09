import React from 'react';

const List = ({ people, toggleFavorite }) => {
  const handleFavorite = (id) => {
    toggleFavorite(id);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image, isFavorite } = person;
        return (
          <article key={id} className='person'>
            <label>
              <input
                type="checkbox"
                checked={isFavorite}
                onChange={() => handleFavorite(id)}
              />
              <span>{isFavorite ? '' : ''}</span>
            </label>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>

            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
