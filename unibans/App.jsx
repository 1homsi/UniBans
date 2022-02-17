import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Layout from "./Layout";

export default function App() {
  return (
    <View>
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}
