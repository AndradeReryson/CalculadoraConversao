import { Text, View, SafeAreaView, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/utils/colors'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TelaTemperatura from './src/screens/TelaTemperatura';
import TelaVelocidade from './src/screens/TelaVelocidade';
import TelaComprimento from './src/screens/TelaComprimento'

const activeColor = colors.azul
const inactiveColor = colors.cinza

const MyTabs = createBottomTabNavigator({
  initialRouteName: 'Temperatura',
  screenOptions: {
    tabBarActiveTintColor: activeColor,
    tabBarInactiveTintColor: inactiveColor,
    tabBarButton: (props) => <TouchableOpacity {...props} android_ripple={{ color: 'transparent' }} />,
    tabBarItemStyle: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    tabBarLabelStyle: {
      fontSize: 13,
    },
    tabBarStyle: {
      height: 70,
    },
  },
  screens: {
    Temperatura: {
      screen: TelaTemperatura,
      options: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <FontAwesome6
            name="temperature-half"
            size={24}
            color={focused ? activeColor : inactiveColor}
          />
        ),
      },
    },
    Velocidade: {
      screen: TelaVelocidade,
      options: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <MaterialIcons 
            name="speed"
            size={24}
            color={focused ? activeColor : inactiveColor}
          />
        ),
      },
    },
    Comprimento: {
      screen: TelaComprimento,
      options: {
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <FontAwesome6
            name="ruler-horizontal"
            size={24}
            color={focused ? activeColor : inactiveColor}
          />
        ),
      },
    }
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
