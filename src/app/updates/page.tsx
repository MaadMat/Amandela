'use client'
import { useState } from 'react';

export default function WhatsNew() {
  const [expandUpdates, setExpandUpdates] = useState(false);

  const toggleExpand = () => {
    setExpandUpdates(!expandUpdates);
  };

  return (
    <div className="px-5 w-full">
      <section>
        <h1 className="mt-56 mb-20 text-4xl text-[#2E51ED] font-bold">
          WHAT&apos;S NEW
        </h1>
        <p className="w-[85%] mx-5">
          Stay updated with the latest features and improvements on our platform! Our recent updates focus on enhancing user support, engagement, and interaction.
        </p>
      </section>

      <div className="updates-list mt-10 w-[85%] mx-5">
        <div className="update-item mb-7">
          <h2 className="text-2xl font-semibold">1. Support & Suggestions Page</h2>
          <p className="mt-2">
            We&apos;ve introduced a new support page where users can easily reach out for assistance. The form now includes fields for first and last names, email, and a detailed message section for support inquiries, allowing for efficient and tailored support.
          </p>
        </div>

        <div className="update-item mb-7">
          <h2 className="text-2xl font-semibold">2. Join the Team Application Form</h2>
          <p className="mt-2">
            Interested in joining us? Our new application form makes it easy! Enter your details, including the desired role and upload a PDF CV directly through our secure form.
          </p>
        </div>

        <div className="update-item mb-7">
          <h2 className="text-2xl font-semibold">3. Taboo Card Rating Feature</h2>
          <p className="mt-2">
            You can now rate individual Taboo cards to help us improve the game! Share your thoughts on each card&apos;s quality and contribute to making the game even better.
          </p>
        </div>

        <div className="update-item mb-7">
          <h2 className="text-2xl font-semibold">4. Limited-Time Historical Component</h2>
          <p className="mt-2">
            Dive into the past with our new Historical Component! Available for only one hour, this feature offers an exclusive look into historical game data, enhancing your game experience with a nostalgic element.
          </p>
        </div>
      </div>

      <button onClick={toggleExpand} className="bg-[#C812FF] w-24 h-10 text-white font-medium mt-10 mb-32 m-auto">
        {expandUpdates ? 'Collapse' : 'Read More'}
      </button>

      {expandUpdates && (
        <div className="expanded-content w-[85%] mx-5 mt-5">
          <p>
            Our platform is continuously evolving to improve your experience. These new features and changes are part of our commitment to providing you with a supportive, interactive, and engaging environment. 
            Stay tuned for more updates and feel free to provide feedback on what you’d like to see next!
          </p>
        </div>
      )}
    
    </div>
  );
}
