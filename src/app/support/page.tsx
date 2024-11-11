'use client'
import { useState } from 'react';

export default function GeneralFeedback() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Send form data to API
    const res = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, secondName, email, message }),
    });

    if (res.ok) {
      alert('Support request submitted successfully!');
      // Clear the form fields
      setFirstName('');
      setSecondName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Failed to submit support request.');
    }
  };

  return (
    <div className='px-5 w-full'>
      <section>
        <h1 className='mt-56 mb-20 text-4xl text-[#2E51ED] font-bold'>
          HELP/
          <br />
          SUPPORT
        </h1>
        <p className='w-[85%] mx-5'>
          Need help? We’re here for you! Whether you have questions about gameplay, run into any technical issues, or just need a bit of guidance, our support team is ready to assist. Reach out directly, and we’ll work to make your experience as smooth and enjoyable as possible.
          <br />
          <br />
          Thank you for being a part of our community!
        </p>
      </section>

      <form onSubmit={handleFormSubmit} className="support-form flex flex-col mt-20 w-[85%] mx-5">
        <div className='border-solid border mb-7 h-14 w-10/12'>
          <input
            type="text"
            value={firstName}
            className='w-full h-full p-4'
            placeholder='First Name'
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className='border-solid border mb-7 h-14 w-10/12'>
          <input
            type="text"
            value={secondName}
            className='w-full h-full p-4'
            placeholder='Second Name'
            onChange={(e) => setSecondName(e.target.value)}
            required
          />
        </div>

        <div className='border-solid border mb-7 h-14 w-10/12'>
          <input
            type="email"
            value={email}
            className='w-full h-full p-4'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='border-solid border mb-7 h-28 w-10/12'>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Message'
            className='w-full h-full p-4'
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault(); // Prevents form submission on Enter (newline with Shift+Enter)
                setMessage(message + '\n');
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
