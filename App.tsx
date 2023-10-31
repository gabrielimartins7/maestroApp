import { TextInput, TouchableOpacity, View, Text, Alert } from 'react-native';
import { useState } from 'react';

import { styles } from './styles';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleSignIn(){
    if(email === 'gabrieli@gmail.com' && password === '123') {
      setIsValid(true);
    }else{
      Alert.alert('Email ou senha inválido!');
      setIsValid(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='E-mail'
        onChangeText={setEmail}
        testID='input-email'
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        secureTextEntry
        onChangeText={setPassword}
        testID='input-password'
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSignIn}
      testID='button-signIn'
      >
        <Text style={styles.buttonTitle}>
          Entrar
        </Text>
      </TouchableOpacity>

      {
        isValid &&
        <Text style={styles.message}>Acesso Liberado!</Text>
      }
    </View>
  );
}