import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
export default function SignupScreen(props) {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [password, setpassword] = useState('');
    const [cpass, setcpass] = useState('');
    const [error, setError] = useState('')
    const onSubmit = () => {
        if (name === ''){
            showError('Name is Required',1500);  
        }
        else if (email === ''){
            showError('Email is Required',1500);  
        }
        else if (!email.includes("@")){
            showError('Email is Required',1500);  
        }
        else if (phone === ''){
            showError('Cell No is Required',1500);  
        }
        else if(adress === ''){
            showError('Address is Required',1500);  
        }
        else if(password.length<8){
            showError('Passward not less than 8 characters',1500);  
        }
        else if(cpass === ''){
            showError('Passward is Required',1500); 
        }
        else if(password !== cpass){
            showError('Passward does not match',1500); 
        }
        else{
            props.navigation.replace('Welcome')
            alert('Signup Successfully')       
        }
    }
    const showError = (text, duration) => {
        setError(text);
        setTimeout(() => {
          setError('');
        }, duration);
      };
    return (
        <View style={styles.container}>
            <Image style={styles.img}
                source={require('../assets/form.jpg')}
                resizeMode='stretch'>
            </Image>
            <ScrollView >
                <Text style={styles.txt1}>Let's Get Started</Text>
                <Text style={styles.txt2}>Create an account to get all features</Text>
                <Text style={{color:'red',fontSize:10,textAlign:'center'}}>{error}</Text>
                <TextInput style={styles.input}
                    placeholder={'Full Name'}
                    value={name}
                    onChangeText={value => setname(value)}
                />
                <TextInput style={styles.input}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={value => setemail(value)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TextInput style={styles.input}
                    placeholder={'Phone'}
                    value={phone}
                    onChangeText={value => setphone(value)}
                    autoCapitalize='none'
                    keyboardType='phone-pad'
                />
                <TextInput style={styles.input}
                    placeholder={'Passward'}
                    value={password}
                    onChangeText={value => setpassword(value)}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <TextInput style={styles.input}
                    placeholder={'Confirm Passward'}
                    value={cpass}
                    onChangeText={value => setcpass(value)}
                    autoCapitalize='none'
                    secureTextEntry={true}
                />
                <Pressable style={styles.btn1} onPress={onSubmit}>
                    <Text style={styles.btntxt}>CREATE</Text>
                </Pressable>
                <View style={styles.view2}>
                    <Text>Already have an account</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                        <Text style={styles.txt}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    img: {
        marginTop: '1%',
        marginLeft: '5%',
        width: '90%',
        height: '35%',
    },
    txt1: {
        marginTop: '1%',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    txt2: {
        fontSize: 15,
        textAlign: 'center',
    },
    input: {
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        fontSize: 20,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#87CEFA',
        textAlign: 'center',
    },
    btn1: {
        marginTop: '2%',
        marginLeft: '3%',
        marginRight: '3%',
        backgroundColor: 'blue',
        borderRadius: 40,
    },
    btntxt: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    view2: {
        marginTop: '2%',
        marginLeft: '24%',
        flexDirection: 'row',
    },
    txt: {
        marginLeft: '10%',
        color: 'blue',
    }
});