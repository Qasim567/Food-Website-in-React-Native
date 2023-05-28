import * as React from 'react';
import { StyleSheet, Text, View,Image,ScrollView, TouchableOpacity, TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function HomeScreen(props){
    return(
        <View style={styles.container}>        
            <View style={styles.view1}>
               <Image style={styles.img} source={require('../assets/form.jpg')}
               resizeMode='contain'>
               </Image>
               <Text style={styles.txt1}>Zaykaa</Text>
               <Ionicons style={styles.icon1}
                name='notifications-outline'
                size={25}/> 
                <Ionicons style={styles.icon2}
                name='menu'
                size={25}/> 
            </View> 
            <Text style={styles.txt}>What would you{'\n'}like to order?</Text>
            <View style={styles.view2}>
            <Text style={styles.text}>Get Discount Voucher{'\n'}Up to 20%{'\n'}
            Lorem ipsum dolor sit amet</Text>
            <Image style={styles.imge} source={require('../assets/chef.jpg')}
               resizeMode='contain'>
               </Image>
            </View>             
            <View style={styles.view3}>
                <TouchableOpacity style={styles.btn1}
                 onPress={()=>props.navigation.navigate('Main')}>
                    <Text style={styles.btntxt1}>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn2}
                onPress={()=>props.navigation.navigate('Healthy')}>
                    <Text style={styles.btntxt2}>Healthy Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn3}
                onPress={()=> props.navigation.navigate('Fast')}>
                    <Text style={styles.btntxt3}>Fast Food</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> props.navigation.navigate('Drink')}>
                    <Text style={styles.btntxt4}>Drinks</Text>
                </TouchableOpacity>
            </View> 
            <ScrollView>
                <View style={styles.view4}>
                <Image style={styles.img1} source={require('../assets/sald.jpeg')}
               resizeMode='contain'>
               </Image>
               <Image style={styles.img2} source={require('../assets/egg.jpg')}
               resizeMode='contain'>
               </Image>
                </View>
                <View style={styles.view5}>
                    <Text style={styles.txt2}>Fresh Salad</Text>
                    <Text style={styles.txt3}>Toast with Eggs</Text>
                </View>
                <View style={styles.view6}>
                    <Text>Today discout 20%</Text>
                    <Text style={styles.txt4}>Today discount 30%</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.txt2}>$ 55</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Fresh Salad')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt5}>$ 25</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Toast with Eggs')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                <Image style={styles.img1} source={require('../assets/pasta.jpg')}
               resizeMode='contain'>
               </Image>
               <Image style={styles.img2} source={require('../assets/roll.jpg')}
               resizeMode='contain'>
               </Image>
                </View>
                <View style={styles.view5}>
                    <Text style={styles.txt2}>Pasta</Text>
                    <Text style={styles.txt6}>Spring Rolls</Text>
                </View>
                <View style={styles.view6}>
                    <Text>Today discout 25%</Text>
                    <Text style={styles.txt4}>Today discount 33%</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.txt2}>$ 40</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Pasta')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt5}>$ 20</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Spring Rolls')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                <Image style={styles.img1} source={require('../assets/fish.jpg')}
               resizeMode='contain'>
               </Image>
               <Image style={styles.img2} source={require('../assets/biryani.jpg')}
               resizeMode='contain'>
               </Image>
                </View>
                <View style={styles.view5}>
                    <Text style={styles.txt2}>Fried Fish</Text>
                    <Text style={styles.txt7}>Chicken Biryani</Text>
                </View>
                <View style={styles.view6}>
                    <Text>Today discout 13%</Text>
                    <Text style={styles.txt4}>Today discount 20%</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.txt2}>$ 80</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Fried Fish')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt5}>$ 95</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Chicken Biryani')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view4}>
                <Image style={styles.img1} source={require('../assets/labbe.jpg')}
               resizeMode='contain'>
               </Image>
               <Image style={styles.img2} source={require('../assets/cocunet.jpg')}
               resizeMode='contain'>
               </Image>
                </View>
                <View style={styles.view5}>
                    <Text style={styles.txt2}>Lab-e-Shireen</Text>
                    <Text style={styles.txt8}>Cocunet Ice Cream</Text>
                </View>
                <View style={styles.view6}>
                    <Text>Today discout 5%</Text>
                    <Text style={styles.txt4}>Today discount 10%</Text>
                </View>
                <View style={styles.view7}>
                    <Text style={styles.txt2}>$ 50</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Lab-e-Shireen')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.txt5}>$ 15</Text>
                    <TouchableOpacity style={styles.btntxt5}
                    onPress={()=> props.navigation.navigate('Cocunut Ice Cream')}>
                        <Text style={styles.txt9}>+</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>           
        </View>
    );
}
const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'gray',
    }, 
    view1:{
        flexDirection:'row',
      },
    img:{
        width: 50,
        height: 50,
        borderRadius:3,
    },
    txt1:{
        marginTop:'4%',
        fontWeight:'bold',
    },
    icon1:{
        marginTop:'3%',
        marginLeft:'60%',
    },
    icon2:{
        marginTop:'3%',       
    },
    txt:{
        marginLeft:'3%',
        fontSize:30,
        fontWeight:'bold',
    },
    view2:{
        flexDirection:'row',
        marginTop:'4%',
        backgroundColor:'orange',
        marginLeft:'5%',
        marginRight:'5%',
        paddingHorizontal:'5%',
        borderRadius:10,
    },
    imge:{
        marginTop:'4%',
        marginLeft:'0%', 
        height:70,
        width:100,
    },
    text:{
        fontSize:19,
        color:'white',
    },
    view3:{
        marginTop:'3%',
        marginLeft:'5%',
        marginRight:'5%',
        paddingVertical:'1%',
        flexDirection:'row',
    },
    btn1:{
        marginRight:'7%'
    },
    btn2:{
        marginRight:'7%'
    },
    btn3:{
        marginRight:'7%'
    },
    btntxt1:{
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'lightgray',
        borderRadius:10,
        paddingVertical:'1%',
        paddingHorizontal:'2%',
    },
    btntxt2:{
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'lightgray',
        borderRadius:10,
        paddingVertical:'1%',
        paddingHorizontal:'2%', 
    },
    btntxt3:{
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'lightgray',
        borderRadius:10,
        paddingVertical:'1%',
        paddingHorizontal:'2%',
    },
    btntxt4:{
        fontSize:15,
        fontWeight:'bold',
        backgroundColor:'lightgray',
        borderRadius:10,
        paddingVertical:'1%',
        paddingHorizontal:'2%',
    },
    view4:{
        marginTop:'5%',
        marginLeft:'3%',
        marginRight:'3%',
        flexDirection:'row',
    },
    img1:{
        width:160,
        height:140,
        borderRadius:20,
    },
    img2:{
        marginLeft:'5%',
        width:165,
        height:140, 
        borderRadius:20,

    },
    view5:{
        marginTop:'2%',
        marginLeft:'4%',
        flexDirection:'row',
    },
    txt2:{
        fontSize:20,
        fontWeight:'bold',
    },
    txt3:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'25%',
    },
    view6:{
        flexDirection:'row',
        marginLeft:'4%',
    },
    txt4:{
        marginLeft:'21%',
    },
    view7:{
        flexDirection:'row',
        marginLeft:'4%',
    },
    txt5:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'12.5%',
    },
    txt6:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'40%', 
    },
    txt7:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'30%', 
    },
    txt8:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:'17%', 
    },
    btntxt5:{
        marginTop:'1%',
        backgroundColor:'#5A5A5A',
        borderRadius:10,
        height:25,
        width:25,
        marginLeft:'22%'
    },
    txt9:{  
        color:'white',
        textAlign:'center',
        fontSize:17,
    
    }
});