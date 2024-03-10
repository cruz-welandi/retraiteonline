import {ScrollView, StyleSheet, Text, Image,  View, TouchableOpacity, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';


const Separator = () => <View style={{ width: 15 }} />; // Séparateur avec une largeur de 20

function RegisterScreen() {
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
                    source ={require('../../assets/logo.png')}
                    style={styles.image}
                />
                <View style={styles.formContainer}>
                    <Text style={styles.title}>
                        Inscrivez-vous
                    </Text>

                    <View style={styles.inputName}>
                       <View>
                            <TextInput 
                                style={styles.inputNoms}
                                placeholder="Votre nom"
                            />
                       </View>
                       <Separator />
                       <View>
                            <TextInput 
                                style={styles.inputNoms}
                                placeholder="Votre prénom"
                            />
                       </View>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Votre email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Matricule CNSS"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Votre mot de passe"
                    />
                     <TextInput
                        style={styles.input}
                        placeholder="Comfirmez votre mot de passe"
                    />
                    <TouchableOpacity style={styles.button} onPress={() => console.log("press me")}>
                        <Text style = {styles.textbtn}>
                            Inscription
                        </Text>
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.texte}>
                            Vous avez déjà un compte <Text> </Text>
                            <Text style={styles.textGreen} onPress={() => navigation.navigate('Login')}>
                                connectez-vous
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
    container : {
        flex: 1,
        backgroundColor: '#57AB4A',
        alignItems: 'center',
        justifyContent: 'center',

    },
    image:{
        width: 230,
        height:230,
    },
    title: {
        color: '#57AB4A',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15,
    },
    scrollContainer:{
        flex: 1,
    },
    formContainer: {
        flex: 0,
        alignItems: 'start',
        width: 330,
        height: 490,
        backgroundColor: '#FFF',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    inputName:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputNoms: {
        backgroundColor: '#e5e7eb',
        width: 140,
        height: 45,
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    input: {
        backgroundColor: '#e5e7eb',
        width: 292,
        height: 45,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        justifyContent: 'flex-start'
    },
    button : {
        backgroundColor: '#57AB4A',
        width: 150,
        height: 40,
        marginLeft: 75,
        marginTop: 20,
        borderRadius: 10,

    },
    textbtn: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 18,
        marginTop: 6
    },
    textGreen: {
        color:'#57AB4A',
        textAlign: 'right',
        fontStyle: 'italic',
        marginRight: 12,
        marginTop: 3,
        marginBottom: 20,
    },
    texte: {
        textAlign: 'center',
        marginTop: 12,
    }
});


export default RegisterScreen;