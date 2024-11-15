import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,} from '@react-navigation/drawer';
import LabourGangAllocation from './src/Components/LabourGangAllocation';
import GangUsageForMiscellianeous from './src/Components/GangUsageForMiscellianeous';
import {Provider, Text} from 'react-native-paper';
import LabourGangUsage from './src/Components/LabourGangUsage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './src/Components/Header';
import Login from './src/Components/Login';
import LabourGangUsageRail from './src/Components/LabourGangUsageRail';
import Login1 from './src/Components/Login1';
import ShedOperations from './src/Components/ShedOperations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackManagement from './src/Components/StackManagement';
import ContactUs from './src/Components/ContactUs';
import ManualSync from './src/Components/ManualSync';
const Drawer = createDrawerNavigator();
const Stack=createNativeStackNavigator();

const CustomDrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <Header />
    <DrawerItemList {...props} />
    
  </DrawerContentScrollView>
);
const StackNavigation=()=>(
  <Stack.Navigator
  screenOptions={{
    headerTitleAlign:'center',
    headerTitleStyle: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize:17},
  }}>
    <Stack.Screen options={{
        headerShown: false, 
        title: 'Shed Operations',
      }} name="Shed Operations" component={ShedOperations}/>
    <Stack.Screen options={{headerShown:true}} name="Stack " component={StackManagement}/>
  </Stack.Navigator>
)
const App = (props:any) => {

  return (
    // <View style={{backgroundColor: '#FFF'}}>
      <Provider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Login"
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
              drawerStyle: {
                // backgroundColor: "#FEFEFE",
                width: '90%',
              },
              headerTitleAlign: 'center',
              headerTitleStyle: {fontFamily: 'Roboto', fontWeight: 'bold', fontSize:15},
              headerStyle: {
                // backgroundColor: 'red',
              },
            }}>
                 <Drawer.Screen
              name="Shed Operations"
              component={StackNavigation}
              options={{
                title: 'Home',
                //headerShown:false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  color: 'black',
                  marginLeft: 55,
                },
                drawerItemStyle: {
                  //display: 'none',  // This hides the Login screen from the drawer
                },
                drawerActiveTintColor: '#317064',
                // drawerIcon: ({ color, size }) => <Icon name="account-group" size={size} color={color} />,
              }}
            />   


<Drawer.Screen
              name="ContactUs"
              component={ContactUs}
              options={{
                title: 'ContactUs',
                headerShown: true,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  color: 'black',
                  marginLeft: 55,
                },
                drawerItemStyle: {
                  //display: 'none',  // This hides the Login screen from the drawer
                },
                drawerActiveTintColor: '#317064',
                // drawerIcon: ({ color, size }) => <Icon name="account-group" size={size} color={color} />,
              }}
            />   
<Drawer.Screen
              name="ManualSYnc"
              component={ManualSync}
              options={{
                title: 'ManualSync',
                headerShown: true,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  color: 'black',
                  marginLeft: 55,
                },
                drawerItemStyle: {
                  //display: 'none',  // This hides the Login screen from the drawer
                },
                drawerActiveTintColor: '#317064',
                // drawerIcon: ({ color, size }) => <Icon name="account-group" size={size} color={color} />,
              }}
            />   
               <Drawer.Screen
              name="Login1"
              component={Login1}
              options={{
                title: 'Logout',
                headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  color: 'red',
                  marginLeft: 55,
                },
                drawerItemStyle: {
                  display: 'none',  // This hides the Login screen from the drawer
                },
                drawerActiveTintColor: '#317064',
                // drawerIcon: ({ color, size }) => <Icon name="account-group" size={size} color={color} />,
              }}
            />   
            <Drawer.Screen
              name="Labour Gang Usage Rail"
              component={LabourGangUsageRail}
              options={{
                // headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                },
                drawerActiveTintColor: '#317064',
                drawerIcon: ({color, size}) => (
                  <Icon name="account-group" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Labour Gang Usage"
              component={LabourGangUsage}
              options={{
                // headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                },
                drawerActiveTintColor: '#317064',
                drawerIcon: ({color, size}) => (
                  <Icon name="account-group" size={size} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Gang Usage Miscellaneous"
              component={GangUsageForMiscellianeous}
              options={{
                // headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                },
                drawerActiveTintColor: '#317064',
                drawerIcon: ({color, size}) => (
                  <Icon name="account-group" size={size} color={color} />
                ),
              }}
            />

            <Drawer.Screen
              name="Labour Gang Allocation"
              component={LabourGangAllocation}
              options={{
                // headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                },
                drawerActiveTintColor: '#317064',
                drawerIcon: ({color, size}) => (
                  <Icon name="account-group" size={size} color={color} />
                ),
              }}
            />
           <Drawer.Screen
              name="Login"
              component={Login}
              options={{
                title: 'Logout',
                headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'Roboto',
                  fontSize: 18,
                  color: 'red',
                  marginLeft: 55,
                },
                drawerItemStyle: {
                  //display: 'none',  // This hides the Login screen from the drawer
                },
                drawerActiveTintColor: '#317064',
                // drawerIcon: ({ color, size }) => <Icon name="account-group" size={size} color={color} />,
              }}
            />
           
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    // </View>
  );
};

export default App;
