import React from 'react';
import { FlatList, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Backgound } from '../../components/background/Background';
import GameCard from '../../components/gameCard/GameCard';
import Heading from '../../components/heading/Heading';
import Loading from '../../components/loading/Loading';
import { styles } from './Home.styles';
import useHome from './useHome';

export default function Home() {
  const { games, handleGame } = useHome();

  const renderGames = () => {
    if (games === null) {
      return <Loading />;
    }

    if (games.length === 0) {
      return <Text>Lista vazia</Text>;
    }

    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={games}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} onPress={() => handleGame(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  return (
    <Backgound>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que desja jogar..."
        />
        {renderGames()}
      </SafeAreaView>
    </Backgound>
  );
}
