import React from 'react';
import {Text} from 'react-native';
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
  return (
    <Container>
      <BarberLogo width="100%" height="160" />

      <InputArea>
        <SignInInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />
        <SignInInput IconSvg={LockIcon} placeholder="Digite sua senha" />

        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};

export default index;
