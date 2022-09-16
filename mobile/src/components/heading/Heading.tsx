import { View, Text, ViewProps } from 'react-native';
import React, { FC } from 'react';
import { styles } from './Heading.styles';

interface IHeadingProps extends ViewProps {
  title: string;
  subtitle: string;
}

const Heading: FC<IHeadingProps> = ({ title, subtitle, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Heading;
