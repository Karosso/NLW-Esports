import CheckBox from '@react-native-community/checkbox';
import React, { FC } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Backgound } from '../../components/background/Background';
import DaysChooser from '../../components/daysChooser/DaysChooser';
import ErrorsModal from '../../components/errorsModal/ErrorsModal';
import TimePicker from '../../components/timePicker/TimePicker';
import { CreateAdsScreenProps } from '../../routes/app/AppStack.types';
import { THEME } from '../../theme';
import { convertAmpmHours } from '../../utils/Utils';
import { styles } from './CreateAds.styles';
import UseCreateAds from './UseCreateAds';

const CreateAds: FC<CreateAdsScreenProps> = ({
  route: {
    params: { refreshGameList },
  },
}) => {
  const {
    loading,
    navigation,
    gameList,
    open,
    setOpen,
    setGameId,
    gameId,
    name,
    setName,
    discord,
    setDiscord,
    yearsPlaying,
    setYearsPlaing,
    selectedDays,
    setSelectedDays,
    setStartHour,
    setEndHour,
    useVoiceChannel,
    setUseVoiceChat,
    handleSubmit,
    errors,
    handleCloseModal,
  } = UseCreateAds(refreshGameList);

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
          <Text style={styles.headerTitle}>Publique um anúncio</Text>
          <View style={styles.right} />
        </View>

        <ScrollView style={styles.form} nestedScrollEnabled>
          <View style={{ zIndex: 10 }}>
            <Text style={styles.title}>Qual o game?</Text>
            <DropDownPicker
              items={gameList ?? []}
              placeholder="Selecione o game que deseja jogar"
              placeholderStyle={styles.placeholder}
              loading={!gameList}
              open={open}
              setOpen={setOpen}
              setValue={setGameId}
              value={gameId}
              textStyle={styles.pickerItem}
              style={styles.pickerContainer}
              dropDownContainerStyle={styles.dropDownContainer}
              labelStyle={styles.pickerItem}
              listMode="SCROLLVIEW"
              ArrowDownIconComponent={({ style }) => (
                <Icon
                  name="chevron-down"
                  size={20}
                  color={THEME.COLORS.CAPTION_300}
                  style={style}
                />
              )}
              ArrowUpIconComponent={({ style }) => (
                <Icon
                  name="chevron-up"
                  size={20}
                  color={THEME.COLORS.CAPTION_300}
                  style={style}
                />
              )}
              TickIconComponent={({ style }) => (
                <Icon
                  name="check"
                  size={20}
                  color={THEME.COLORS.CAPTION_300}
                  style={style}
                />
              )}
            />
          </View>

          <Text style={styles.title}>Seu nome</Text>
          <TextInput
            placeholder="Como te chamam no game?"
            placeholderTextColor={THEME.COLORS.CAPTION_500}
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.title}>Joga há quantos anos?</Text>
          <TextInput
            placeholder="Tudo bem ser ZERO"
            placeholderTextColor={THEME.COLORS.CAPTION_500}
            style={styles.input}
            value={yearsPlaying}
            maxLength={2}
            keyboardType={'numeric'}
            onChangeText={value => setYearsPlaing(value.replace(/[^0-9]/g, ''))}
          />
          <Text style={styles.title}>Qual seu discord?</Text>
          <TextInput
            placeholder="Usuario#0000"
            placeholderTextColor={THEME.COLORS.CAPTION_500}
            style={styles.input}
            value={discord}
            onChangeText={setDiscord}
          />

          <Text style={styles.title}>Quando costuma jogar?</Text>
          <DaysChooser
            selectedDays={selectedDays}
            setSelectedDays={setSelectedDays}
          />

          <View style={styles.rowContainer}>
            <TimePicker
              label="De"
              onChange={hour => setStartHour(convertAmpmHours(hour))}
            />
            <TimePicker label="até" onChange={setEndHour} />
          </View>

          <View style={styles.checkBox}>
            <CheckBox
              tintColors={{
                true: THEME.COLORS.SUCCESS,
                false: THEME.COLORS.PRIMARY,
              }}
              value={useVoiceChannel}
              onValueChange={checked => setUseVoiceChat(checked)}
            />
            <Text style={styles.checkText}>
              Costumo me conectar no chat de voz
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.cancel} onPress={navigation.goBack}>
              <Text style={styles.publishText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.publish}
              onPress={handleSubmit}
              disabled={loading}>
              <>
                {loading ? (
                  <ActivityIndicator color={THEME.COLORS.SUCCESS} />
                ) : (
                  <>
                    <Ionicons
                      name="game-controller-outline"
                      size={20}
                      color={THEME.COLORS.TEXT}
                    />
                    <Text style={styles.publishText}>Publicar</Text>
                  </>
                )}
              </>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <ErrorsModal
          visible={!!errors}
          errors={errors}
          handleClose={handleCloseModal}
        />
      </SafeAreaView>
    </Backgound>
  );
};

export default CreateAds;
