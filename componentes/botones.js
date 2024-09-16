
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const Botones = ({ alIncrementar, alReiniciar, estaClicActivo, estaReinicioActivo }) => {
  
  return (
    <View>
      <TouchableOpacity style={estilos.boton} onPress={alIncrementar}>
        <Text style={[estilos.textoBoton, estaClicActivo && estilos.textoActivo]}>Clic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilos.botonReiniciar} onPress={alReiniciar}>
        <Text style={[estilos.textoBoton, estaReinicioActivo && estilos.textoActivo]}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};


const estilos = StyleSheet.create({
  boton: {
    backgroundColor: '#0000FF', 
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    borderRadius: 5, 
    width: 200, 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  botonReiniciar: {
    backgroundColor: '#008000', 
    paddingHorizontal: 30, 
    paddingVertical: 10, 
    borderRadius: 5, 
    width: 200, 
    alignItems: 'center', 
  },
  textoBoton: {
    color: '#FFFFFF', 
    fontSize: 18, 
  },
  textoActivo: {
    color: '#FFFF00', 
  }
});


export default Botones;
