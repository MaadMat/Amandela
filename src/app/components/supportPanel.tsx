import { useState } from 'react';
import SuggestCardForm from "./user-feedback/suggestCard"
import ImproveCardForm from './user-feedback/improveCard'
import RateCardModal from './user-feedback/rateCard'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownMenu = (children:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [editCardOpen, setEditCardOpen] = useState(false);
  const [rateCardOpen, setRateCard] = useState(false);
  const currentCard = children.currentCard
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="bg-gray-800 text-white rounded-full focus:outline-none absolute left-[135px] h-[37px] w-[37px]"
      >
        <p className="text-xl " >?</p>
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-gray-800 rounded-lg shadow-lg min-w-[200px] p-3 z-10 left-[-28px] top-[-250px]">
          <ul>
            <li  key={1} ><button onClick={()=> setSuggestOpen(true)} className="text-white text-[14px] hover:text-gray-300">Suggest Card</button></li>
            <li  key={2} ><a href="https://amandela-iut8.vercel.app/user-feedback/general-feedback" className="text-white text-[14px] hover:text-gray-300">General Suggestions</a></li>
            <li  key={3} ><a href="https://amandela-iut8.vercel.app/support" className="text-white text-[14px] hover:text-gray-300">Get Help / Support</a></li>
            <hr className="border-t border-gray-600 my-2" />
            <li  key={4} ><button onClick={()=> setRateCard(true)} className="text-white text-[14px] hover:text-gray-300">Rate Current Card</button></li>
            <li  key={5} ><button onClick={()=> setEditCardOpen(true)} className="text-white text-[14px] hover:text-gray-300">Improve Current Card</button></li>
            <hr className="border-t border-gray-600 my-4" />
            <li  key={6} ><a href="https://amandela-iut8.vercel.app/career" className="text-white text-[14px] hover:text-gray-300">Join The Team</a></li>
            <li  key={7} ><a href="https://amandela-iut8.vercel.app/updates" className="text-white text-[14px] hover:text-gray-300">Latest Updates</a></li>
          </ul>
        </div>
      )}
      {suggestOpen &&  <SuggestCardForm closePanel={()=>setSuggestOpen(false)} /> }
      {rateCardOpen &&  <RateCardModal currentCard={currentCard} closePanel={()=>setRateCard(false)} /> }
      {editCardOpen &&  <ImproveCardForm currentCard={currentCard} closePanel={()=>setEditCardOpen(false)} /> }
    </div>
  );
};

export default DropdownMenu;
