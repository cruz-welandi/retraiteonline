import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import StartScreen from '../screens/pages/StartSreen';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Start" 
        component={StartScreen} 
        options={{
          headerShown: false, //Ceci enlève l'en-tête complet, y compris la bande blanche
        }}
        />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerShown: false, //Ceci enlève l'en-tête complet, y compris la bande blanche
        }}
        />
      <Stack.Screen 
        name="Register" 
        component={RegisterScreen} 
        options={{
          headerShown: false, //Ceci enlève l'en-tête complet, y compris la bande blanche
        }}
      />
    </Stack.Navigator>
  );
}
