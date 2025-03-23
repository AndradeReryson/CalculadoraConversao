import { Text } from 'react-native'
import { useEffect } from 'react'

const ConverterTemperatura = ({medidaOriginal, medidaConversao, valor, setResultado}) => {

  useEffect(() => {
    const celsiusParaFahrenheit = (valor) => {
      let resultado = ((parseFloat(valor) / 5) * 9) + 32
      return Math.round(resultado * 100) / 100
    }

    const celsiusParaKelvin = (valor) => {
      let resultado = parseFloat(valor) + 273.15
      return Math.round(resultado * 100) / 100
    }

    const fahrenheitParaCelsius = (valor) => {
      let resultado = (parseFloat(valor) - 32) * (5 / 9)
      return Math.round(resultado * 100) / 100
    }

    const fahrenheitParaKelvin = (valor) => {
      let resultado = ((parseFloat(valor) - 32) * (5 / 9)) + 273.15
      return Math.round(resultado * 100) / 100
    }

    const kelvinParaCelsius = (valor) => {
      let resultado = parseFloat(valor) - 273.15
      return Math.round(resultado * 100) / 100
    }

    const kelvinParaFahrenheit = (valor) => {
      let resultado = ((parseFloat(valor) - 273.15) * (9/5)) + 32
      return Math.round(resultado * 100) / 100
    }

    switch(medidaOriginal){
      case "celsius":
        switch(medidaConversao){
          case "celsius":
            setResultado(valor)
            break
          case "fahrenheit":
            setResultado(celsiusParaFahrenheit(valor))
            break
          case "kelvin":
            setResultado(celsiusParaKelvin(valor))
            break
        }
        break
      case "fahrenheit":
        switch(medidaConversao){
          case "celsius":
            setResultado(fahrenheitParaCelsius(valor))
            break
          case "fahrenheit":
            setResultado(valor)
            break
          case "kelvin":
            setResultado(fahrenheitParaKelvin(valor))
            break
        }
        break
      case "kelvin":
        switch(medidaConversao){
          case "celsius":
            setResultado(kelvinParaCelsius(valor))
            break
          case "fahrenheit":
            setResultado(kelvinParaFahrenheit(valor))
            break
          case "kelvin":
            setResultado(valor)
            break
        }
        break
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medidaConversao, medidaOriginal, valor])
  
}

export default ConverterTemperatura