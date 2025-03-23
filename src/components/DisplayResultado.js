import { useState, useEffect } from 'react'
import { TextInput, View, Text, StyleSheet } from 'react-native'
import { fontSizes, fontFamily } from '../utils/fonts' 
import { colors } from '../utils/colors'

const DisplayResultado = ({ label, value}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={styles.display}
        value={value}
      >
        <Text selectable={true} style={styles.displayText}>{value}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    marginVertical: 12,
  },
  display: {
    height: 48,
    borderColor: colors.cinzaClaro,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 0,
    backgroundColor: colors.branco,
    justifyContent: 'center',
  },
  displayText: {
    fontFamily: fontFamily.regular,
    fontSize: fontSizes.md,
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

export default DisplayResultado