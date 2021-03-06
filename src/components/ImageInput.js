import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../assets/theme/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native';
import { useEffect } from 'react';

function ImageInput({ profileImage, setProfileImage  }) {
    


    useEffect(() => {
        requestPermission();
    }, []);


    const requestPermission = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!result.granted)
            alert('You need to enable permission to access the library');
    }


    const handlePress = () => {
        if (!profileImage) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image', [
            { text: 'Yes', onPress: () => setProfileImage(null) },
            { text: 'No' },
        ])
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 0.5
            });
            if (!result.cancelled)
                setProfileImage(result.uri);
                
                
        } catch (error) {
            console.log('Error reading an image', error);
        }
    }


    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!profileImage && <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />}
                {profileImage && <Image source={{ uri: profileImage }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.lightgrey,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: "hidden",
        width: 100,
    },
    image: {
        height: "100%",
        width: "100%",
    },
})

export default ImageInput;