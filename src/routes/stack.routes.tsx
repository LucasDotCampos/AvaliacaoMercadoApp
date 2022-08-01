import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";
import Avaliation from "../screens/avaliacao";
import Settings from "../screens/settings";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Avaliation" component={Avaliation} />
      <Screen name="Login" component={Login} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}
