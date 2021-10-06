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

import Api from '../../Api';

import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

const index = () => {
  const navigation = useNavigation();

  const [nomeField, setNomeField] = React.useState('');
  const [emailField, setEmailField] = React.useState('');
  const [passwordField, setPasswordField] = React.useState('');

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}], //// para ele não ter a opção de voltar para a tela de login;
    });
  };

  const handleSignClick = async () => {
    if (nomeField != '' && emailField != '' && passwordField != '') {
      let res = await Api.SignUp(nomeField, emailField, passwordField);
      if (res.token) {
        alert('Deu certo!');
      } else {
        alert('Erro: ' + res.error);
      }
    } else {
      alert('PReencha os campos!');
    }
  };

  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInInput
          IconSvg={PersonIcon}
          placeholder="Digite seu nome"
          value={nomeField}
          onChangeText={e => setNomeField(e)}
        />
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
          <CustomButtonText>CADASTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default index;
