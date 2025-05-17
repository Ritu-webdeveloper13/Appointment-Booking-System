export const generateTimestamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString('en-us', { month: 'short' });  // Get abbreviated month (e.g., Nov)
    const day = String(now.getDate()).padStart(2, '0');              // Add leading zero if day is single digit
    const hours = String(now.getHours()).padStart(2, '0');           // Add leading zero if hour is single digit
    const minutes = String(now.getMinutes()).padStart(2, '0');       // Add leading zero if minute is single digit
  
    return `${year}${month}${day}${hours}${minutes}`;  // Return in YYYYMMMDDHHmm format
  };