import React, { Component } from 'react';
import { View, 
    Text, 
    TextInput, 
    Button, 
    TouchableHighlight, 
    Image, 
    StyleSheet, 
    ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, 
        modificaSenha,
        autenticarUsuario
    } from '../../actions/AutenticacaoActions';


const imgBackground = require('../../imgs/bg.png');

class FormLogin extends Component { 

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderAcessarButton() {
        if (this.props.loadingLogin) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            
            <Button title='Acessar' color='#115E54' onPress={() => this._autenticarUsuario()} />
        );
    }

    render() {
        return (
            <Image source={imgBackground} style={styles.backgroundImage}>
                <View style={{ flex: 1, padding: 10 }} >
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 25, color: '#FFF' }}> WhatsApp Clone </Text>
                    </View>
                    <View style={{ flex: 2 }}> 
                        <TextInput 
                        value={this.props.email} 
                        style={{ fontSize: 20, height: 45 }} 
                        placeholder='E-mail' 
                        placeholderTextColor='#FFF' 
                        onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput 
                        secureTextEntry
                        value={this.props.senha} 
                        style={{ fontSize: 20, height: 45 }} 
                        placeholder='Senha' 
                        placeholderTextColor='#FFF' 
                        onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 20 }}>
                            {this.props.erroAutenticar}
                        </Text>
                        <TouchableHighlight onPress={() => Actions.cadastro()}>
                            <Text style={{ fontSize: 20, color: '#FFF', textAlign: 'center' }}> Ainda não tem cadastro ?
                                Cadastre-se! </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }}>
                        {this.renderAcessarButton()}
                    </View>
                </View>
            </Image>
        );
    }
}


const styles = StyleSheet.create({
    
    backgroundImage: {
        flex: 1,
        width: null
    }
});


const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroAutenticar: state.AutenticacaoReducer.erroAutenticar,
        loadingLogin: state.AutenticacaoReducer.loadingLogin
    }
);

export default connect(mapStateToProps, 
    { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);
