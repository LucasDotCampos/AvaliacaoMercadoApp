import { View, Text, TextInput, Alert } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export default function Settings({ navigation }) {
  const [setor, setSetor] = useState("");
  const [dispositivo, setDispositivo] = useState("");
  const [nomeDaEmpresa, setNomeDaEmpresa] = useState("");
  const [tituloTela, setTituloTela] = useState("");

  async function handleForm() {
    await AsyncStorage.setItem("@avaliacao:setor", setor);
    await AsyncStorage.setItem("@avaliacao:dispositivo", dispositivo);
    await AsyncStorage.setItem("@avaliacao:nomeDaEmpresa", nomeDaEmpresa);
    await AsyncStorage.setItem("@avaliacao:tituloTela", tituloTela);

    navigation.navigate("Avaliation");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
      <TextInput
        placeholder="Setor"
        onChangeText={(text) => setSetor(text)}
        style={styles.input}
      />
      <TextInput
        style={styles.input}
        placeholder="Dispositivo"
        onChangeText={(text) => setDispositivo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome da empresa"
        onChangeText={(text) => setNomeDaEmpresa(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Título da tela"
        onChangeText={(text) => setTituloTela(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleForm}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
