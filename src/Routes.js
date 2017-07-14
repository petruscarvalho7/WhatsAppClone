import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/Login/FormLogin';
import FormCadastro from './components/Cadastro/FormCadastro';
import BoasVindas from './components/Cadastro/BoasVindas';
import Principal from './components/AppPrincipal/Principal';
import AddContato from './components/AppPrincipal/AdicionarContato';
import Conversa from './components/AppPrincipal/Conversa';

export default props => (
  <Router 
  navigationBarStyle={{ backgroundColor: '#115E54' }}
  titleStyle={{ color: '#FFF' }}
  backTitle={'Voltar'}
  backButtonTextStyle={{ color: '#FFF', textAlign: 'center' }}
  >
    <Scene key='login' component={FormLogin} title='Login' hideNavBar />
    <Scene key='cadastro' component={FormCadastro} title='Cadastro' hideNavBar={false} leftButtonIconStyle={{ tintColor: '#FFF' }} />
    <Scene key='boasVindas' component={BoasVindas} title='Bem Vindo' hideNavBar />
    <Scene key='principal' component={Principal} title='WhatsApp Clone' hideNavBar />
    <Scene key='adicionarContato' component={AddContato} title='Adicionar Contato' hideNavBar={false} leftButtonIconStyle={{ tintColor: '#FFF' }} />
    <Scene key='conversa' component={Conversa} title='Conversa' hideNavBar={false} leftButtonIconStyle={{ tintColor: '#FFF' }} />
  </Router>
);
