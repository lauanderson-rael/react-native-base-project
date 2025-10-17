import { StyleSheet, Text, View } from "react-native";

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
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

// Essa é a tela de detalhes, que está dentro da pasta (home)
