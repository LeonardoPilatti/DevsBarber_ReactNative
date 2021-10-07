import React, {useContext} from 'react';
import {Container, LoadingIcon} from './styles';

import {UserContext} from '../../contexts/UserContext';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';

const index = () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);

  React.useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        /// se tiver token, ou seja, caso ele seja diferente de null;
        //validar o token
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem('@token', res.token);

          userDispatch({
            type: 'setAvatar',
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            routes: [{name: 'MainTab'}],
          });
        } else {
          navigation.navigate('SignIn');
        }
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
