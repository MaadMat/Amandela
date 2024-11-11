'use client'
import { useState } from 'react';

export default function JoinTeamForm() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [cv, setCv] = useState<string | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cv) {
      alert("Please upload your CV.");
      return;
    }
    


    // Send form data to API
    const res = await fetch('/api/career', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({firstName,secondName,email,role,cv}),
    });
    if (res.ok) {
      alert('Application submitted successfully!');
      // Clear the form fields
      setFirstName('');
      setSecondName('');
      setEmail('');
      setRole('');
      setCv(null);
    } else {
      alert('Failed to submit application.');
    }
  };
  
  const handleCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (file && file.type === 'application/pdf') {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        // Get the base64 string
        const base64String = reader.result as string;
        
        // Update state with the base64 encoded PDF
        setCv(base64String);
      };
  
      // Read the file as a data URL (base64)
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a PDF file.');
      e.target.value = ''; // Clear the input if the file is not a PDF
    }
  };
  
  return (
    <div className='px-5 w-full'>
      <section>
        <h1 className='mt-56 mb-20 text-4xl text-[#2E51ED] font-bold'>
          JOIN OUR TEAM
        </h1>
        <p className='w-[85%] mx-5'>
          {/* Introduction text */}
        </p>
      </section>

      <form onSubmit={handleFormSubmit} className="join-team-form flex flex-col mt-20 w-[85%] mx-5">
        {/* Input Fields */}
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

        <div className='border-solid border mb-7 h-14 w-10/12'>
          <input
            type="text"
            value={role}
            className='w-full h-full p-4'
            placeholder='Role'
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>

        <div className='border-solid border mb-7 h-14 w-10/12'>
          <label htmlFor="Upload CV">
            CV
            <input
              type="file"
              accept=".pdf"
              name="cv"  // Ensure this matches the backend field name
              placeholder='Upload CV'
              onChange={handleCvChange}
              className='w-full h-full p-4'
              required
            />
          </label>
        </div>

        <button type="submit" className='bg-[#C812FF] w-24 h-10 text-white font-medium m-auto mb-32'>
          Submit
        </button>
      </form>
    </div>
  );
}
