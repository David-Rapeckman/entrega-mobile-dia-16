import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const SplashScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.logo} />
      <Button title="Entrar" onPress={() => navigation.navigate('SignIn')} />
      <Text style={styles.footerText}>
        Ainda não tem uma conta?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Cadastre-se
        </Text>
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 24,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  footerText: {
    marginTop: 20,
    fontFamily: fonts.regular,
    color: colors.gray,
  },
  link: {
    color: colors.primary,
    fontFamily: fonts.bold,
  },
});
