import React from 'react';
import {DrawerActions, NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
//import GangUsageForMiscellianeous from './src/Components/GangUsageForMiscellianeous';
import LabourGangAllocation from './src/Components/LabourGangAllocation';
import GangUsageForMiscellianeous from './src/Components/GangUsageForMiscellianeous';
import {Provider, Text} from 'react-native-paper';
import LabourGangUsage from './src/Components/LabourGangUsage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './src/Components/Header';
import {View, Image} from 'react-native';
import Login from './src/Components/Login';
import LabourGangUsageRail from './src/Components/LabourGangUsageRail';
const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <Header />
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);
const App = () => {
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
              headerTitleStyle: {fontFamily: 'serif', fontWeight: 'bold', fontSize:18},
              headerStyle: {
                // backgroundColor: 'red',
              },
            }}>
            <Drawer.Screen
              name="Labour Gang Usage Rail"
              component={LabourGangUsageRail}
              options={{
                // headerShown: false,
                drawerLabelStyle: {
                  fontFamily: 'serif',
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
                  fontFamily: 'serif',
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
                  fontFamily: 'serif',
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
                  fontFamily: 'serif',
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
                  fontFamily: 'serif',
                  fontSize: 18,
                  color: 'red',
                  marginLeft: 55,
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
