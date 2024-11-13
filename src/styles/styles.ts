import { StyleSheet } from "react-native";

export const GenericInputFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    marginHorizontal:15,
      color:'red',
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#EAF0EF",//changed
    borderColor:"#317064",//c
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily:'serif',
    },
  borderChange:{
    borderColor:'#317064',
    borderWidth:2,
    color:'#7F7F7F',
  },
  errorBorderChange:{
    borderColor:'red',
    borderWidth:2,
  },
  inputErrorText:{
    marginLeft:20,
    color:'red',
    marginTop:5
  },
  titleStyle:{
    //marginHorizontal:1,//1
    //padding:10,
    fontSize:25,
    color:'black',
    fontFamily:'serif',
    // alignContent:'center',
    // justifyContent:'center',
    alignItems:'center',
    textAlignVertical:'center',
   // marginHorizontal:26,
    marginTop:15,
},
titleHStyle:{
  fontSize:25,
  color:'black',
  fontFamily:'serif',
alignContent:'center',
alignItems:'center',
  textAlignVertical:'center',
  marginHorizontal:26,
  //marginTop:3
},
inputTitleStyle:{
  fontSize:17,
  
}
});
export const GenericCalendarcontainerStyles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#EAF0EF",//changed
    borderColor:"#90B1AA",//c
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily:'serif',
    marginBottom:-15,
    marginTop:1
  },
  CalendarErrorText:{
    marginLeft:20,
    color:'red',
    marginTop:15,
    marginBottom:-20
  },
});
export const GenericDropDownStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    marginHorizontal: 15,
    borderColor: 'yellow',
    marginLeft: 15,
    
  },
  menuItems: {
    marginTop: 40,
    zIndex:1324234
  },
  items: {
    marginTop: 17,
    width: "80%",
    height: 200,
    marginLeft: 6,
    zIndex:1
  },
  labelContainer: {
    marginBottom: 10, // Adjust the space between label and input
    justifyContent: 'center',
    marginTop:15,
  },
  containerLabel:{
    marginHorizontal: 15,
    marginLeft: 10,
    
  },
  buttonContainer:{
    width: "100%",
    backgroundColor: "#EAF0EF",//changed
    borderColor:"#90B1AA",//c
    borderRadius: 10,
    paddingHorizontal: 10,
    fontFamily:'serif',
    marginTop:10,
    marginBottom:-20
  }
});

export const GenericPasswordFieldStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding:1,
    //justifyContent: "center",
    marginLeft:15,
    borderRadius: 30,
    marginHorizontal:15,
  },
  passwordTitleStyle:{
    fontSize:17,
    fontFamily:'serif',
    marginLeft:1,
  },
  buttonContainer: {
    width: "100%",
    backgroundColor: "#EAF0EF",//changed
    borderColor:"#90B1AA",//c
    borderRadius: 10,
    paddingHorizontal:10,
    fontFamily:'serif'
  },
  errorBorderChange:{
    borderColor:'red',
    borderWidth:2,
  },
  passwordErrorText:{
    marginLeft:20,
    color:'red',
    marginTop:5
  },
});
export const GenericLabelDropDownStyles=StyleSheet.create({
  container:{
    padding:10,
    color:'#999999',
   fontFamily:'serif',
  }
  });
export const GenericLabelStyles=StyleSheet.create({
container:{
  padding:10,
  color:'black',
  fontWeight: 'bold',
 fontFamily:'serif'
}
});
export const GenericButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:15,
    marginBottom:5,
    width:'100%',
    fontFamily:'serif'
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    width:'100%',
    fontFamily:'serif'
  },
  labelStyle:{
    fontSize:10,
    fontFamily:'serif',
  }
});

export const GenericCalenderFieldStyles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding:16,
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
    color:'black',fontWeight:'bold'
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
export const  GenericScanIconStyle=StyleSheet.create({
  container:({
    flex:1,
    marginVertical:20,
    marginHorizontal:100,
  }),
  text:{
    fontSize:20,
    right:50,
    top:17,

  }
})
export const GenericHeaderStyle=StyleSheet.create({
  container:{
    height:100,
    marginHorizontal:0.1,
    flexDirection:'row',
    backgroundColor:'#EAF0EF',
    borderColor:'#317064',
    borderWidth:1,
    marginTop:-4,
    
  },
  title:{
    fontSize:30,
    marginLeft:10,
    marginTop:35,
    
  }
})
export const GenericLogoStyles=StyleSheet.create({
  container:{
    marginLeft:10,
    width:'30%',
    height:90,
    marginTop:10,
  }
})
export const GenericMenuStyles=StyleSheet.create({
  container:{
    marginTop:1,
  }
})
export const GenericLoginLogoStyles=StyleSheet.create({
  container:{
    marginTop:1,
    marginLeft:30,
  }
})
export const GenericDropDownStyles1 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    borderRadius: 30,
    zIndex:1
  },
  menuItems: {
  },
  items: {
    width: "91%",
  },
  menuItemsContainer: {
    width: '100%',
    // zIndex: 9999,  // Ensure it stays above other elements
  },
});
export const GenericScreenStyles=StyleSheet.create({
  container:{
  // backgroundColor:'#FEFEFE'
  }
})
export const GenericAddButtonStyles=StyleSheet.create({
  container:{
    height:10,
  }
})
export const GenericButtonStyles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:10,
    borderRadius:15,
  },
  button:{
    // alignItems: "center",
    justifyContent: "center",
    // borderWidth:2,
    borderColor:'black',
    // width:'100%'
    borderRadius:10,
  },
  labelStyle:{
    fontSize:17,
    fontFamily:'serif'
  }
});