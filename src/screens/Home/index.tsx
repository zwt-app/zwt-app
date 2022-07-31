import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import api from '../../services/api';
import * as S from './styles';

const Home: FC = () => {

  const [vessels, setVessels] = React.useState([]);

  const getVessels = async () => {
    const response = await api.get('/navios');
    const { data } = response;
    setVessels(data.response);
  }

  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('Details', { item });
  }

  const getData = async () => {
    const response = await api.get('/horarios');
    console.log(response.data);

  }

  useEffect(() => {
    getVessels();
  }, [])

  return (
    <VStack
      p={5}
      height="80%"
      mt={10}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Status de Navios
      </Heading>

      <ScrollView>
        {
          vessels?.map(vessel => (
            <HStack w="full"
              borderColor={'gray.200'}
              borderWidth={1}
              p={2}
              borderRadius={10}
              key={vessel.duv}
              mb={5}
            >
              <S.ButtonTouch
                onPress={() => handlePress(vessel)}
              >
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  source={{
                    uri: vessel.img,
                  }} alt="Alternate Text" size="sm" />
                <VStack>
                  <Text
                    ml={5}
                  >
                    Nome: {vessel.name}
                  </Text>

                  <Text
                    ml={5}
                  >
                    Status: {vessel.status}
                  </Text>
                </VStack>

              </S.ButtonTouch>
            </HStack>
          ))
        }
      </ScrollView>
    </VStack >
  )
}

export default Home;