import React, { useState, useEffect }  from 'react';

import {getRandomImage} from 'apis/unsplash';

const background: React.FC = ({ children }) => {
  const [background, setBackground] = useState("")

  useEffect(async () => {
    const response = await getRandomImage();
    const backgroundImage = response.data.data.urls.full
    setBackground()
  }, [])

  return (
  );
};

export default background;
