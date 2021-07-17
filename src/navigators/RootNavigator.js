import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

function RootNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen />
            <RootStack.Screen />
            <RootStack.Screen />
        </RootStack.Navigator>
    )
};

export default RootNavigator;