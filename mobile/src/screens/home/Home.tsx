import { View, Image, FlatList } from 'react-native';
import React from 'react';
import { styles } from './Home.styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import Heading from '../../components/heading/Heading';
import GameCard from '../../components/gameCard/GameCard';
import { GAMES } from '../../utils/games';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que desja jogar..."
      />
      <FlatList
        contentContainerStyle={styles.list}
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
