import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function Custrad(props){
    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/custard.jpg')}
               resizeMode='stretch'>
               </Image> 
            <View style={styles.view1}>
                <Text style={styles.txt1}>Fruit Custard</Text>
            <View style={styles.view1a}>
                <Ionicons style={styles.ion}
                  name='star'/>
                <Text style={styles.txt2}>4.7</Text>
            </View>
            </View>
            <View style={styles.view2}>
                <View style={styles.view3}>
                <Ionicons style={styles.ion1}
                    name='time'/>
                <Text>15 min</Text>
                </View>
                <View style={styles.view4}>
                <Ionicons style={styles.ion1}
                    name='bicycle'/>
                <Text>10 min</Text>
                </View>
                <View style={styles.view5}>
                <Ionicons style={styles.ion1}
                    name='restaurant'/>
                <Text>8 min</Text>
                </View>
            </View>    
            <Text style={styles.txt3}>Description</Text>
            <Text style={styles.txt}>Lorem ipsum dolor sit amet,consectetur{'\n'}adipiscing elits. 
            Daonec vel egestas dolor,{'\n'}nec dignissim metius. Daonec augue elite,{'\n'}rhoncus ac 
            sodales id, porttitor vitaes est.{'\n'} Daonec laoreet rutrum libero sed pharetra.
                </Text>
            <TouchableOpacity style={styles.btn}
            onPress={()=> props.navigation.navigate('Order Now')}>
                <View style={styles.view6}>
                <Text style={styles.btntxt1}>Choose this for</Text>
                <Text style={styles.btntxt2}>$40</Text>
                </View>
            </TouchableOpacity>  
        </View>
        );
    }

const styles= StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'gray',
        },
        img:{
            height:250,
            width:370,
        },
        view1:{
            flexDirection:'row',
            marginTop:'3%',
        },
        txt1:{
            marginLeft:'5%',
            fontSize:30,
            fontWeight:"bold",   
            marginRight:'25%'       
        },
        view1a:{
            marginTop:'3%',
            flexDirection:'row',
            paddingHorizontal:'3.5%',
            backgroundColor:'#F6BE00',
            borderRadius:10
        },
        ion:{
            paddingTop:'2%',
            marginRight:'1%'
            },
        txt2:{
            paddingTop:'1.3%',
            paddingHorizontal:'1%'
        },
        view2:{
            marginTop:'5%',
            flexDirection:'row',
            marginLeft:'2%',
            marginRight:'2%',
        },
        view3:{
            flexDirection:'row',
            backgroundColor:'#D3D3D3',
            paddingVertical:'2%',
            borderRadius:10,
        },
        view4:{
            flexDirection:'row',
            backgroundColor:'#D3D3D3',
            paddingVertical:'2%',
            borderRadius:10,
            marginLeft:'26.5%',
        },
        view5:{
            flexDirection:'row',
            backgroundColor:'#D3D3D3',
            paddingVertical:'2%',
            borderRadius:10,
            marginLeft:'26.5%',
        },
        ion1:{
            marginTop:'2%',
            marginLeft:'2%',
        },
        txt3:{
            marginTop:'3.5%',
            marginLeft:'5%',
            fontSize:30,
            fontWeight:"bold",   
            marginRight:'30%'       
        },
        txt:{
            marginTop:'1%',
            textAlign:'center',
            fontSize:17,
         },
        view6:{
            flexDirection:'row'
        },
        btn:{
            marginTop:"7%",
            marginLeft:'4%',
            marginRight:'4%',
            backgroundColor:'black',
            borderRadius:10,
            paddingVertical:'4%'
        },
        btntxt1:{
            color:'white',
            marginLeft:'25.5%',
            fontSize:20
        },
        btntxt2:{
            marginLeft:'2%',
            color:'#F6BE00',
            fontSize:20
        }
    });