import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FriendsList } from "../../components/FriendsList";

export function Home() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);

  async function handleSearch() {
    const response = await fetch(`http://192.168.1.112:3333/friends?q=${name}`);
    const data = await response.json();
    setFriends(data);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Amigos</Text>
      <TextInput
        placeholder="Nome do cliente"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <Button title="Buscar" onPress={handleSearch} />
      <ScrollView style={styles.list}>
        <FriendsList data={friends} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  input: {
    borderWidth: 1,
    padding: 7,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
