import { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BotaoRedondoIcone from '../components/BotaoRedondoIcone';
import InputTexto from '../components/InputTexto';
import InputPicker from '../components/InputPicker';
import Divider from '../components/Divider';
import DisplayResultado from '../components/DisplayResultado';
import Loading from './Loading';
import ConverterVelocidade from '../features/ConverterVelocidade';
import { fontSizes, fontFamily } from '../utils/fonts';
import { colors } from '../utils/colors';

const TelaVelocidade = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  const opcoesPicker = [
    { label: 'Quilômetro por Hora', value: 'km/h' },
    { label: 'Milha por Hora', value: 'mph' },
    { label: 'Metro por Segundo', value: 'm/s' },
  ];

  const [valor, setValor] = useState(0);
  const [medidaOriginal, setMedidaOriginal] = useState('km/h');
  const [medidaConversao, setMedidaConversao] = useState('mph');
  const [resultado, setResultado] = useState(0);

  const inverterMedidas = () => {
    aux = medidaOriginal;
    setMedidaOriginal(medidaConversao);
    setMedidaConversao(aux);
  };

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAF9F6' }}>
        <StatusBar backgroundColor="#000" barStyle="light-content" />
        <ScrollView>
          <View style={styles.container}>
            
            <View style={styles.card}>
              <Text style={styles.cardTitulo}>Velocidade</Text>
              <MaterialIcons name="speed" size={35} color={colors.preto} />
            </View>
            <InputTexto
              label="Valor"
              keyboardType="number-pad"
              value={valor}
              onChangeText={setValor}
            />
            <Divider />
            <View style={styles.pickerContainer}>
              
              <View style={styles.pickerContainerLeft}>
                <InputPicker
                  items={opcoesPicker}
                  label="Converter de"
                  selectedValue={medidaOriginal}
                  setSelectedValue={setMedidaOriginal}
                />
                <InputPicker
                  items={opcoesPicker}
                  label="Para"
                  selectedValue={medidaConversao}
                  setSelectedValue={setMedidaConversao}
                />
              </View>

              <View style={styles.pickerContainerRight}>
                <BotaoRedondoIcone
                  value="Botao"
                  size={48}
                  backgroundColor={colors.preto}
                  onPress={inverterMedidas}>
                  <MaterialCommunityIcons
                    name="swap-vertical"
                    size={24}
                    color={colors.branco}
                  />
                </BotaoRedondoIcone>
              </View>
            </View>
            
            <ConverterVelocidade
              medidaOriginal={medidaOriginal}
              medidaConversao={medidaConversao}
              setResultado={setResultado}
              valor={valor}
            />
            <Divider />
            <DisplayResultado label="Resultado ≈" value={resultado} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: StatusBar.currentHeight,
  },
  card: {
    borderRadius: 15,
    backgroundColor: colors.azulClaro,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingVertical: 10,
  },
  cardTitulo: {
    fontSize: fontSizes.xl,
    fontFamily: fontFamily.semibold,
    textAlign: 'center',
    color: colors.preto,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pickerContainerLeft: {
    flex: 0.75,
    justifyContent: 'center',
  },
  pickerContainerRight: {
    flex: 0.2,
    justifyContent: 'center',
  },
});

export default TelaVelocidade;
