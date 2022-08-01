import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { api } from "../../services/api";
import { styles } from "./styles";

export default function Login({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const failedAlert = (msg: string) => {
    Alert.alert("Falha", msg),
      [
        {
          text: "OK",
          style: "default",
        },
      ];
  };

  const handleLogin = async () => {
    try {
      const response = await api.post("/login", { name, password });
      if (response.data.token !== "") {
        navigation.navigate("Settings");
      }
      return;
    } catch (err: any) {
      if (err.response.status === 400) {
        return failedAlert("Usuário ou senha inválidos");
      } else {
        return failedAlert("Erro no servidor");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBlock}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          placeholder={"Nome"}
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Senha"}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
