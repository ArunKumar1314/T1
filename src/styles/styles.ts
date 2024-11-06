import { StyleSheet } from "react-native";

export const GenericInputFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    marginHorizontal:15,
    borderColor:'yellow',

  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#EAF0EF",//changed
    borderColor:"#90B1AA",//c
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily:'serif'
  },
  borderChange:{
    borderColor:'#317064',
    borderWidth:2,
    color:'#7F7F7F',
  
  },
  titleStyle:{
    //marginHorizontal:1,//1
    padding:10,
    fontSize:25,
    color:'black',
    fontFamily:'serif',
    textAlign:'center'
    
}
});
export const GenericCalendarcontainerStyles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row'
  }
});
export const GenericDropDownStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    marginHorizontal: 15,
    borderColor: 'yellow',
    marginLeft: 10,
  },
  menuItems: {
    marginTop: 40,
  },
  items: {
    marginTop: 17,
    width: "80%",
    height: 200,
    marginLeft: 6,
  },
  labelContainer: {
    marginBottom: 10, // Adjust the space between label and input
    justifyContent: 'center',
  },
});

export const GenericPasswordFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 30,
  },
});
export const GenericLabelDropDownStyles=StyleSheet.create({
  container:{
    padding:10,
    color:'#999999',
   fontFamily:'serif'
  }
  });
export const GenericLabelStyles=StyleSheet.create({
container:{
  padding:10,
  color:'#999999',
 fontFamily:'serif'
}
});
export const GenericButtonStyles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    width:"60%",
    height:45,
    borderWidth:1,
    borderRadius:10,
  },
  labelStyle:{
    fontSize:18,
   fontFamily:'serif'
  }
});

export const GenericCalenderFieldStyles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding:16,
    // backgroundColor:'#EAF0EF'
  },
})


export const GenericCheckBoxStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
     fontFamily:'serif',
    color:'#AFAFAF'
  },
})


export const GenericToggleButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  switchContainer: {
    transform: [{ scale: 1.5 }],
  },
})


export const GenericHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dividerContainer: {
    borderWidth:1.5,
    borderColor:'black',
  },
  
})
export const  GenericScanIconStyle=StyleSheet.create({
  container:({
    flex:1,
    marginVertical:20,
    marginHorizontal:150,
  })
})
