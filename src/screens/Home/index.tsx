import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ListDevs } from "../../../components/listDevs";
import { styles } from "./styles";

export function Home() {
  const [devs, setDevs] = useState<string[]>([]);
  const [devName, setDevName] = useState("");

  function handleDevAdd() {
    if (devs.includes(devName)) {
      return Alert.alert(`${devName} Já foi adicionado na lista...`);
    }
    if (devName !== "") {
      setDevs((prevState) => [...prevState, devName]);
      setDevName("");
    }
  }

  function handleDevRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o Dev ${name} da lista da lions?`, [
      {
        text: "Sim",
        onPress: () => {
          setDevs((prevState) => prevState.filter((devs) => devs !== name));
          Alert.alert("Romovido!");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Lista de Devs da Lions</Text>
      <Text style={styles.subTitleText}>Veja aqui os Devs 🚀:</Text>

      <View style={styles.containerForm}>
        <TextInput
          style={styles.textInput}
          placeholder="Nome do Dev"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={(e) => setDevName(e)}
          value={devName}
        />

        <TouchableOpacity style={styles.button} onPress={handleDevAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={devs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ListDevs
            key={item}
            name={item}
            onRemove={() => handleDevRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.titleVoid}>
            Você ainda não adicionou ninguém do squad 🤡
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {Devs.map((item, index) => {
          return (
            <ListDevs key={index} name={item} onRemove={handleDevRemove} />
          );
        })}
      </ScrollView> */}
    </View>
  );
}
