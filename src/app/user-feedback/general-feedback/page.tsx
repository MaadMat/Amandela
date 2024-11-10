'use client'
import { useState } from 'react';

export default function GeneralFeedback() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Send form data to API
    const res = await fetch('/api/submitSuggestion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, type, suggestion }),
    });

    if (res.ok) {
      alert('Suggestion submitted successfully!');
      // Clear the form fields
      setTitle('');
      setType('');
      setSuggestion('');
    } else {
      alert('Failed to submit suggestion.');
    }
  };

  return (
    <div className='px-5 w-full'>
        <section>
            <h1 className='mt-56 mb-20 text-4xl text-[#2E51ED] font-bold '>GENERAL SUGGESTIONS</h1>
            <p className='w-[85%] mx-5'>Here you can share your suggestions about anything on the website. If it’s card-related and our card improvement page doesn’t provide enough, feel free to do it all here. Thanks for your input; it will be reviewed accordingly, and you might see your idea in action one day.</p>
        </section>

    <form onSubmit={handleFormSubmit} className="suggestion-form flex flex-col mt-20 w-[85%] mx-5">
        <div className='border-solid border mb-7 h-14 w-10/12' >
        <input
          type="text"
          value={title}
          className='w-full h-full p-4'
          placeholder='Title'
          
          onChange={(e) => setTitle(e.target.value)}
          required
          />
          </div>
<div className='border-solid border mb-7 h-14 w-1/2'>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className='w-full h-full p-4'
          required
          >
          <option value="">Select Type</option>
          <option value="Feature">Feature</option>
          <option value="Bug">Bug</option>
          <option value="Improvement">Improvement</option>
        </select>
              </div> 
              <div className='border-solid border mb-7 h-20 w-10/12'>
        <textarea
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder='Suggestion'
          className='w-full h-full p-4'
          onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault(); // Prevents form submission on Enter (newline with Shift+Enter)
                  setSuggestion(suggestion + '\n');
                }
            }}
            required
            />
            </div>

      <button type="submit" className='bg-[#C812FF] w-24 h-10 text-white font-medium m-auto mb-32'>Send</button>
    </form>
    
            </div>
  );
}
