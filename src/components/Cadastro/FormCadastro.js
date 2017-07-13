import React, { Component } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, 
        modificaSenha, 
        modificaNome, 
        cadastrarUsuario 
    } from '../../actions/AutenticacaoActions';

const imgBackground = require('../../imgs/bg.png');

class formCadastro extends Component {

    _cadastrarUsuario() {
        const { nome, email, senha } = this.props;
        this.props.cadastrarUsuario({ nome, email, senha });
    }

    renderCadastrarButton() {
        if (this.props.loadingCadastrar) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            <Button color='#115E54' color='#115E54' onPress={() => this._cadastrarUsuario()} title='Cadastrar' />
        );
    }

    render() {
        return (
            <Image source={imgBackground} style={styles.backgroundImage}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput 
                        value={this.props.nome} 
                        placeholder='Nome' 
                        placeholderTextColor='#FFF'
                        style={{ fontSize: 20, height: 45 }}
                        onChangeText={texto => this.props.modificaNome(texto)}
                        />
                        <TextInput 
                        value={this.props.email} 
                        placeholder='E-mail' 
                        placeholderTextColor='#FFF'
                        style={{ fontSize: 20, height: 45 }} 
                        onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput 
                        secureTextEntry
                        value={this.props.senha} 
                        placeholder='Senha' 
                        placeholderTextColor='#FFF'
                        style={{ fontSize: 20, height: 45 }} 
                        onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text style={{ color: '#FF0000', textAlign: 'center', fontSize: 20 }}>
                            {this.props.erro}
                        </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        {this.renderCadastrarButton()}
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
        nome: state.AutenticacaoReducer.nome,
        erro: state.AutenticacaoReducer.erro,
        loadingCadastrar: state.AutenticacaoReducer.loadingCadastrar
    }
);

export default connect(mapStateToProps, 
{ modificaEmail, modificaSenha, modificaNome, cadastrarUsuario })(formCadastro);
