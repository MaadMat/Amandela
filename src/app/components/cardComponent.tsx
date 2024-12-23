/* eslint-disable prefer-rest-params */
import { useState } from 'react';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Card( children:any ) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = children.cards
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  // Function to handle moving to the previous card
  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };
  const currentCard = cards[currentIndex];

  return (
    <div className="w-[17.5rem] h-[27rem] bg-white relative rounded-[25px] custom:border mt-6">
      <div className="w-full h-full left-0 top-0 absolute">
        <div className="h-[74px] left-[30px] top-[76px] absolute w-full">
          <div className="left-0 top-0 absolute text-[#5d5c5c] text-xs font-semibold font-['Inter']">
            <div className='flex'>
            <h3 className='text-m underline'>TABOO</h3>:

            </div>
          </div>
          <div className="left-0 top-[38px] absolute text-[#027fd8] text-[1.25rem] font-semibold font-['Inter'] w-[90%]">
    
            <h4 className=' w-[14rem] text-m '>{currentCard.name}</h4>
          </div>
        </div>
        <div className="w-[200px] h-[132px] left-[35px] top-[200px] absolute ">
          <div className="left-[5px] top-0 absolute text-[#c12d2d] text-[1rem] font-semibold font-['Inter']">
            <h5 className='text-sm' >Forbidden Words:</h5>
          </div>
          <div className="left-0 top-[37px] absolute text-black text-base font-normal font-['Inter']">
            <ul className="list-disc ml-6 text-xs">
              {currentCard.Words.map((word:string, wordIndex:number) => (
                
                <li key={wordIndex}>{word}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-[25px] text-black text-[19px] font-bold font-['Inter'] text-right absolute w-full">
        <button
          onClick={handleBack}
          className="mr-4 bg-[#f6f6f6] text-black rounded-[18px] border-solid border w-20 h-[2.0rem] text-xs"
        >
          BACK
        </button>
        <button
          onClick={handleNext}
          className="bg-[#84ff97] text-black rounded-[18px] border-solid border w-20 h-[2.0rem] mr-[19px] text-xs"
        >
          NEXT
        </button>
      </div>
      
     <p className="left-[250px] top-[23px] absolute text-black text-[14px] font-bold">A</p>
     <div className='flex w-[40%] justify-around absolute top-8 left-8'>
      <span className={`${
            currentIndex === 0 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 1 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 2 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 3 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 4 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 5 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 6 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
      <span className={`${
            currentIndex === 7 ? 'bg-gray-500' : 'bg-gray-200'
          } rounded-s-full border border-solid w-2 h-1`} ></span>
     </div>
    </div>
  );
}
