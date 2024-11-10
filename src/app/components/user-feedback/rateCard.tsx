import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RateCardModal = ({ currentCard, closePanel }: any) => {
  const [qualityRating, setQualityRating] = useState(currentCard?.qualityRating || 0);
  const [difficultyRating, setDifficultyRating] = useState(currentCard?.difficultyRating || 0);

  useEffect(() => {
    if (currentCard) {
      setQualityRating(currentCard.qualityRating || 0);
      setDifficultyRating(currentCard.difficultyRating || 0);
    }
  }, [currentCard]);

  const handleQualityRating = (rating: number) => {
    setQualityRating(rating);
  };

  const handleDifficultyRating = (rating: number) => {
    setDifficultyRating(rating);
  };

  const submitRating = async () => {
    const updatedCard = {
      ...currentCard,
      qualityRating,
      difficultyRating,
    };

    try {
      const response = await fetch('/api/user-feedback/rateCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCard),
      });

      if (response.ok) {
        alert('Rating saved successfully!');
        closePanel(); // Close the modal after saving
      } else {
        alert('Failed to save rating.');
      }
    } catch (error) {
      console.error('Error saving rating:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const closeModal = () => {
    closePanel();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm mx-auto relative w-[90vw] overflow-scroll mt-16">
        <button onClick={closeModal} className="text-gray-400 hover:text-gray-300 absolute top-4 right-4">
          ×
        </button>
        <h2 className="text-xl text-white mb-4">Rate Card</h2>

        <label className="text-white">Card Quality:</label>
        <div className="flex space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleQualityRating(star)}
              className={`text-3xl ${star <= qualityRating ? 'text-purple-500' : 'text-gray-500'}`}
            >
              ★
            </button>
          ))}
        </div>

        <label className="text-white">Card Difficulty:</label>
        <div className="flex space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleDifficultyRating(star)}
              className={`text-3xl ${star <= difficultyRating ? 'text-purple-500' : 'text-gray-500'}`}
            >
              ★
            </button>
          ))}
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button onClick={closeModal} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Cancel
          </button>
          <button onClick={submitRating} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateCardModal;
