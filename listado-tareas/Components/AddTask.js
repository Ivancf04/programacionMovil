import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

function AddTask() {
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.contenedor}>
            <TextInput
                style={styles.input}
                placeholder="Agregar tarea..."
                value={texto}
                onChangeText={setTexto}
            />
            <TouchableOpacity style={styles.boton}>
                <Text style={styles.textoBoton}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        width: '65%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    boton: {
        width: '30%',
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default AddTask;