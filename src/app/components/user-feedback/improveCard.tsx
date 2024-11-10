import { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImproveCardForm = (children: any) => {
  const currentCard = children.currentCard;

  // Initialize form fields with current card data if provided
  const [name, setName] = useState(currentCard?.name || '');
  const [category, setCategory] = useState(currentCard?.category || 'Animals');
  const [forbiddenWords, setForbiddenWords] = useState(currentCard?.Words || ['', '', '']);

  // Handler to add a new forbidden word input
  const addForbiddenWord = () => {
    setForbiddenWords([...forbiddenWords, '']);
  };

  // Handler to update each forbidden word
  const updateForbiddenWord = (index: number, value: string) => {
    const updatedWords = [...forbiddenWords];
    updatedWords[index] = value;
    setForbiddenWords(updatedWords);
  };

  // Handler to remove a forbidden word input
  const removeForbiddenWord = (index: number) => {
    if (forbiddenWords.length > 3) { // Ensure at least 3 forbidden words
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const updatedWords = forbiddenWords.filter((_: any, i: number) => i !== index);
      setForbiddenWords(updatedWords);
    } else {
      alert('A minimum of 3 forbidden words is required.');
    }
  };

  // Send data to the API
  const submitForm = async () => {
    const data = { name, category, Words: forbiddenWords.filter((word:string) => word) };

    try {
      const response = await fetch('/api/user-feedback/improveCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Suggestion sent successfully!');
        // Reset form
        setName('');
        setCategory('Animals');
        setForbiddenWords(['', '', '']);
        children.closePanel(); // Close the modal on successful submission
      } else {
        alert('Failed to send suggestion.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto relative h-[70vh] overflow-scroll mt-16 w-[90vw]">
          <button onClick={() => children.closePanel()} className="text-gray-400 hover:text-gray-300 absolute top-4 right-4">
            x
          </button>

          <h2 className="text-xl text-white mb-4">{currentCard ? 'Improve Card' : 'Suggest a Card'}</h2>

          <label className="text-white">Taboo (What you describe):</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="w-full bg-gray-800 text-white p-2 rounded-md mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <label className="text-white">Category</label>
          <select
            value={category}
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded-md mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Animals">Animals</option>
            <option value="Cars">Cars</option>
            <option value="Cities">Cities</option>
            <option value="Countries">Countries</option>
            <option value="Food">Food</option>
            <option value="People">People</option>
            <option value="Things">Things</option>
          </select>

          <label className="text-white">Forbidden Words:</label>
          {forbiddenWords.map((word: string, index: number) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="text"
                value={word}
                placeholder="Forbidden Word"
                onChange={(e) => updateForbiddenWord(index, e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {forbiddenWords.length > 3 && (
                <button
                  onClick={() => removeForbiddenWord(index)}
                  className="ml-2 text-red-500 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button onClick={addForbiddenWord} className="text-blue-500 hover:text-blue-300 text-sm mt-2">
            + Add Another Word
          </button>

          <div className="flex justify-end space-x-3 mt-6">
            <button onClick={() => children.closePanel()} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700">
              Cancel
            </button>
            <button onClick={submitForm} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
ImproveCardForm.propTypes = {
  currentCard: PropTypes.shape({
    "name": PropTypes.string,
    "category": PropTypes.string,
    "Words": PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ImproveCardForm;
