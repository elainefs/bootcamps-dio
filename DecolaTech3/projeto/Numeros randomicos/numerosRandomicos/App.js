import React, {useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';

const corDeFundo = '#0d3d68';
const corLight = '#FFFFFF';
const corStatusBar = '#000000'

const App = () => {

  const [numero, setNumero] = useState(0)

  function handleNumero() {
    const novoNumero = Math.floor(Math.random() * 100);

    setNumero(novoNumero)
  }

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={corStatusBar} />
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.button}>
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: corDeFundo,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 24,
    color: corLight,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: corLight,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
})

export default App;