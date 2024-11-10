'use client'
import { useState } from 'react';

export default function JoinTeamForm() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [cv, setCv] = useState(null);

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (!cv) {
      alert("Please upload your CV.");
      return;
    }

    // Prepare form data for file upload
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('secondName', secondName);
    formData.append('email', email);
    formData.append('role', role);
    formData.append('cv', cv);

    // Send form data to API
    const res = await fetch('/api/joinTeam', {
      method: 'POST',
      body: formData,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCvChange = (e:any) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setCv(file);
    } else {
      alert('Please upload a PDF file.');
      e.target.value = null; // Clear the input if the file is not a PDF
    }
  };

  return (
    <div className='px-5 w-full'>
      <section>
        <h1 className='mt-56 mb-20 text-4xl text-[#2E51ED] font-bold'>
          JOIN OUR TEAM
        </h1>
        <p className='w-[85%] mx-5'>
        Passionate about creating memorable experiences and bringing people together through games? Join our team and be part of a growing community of innovators, designers, and game enthusiasts! 
        <br />
          <br />
        We’re looking for creative minds who are excited to shape the future of card games, from crafting unique content to refining gameplay and building engaging digital experiences
          <br />
          <br />

Please note that all positions are currently unpaid, but this is a great opportunity to gain experience, contribute to something meaningful, and grow alongside a dedicated team.

<br />
          <br />
          At Amandela, we believe in a collaborative environment where every voice matters and ideas can thrive. If you’re ready to make an impact, bring your unique skills, and grow with us, we’d love to hear from you!
<br />
<br />
          We look forward to reviewing your application!
        </p>
      </section>

      <form onSubmit={handleFormSubmit} className="join-team-form flex flex-col mt-20 w-[85%] mx-5">
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
name='Upload CV'
placeholder='Uplaod CV'
onChange={handleCvChange}
className='w-full h-full p-4'
required
/>
</label>
        </div>

        <button type="submit" className='bg-[#C812FF] w-24 h-10 text-white font-medium m-auto mb-32'>Submit</button>
      </form>
    </div>
  );
}
