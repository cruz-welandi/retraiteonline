import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const NavigationButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.navigate('Login')}>
        <AntDesign 
            name='arrowright' 
            style={{color:'#57AB4A', fontSize:70, textAlign:'center' }}
        />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    btn: {
        flex:0,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 50,
        backgroundColor: '#FFF'
    },
})


export default NavigationButton;