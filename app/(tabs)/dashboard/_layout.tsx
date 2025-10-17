import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      {/* dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            // dentro da página
            if (focused) {
              return <FontAwesome name="dashboard" size={size} color={color} />;
            }
            // fora da página
            return <FontAwesome name="dashboard" size={size} color={color} />;
          },
        }}
      />
      {/* configuracoes */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="gear" size={size} color={color} />;
            }
            return <FontAwesome name="gear" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
