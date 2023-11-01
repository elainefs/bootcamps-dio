import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, Alert, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import foto from './assets/elaineferreira.jpg';

import Card from  './assets/components/card/index';

const App = () => {

  function handleRedeSocial(redeSocial) {
    switch(redeSocial){
      case 'github':
        Alert.alert('Meu GitHub', 'https://github.com/elainefs')
      break
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://linkedin.com/in/elaineferreiras')
      break
      case 'instagram':
        Alert.alert('Meu Instagram', 'https://instagram.com/elainefs_')
      break
    }
  }

  return (
    <>
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={foto} style={styles.foto} />
        <Text style={styles.nome}>Elaine Ferreira</Text>
        <Text style={styles.funcao}>Web Developer</Text>
        <View style={styles.redesSociais}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
            <Icon name="instagram" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <StatusBar style="auto" />

      <Card titulo="Experiência Profissional">
        <Text style={styles.contentExp}>Experiência Profissional 01</Text>
        <Text style={styles.contentExp}>Experiência Profissional 02</Text>
        <Text style={styles.contentExp}>Experiência Profissional 03</Text>
      </Card>
      <Card titulo="Experiência Profissional">
        <Text style={styles.contentExp}>Experiência Profissional 01</Text>
        <Text style={styles.contentExp}>Experiência Profissional 02</Text>
        <Text style={styles.contentExp}>Experiência Profissional 03</Text>
      </Card>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  nome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  contentExp: {
    color: '#939393',
    marginBottom: 10,
  }
});

export default App;