import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title='Forest' />
            <ImageDetail title='Mountain'/>
            <ImageDetail title='Beach'/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen