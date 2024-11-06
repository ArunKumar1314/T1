import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import GangUsageForMiscellianeous from './src/Components/GangUsageForMiscellianeous';
import LabourGangAllocation from "./src/Components/LabourGangAllocation";
import GangUsageForMiscellianeous from "./src/Components/GangUsageForMiscellianeous";
import { Provider } from "react-native-paper";
import LabourGangUsage from "./src/Components/LabourGangUsage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";
const Drawer=createDrawerNavigator();
const CustomHeader = ({ navigation }: { navigation: any }) => (
  <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="menu" size={30} color="#000" />
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
<Provider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Labour Gang Usage" component={LabourGangUsage} />
          <Drawer.Screen name="Labour Gang Allocation" component={LabourGangAllocation} />
          <Drawer.Screen name="Gang Usage Miscellaneous" component={GangUsageForMiscellianeous} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  
  )
}

export default App;