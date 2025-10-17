# Documento de estudos - React Native

<details>
<summary style="font-size:22">🧭 Diferença entre `Stack` e `Tabs` no Expo Router</summary><hr/>

Quando usamos o `expo-router`, temos dois tipos principais de navegação: **Stack** e **Tabs**.  
Cada um serve para um propósito diferente dentro do app.

---

### 1. `Stack` (pilha de telas)

Representa uma **navegação em pilha**, como páginas empilhadas umas sobre as outras.

- Cada vez que você navega para uma nova tela, ela é **empilhada sobre a anterior**.
- Quando volta, ela é **desempilhada** (como apertar o botão “voltar” do celular).
- É o tipo mais comum em apps: menu → detalhes → confirmar, etc.

**Analogia:**  
Pense como um baralho: cada carta é uma tela. Você coloca uma nova por cima (push), e tira ela depois (pop).

📱 **Exemplo visual:**

```
Tela A (Home)
↓
Tela B (Detalhes)
↓
Tela C (Perfil)
```

**Exemplo de uso:**

```jsx
import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
```

Navegue com router.push("/detalhes") e volte com router.back().

### 2. `Tabs` (abas de navegação)

Representa uma navegação por abas (tab bar) — aquelas que ficam normalmente no rodapé do app.

Ideal quando você quer mudar entre seções principais do app.

Cada aba é independente, sem empilhar uma sobre a outra.

Exemplo típico: “Home”, “Perfil”, “Configurações”.

📱 Exemplo visual:

```
[ Home ] [ Pesquisar ] [ Perfil ]
```

Exemplo de uso:

```jsx
import { Tabs } from "expo-router";
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
```

</details>

<details> 
<summary style="font-size:22">🧭 O que é o `Layout` no Expo Router</summary><hr/>

No **Expo Router**, o arquivo **`_layout.js`** (ou `_layout.tsx`) define **a estrutura de navegação** e o **layout base** das telas dentro de uma pasta.

Ele funciona como **um “molde”** que organiza as telas e decide **como elas serão exibidas** — por exemplo, se usarão um **Stack**, **Tabs**, **Drawer**, ou outro tipo de navegação.

---

### Como o `Layout` funciona

- O Expo Router usa **o sistema de pastas** (`app/`) para criar automaticamente as rotas do app.
- Dentro de cada pasta, você pode criar um **`_layout.js`** para definir **como as telas daquela pasta se comportam**.
- Esse layout **engloba todas as telas** dentro da mesma pasta.

**Exemplo de estrutura:**

```
app/
├── _layout.js ← Layout principal do app
├── index.js ← Tela inicial
├── detalhes.js ← Tela de detalhes
└── perfil/
├── _layout.js ← Layout específico da aba "perfil"
├── index.js ← Tela principal do perfil
└── editar.js ← Tela de edição de perfil
```

### Exemplo 1 com `Stack`

Se você quer que as telas sejam empilhadas (navegação tradicional), use:

```jsx
// app/_layout.js
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Início" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
```

Isso faz com que index.js e detalhes.js usem o mesmo Stack.
Quando você chamar router.push("/detalhes"), a tela de detalhes é empilhada sobre a inicial.

### Exemplo 2 com `Tabs`

Se você quer um menu de abas na parte inferior (navegação por seções), use:

```jsx
// app/_layout.js
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
    </Tabs>
  );
}
```

Agora o app terá abas fixas para alternar entre “Início” e “Perfil”.

### Exemplo 3 com `Layouts aninhados`

Você também pode misturar Tabs e Stack, criando layouts dentro de layouts.

```jsx
// app/_layout.js → Layout principal com Tabs
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="perfil" />
    </Tabs>
  );
}

// app/home/_layout.js → Layout interno do grupo "home" com Stack
import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Página Inicial" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
```

Assim:

- O app tem abas (“Home” e “Perfil”).
- Dentro da aba Home, há uma navegação em pilha entre “Página Inicial” e “Detalhes”.

</details>
