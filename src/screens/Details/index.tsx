import { useRoute } from '@react-navigation/native';
import { Checkbox, Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import Button from '../../components/Button';
import api from '../../services/api';

const Details: FC = () => {

  const [ocorrencias, setOcorrencias] = React.useState([]);

  const getOcorrencies = async () => {
    const response = await api.get('/ocorrencias');
    const { data } = response;
    setOcorrencias(data.response);
  }

  const route = useRoute();

  const { item } = route.params;

  useEffect(() => {
    getOcorrencies();
  }, [])

  return (
    <>
      <VStack
        p={5}
      >
        <Heading
          fontSize="xl"
          mb={5}
        >
          Vessel: {item.name}
        </Heading>
        <Text>Informe o problema</Text>

        <ScrollView>
          {
            ocorrencias.map(ocr => (
              <VStack key={ocr.id}
                mt={5}
              >
                <HStack
                  pl={5}
                >
                  <Checkbox
                    shadow={2}
                    value={String(ocr.descricao)}
                    accessibilityLabel="This is a dummy checkbox"
                  />
                  <Text
                    ml={15}
                  >
                    {ocr.descricao}
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