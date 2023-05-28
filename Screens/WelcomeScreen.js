import * as React from 'react';
import { StyleSheet, Text, View,Pressable, ImageBackground } from 'react-native';
export default function WelcomeScreen(props){
    return(
        <ImageBackground style={styles.container}
        source={require('../assets/welcome.jpeg')}
        resizeMode='cover'>
            <Text style={styles.headertxt}>Let Your Favourite {'\n'}Food Find You</Text>
                  <Pressable style={styles.btn} onPress={()=> props.navigation.navigate('Main')}>
                      <Text style={styles.btntxt}>Explore Now</Text>
                  </Pressable>
        </ImageBackground>
    );
}
const styles= StyleSheet.create({
    container:{
            flex: 1,
            backgroundColor: '#fff',       
    },
    headertxt:{
        fontSize:35,
        fontWeight:'bold',
        color:'white',
        marginTop:'110%',
        marginLeft:'5%',
    },
    btn:{
        marginTop:'7%',
        marginLeft:'6%',
        marginRight:'8%',
        backgroundColor:'white',
        selectlabelcolor:'red',
        borderRadius:50,
    },
    btntxt:{
        marginLeft:'3.5%',
        fontSize:35,
        textAlign:'left',
    },  
});