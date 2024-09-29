// Reusable component for background color, Normal bsckground color is not covering the whole page

import { useEffect } from 'react';

const Background = (color) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = '';
    };
    
  }, []);
};
export default Background