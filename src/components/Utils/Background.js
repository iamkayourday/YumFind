import { useEffect } from 'react';

const Background = (color) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);
};
export default Background