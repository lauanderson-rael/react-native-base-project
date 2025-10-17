import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#121212" },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="details" options={{ title: "Detathes" }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

/*

Stack (pilha de telas)
- O Stack organiza as telas em uma pilha, onde uma tela pode ser empilhada sobre a outra.
- Cada vez que você navega para uma nova tela, ela é empilhada sobre a anterior.
- Quando volta, ela é desempilhada (como apertar o botão “voltar” do celular).

  Tela A (Home)
    ↓
  Tela B (Detalhes)
    ↓
  Tela C (Perfil)

import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
    </Stack>
  );
}


Tabs (abas de navegação)
- Representa uma navegação por abas (tab bar) — aquelas que ficam normalmente no rodapé do app.
- Ideal quando você quer mudar entre seções principais do app.
- Cada aba é independente, sem empilhar uma sobre a outra.

[ Home ] [ Pesquisar ] [ Perfil ]

import { Tabs } from "expo-router";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
 */
