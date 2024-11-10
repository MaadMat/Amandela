'use cliet'
import { useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SuggestCardForm = (children : any) => {
  // Form fields state
  const [taboo, setTaboo] = useState('');
  const [category, setCategory] = useState('Animals');
  const [forbiddenWords, setForbiddenWords] = useState(['', '', '']);

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

  // Handler to remove a forbidden word
  const removeForbiddenWord = (index: number) => {
    if (forbiddenWords.length > 3) {
      const updatedWords = [...forbiddenWords];
      updatedWords.splice(index, 1);
      setForbiddenWords(updatedWords);
    } else {
      alert('You must have at least three forbidden words.');
    }
  };

  // Send data to the API
  const submitForm = async () => {
    const data = { taboo, category, forbiddenWords: forbiddenWords.filter(word => word) };
    try {
      const response = await fetch('/api/user-feedback/suggestedCard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"name":data.taboo,"category":data.category,"Words":data.forbiddenWords}),
      });
      
      if (response.ok) {
        console.log(taboo, 'suggested')
        alert('Suggestion sent successfully!');
        // Reset form
        setTaboo('');
        setCategory('Animals');
        setForbiddenWords(['', '', '']);
        children.closePanel();
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
      {/* Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-[90vw] max-w-md mx-auto relative h-[70vh] overflow-scroll mt-16">
        <button onClick={() => children.closePanel()} className="text-gray-400 hover:text-gray-300 absolute top-4 right-4">
            x
          </button>
          <h2 className="text-xl text-white mb-4">Suggest a Card</h2>

          {/* Taboo Field */}
          <label className="text-white">Taboo (What you describe):</label>
          <input
            type="text"
            value={taboo}
            onChange={(e) => setTaboo(e.target.value)}
            placeholder="Taboo"
            className="w-full bg-gray-800 text-white p-2 rounded-md mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Category Field */}
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

          {/* Forbidden Words */}
          <label className="text-white">Forbidden Words:</label>
          {forbiddenWords.map((word, index) => (
            <div key={index} className="flex items-center mb-3">
              <input
                type="text"
                value={word}
                placeholder="Forbidden Word"
                onChange={(e) => updateForbiddenWord(index, e.target.value)}
                className="w-full bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/* Remove Button */}
              {forbiddenWords.length > 3 && (
                <button
                  onClick={() => removeForbiddenWord(index)}
                  className="ml-2 text-red-500 hover:text-red-300"
                >
                  x
                </button>
              )}
            </div>
          ))}
          <button onClick={addForbiddenWord} className="text-blue-500 hover:text-blue-300 text-sm mt-2">
            + Add Another Word
          </button>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={() => children.closePanel()}
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              onClick={submitForm}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestCardForm;
