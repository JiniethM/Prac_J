
import React, { useState } from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';
import Contador from './componentes/contador';
import Botones from './componentes/botones';


export default function App() {

  const [contador, setContador] = useState(5);


  const manejarPresionar = () => setContador(contador + 1);


  const manejarReiniciar = () => setContador(0);


  return (
    <View style={estilos.contenedor}>
      <StatusBar barStyle="light-content" />
      <Image source={require('./logo/logofreeCode.png')} style={estilos.logo} /> 
      <Contador cuenta={contador} />
      <Botones alIncrementar={manejarPresionar} alReiniciar={manejarReiniciar} />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1, 
    backgroundColor: '#000000', 
    alignItems: 'center', 
    justifyContent: 'flex-start', 
    paddingTop: 160, 
  },
  logo: {
    width: '100%', 
    height: 60, 
    resizeMode: 'contain', 
    marginBottom: 40, 
  },
});
