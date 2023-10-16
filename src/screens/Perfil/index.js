import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import ger from "../icons/gertrudes.png"

const Perfil = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileName}>Nome do Perfil</Text>
        <Text style={styles.profileRating}>Avaliação: 4.5 ⭐</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Serviços Realizados</Text>
        <Text style={styles.serviceCount}>150 Serviços</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Endereço</Text>
        <Text style={styles.address}>123 Rua Exemplo, Cidade</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Descrição</Text>
        <Text style={styles.description}>
          Descrição do perfil do prestador de serviços. Inclua informações detalhadas sobre as habilidades e experiência.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Serviços Oferecidos</Text>
        <View style={styles.serviceTable}>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>Serviço 1</Text>
            <Text style={styles.servicePrice}>R$50</Text>
          </View>
          <View style={styles.serviceRow}>
            <Text style={styles.serviceName}>Serviço 2</Text>
            <Text style={styles.servicePrice}>R$75</Text>
          </View>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
          }}
        >
          <Text style={styles.buttonText}>Adicionar Imagem</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
          }}
        >
          <Text style={styles.buttonText}>Notificação/Mensagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileRating: {
    fontSize: 16,
  },
  section: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  serviceCount: {
    fontSize: 16,
  },
  address: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
  },
  serviceTable: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  serviceName: {
    fontSize: 16,
  },
  servicePrice: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Perfil;
