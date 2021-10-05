import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from './styles';

import BarberLogo from '../../assets/barber.svg';
import SignInInput from '../../components/SignInInput';

import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

const index = () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}], //// para ele não ter a opção de voltar para a tela de login;
    });
  };

  const handleSignClick = () => {};

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={e => setEmailField(e)}
        />
        <SignInInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={e => setPasswordField(e)}
          password={true}
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default index;
