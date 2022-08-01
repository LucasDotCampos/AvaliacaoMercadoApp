import Login from "./src/screens/login";
import * as ScreenOrientation from "expo-screen-orientation";
import { Routes } from "./src/routes";
import Avaliation from "./src/screens/avaliacao";
import { SafeAreaView } from "react-native";

export default function App() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  return <Routes />;
}
