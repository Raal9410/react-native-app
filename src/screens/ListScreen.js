import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: 'Gus'},
        {name: 'Beto'},
        {name: 'Allec'},
        {name: 'Luis'}
    ]
    return(
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name} data={friends} 
        renderItem={({item}) => {
        return <Text style={styles.text}>{item.name}</Text>
        }}/>
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 50,
        marginHorizontal: 50
    }
})

export default ListScreen