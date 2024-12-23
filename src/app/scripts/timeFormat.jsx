export const formatDate = (isoString) => {
  const date = new Date(isoString);
  
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero and adjust month
  const hours = String(date.getHours()).padStart(2, '0'); // Add leading zero if needed
  const minutes = String(date.getMinutes()).padStart(2, '0'); // Add leading zero if needed
  
  return `${hours}:${minutes} - ${day}/${month}`;
};
