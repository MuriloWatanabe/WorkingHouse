import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import Home from './src/screens/Home'
import Perfil from './src/screens/Perfil'

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Perfil />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});