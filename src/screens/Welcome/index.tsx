import { useNavigation } from '@react-navigation/native';
import { Heading, Image, useTheme, VStack } from 'native-base';
import React from 'react';
import Button from '../../components/Button';

const Welcome: React.FC = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    return (
        <VStack
            flex={1}
            justifyContent="center"
            alignItems="center"
            bg={colors.white}
            p={10}
        >
            <Heading mb={10}>
                Zero Waiting Time
            </Heading>
            <Image
                source={require('../../assets/logo.jpeg')}
                size="xl"
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                alt="Alternate Text"
            />
            <Button
                title="Visao Operador Maritimo"
                variant="outline"
                w="full"
                bg={colors.blue[500]}
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Visao Terminal"
                w="full"
                onPress={() => navigation.navigate('OperationStatus')}
                bg={colors.darkBlue[700]}
            />
        </VStack>
    )
}

export default Welcome;