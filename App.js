import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Button} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import BillScreen from './src/screens/BillScreen';
import AttendanceScreen from './src/screens/AttendanceScreen';
import ProductionScreen from './src/screens/ProductionScreen';
import PlanningScreen from './src/screens/PlanningScreen';
import FinanceScreen from './src/screens/FinanceScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import Header from './src/components/Header';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
      header: <Header/>,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} options={{
        header:null,
          //title:'Home',
          drawerIcon:({focused,size})=>(
<FontAwesome name='home' size={30} color={focused?'#7cc':'#ccc'}/>
          ),}}/>
        <Drawer.Screen name="Bill" component={BillScreen}
      />
        <Drawer.Screen name="Attendance" component={AttendanceScreen} />
        <Drawer.Screen name="Production" component={ProductionScreen} />
        <Drawer.Screen name="Planning" component={PlanningScreen} />
        <Drawer.Screen name="Finance" component={FinanceScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
