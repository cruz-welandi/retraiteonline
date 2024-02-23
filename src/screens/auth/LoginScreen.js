import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
    const navigation = useNavigation();
    return(

        <KeyboardAwareScrollView
            style={{ flex: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled={true}
        >
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                    <Image
                        source={require('/Users/HP/Desktop/React Js/react native/retraiteonline/src/assets/logo.png')}
                        style={styles.image}
                    />
                    <View style={styles.conForm}>
                    <Text style={styles.title}>
                        Connectez-vous
                    </Text>
                    <View style={styles.conInput}>
                        <Text style={styles.inputTexte}>Email</Text>
                        <TextInput style={styles.input}/>
                    </View>
                    <View>
                        <Text style={styles.inputTexte}>Mot de passe</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.textGreen}>Mot de passe oublier</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => console.log("press me")}>
                        <Text style = {styles.textbtn}>
                            Connexion
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.texte}>
                            Vous n'avez pas encore un compte <Text> </Text>
                            <Text style={styles.textGreen} onPress={() => navigation.navigate('Register')}>
                                inscrivez-vous
                            </Text>
                        </Text> 
                    </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAwareScrollView>
    );

};

const styles =  StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#57AB4A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 230,
        height:230,
    },
    conForm: {
        flex: 0,
        backgroundColor: '#FFFF',
        height: 430,
        width: 310,
        padding:20,
        borderRadius: 25,
    },
    title: {
        color: '#57AB4A',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
    },
    conInput:{
        marginVertical: 25,
    },
    input: {
        backgroundColor: '#e5e7eb',
        width: 250,
        height: 40,
        marginLeft: 5,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 10,
    },
    inputTexte:{
        marginLeft: 6,
    },
    textGreen: {
        color:'#57AB4A',
        textAlign: 'right',
        fontStyle: 'italic',
        marginRight: 12,
        marginTop: 3,
        marginBottom: 20,
    },
    textGreen_1: {
        color:'#57AB4A',
    },
    button :{
        backgroundColor: '#57AB4A',
        width: 150,
        height: 40,
        marginLeft: 55,
        borderRadius: 10,

    },
    textbtn:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18,
        marginTop: 6
    },
    texte: {
        textAlign: 'center',
        marginTop: 12,
    }
});


export default LoginScreen;