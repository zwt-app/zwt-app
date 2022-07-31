import { useRoute } from '@react-navigation/native';
import { Checkbox, Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { FC } from 'react';
import Button from '../../components/Button';
import { problems } from './problems';

const Details: FC = () => {

  const route = useRoute();

  const { item } = route.params;

  return (
    <>
      <VStack
        p={5}
      >
        <Heading
          fontSize="xl"
          mb={5}
        >
          Navio: {item.fullName} - CDW8738482HU
        </Heading>
        <Text>Informe o problema</Text>

        <ScrollView>
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
                    value={String(data.type)}
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
        </ScrollView>
        <Button
          title="Informar Problema"
        />
      </VStack>
    </>
  )
}

export default Details;