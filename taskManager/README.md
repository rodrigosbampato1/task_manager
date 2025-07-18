# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.


##  Projeto: Lista de Tarefas (To-do App)

Um aplicativo de gerenciamento de tarefas simples com as seguintes funcionalidades:

- Adicionar nova tarefa com validação.
- Exibir lista de tarefas com estilo dinâmico (concluído ou não).
- Marcar tarefa como concluída ao tocar.
- Limpar tarefas concluídas com confirmação via modal.
- Feedback visual com modais e toasts.
- Navegação entre telas com React Navigation.
- Armazenamento de dados com Context API.


##  Bibliotecas utilizadas

- `react-native`
- `react-navigation/native`
- `@react-navigation/native-stack`
- `styled-components`


##  Funcionalidades avançadas

###  Adicionar tarefas

- Exibe modal de erro se o campo estiver vazio.
- Exibe toast de sucesso após adicionar.
- Redireciona automaticamente para tela principal após 3 segundos.

###  Limpar tarefas concluídas

- Exibe modal perguntando se deseja realmente limpar.
- Exibe toast ao limpar com sucesso.

###  Imagem de cabeçalho

Imagem localizada em: `src/assets/images/header.png`

###  Estilização

Estilização feita com `styled-components` em arquivos separados (`styles.ts`). As tarefas têm borda, fundo diferenciado e efeito visual.


## ▶️ Inicialização do Projeto

```bash
npm install
npx expo start
```

Abra no simulador ou via QR code com o aplicativo Expo Go.