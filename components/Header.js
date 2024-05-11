import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Title</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height: 90,
        justifyContent: 'center',
        // paddingTop: 38,
        width: '100%',
        backgroundColor: '#89cff0'
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }

})