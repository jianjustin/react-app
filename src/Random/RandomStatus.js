import { useState, useEffect, useRef} from 'react';

function useInterval() {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      function tick() {
        setValue(Math.random());
      }
  
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    });
  
    return value;
  }
  
  export default useInterval;