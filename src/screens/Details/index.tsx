import { useRoute } from '@react-navigation/native';
import { Checkbox, Heading, HStack, Text, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import Button from '../../components/Button';

type DetailsProps = {
  id: string;
  fullName: string;
  status: string;
  cruzeVelocit: string;
  avatarUrl: string;
}

const Details: FC = () => {

  const route = useRoute();

  const { item } = route.params;

  useEffect(() => {
    console.log(item);
  }, [])

  const problems = [
    {
      id: 1,
      title: 'Problema Mecanico',
      type: 'mecanic',
    },
    {
      id: 2,
      title: 'Tempestade',
      type: 'weather'
    },
    {
      id: 3,
      title: 'Ataque de Tubarao',
      type: 'shark'
    },

  ]

  return (
    <>
      <VStack
        p={5}
        height="80%"
      >
        <Heading
          // mt={10}
          fontSize="xl"
          mb={10}
        >
          Navio: {item.fullName}
        </Heading>
        {
          problems.map(data => (
            <VStack key={data.id}
              mt={5}
            >
              <HStack
                pl={5}
              >
                <Checkbox
                  shadow={2}
                  value={data.type}
                  accessibilityLabel="This is a dummy checkbox"
                />
                <Text
                  ml={15}
                >
                  {data.title}
                </Text>
              </HStack>
            </VStack>
          ))
        }
      </VStack>


      <VStack
        flex={1}
        p={10}
      >
        <Button
          title="Informar Problema"
        />
      </VStack>
    </>
  )
}

export default Details;