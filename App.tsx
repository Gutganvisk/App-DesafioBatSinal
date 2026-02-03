import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert, ScrollView, Keyboard} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const toggleSwitch = () => setMostrarFormulario(previousState => !previousState);

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        {!mostrarFormulario ? (
        <SafeAreaProvider>
          <SafeAreaView>
            <View style={styles.homeContainer}>
              <View style={styles.logoContainer}>
                <Image style={styles.logoHome}
                  source={require('C:/Users/guilh/OneDrive/Documentos/Dev Guilherme/02 - PROJETOS/Mobile/App-DesafioBatSinal/assets/Batman-Logo-2000.png')}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={toggleSwitch} style={styles.button}>
                  <Text style={styles.textButton}>ATIVAR</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
        ) :
        (
        <View style={styles.formScreen}>
         <TouchableOpacity onPress={toggleSwitch}>
          <View style={styles.logoFormContainer}>
              <Image style={styles.logoForm}
                source={require('./assets/Batman-Logo-2000.png')}
              />
          </View>
          </TouchableOpacity> 
          <View style={styles.formContainer}>
            <Text style={styles.label}>Nome completo</Text>
            <TextInput 
              style={styles.input} 
              placeholder='Nome'
            />
            
            <Text style={styles.label}>Telefone</Text>
            <TextInput 
              style={styles.input} 
              placeholder='(XX)XXXXX-XXXX' 
              keyboardType='numbers-and-punctuation'
            />
            
            <Text style={styles.label}>Localização atual</Text>
            <TextInput 
              style={styles.input} 
              placeholder='Digite sua localização ou um ponto de referência próximo'
              multiline={true}
              numberOfLines={3}
            />
            
            <Text style={styles.label}>Observação</Text>
            <TextInput 
              style={styles.input} 
              placeholder='Digite a sua observação'
              multiline={true}
              numberOfLines={4}
            />
            
            <TouchableOpacity 
              onPress={() => {
                Alert.alert('Formulário enviado!');
                toggleSwitch();
              }} 
              style={[styles.button, styles.submitButton]}
            >
              <Text style={styles.textButton}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
        )}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadad',
  },
  
  // TELA INICIAL
  homeContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 160,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 160,
  },
  
  // TELA FORMULÁRIO
  formScreen: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  logoFormContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  logoForm: {
    width: 150,
    height: 75,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  
  // COMPONENTES COMUNS
  button: {
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#4e4e4e',
    alignItems: 'center',
    minWidth: 200,
  },
  submitButton: {
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoHome: {
    width: 300,
    height: 150,
  },
  
  // FORMULÁRIO
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft: 12,
    color: '#333',
  },
  input: {
    height:'auto',
    marginHorizontal: 12,
    marginBottom: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderColor: '#6c6c6c',
    borderRadius: 8,
    backgroundColor: 'white',
    fontSize: 16,
  }
});