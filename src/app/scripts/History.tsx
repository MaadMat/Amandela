/* eslint-disable prefer-rest-params */

type CardHistory = {
    set: { name: string; Words: string[] }[]; // Each history entry is an array of cards
    timestamp: number;
  };
  
  // Function to save a card set to history
  export const addHistoryEntry = (set: { name: string; Words: string[] }[]) => {
    const history = JSON.parse(localStorage.getItem('cardHistory') || '[]') as CardHistory[];
    const newHistory = [{ set, timestamp: Date.now() }, ...history].slice(0, 10); // Keep only the last 10 sets
    localStorage.setItem('cardHistory', JSON.stringify(newHistory));
  };
  
  // Function to get card set history from the last 24 hours
  export const getHistory = () => {
    const history = JSON.parse(localStorage.getItem('cardHistory') || '[]') as CardHistory[];
    const twentyFourHoursAgo = Date.now() - 24 * 60 * 60 * 1000;
    return history
      .filter(item => item.timestamp > twentyFourHoursAgo) // Filter out items older than 24 hours
      .map(item => item.set); // Return only the sets for easier usage in the component
  };
  