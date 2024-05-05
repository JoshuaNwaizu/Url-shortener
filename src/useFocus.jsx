import { useEffect } from 'react';

const useFocus = (key, action) => {
  useEffect(() => {
    const inputCallBack = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };
    document.addEventListener('keydown', inputCallBack);

    return () => document.addEventListener('keydown', inputCallBack);
  }, [key, action]);
};

export default useFocus;
