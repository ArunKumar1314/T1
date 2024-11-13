import { View, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { GenericScanIconStyle } from "../../styles/styles";
export default function GenericScanComponent(){
    return(
        <View style={{flexDirection:'row'}}>
        <MaterialCommunityIcons name="qrcode-scan" size={40} color="#317064"  style={GenericScanIconStyle.container}/>
        <View  style={GenericScanIconStyle.text}>
        <Text style={GenericScanIconStyle.text}>Scan QR Code</Text>
        </View>
        </View>
    )
 }
