import React from 'react';
import { Image, View, Text, SafeAreaView, FlatList, StyleSheet, useWindowDimensions } from 'react-native';
import Icon from '../assets/stack.svg';
const StackManagement = ({ route, navigation }: { route: any; navigation: any }) => {
    const { width } = useWindowDimensions();
    const { stackCount } = route.params;
    const {id}=route.params;

    const data = Array.from({ length: stackCount }, (_, index) => ({ id: index.toString() }));

    const getColumn = () => {
        if (width < 360) return 2;
        else if (width >= 360 && width < 768) return 3;
        else if(width >= 768 && width < 1024)return 4;
        return 5;
    };

    const renderStackIcon = ({index}:{index:number}) => {
        const columnWidth = width / getColumn()-20; 
        const imageWidth = columnWidth * 0.8; 

        return (
            <View style={[styles.shedContainer, { width: columnWidth }, {marginHorizontal: width < 768 ? 10 : 10 }]}>
                    
                <View style={[styles.cont,{ padding: width < 768 ? 10 : 20 }]}>
                    {/* <Image
                        source={require('../assets/stack.png')}
                        style={[styles.wheatImage, { width: imageWidth, height: imageWidth }]} 
                    /> */}
                    <Icon width={100} height={100}/>
                    <Text>Stack {index+1}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View >
            <Text  style={styles.title}>Stack from Shed {id}</Text>
            </View>
            
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderStackIcon}
                contentContainerStyle={styles.flatlistContainer}
                numColumns={getColumn()}
                key={getColumn()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlistContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    shedContainer: {
        justifyContent: 'center',
        //alignItems: 'center',
       // marginHorizontal:10
    },
    cont: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    wheatImage: {
      
    },
    // titleContainer:{
    // flex:0.1,
    // textAlign:'center'
    // },
    title:{
        // justifyContent:'center',
        // alignItems:'center',
        textAlign:'center',
        fontSize:20,
        fontFamily:'Roboto'
        //fontSize:50,
    }
});

export default StackManagement;
