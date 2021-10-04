import React from 'react';
import {Container, LoadingIcon} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

const index = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        /// se tiver token, ou seja, caso ele seja diferente de null;
        //validar o token
      } else {
        navigation.navigate('SignIn');
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <BarberLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#fff" />
    </Container>
  );
};

export default index;
