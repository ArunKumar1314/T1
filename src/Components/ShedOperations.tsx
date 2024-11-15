import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,SafeAreaView,useWindowDimensions,FlatList,StyleSheet, Pressable}from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as Progress from 'react-native-progress';
interface shedItem{
    id:string;
    title:string;
    iconName:string;
    progress:number;
    stackCount:number;
}

const ShedOperations=({navigation}:{navigation:any})=>{
    const {width,height,fontScale}=useWindowDimensions();
    const data=[
        {id:"1",title:"shed 1",iconName:"warehouse",progress:0.3,stackCount:30},
        {id:"2",title:"shed 2",iconName:"warehouse",progress:0.5,stackCount:3},
        {id:"3",title:"shed 3",iconName:"warehouse",progress:0.8,stackCount:5},
        {id:"4",title:"shed 4",iconName:"warehouse",progress:0.3,stackCount:10},
        {id:"5",title:"shed 5",iconName:"warehouse",progress:0.9,stackCount:5},
        {id:"6",title:"shed 1",iconName:"warehouse",progress:0.3,stackCount:1},
        {id:"7",title:"shed 2",iconName:"warehouse",progress:0.5,stackCount:5},
        {id:"8",title:"shed 3",iconName:"warehouse",progress:0.8,stackCount:2},
        {id:"9",title:"shed 4",iconName:"warehouse",progress:0.3,stackCount:5},
        {id:"10",title:"shed 5",iconName:"warehouse",progress:0.9,stackCount:8},
        {id:"11",title:"shed 2",iconName:"warehouse",progress:0.5,stackCount:6},
        {id:"12",title:"shed 3",iconName:"warehouse",progress:0.8,stackCount:5},
        {id:"13",title:"shed 4",iconName:"warehouse",progress:0.3,stackCount:9},
        {id:"14",title:"shed 5",iconName:"warehouse",progress:0.9,stackCount:5},
    ]
    const getColumn=()=>{
        if(width < 360){
            return 2;
        }
        else if (width >= 360 && width < 768){
            return 3;
        }
        else if (width >= 768 && width < 1024){
            return 5;
        }
        else return 6;
    };
    const handleStackItem=(item:shedItem)=>(
        navigation.navigate("Stack ",{stackCount :item.stackCount,id:item.id})
    );
    const handleShed=({item}:{item:shedItem})=>{
        const columnWidth = width / getColumn()-20; 
        const imageWidth = columnWidth * 0.8; 
        return(
        <View  style={[Styles.shedContainer, { width: columnWidth }, {marginHorizontal: width < 768 ? 1 : 5 }]}>
            <Pressable onPress={()=>handleStackItem(item)} >
                <View style={[Styles.cont,{ padding: width < 768 ? 10 : 20 }]}>
                    <FontAwesome5
                    name={item.iconName}
                    color="green"
                    size={45}
                    />
                    <Text>{item.title}</Text>
                    <Progress.Bar progress={item.progress}  width={100} color="blue"/>
                </View>
            </Pressable>
        </View>
    );
}
    return(
        <SafeAreaView style={Styles.container}>
            <View style={Styles.innerContainer}>
               <FlatList
                data={data}
                keyExtractor={(item)=>item.id}
                renderItem={handleShed}
                contentContainerStyle={Styles.flatlistContainer}
                numColumns={getColumn()}
                key={getColumn()}
               />


            </View>
        </SafeAreaView>
    )

}
const Styles=StyleSheet.create({
    container:{
      flex:1,
    },
    innerContainer:{
        flex:1,
        padding:20
      },
    flatlistContainer:{
        flexGrow:1,
        justifyContent:'space-evenly'
    },
    shedContainer:{
    justifyContent:'space-evenly',
    alignItems:'center',
    marginRight:10,
    },
    cont:{
        flexDirection:'column',
        alignItems:'center'
    }
})
export default ShedOperations;