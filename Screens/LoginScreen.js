import * as React from 'react';
import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image, TextInput, TouchableOpacity, } from 'react-native';
export default function LoginScreen(props) {
    const [state, setstate] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setcpass] = useState('');
    const [error, setError] = useState('')
    const onSubmit = () => {
        if (email === ''){
            showError('Email is Required',1500);             
        }
        else if (!email.includes("@")){           
            showError('Email is Invalid',1500); 
        }
        else if(password === ''){
            showError('Password is Required',1500); 
        }
        else if(password.length<8){
            showError('Passward not less than 8 characters',1500); 
        }
        else{
            props.navigation.replace('Welcome')
            alert('Login Successfully')         
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
            {!state &&
                <>
                    <Text style={styles.txt1}>Welcome back</Text>
                    <Text style={styles.txt2}>Log in to your existing account</Text>
                    <Text style={{color:'red',fontSize:10,textAlign:'center'}}>{error}</Text>
                    <TextInput style={styles.input}
                        placeholder={'Email'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <TextInput style={styles.input}
                        placeholder={'Passward'}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        autoCapitalize='none'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={() => { setstate(!state) }}>
                        <Text style={styles.txt3}>{state ? 'Reset Passward' : 'Forget Passward'}</Text>
                    </TouchableOpacity>
                    <Pressable style={styles.btn1} onPress={onSubmit}>
                        <Text style={styles.btntxt}>LOG IN</Text>
                    </Pressable>
                    <View style={styles.view2}>
                        <Text>Don't Have an account</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={styles.txt}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </>

            }
            {state &&
                <>
                    <Text style={styles.txt1}>Reset Passward</Text>
                    <TextInput style={styles.input}
                        placeholder={'Email'}
                        value={email}
                        onChangeText={value => setEmail(value)}
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    <TextInput style={styles.input}
                        placeholder={'New Passward'}
                        value={password}
                        onChangeText={value => setPassword(value)}
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
                    <Pressable style={styles.btn1} onPress={() => { setstate(!state) }}>
                        <Text style={styles.btntxt}>{state ? 'Reset Passward' : 'Forget Passward'}</Text>
                    </Pressable>
                </>

            }
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    img: {
        marginTop: '5%',
        marginLeft: '5%',
        width: '90%',
        height: '35%',
    },
    txt1: {
        marginTop: '5%',
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
        marginTop: '3%',
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
        marginTop: '3%',
        marginLeft: '24%',
        flexDirection: 'row',
    },
    txt: {
        marginLeft: '10%',
        color: 'blue',
    },
    txt3: {
        marginTop: '1%',
        marginLeft: '64%',
        color: 'blue',
    },
});