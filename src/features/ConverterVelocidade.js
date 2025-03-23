import { Text } from 'react-native'
import { useEffect } from 'react'

const ConverterVelocidade = ({medidaOriginal, medidaConversao, valor, setResultado}) => {

  useEffect(() => {
    const quilometroParaMilha = (valor) => {
      let resultado = parseFloat(valor) / 1.609
      return Math.round(resultado * 1000) / 1000
    }

    const quilometroParaMetros = (valor) => {
      let resultado = parseFloat(valor) / 3.6
      return Math.round(resultado * 1000) / 1000
    }

    const milhaParaKilometro = (valor) => {
      let resultado = parseFloat(valor) * 1.609
      return Math.round(resultado * 1000) / 1000
    }

    const milhaParaMetro = (valor) => {
      let resultado = parseFloat(valor) / 2.237
      return Math.round(resultado * 1000) / 1000
    }

    const metroParaQuilometro = (valor) => {
      let resultado = parseFloat(valor) * 3.6
      return Math.round(resultado * 1000) / 1000
    }

    const metroParaMilhas = (valor) => {
      let resultado = parseFloat(valor) * 2.237
      return Math.round(resultado * 1000) / 1000
    }

    switch(medidaOriginal){
      case "km/h":
        switch(medidaConversao){
          case "km/h":
            setResultado(valor)
            break
          case "mph":
            setResultado(quilometroParaMilha(valor))
            break
          case "m/s":
            setResultado(quilometroParaMetros(valor))
            break
        }
        break
      case "mph":
        switch(medidaConversao){
          case "km/h":
            setResultado(milhaParaKilometro(valor))
            break
          case "mph":
            setResultado(valor)
            break
          case "m/s":
            setResultado(milhaParaMetro(valor))
            break
        }
        break
      case "m/s":
        switch(medidaConversao){
          case "km/h":
            setResultado(metroParaQuilometro(valor))
            break
          case "mph":
            setResultado(metroParaMilhas(valor))
            break
          case "m/s":
            setResultado(valor)
            break
        }
        break
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medidaConversao, medidaOriginal, valor])
  
}

export default ConverterVelocidade