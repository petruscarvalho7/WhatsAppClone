import { MODIFICA_NOME, 
        MODIFICA_EMAIL,
        MODIFICA_SENHA,
        SUCESSO,
        ERRO,
        AUTENTICAR_ERRO,
        LOGIN_ANDAMENTO,
        AUTENTICAR_SUCESSO,
        CADASTRO_ANDAMENTO
        }
from '../actions/types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erro: '',
    erroAutenticar: '',
    loadingLogin: false,
    loadingCadastrar: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
        case ERRO:
           return { ...state, erro: action.payload };
        case AUTENTICAR_ERRO:
            return { ...state, erroAutenticar: action.payload, loadingLogin: false };
        case SUCESSO:
            return { ...state, nome: '', senha: '', loadingCadastrar: false };
        case LOGIN_ANDAMENTO:
            return { ...state, loadingLogin: true };
        case AUTENTICAR_SUCESSO:
            return { ...state, loadingLogin: false };
        case CADASTRO_ANDAMENTO:
            return { ...state, loadingCadastrar: true };
        default:
            return state;
    }
};
