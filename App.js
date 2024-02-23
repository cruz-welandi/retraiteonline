import { NavigationContainer} from '@react-navigation/native';
import MyStack from './src/routes/stack';

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}