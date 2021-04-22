import { useState, useEffect} from 'react';

function useRandomTimer() {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      let id = setInterval(() => {
        setValue(Math.random());
      }, 1000);
      return () => clearInterval(id);
    });
  
    return value;
  }
  
  export default useRandomTimer;