import { useState } from "react";
import _api from '../instances/publicInstance';

function StarRating({ id, initial = 0, onRate = () => {} }) {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    onRate(value);

    if (value > 0) {
      updateUserRating(value).catch(error => {
        console.error('Failed to update rating:', error);
      });
    }
  };

  async function updateUserRating(rating) {
    try {
      await _api.put(`/Movies/${id}`, { userRating: rating });
    } catch (error) {
      console.error('Failed to update rating:', error);
    }
  }

  return (
    <div className="flex flex-col space-y-2">
      
      <h2 className="font-extrabold text-2xl font-serif italic">
        {rating ? `Your rating: ${rating}/5` : 'Rate this Movie'}
      </h2>

      <div className="flex space-x-1 text-4xl select-none">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
            className={`
              cursor-pointer 
              transition-colors duration-200 
              focus:outline-none 
              ${ (hover || rating) >= star ? 'text-yellow-400' : 'text-gray-300' }
              hover:text-yellow-500
            `}
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
}

export default StarRating;
