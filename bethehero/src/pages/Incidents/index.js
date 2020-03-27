import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../assets/logo.png';

import styles from './style';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  async function loadIncidents() {
    const response = await api.get('incidents');

    setIncidents(response.data);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.descriptions}>
        Escolha um dos caso abaixo e salve o dia.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentsList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.descriptions}</Text>

            <Text style={styles.incidentProperty}>VALOR</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigateToDetail}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Icon name="arrow-right" size={28} color="#E82041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
