import { useNavigation, useRoute } from '@react-navigation/native';
import { Checkbox, Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import React, { FC, useEffect } from 'react';
import { Alert } from 'react-native';
import Button from '../../components/Button';
import api from '../../services/api';

const Details: FC = () => {

  const route = useRoute();
  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);

  const { item } = route?.params;

  const [ocorrencias, setOcorrencias] = React.useState([]);
  const [ocrDataId, setOcrDataId] = React.useState('');

  const getOcorrencies = async () => {
    try {
      const response = await api.get('/ocorrencias');
      const { data } = response;
      setOcorrencias(data.response);
    } catch (error) {
      console.log(error)
    }

  }

  const sendDataOcr = async () => {
    try {
      setLoading(true);
      const response = await api.post('/ocorrencias', {
        idOcorrencia: ocrDataId,
        idDuv: item.duv,
      });

      if (response.status === 200) {
        setLoading(false);
        Alert.alert(
          'Sucesso',
          "Ocorrência cadastrada com sucesso!",
          [
            {
              text: "OK", onPress: () => navigation.navigate('Home', {
                previousPage: 'Details',
              })
            },
          ]
        );
      }

    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }




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
                    onChange={() => setOcrDataId(ocr.id)}
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
          loading={loading}
          title="Informar Problema"
          onPress={() => sendDataOcr()}
        />
      </VStack>

    </>
  )
}

export default Details;