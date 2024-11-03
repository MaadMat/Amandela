import { useState, useEffect } from 'react';
import Card from './cardComponent'; // Import the Card component
import { getHistory } from '../scripts/History'; // Assuming getHistory fetches history data
import {formatDate} from '../scripts/timeFormat'

type CardType = {
  name: string;
  Words: string[];
};

type HistoryEntry = {
  cards: CardType[];
  timestamp: string;
};

export default function History() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [selectedSetIndex, setSelectedSetIndex] = useState<number | null>(null);

  // Fetch history data from getHistory on initial render
  useEffect(() => {
    const fetchedHistory = getHistory(); 

    // Transform fetched data to include a timestamp if not provided

    const historyWithTimestamp = fetchedHistory.map(set => ({
      cards: set.set,
      timestamp: formatDate(set.timestamp), // Example timestamp; replace with real timestamp if available
    }));
    setHistory(historyWithTimestamp);
    console.log(fetchedHistory)
  }, []);

  const handleSelectSet = (index: number) => {
    setSelectedSetIndex(index);
  };

  const handleBackToHistoryList = () => {
    setSelectedSetIndex(null); // Deselect the card set to show the list again
  };

  return (
    <div className="history-container h-[30rem]">
      
      {/* Show the history list if no card set is selected */}
      {selectedSetIndex === null ? (
        <div className="history-list bg-[#FFFFFD]">
              <div className='flex text-xs w-[80%] justify-around my-4'>
            <p>Name of 1st card</p>
            <p>Time and Date</p>
            
        </div>
          {history.map((entry, index) => (
            <div
              key={index}
              className={`history-set mb-3 p-4 rounded-lg cursor-pointer flex w-full shadow justify-between items-center bg-[#FDFCFF]
                ${index === selectedSetIndex ? 'bg-gray-200' : 'bg-white'}`}
              onClick={() => handleSelectSet(index)}
            >
              <h3 className="font-medium line-clamp-1 w-1/2 text-[#027fd8] text-xs">{entry.cards[0].name}</h3>
              <p className="text-xs text-gray-600 pr-2 ">{entry.timestamp}</p>
              <p className='text-xs text-[#281b1b]'>View Set</p>
            </div>
          ))}
        </div>
      ) : (
        // Show the selected card set with a back button
        <div className="selected-card-set mt-4">
          <button
            onClick={handleBackToHistoryList}
            className="text-blue-600 font-semibold flex items-center mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to History
          </button>
          <Card cards={history[selectedSetIndex].cards} />
        </div>
      )}
    </div>
  );
}
