import React from 'react';
import { Image, Text, View } from 'react-native';


const MenuNavigator = () => {
    return (
        <View style={{ flex: 1, alignSelf: 'flex-start' }}>
            <View style={{ flexDirection: 'row', marginTop: 80, paddingLeft: 30 }}>
                <Text style={{ fontSize: 28, lineHeight: 29}}>Menu</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 20,
                    marginBottom: 20,
                    marginTop: 30,
                }}
            >
                <Image
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/17262777?v=4',
                    }}
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                />
                <View>
                    <Text>John Doe</Text>
                    <Text>example@email.com</Text>
                </View>
            </View>
        </View>
    )
}

export default MenuNavigator;