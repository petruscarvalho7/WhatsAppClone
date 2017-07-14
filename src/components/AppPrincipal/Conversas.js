import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../../actions/AppActions';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
 
class Conversas extends Component {

    componentWillMount() {
        this.props.conversasUsuarioFetch();
        this.criaFonteDeDados(this.props.conversas);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.conversas);
    }

    criaFonteDeDados(conversas) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.fonteDeDados = ds.cloneWithRows(conversas);
    }

    renderRow(conversa) {
        return (
            <TouchableHighlight
                onPress={() => Actions.conversa({ title: conversa.nome, 
                contatoNome: conversa.nome, 
                contatoEmail: conversa.email })}
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 20 }}>{conversa.nome}</Text>
                </View>
            </TouchableHighlight>
            
        );
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const conversas = _.map(state.ListaContatosReducer, (val, uid) => ({ ...val, uid }));
    return { conversas };
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);
