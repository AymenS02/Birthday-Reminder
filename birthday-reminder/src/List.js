import React from 'react';

const List = ({ people, toggleFavorite }) => {
  const handleFavorite = (id) => {
    toggleFavorite(id);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name, last, image, isFavorite } = person;
        return (
          <article key={id} className="flex items-center gap-3 mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isFavorite}
                onChange={() => handleFavorite(id)}
                className="form-checkbox text-pink-500"
              />
            </label>
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full object-cover shadow-md"
            />
            <div>
              <h4 className="text-lg font-semibold">{name}</h4>
              <p className="text-gray-500">{last} days</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
