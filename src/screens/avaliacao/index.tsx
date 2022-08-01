import { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";

import { styles } from "./styles";
import SettingsIcon from "../../../assets/app/settings.png";
import Pessimo from "../../../assets/app/pessimo.png";
import Ruim from "../../../assets/app/ruim.png";
import Neutro from "../../../assets/app/neutro.png";
import Bom from "../../../assets/app/bom.png";
import Otimo from "../../../assets/app/otimo.png";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Avaliation({ navigation }) {
  const [disabledButton, setDisabledButton] = useState(false);
  const [screenTitle, setScreenTitle] = useState<any>();

  useEffect(() => {
    AsyncStorage.getItem("@avaliacao:tituloTela").then((text) =>
      setScreenTitle(text)
    );
  }, []);

  function settingsNavigation() {
    navigation.navigate("Login");
  }
  const sucessAlert = () => {
    Alert.alert("Sucesso", "Sua avaliação foi enviada com sucesso."),
      [
        {
          text: "OK",
          style: "default",
        },
      ];
  };

  const failedAlert = (msg: string) => {
    Alert.alert("Falha", msg),
      [
        {
          text: "OK",
          style: "default",
        },
      ];
  };

  const timeout = () => {
    setTimeout(() => {
      setDisabledButton(false);
    }, 5000);
  };

  const handleForm = async (avaliation: string) => {
    const sector = await AsyncStorage.getItem("@avaliacao:setor");
    const device = await AsyncStorage.getItem("@avaliacao:dispositivo");
    const company = await AsyncStorage.getItem("@avaliacao:nomeDaEmpresa");

    try {
      if (sector === null || device === null || company === null) {
        console.log({ sector, device, company });
        return failedAlert("Os campos da empresa não estão preenchidos");
      } else {
        await api.post("/avaliar", {
          sector,
          device,
          company,
          avaliation,
        });
        setDisabledButton(true);
        sucessAlert();
        timeout();
      }
    } catch (err: any) {
      return failedAlert("Erro no servidor");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.header}>
        <TouchableOpacity onPress={settingsNavigation}>
          <Image source={SettingsIcon} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>{screenTitle}</Text>
      </View>
      <View style={styles.displayIcons}>
        <TouchableOpacity
          disabled={disabledButton}
          style={disabledButton ? styles.disabledButton : styles.button}
          onPress={() => {
            handleForm("pessimo");
          }}
        >
          <Image source={Pessimo} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabledButton}
          onPress={() => {
            handleForm("ruim");
          }}
        >
          <Image source={Ruim} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabledButton}
          onPress={() => {
            handleForm("neutro");
          }}
        >
          <Image source={Neutro} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabledButton}
          onPress={() => {
            handleForm("bom");
          }}
        >
          <Image source={Bom} style={styles.Icons} />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disabledButton}
          onPress={() => {
            handleForm("otimo");
          }}
        >
          <Image source={Otimo} style={styles.Icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
