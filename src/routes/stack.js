import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import StartScreen from '../screens/pages/StartSreen';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

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

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Historique" component={HistoriqueScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
