import React, { Component } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../../actions/AppActions';

const imgBackground = require('../../imgs/bg.png');

class AdicionarContato extends Component {

    renderAcessarButton() {
        if (this.props.loadingAddContato) {
            return (
                <ActivityIndicator size='large' />
            );
        }
    }

    renderAdicionarContato() {
        if (!this.props.cadastro_resultado_inclusao) {
            return (
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TextInput
                                placeholder='E-mail'
                                style={{ fontSize: 20, height: 45 }}
                                onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
                                value={this.props.adiciona_contato_email}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Button 
                                title="Adicionar" 
                                color="#115E54" 
                                onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)} 
                            />
                            <View style={{ flex: 2 }}>
                                {this.renderAcessarButton()}
                            </View>
                            <Text style={{ color: '#ff0000', fontSize: 20 }}>
                                {this.props.cadastro_resultado_txt_erro}
                            </Text>
                        </View>
                    </View>
            );
        } else {
            return (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>
                            Cadastro realizado com sucesso!
                        </Text>
                    </View>

            );
        }
    }
    render() {
        return (
            <Image source={imgBackground} style={styles.backgroundImage}>
                <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
                    { this.renderAdicionarContato() }
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => (
    {
        adiciona_contato_email: state.AppReducer.adiciona_contato_email,
        cadastro_resultado_txt_erro: state.AppReducer.cadastro_resultado_txt_erro,
        cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao,
        loadingAddContato: state.AppReducer.loadingAddContato
    }
);

const styles = StyleSheet.create({
    
    backgroundImage: {
        flex: 1,
        width: null
    }
});

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionarContato);
