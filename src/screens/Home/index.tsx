import { Heading, HStack, Image, Text, VStack } from 'native-base';
import React from 'react';
import * as S from './styles';


const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "SM VITORIA",
    status: 'active',
    recentText: "Good Day!",
    avatarUrl: "https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg"
},
];



const Home: React.FC = () => {

    return (
        <VStack
            p={5}
            height="80%"
            mt={10}
        >
            <Heading fontSize="xl" p="4" pb="3">
                Meus Cargueiros
            </Heading>

            <HStack w="full"
                borderColor={'gray.500'}
                borderWidth={1}
                p={2}
                borderRadius={10}
            >
                <S.ButtonTouch>
                    <Image source={{
                        uri: 'https://midias.agazeta.com.br/2021/08/27/navio-brasileiro-pardela-tambem-esta-cumprindo-quarentena-em-vitoria-591319-article.jpg',
                    }} alt="Alternate Text" size="sm" />
                    <Text
                        ml={5}
                    >
                        SM VITORIA
                    </Text>
                </S.ButtonTouch>
            </HStack>
        </VStack >
    )
}

export default Home;