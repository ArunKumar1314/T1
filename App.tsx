import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import GangUsageForMiscellianeous from './src/Components/GangUsageForMiscellianeous';
import LabourGangAllocation from "./src/Components/LabourGangAllocation";
import GangUsageForMiscellianeous from "./src/Components/GangUsageForMiscellianeous";
import { Provider } from "react-native-paper";
import LabourGangUsage from "./src/Components/LabourGangUsage";

const Drawe=createDrawerNavigator();
const App = () => {
  return (
<Provider>
  <LabourGangUsage/>
          {/* <LabourGangAllocation/> */}
</Provider>



   
    
  
  )
}

export default App;