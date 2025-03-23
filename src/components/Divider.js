import { View, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const Divider = ({margin = 20}) => {
  return(
    <View style={[styles.divider, {marginVertical: margin}]}></View>
  )
}

const styles = StyleSheet.create({
  divider: {
    height: 1.5,
    borderRadius: 15,
    backgroundColor: colors.cinzaClaro,
  }
})

export default Divider