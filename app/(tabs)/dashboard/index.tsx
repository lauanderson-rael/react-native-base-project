import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text> Painel de Controle</Text>
      <Button title="Ir para Home" onPress={() => router.replace("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
