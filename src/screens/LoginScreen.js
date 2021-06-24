import { Item, Label, Input, Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Image } from "react-native-elements";
import CyberBar from "../assets/images/CyberBar.png";



const LoginScreen = () => {
    return (
        <ScrollView    
          style={{flex: 1, backgroundColor: '#ffffff'}}
          showsVerticalScrollIndicator={false}>
            <View style={styles.brandView}>
                <Image 
                  source={CyberBar}
                  style={{ width: 300, height: 100, display: 'flex' }}
                />
            </View>
            <View style={styles.bottomView}>
                <Text style={{color: 'blue', fontSize: 34}}>Welcome</Text>
                <Text style={{ color: 'blue' }}>
                    Don't have an account?
                    <Text style={{ color: 'red', fontStyle: 'italic' }}>
                        {' '}
                        Register Now
                    </Text>
                </Text>
                <View style={{ marginTop: 50 }}>
                    
                </View>
            </View>
        </ScrollView>
    );
};



export default LoginScreen;


const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },
    bottomView: {
        flex: 1,
        marginTop: 100,
        padding: 50,
        
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
});