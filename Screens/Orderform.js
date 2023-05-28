import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Image,TextInput } from 'react-native';
export default function Orderform(props){
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [product, setproduct] = useState('');
    const [error, setError] = useState('')
    const onSubmit = () => {
        if (name === ''){
            showError('Name is Required',1500);  
        }
        else if (email === ''){
            showError('Email is Required',1500);             
        }
        else if (!email.includes("@")){           
            showError('Email is Invalid',1500); 
        }
        else if(phone === ''){
            showError('Phone Number is Required',1500); 
        }
        else if(address === ''){
            showError('Password is Required',1500); 
        }
        else if(product === ''){
            showError('Product Quantity is Required',1500); 
        } 
        else{
            props.navigation.replace('Welcome')
            alert('Order Done Successfully')         
        }
    }
    const showError = (text, duration) => {
        setError(text);
        setTimeout(() => {
          setError('');
        }, duration);
      };
    return(
        <ScrollView style={styles.container}>
            <View style={styles.view1}>
            <Text style={styles.txt1}>Order Details</Text>
            </View>
            <Text style={{color:'red',fontSize:10,textAlign:'center',marginTop:'2%'}}>{error}</Text>
            <TextInput style={styles.input}
                placeholder={'Enter Your Name'}
                value={name}
                onChangeText={value => setname(value)}            
              />
            <TextInput style={styles.input}
                placeholder={'Enter Your Email'}
                value={email}
                onChangeText={value => setemail(value)}
                autoCapitalize='none'            
                keyboardType='email-address'
              />
               <TextInput style={styles.input}
                placeholder={'Enter Your Number'}
                value={phone}
                onChangeText={value => setphone(value)}            
                keyboardType='phone-pad'
              />
             <TextInput style={styles.input}
                placeholder={'Enter Your Address'}
                value={address}
                onChangeText={value => setaddress(value)}     
                multiline={true}                       
              />
            <TextInput style={styles.input}
                placeholder={'Enter Product Quantity'} 
                value={product}
                keyboardType='phone-pad'
                onChangeText={value => setproduct(value)}                
              />  
            <TouchableOpacity style={styles.btn}
            onPress={onSubmit}>
                <Text style={styles.btntxt}>Order now</Text>
            </TouchableOpacity>        
        </ScrollView>
        );
    }
    const styles= StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'gray',
        }, 
        view1:{
            marginTop:'5%',
            backgroundColor:'orange',
            marginLeft:'13%',
            marginRight:'13%',
            borderRadius:50
        },
        txt1:{
            fontSize:30,
            textAlign:'center'
        },
        input:{
            marginTop:'5%',
            marginLeft:'5%',
            marginRight:'5%',
            fontSize:20,
            backgroundColor:'white',
            paddingVertical:'1%',
            borderRadius:50,
            borderWidth:4,
            borderColor:'#87CEFA',
            textAlign:'center',
        },
        btn:{
            marginTop:'5%',
            backgroundColor:'#1e8449',
            marginLeft:'32%',
            marginRight:'32%',
            borderRadius:50
        },
        btntxt:{
            fontSize:20,
            textAlign:'center'
        }
    });