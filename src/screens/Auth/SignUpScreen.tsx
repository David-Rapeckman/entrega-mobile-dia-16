import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { globalStyles } from '../../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { signIn } = useAuth();

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSignUp = async () => {
    if (!name || !birthdate || !email || !password || !confirm) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    if (password !== confirm) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      // Simulação de conta criada
      await signIn(email, password);
      Alert.alert('Sucesso', 'Conta criada e login realizado!');
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Tente novamente.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={[globalStyles.container, styles.container]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>Criar Conta</Text>

      <Input placeholder="Nome completo" value={name} onChangeText={setName} />
      <Input placeholder="Data de nascimento" value={birthdate} onChangeText={setBirthdate} />
      <Input placeholder="E-mail" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Input placeholder="Confirmar senha" value={confirm} onChangeText={setConfirm} secureTextEntry />

      <Button title="Cadastrar" onPress={handleSignUp} />

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>
          Já possui uma conta? <Text style={styles.link}>Entrar</Text>
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 24,
  },
  linkText: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.gray,
    marginTop: 16,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
    