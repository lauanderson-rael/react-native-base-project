import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Pagian principal</Text>
      <Link href={"/details"} style={{ color: "blue" }}>
        Detalhes
      </Link>

      <Link href={"/dashboard"} style={{ color: "blue" }}>
        Deshboard
      </Link>
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

// Essa é a tela principal, que está dentro da pasta (home)
