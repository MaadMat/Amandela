import { useState } from 'react';
import Image from "next/image";
type CardProps = {
  cards: Array<{
    name: string;
    Words: string[];
  }>;
};

export default function Card({ cards }: CardProps) {
  // State to keep track of the currently visible card
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next card
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to handle moving to the previous card
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="w-[18rem] h-[30rem] bg-white relative rounded-[25px] custom:border">
      {/* Render only the current card */}
      <div className="w-full h-full left-0 top-0 absolute">
        <div className="h-[74px] left-[49px] top-[76px] absolute w-full">
          <div className="left-0 top-0 absolute text-[#5d5c5c] text-xs font-semibold font-['Inter']">
            <h3>Name/Place:</h3>
          </div>
          <div className="left-0 top-[38px] absolute text-[#027fd8] text-[1.25rem] font-semibold font-['Inter'] w-[90%]">
            <h4 className=' w-4/5'>{currentCard.name}</h4>
          </div>
        </div>
        <div className="w-[200px] h-[132px] left-[44px] top-[225px] absolute">
          <div className="left-[5px] top-0 absolute text-[#c12d2d] text-[1rem] font-semibold font-['Inter']">
            <h5>TABOO WORDS:</h5>
          </div>
          <div className="left-0 top-[37px] absolute text-black text-base font-normal font-['Inter']">
            <ul className="list-disc ml-6">
              {currentCard.Words.map((word, wordIndex) => (
                <li key={wordIndex}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="bottom-[25px] text-black text-[19px] font-bold font-['Inter'] text-right absolute w-full">
        <button
          onClick={handleBack}
          className="mr-4 bg-[#f6f6f6] text-black rounded-[18px] border-solid border w-24 h-[2.5rem] text-sm"
        >
          BACK
        </button>
        <button
          onClick={handleNext}
          className="bg-[#84ff97] text-black rounded-[18px] border-solid border w-24 h-[2.5rem] mr-[19px] text-sm"
        >
          NEXT
        </button>
      </div>
      
     <p className="left-[258px] top-[23px] absolute text-black text-[14px] font-bold">A</p>
     <Image src='/images/spade-64.webp' alt='Ace of spade sign' width={24} height={24} className='left-[250.5px] top-[41px] absolute' />
<div className="w-[193px] h-1.5 left-[40px] top-[30px] absolute">
<div className={`${currentIndex === 0 ? 'bg-[#1e0f0f]' : 'bg-[#d9d9d9]'} w-[25px] h-1.5 left-0 top-0 absolute  rounded-[5px]`} />
<div className={`${currentIndex === 1 ? 'bg-[#1e0f0f]' : 'bg-[#d9d9d9]'} w-[25px] h-1.5 left-[34px] top-0 absolute  rounded-[5px]`} />
<div className={`${currentIndex === 2 ? 'bg-[#1e0f0f]' : 'bg-[#d9d9d9]'} w-[25px] h-1.5 left-[66px] top-0 absolute  rounded-[5px]`} />
<div className={`${currentIndex === 3 ? 'bg-[#1e0f0f]' : 'bg-[#d9d9d9]'} w-[25px] h-1.5 left-[100px] top-0 absolute rounded-[5px]`} />
<div className={`${currentIndex === 4 ? 'bg-[#1e0f0f]' : 'bg-[#d9d9d9]'} w-[25px] h-1.5 left-[135px] top-0 absolute rounded-[5px]`} />
</div>
    </div>
  );
}
