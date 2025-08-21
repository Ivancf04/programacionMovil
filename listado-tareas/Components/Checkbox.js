import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Checkbox = ({ label, onValueChange }) => {
  const [seleccionado, setSeleccionado] = useState(false);

  const toggleCheckbox = () => {
    const nuevoEstado = !seleccionado;
    setSeleccionado(nuevoEstado);
    onValueChange?.(nuevoEstado);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox} style={styles.contenedor}>
      <View style={[styles.checkbox, seleccionado && styles.checkboxSeleccionado]}>
        {seleccionado && <View style={styles.checkboxInterno} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSeleccionado: {
    backgroundColor: '#007AFF',
  },
  checkboxInterno: {
    width: 12,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  label: {
    fontSize: 16,
  },
});

export default Checkbox;