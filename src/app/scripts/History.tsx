/* eslint-disable prefer-rest-params */

type CardHistory = {
  set: { name: string; Words: string[], category:string }[]; // Each history entry is an array of cards
  timestamp: string; // Changed to string to match the format used in the original code
};

// Function to save a card set to history
export const addHistoryEntry = (set: { name: string; Words: string[] }[]) => {
  const history = JSON.parse(localStorage.getItem('cardHistory') || '[]') as CardHistory[];
  const timestamp: string = new Date().toISOString();
  const newHistory = [{ set, timestamp }, ...history].slice(0, 10); // Keep only the last 10 sets
  localStorage.setItem('cardHistory', JSON.stringify(newHistory));
};

// Function to get card set history and remove entries older than one hour
export const getHistory = () => {
  const history = JSON.parse(localStorage.getItem('cardHistory') || '[]') as CardHistory[];

  const oneHourAgo = Date.now() - 1 * 60 * 60 * 1000; // Adjusted for one hour
  const filteredHistory = history.filter(item => new Date(item.timestamp).getTime() > oneHourAgo); // Filter out items older than one hour

  // Update localStorage to remove old entries
  localStorage.setItem('cardHistory', JSON.stringify(filteredHistory));

  return filteredHistory.map(item => item); // Return only the sets for easier usage in the component
};
