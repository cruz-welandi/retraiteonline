import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import NavigationButton from '../../components/NavigationButton';


export default function StartScreen() {

  return (
      <View style={styles.container}>
        <Text style={styles.texte}>Bienvenue sur retraite online votre partenaire de confiance pour une gestion de retraite sereine !</Text>
        <NavigationButton/>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57AB4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texte: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginRight: 12,
    marginLeft: 12,
  }
});