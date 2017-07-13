import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import { MODIFICA_NOME, 
        MODIFICA_EMAIL,
        MODIFICA_SENHA,
        SUCESSO,
        ERRO,
        AUTENTICAR_SUCESSO,
        AUTENTICAR_ERRO,
        CONTATOS,
        LOGIN_ANDAMENTO,
        CADASTRO_ANDAMENTO
     }
from './types';

export const modificaEmail = (texto) => ({
        type: MODIFICA_EMAIL,
        payload: texto
    });

export const modificaSenha = (texto) => ({
        type: MODIFICA_SENHA,
        payload: texto
    });
    

export const modificaNome = (texto) => ({
        type: MODIFICA_NOME,
        payload: texto
    });

export const cadastrarUsuario = ({ nome, email, senha }) => dispatch => {
        dispatch({ type: CADASTRO_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const email64 = b64.encode(email);
                firebase.database().ref(CONTATOS + email64)
                    .push({ nome })
                    .then(value => cadastrarUsuarioSucesso(dispatch));
            })
            .catch(erro => cadastrarUsuarioErro(erro, dispatch));
    };

const cadastrarUsuarioSucesso = (dispatch) => {
    dispatch({ type: SUCESSO });
    Actions.boasVindas();
};

const cadastrarUsuarioErro = (erro, dispatch) => {
    dispatch({ type: ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => dispatch => {
    dispatch({ type: LOGIN_ANDAMENTO });

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(value => autenticarUsuarioSucesso(dispatch))
        .catch(erro => autenticarUsuarioErro(erro, dispatch));
};

const autenticarUsuarioSucesso = (dispatch) => {
    dispatch({ type: AUTENTICAR_SUCESSO });
    Actions.principal();
};

const autenticarUsuarioErro = (erro, dispatch) => {
    dispatch({ type: AUTENTICAR_ERRO, payload: erro.message });
};

