import React from "react";
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from "react-native";

export default function Home({ navigation }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSignUp = () => {
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        <Text>Nome:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text>Senha:</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={styles.input}
        />
        <Text>Confirmar Senha:</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.bottomSection}>
        <Button title="Cadastrar" onPress={handleSignUp} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  topSection: {
    width: '80%', 
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
  bottomSection: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center', 
  },
});
