import { Heading, HStack, Image, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import * as S from './styles';

const data = [{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  fullName: "SM VITORIA",
  status: 'active',
  cruzeVelocit: "12.5",
  avatarUrl: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
  fullName: "SM VITORIA",
  status: 'active',
  cruzeVelocit: "12.5",
  avatarUrl: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
{
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
  fullName: "SM VITORIA",
  status: 'active',
  cruzeVelocit: "12.5",
  avatarUrl: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
];

const Home: FC = () => {

  return (
    <VStack
      p={5}
      height="80%"
      mt={10}
    >
      <Heading fontSize="xl" p="4" pb="3">
        Meus Cargueiros
      </Heading>

      {
        data.map(item => (
          <HStack w="full"
            borderColor={'gray.200'}
            borderWidth={1}
            p={2}
            borderRadius={10}
            key={item.id}
            mb={5}
          >
            <S.ButtonTouch>
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
                <Text
                  ml={5}
                >
                  Velocidade de Cruzeiro: {item.cruzeVelocit}
                </Text>
              </VStack>

            </S.ButtonTouch>
          </HStack>
        ))
      }
    </VStack >
  )
}

export default Home;