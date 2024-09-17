import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Importar suas telas (crie essas telas ou importe as que você já tem)
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/SignIn';

// Criar o Stack Navigator
const Stack = createNativeStackNavigator();

// Adicione as telas ao Stack Navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">

        {/* Adicione as telas ao Stack Navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;