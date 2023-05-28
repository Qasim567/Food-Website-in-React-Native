import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from './Screens/LoginScreen';
import SigupScreen from './Screens/SignupScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import Health from './Screens/Health';
import Fasty from './Screens/Fasty';
import Drinks from './Screens/Drinks';
import Orderform from './Screens/Orderform';
import Salad from './Main/Salad';
import Egg from './Main/Egg';
import Pasta from './Main/Pasta';
import Rolls from './Main/Rolls';
import Fish from './Main/Fish';
import Biryani from './Main/Biryani';
import Labe from './Main/Labe';
import Cocunut from './Main/Cocunut';
import Sushi from './Healthy_Food/Sushi';
import Soup from './Healthy_Food/Soup';
import Custrad from './Healthy_Food/Custrad';
import Vege from './Healthy_Food/Vege';
import Momo from './Healthy_Food/Momo';
import Chicken from './Healthy_Food/Chicken';
import Tuna from './Healthy_Food/Tuna';
import Bakked from './Healthy_Food/Bakked';
import Zinger from './Fast_Food/Zinger';
import Pizza from './Fast_Food/Pizza';
import Roast from './Fast_Food/Roast';
import Chapli from './Fast_Food/Chapli';
import Pratha from './Fast_Food/Paratha';
import Sandwich from './Fast_Food/Sandwich';
import Bun from './Fast_Food/Bun';
import Fries from './Fast_Food/Fries';
import Lemon from './Drink/Lemon';
import Hot from './Drink/Hot';
import Shake from './Drink/Shake';
import Nimbo from './Drink/Nimbo';
import Milk from './Drink/Milk';
import Lassi from './Drink/Lassi';
import Chai from './Drink/Chai';
import Sugar from './Drink/Sugar';
import {auth} from './firebase/firebae.config'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const App=()=> {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise(resolve => setTimeout(resolve, 2000))
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Login'
    screenOptions={{
      headerStyle:{backgroundColor:'#333333'},
      headerTintColor:'#fff',
      headerTitleStyle:{
      fontWeight:'bold',
      }
    }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Signup' component={SigupScreen}/>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name='Main' component={HomeScreen}/>
        <Stack.Screen name='Healthy' component={Health}/>
        <Stack.Screen name="Fast" component={Fasty} />
        <Stack.Screen name='Drink' component={Drinks}/>
        <Stack.Screen name='Fresh Salad' component={Salad}/>
        <Stack.Screen name='Toast with Eggs' component={Egg}/>
        <Stack.Screen name='Pasta' component={Pasta}/>
        <Stack.Screen name='Spring Rolls' component={Rolls}/>
        <Stack.Screen name='Fried Fish' component={Fish}/>
        <Stack.Screen name='Chicken Biryani' component={Biryani}/>
        <Stack.Screen name='Lab-e-Shireen' component={Labe}/>
        <Stack.Screen name='Cocunut Ice Cream' component={Cocunut}/>
        <Stack.Screen name='Sushi' component={Sushi}/>
        <Stack.Screen name='Soup' component={Soup}/>
        <Stack.Screen name='Fruit Custard' component={Custrad}/>
        <Stack.Screen name='Grilled Veggies' component={Vege}/>
        <Stack.Screen name='Momos' component={Momo}/>
        <Stack.Screen name='Tandoori Chicken' component={Chicken}/>
        <Stack.Screen name='Tuna Casserole' component={Tuna}/>
        <Stack.Screen name='Bakked Chicken' component={Bakked}/>
        <Stack.Screen name='Zinger Burger' component={Zinger}/>
        <Stack.Screen name='Pizza' component={Pizza}/>
        <Stack.Screen name='Chicken Roast' component={Roast}/>
        <Stack.Screen name='Chapli Kbab' component={Chapli}/>
        <Stack.Screen name='Pratha Roll' component={Pratha}/>
        <Stack.Screen name='Chicken Sandwich' component={Sandwich}/>
        <Stack.Screen name='Bun Kbab' component={Bun}/>
        <Stack.Screen name='Fries' component={Fries}/>
        <Stack.Screen name='Lemon Ice Tea' component={Lemon}/>
        <Stack.Screen name='Hot Choclate' component={Hot}/>
        <Stack.Screen name='Milk Shake' component={Shake}/>
        <Stack.Screen name='Cocunut Water' component={Nimbo}/>
        <Stack.Screen name='Almond Milk' component={Milk}/>
        <Stack.Screen name='Lassi' component={Lassi}/>
        <Stack.Screen name='Kashmiri Chai' component={Chai}/>
        <Stack.Screen name='Sugar Cane Juice' component={Sugar}/>
        <Stack.Screen name='Order Now' component={Orderform}/>
      </Stack.Navigator>
      </NavigationContainer>
   
  );
  }
  export default App;



