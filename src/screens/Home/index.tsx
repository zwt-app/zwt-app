import { useNavigation, useRoute } from '@react-navigation/native';
import { Heading, HStack, Image, ScrollView, Text, useTheme, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import api from '../../services/api';
import * as S from './styles';

const Home: FC = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const previousPage = route?.params;
  const { colors } = useTheme()


  const [vessels, setVessels] = React.useState([]);


  const getVessels = async () => {
    const response = await api.get('/navios');
    const { data } = response;
    setVessels(data.response);
  }

  const handlePress = (item) => {
    navigation.navigate('Details', { item });
  }

  useEffect(() => {
    getVessels();
  }, [])

  useEffect(() => {
    if (previousPage) {
      getVessels();
    }
  }, [previousPage])



  return (
    <VStack
      p={5}

      mt={10}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Status de Navios - {new Date().toLocaleDateString()}
      </Heading>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          vessels?.map(vessel => (
            <HStack w="full"
              borderWidth={0.2}
              borderTopWidth={2}
              borderRightWidth={2}
              borderRightColor={vessel.status === 'EM ANDAMENTO' ? colors.green[700] : colors.red[700]}
              borderTopColor={vessel.status === 'EM ANDAMENTO' ? colors.green[700] : colors.red[700]}
              borderBottomWidth={2}
              borderBottomColor={vessel.status === 'EM ANDAMENTO' ? colors.green[700] : colors.red[700]}
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
                  }} alt="Alternate Text" size="md" />
                <VStack>
                  <Text
                    ml={5}
                  >
                    Vessel Name: {vessel.name}
                  </Text>

                  <Text
                    ml={5}
                  >
                    Status
                  </Text>
                  <Text ml={5}>
                    {vessel.status}
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