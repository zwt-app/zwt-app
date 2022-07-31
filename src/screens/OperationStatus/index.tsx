import { useNavigation } from '@react-navigation/native';
import { Heading, Text, VStack } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

const OperationStatus: FC = () => {

  const navigation = useNavigation();
  const [vessel, setVessel] = useState('');
  const [vesselId, setVesselId] = useState('');
  const [loading, setLoading] = useState(false);

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
                setVessel('');
                setVesselId('');
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
                setVessel('');
                setVesselId('');
              }
            },
          ]
        );
      }
    } catch (e) {
      console.log(e);
    }
  }




  return <VStack flex={1}
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
      <Input
        onChangeText={setVesselId}
        keyboardType="numeric"
        maxLength={5}
      />

      <Text
        mt={5}>
        Vessel Name
      </Text>
      <Input
        value={vessel ? vessel?.name : ''}
      />
    </VStack>


    <Button
      title='Buscar'
      type='search'
      loading={loading}
      onPress={() => {
        getVesselById();
      }}
    />

    <Button
      title='Atracado no Porto'
      type='late'
      onPress={() => sendDataInform()}
    />
    <Button
      type-="current"
      title='Em Andamento'
      onPress={() => sendDataInOperations()}
    />
  </VStack>
}

export default OperationStatus;