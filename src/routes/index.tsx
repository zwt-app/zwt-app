import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Details from '../screens/Details';
import Welcome from '../screens/Welcome';
import OperationStatus from '../screens/OperationStatus';


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="OperationStatus" component={OperationStatus}
                    options={{
                        headerTitle: 'Operação Portuária - RJ',
                        headerBackTitle: null,
                    }}
                />
                <Stack.Screen name="Home" component={Home}
                    options={{
                        headerTitle: 'Operador Maritimo',
                    }}
                />
                <Stack.Screen name="Details" component={Details}

                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;