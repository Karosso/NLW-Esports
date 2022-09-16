import React, { FC } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Backgound } from '../../components/background/Background';
import { GameScreenProps } from '../../routes/app/AppStack.types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './Game.styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import Heading from '../../components/heading/Heading';
import DuoCard from '../../components/duoCard/DuoCard';
import useGame from './useGame';

const Game: FC<GameScreenProps> = ({
  route: {
    params: { bannerUrl, title, id },
  },
  navigation,
}) => {

  const { adsList } = useGame(id);

  const emptList = () => (
    <View style={styles.emptyList}>
      <Text style={styles.emptyText}>Sem anúncios para este jogo!</Text>
    </View>
  )

  return (
    <Backgound>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Icon
              name="chevron-left"
              size={30}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={adsList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <DuoCard ads={item} handleConnect={() => {}} />}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={emptList}
        />
      </SafeAreaView>
    </Backgound>
  );
};

export default Game;
