import React, { useCallback, useState } from 'react';

export const FirstPage = () => {
  const title = 'React with Webpack and Babel';
  const [clicks, setClicks] = useState(0);

  const addOneClick = useCallback(() => {
    setClicks(clicks + 1);
  }, [clicks]);

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={addOneClick}>Click{clicks}</button>
    </div>
  );
};
