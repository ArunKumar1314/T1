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
    textAlign:'center',
    
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
    marginTop:15,
  },
  containerLabel:{
    marginHorizontal: 15,
    marginLeft: 10,
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
    paddingHorizontal:40,
    fontFamily:'serif'
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
    marginTop:5,
    marginBottom:5,
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    width:"60%",
    height:45,
    borderWidth:1,
    borderRadius:10,
    marginBottom:5,
    //backgroundColor:'white'
  },
  labelStyle:{
    fontSize:16,
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
    marginHorizontal:100,
  }),
  text:{
    fontSize:20,
    right:60,
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
    marginTop:35
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
    // marginTop: 40,
  },
  items: {
    // marginTop: 55,
    width: "100%",
    // zIndex: 1000,
    // height: 150,
     marginLeft: 50,
  },
  menuItemsContainer: {
    width: '100%',
    // zIndex: 9999,  // Ensure it stays above other elements
  },
});
