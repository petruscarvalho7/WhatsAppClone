import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {

    componentWillMount() {
        this.props.contatosUsuarioFetch();
        this.criaFonteDeDados(this.props.contatos);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.contatos);

    }

    criaFonteDeDados(contatos) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.fonteDeDados = ds.cloneWithRows(contatos);
    }

    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.fonteDeDados}
                renderRow={data => 
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
                    <Text style={{ fontSize: 20 }}>{data.nome}</Text>
                    <Text style={{ fontSize: 15 }}>{data.email}</Text>
                </View>
                }
            />
        );
    }
}

const mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => ({ ...val, uid }));
    return { contatos };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
