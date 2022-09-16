import React, { FC, ReactNode } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './Background.styles';
import bgImage from '../../assets/background-galaxy.png';

interface IBackgroundProps {
  children: ReactNode;
}

export const Backgound: FC<IBackgroundProps> = ({ children }) => {
  return (
    <ImageBackground
      source={bgImage}
      defaultSource={bgImage}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};
