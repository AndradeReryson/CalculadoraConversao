import { Text } from 'react-native'
import { useEffect } from 'react'

const ConverterComprimento = ({medidaOriginal, medidaConversao, valor, setResultado}) => {

  useEffect(() => {
    const milimetroParaCentimetro = (valor) => {
      let resultado = parseFloat(valor) / 10
      return Math.round(resultado * 1000) / 1000
    }

    const milimetroParaMetro = (valor) => {
      let resultado = parseFloat(valor) / 1000
      return Math.round(resultado * 1000) / 1000
    }

    const milimetroParaPe = (valor) => {
      let resultado = parseFloat(valor) / 304.8
      return Math.round(resultado * 1000) / 1000
    }

    const milimetroParaPolegada = (valor) => {
      let resultado = parseFloat(valor) / 25.4
      return Math.round(resultado * 1000) / 1000
    }

    const centimetroParaMilimetro = (valor) => {
      let resultado = parseFloat(valor) * 10
      return Math.round(resultado * 100) / 100
    }

    const centimetroParaMetro = (valor) => {
      let resultado = parseFloat(valor) / 100
      return Math.round(resultado * 100) / 100
    }

    const centimetroParaPe = (valor) => {
      let resultado = parseFloat(valor) / 30.48
      return Math.round(resultado * 100) / 100
    }

    const centimetroParaPolegada = (valor) => {
      let resultado = parseFloat(valor) / 2.54
      return Math.round(resultado * 100) / 100
    }

    const metroParaMilimetro = (valor) => {
      let resultado = parseFloat(valor) * 1000
      return Math.round(resultado * 100) / 100
    }

    const metroParaCentimetro = (valor) => {
      let resultado = parseFloat(valor) * 100
      return Math.round(resultado * 100) / 100
    }

    const metroParaPe = (valor) => {
      let resultado = parseFloat(valor) * 3.281
      return Math.round(resultado * 100) / 100
    }

    const metroParaPolegada = (valor) => {
      let resultado = parseFloat(valor) * 39.37
      return Math.round(resultado * 100) / 100
    }

    const peParaMilimetro = (valor) => {
      let resultado = parseFloat(valor) * 304.8
      return Math.round(resultado * 100) / 100
    }

    const peParaCentimetro = (valor) => {
      let resultado = parseFloat(valor) * 30.48
      return Math.round(resultado * 100) / 100
    }

    const peParaMetro = (valor) => {
      let resultado = parseFloat(valor) / 3.281
      return Math.round(resultado * 100) / 100
    }

    const peParaPolegada = (valor) => {
      let resultado = parseFloat(valor) * 12
      return Math.round(resultado * 100) / 100
    }
    
    const polegadaParaMilimetro = (valor) => {
      let resultado = parseFloat(valor) * 25.4
      return Math.round(resultado * 100) / 100
    }

    const polegadaParaCentimetro = (valor) => {
      let resultado = parseFloat(valor) * 2.54
      return Math.round(resultado * 100) / 100
    }

    const polegadaParaMetro = (valor) => {
      let resultado = parseFloat(valor) / 39.37
      return Math.round(resultado * 100) / 100
    }

    const polegadaParaPe = (valor) => {
      let resultado = parseFloat(valor) / 12
      return Math.round(resultado * 100) / 100
    }

    switch(medidaOriginal){
      case "mm":
        switch(medidaConversao){
          case "mm":
            setResultado(valor)
            break
          case "cm":
            setResultado(milimetroParaCentimetro(valor))
            break
          case "m":
            setResultado(milimetroParaMetro(valor))
            break
          case "pe":
            setResultado(milimetroParaPe(valor))
            break
          case "pol":
            setResultado(milimetroParaPolegada(valor))
            break
        }
        break
      case "cm":
        switch(medidaConversao){
          case "mm":
            setResultado(centimetroParaMilimetro(valor))
            break
          case "cm":
            setResultado(valor)
            break
          case "m":
            setResultado(centimetroParaMetro(valor))
            break
          case "pe":
            setResultado(centimetroParaPe(valor))
            break
          case "pol":
            setResultado(centimetroParaPolegada(valor))
            break
        }
        break
      case "m":
        switch(medidaConversao){
          case "mm":
            setResultado(metroParaMilimetro(valor))
            break
          case "cm":
            setResultado(metroParaCentimetro(valor))
            break
          case "m":
            setResultado(valor)
            break
          case "pe":
            setResultado(metroParaPe(valor))
            break
          case "pol":
            setResultado(metroParaPolegada(valor))
            break
        }
        break
      case "pe":
        switch(medidaConversao){
          case "mm":
            setResultado(peParaMilimetro(valor))
            break
          case "cm":
            setResultado(peParaCentimetro(valor))
            break
          case "m":
            setResultado(peParaMetro(valor))
            break
          case "pe":
            setResultado(valor)
            break
          case "pol":
            setResultado(peParaPolegada(valor))
            break
        }
        break
      case "pol":
        switch(medidaConversao){
          case "mm":
            setResultado(polegadaParaMilimetro(valor))
            break
          case "cm":
            setResultado(polegadaParaCentimetro(valor))
            break
          case "m":
            setResultado(polegadaParaMetro(valor))
            break
          case "pe":
            setResultado(polegadaParaPe(valor))
            break
          case "pol":
            setResultado(valor)
            break
        }
        break
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [medidaConversao, medidaOriginal, valor])
  
}

export default ConverterComprimento