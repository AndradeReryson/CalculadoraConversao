import { useState, useEffect } from 'react'
import { TextInput, View, Text, Animated, StyleSheet } from 'react-native'
import { fontSizes, fontFamily } from '../utils/fonts' 
import { colors } from '../utils/colors'

const InputTexto = ({ label, value, onChangeText, disabled = false, keyboardType, ...props}) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        editable={disabled ? false : true}
        style={
          disabled ? (
          [
            styles.disabledInput,
          ]
        ) : (
          [
            styles.input,
            { borderColor: isFocused? colors.azul : colors.cinzaClaro}
          ]
        )}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 12,
  },
  input: {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.md,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 0,
    backgroundColor: colors.branco,
  },
  disabledInput: {
    ontFamily: fontFamily.regular,
    fontSize: fontSizes.md,
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 0,
    backgroundColor: colors.cinzaClaro,
    borderColor: colors.cinza,
  },
  label: {
    fontFamily: fontFamily.semibold,
    fontSize: fontSizes.md,
    color: colors.preto,
    position: 'absolute',
    left: 12,
    top: -10,
    borderRadius: 8,
    paddingHorizontal: 5,
    zIndex: 0,
  }
})

export default InputTexto