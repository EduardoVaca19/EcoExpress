import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper'; // Usamos Card de react-native-paper

export default function App() {
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.container}>
      <Card style={styles.profileCard}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Imagen de perfil de ejemplo
          style={styles.profileImage}
        />
        <Text style={styles.name}>Juan Pérez</Text>
        <Text style={styles.email}>juan.perez@ecoexpress.com</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de teléfono"
          value={telefono}
          onChangeText={setTelefono}
        />
        <Button title="Guardar cambios" onPress={() => console.log('Cambios guardados')} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  profileCard: {
    width: '90%',
    padding: 20,
    borderRadius: 10, // Efecto visual: bordes redondeados
    elevation: 5, // Efecto visual: sombra (solo para Android)
    shadowColor: '#000', // Efecto visual: sombra (solo para iOS)
    shadowOffset: { width: 0, height: 2 }, // Efecto visual: sombra (solo para iOS)
    shadowOpacity: 0.25, // Efecto visual: sombra (solo para iOS)
    shadowRadius: 3.84, // Efecto visual: sombra (solo para iOS)
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});