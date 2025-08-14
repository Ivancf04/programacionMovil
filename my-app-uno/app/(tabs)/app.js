import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const App = () => {
  const mostrarMensaje = () => {
    Alert.alert('¡Hola!', 'Esta es mi primera app con React Native');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Mi primera app con React Native!</Text>
      <View style={styles.botonContainer}>
        <Button
          title="Presioname"
          onPress={mostrarMensaje}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  botonContainer: {
    width: '80%',
    
  },
});

export default App;