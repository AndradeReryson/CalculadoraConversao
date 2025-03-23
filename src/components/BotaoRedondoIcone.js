import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { colors } from '../utils/colors'

const BotaoRedondoIcone = ({ size = 75, backgroundColor = colors.azul, onPress, children}) => {

  const botaoDynamicStyle = {
    width: size,
    height: size,
    backgroundColor: backgroundColor,
  }

  const botaoStyle = StyleSheet.compose(botaoDynamicStyle, styles.botaoStaticStyle)

  return (
    <TouchableOpacity style={botaoStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botaoStaticStyle: {
    alignSelf: 'center',
    borderRadius: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
})

export default BotaoRedondoIcone