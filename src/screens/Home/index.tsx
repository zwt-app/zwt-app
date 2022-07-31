import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Image, ScrollView, Text, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import api from '../../services/api';
import * as S from './styles';

const data = [{
  vesselId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "SM VITORIA",
  operationStatus: 'active',
  vesselImg: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
{
  vesselId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
  fullName: "SM VITORIA",
  operationStatus: 'active',
  vesselImg: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
{
  vesselId: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
  fullName: "SM VITORIA",
  operationStatus: 'active',
  vesselImg: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
];


const Home: FC = () => {



  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('Details', { item });
  }

  const getData = async () => {
    const response = await api.get('/horarios');
    console.log(response.data);
  }

  useEffect(() => {
    getData();
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
          data.map(item => (
            <HStack w="full"
              borderColor={'gray.200'}
              borderWidth={1}
              p={2}
              borderRadius={10}
              key={item.vesselId}
              mb={5}
            >
              <S.ButtonTouch
                onPress={() => handlePress(item)} r
              >
                <Image
                  style={{
                    borderRadius: 10,
                  }}
                  source={{
                    uri: item.avatarUrl,
                  }} alt="Alternate Text" size="sm" />
                <VStack>
                  <Text
                    ml={5}
                  >
                    Nome: {item.fullName}
                  </Text>

                  <Text
                    ml={5}
                  >
                    Status: {item.status}
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