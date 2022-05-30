import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { getStartPage } from "./src/lib/pageManager";
import CalenderPage from "./src/page/calenderPage";
import TestPage from "./src/page/testPage";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  // return getStartPage() ? <CalenderPage /> : "";
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={CalenderPage} />
        <Stack.Screen name="Test" component={TestPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
