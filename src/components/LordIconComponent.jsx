import React, { useEffect } from 'react';

const LordIconComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.lordicon.com/lordicon.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <lord-icon
      src="https://cdn.lordicon.com/ffpklhrd.json"
      trigger="loop"
      style={{ width: '80px', height: '80px' }}
    />
  );
};

export default LordIconComponent;
