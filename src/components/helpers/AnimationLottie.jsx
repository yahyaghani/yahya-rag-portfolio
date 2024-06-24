// src/components/helper/AnimationLottie.jsx

import React from 'react';
import Lottie from 'lottie-react';

const AnimationLottie = ({ animationPath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
