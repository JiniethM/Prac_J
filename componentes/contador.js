
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Contador = ({ cuenta }) => {
 
  return (
    <View style={estilos.contenedorContador}>
      <Text style={estilos.contador}>{cuenta}</Text>
    </View>
  );
};


const estilos = StyleSheet.create({
  contenedorContador: {
    width: 100, 
    height: 100, 
    backgroundColor: '#333333', 
    borderRadius: 5, 
    borderColor: '#FFFFFF', 
    borderWidth: 2, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20, 
  },
  contador: {
    color: '#FFFFFF', 
    fontSize: 30, 
  },
});


export default Contador;
