import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ImageBackground,
  Image,
  FlatList,
  Alert,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';
import api from '../../services/api';

export default function Main() {
  const [repos, setRepos] = useState([]);
  const [avatar, setAvatar] = useState('');
  const [user, setUser] = useState('');

  async function loadReposite() {
    try {
      const response = await api.get(`${user}/repos`);

      setRepos(response.data);
      setUser('');
    } catch (err) {
      setRepos([]);
      Alert.alert('Usuário não encontrado!');
      setUser('');
    }
  }

  if (repos) {
    var image = {
      uri: repos[0]
        ? repos[0].owner.avatar_url
        : 'https://media.wired.com/photos/5b17381815b2c744cb650b5f/master/w_2000,c_limit/GettyImages-134367495.jpg',
    };
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchUser}>
          <TextInput
            keyboardShoulPersistTaps="handled"
            style={styles.inputText}
            onChangeText={(text) => setUser(text)}
            value={user}
            placeholder={'Digite o nome de Usuário'}
          />
          <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => loadReposite()}>
            <Icon name="search1" size={28} />
          </TouchableOpacity>
        </View>

        <View style={styles.quadradoImage}>
          <Image source={image} style={styles.imageUser} />
        </View>

        <Text style={styles.textRepo}> {repos.length} REPOSITÓRIO(S)</Text>
        <FlatList
          data={repos}
          keyExtractor={(item) => String(item.id)}
          style={styles.listView}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.backInformation}>
              <Text style={styles.titleRepo}>{item.name}</Text>
              <Text style={styles.textInformation} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.textInformation}>{item.language}</Text>
              <View style={styles.divForkStar}>
                <View style={styles.itens}>
                  <Icon name="fork" size={24} color="#ffffff" />
                  <Text style={styles.textInputRep}>{item.forks}</Text>
                </View>
                <View style={styles.itens}>
                  <Icon name="star" size={24} color="#ffffff" />
                  <Text style={styles.textInputRep}>
                    {item.stargazers_count}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}
