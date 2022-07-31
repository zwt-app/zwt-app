import { Heading, Text, VStack, Icon, useTheme, HStack } from 'native-base';
import React, { FC, useState } from 'react';
import { Alert, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import { Envelope, MagnifyingGlass } from 'phosphor-react-native'


const OperationStatus: FC = () => {

  const [vessel, setVessel] = useState('');
  const [vesselId, setVesselId] = useState('');
  const [loading, setLoading] = useState(false);
  const { colors } = useTheme();

  const getVesselById = async () => {

    try {
      setLoading(true);
      const response = await api.get(`/navios/${vesselId}`);
      const { data } = response;
      if (response.status === 200) {
        setVessel(data.response);
        setLoading(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  const sendDataInform = async () => {
    try {
      const response = await api.post('/pcs/status', {
        status: 'ATRACADO NO PORTO',
        idDuv: vesselId,
      });
      if (response.data.response === 'OK') {
        Alert.alert(
          'Sucesso',
          "Alteração efetuada com sucesso",
          [
            {
              text: "OK",
              onPress: () => {
                setVessel(null);
                setVesselId(null);
              }
            },
          ]
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  const sendDataInOperations = async () => {
    try {
      const response = await api.post('/pcs/status', {
        status: 'EM ANDAMENTO',
        idDuv: vesselId,
      });
      if (response.data.response === 'OK') {
        Alert.alert(
          'Sucesso',
          "Alteração efetuada com sucesso",
          [
            {
              text: "OK",
              onPress: () => {
                setVessel(null);
                setVesselId(null);
              }
            },
          ]
        );
      } else {
        console.log(response.data);

      }
    } catch (e) {
      console.log(e);
    }
  }




  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}
      accessible={false}>

      <VStack flex={1}
        alignContent="center"
        justifyContent="center"
        p={10}>

        <Heading>
          Status Operacional
        </Heading>
        <Text>
          Atracado Porto Anterior
        </Text>

        <VStack mt={5}>
          <Text>
            DUV
          </Text>

          <HStack>
            <Input
              onChangeText={setVesselId}
              keyboardType="numeric"
              maxLength={5}
              w="90%"
            />
            <VStack
              alignItems={'center'}
              justifyContent={'center'}
              w="20%"
            >
              <TouchableOpacity onPress={() => {
                getVesselById();
              }}>
                <Icon
                  as={<MagnifyingGlass color={colors.gray[300]} />}
                  mr={5}
                />
              </TouchableOpacity>

            </VStack>

          </HStack>



          <Text
            mt={5}>
            Vessel Name
          </Text>
          <Input
            value={vessel ? vessel?.name : ''}
          />
        </VStack>

        <Button
          title='Atracado no Porto'
          type='late'
          onPress={() => sendDataInform()}
        />
        <Button
          type-="current"
          title='Partiu do Porto'
          onPress={() => sendDataInOperations()}
        />
      </VStack>
    </TouchableWithoutFeedback>
  )


}

export default OperationStatus;