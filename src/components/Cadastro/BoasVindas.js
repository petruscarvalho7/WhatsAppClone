import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const imageLogo = require('../../imgs/logo.png');
const imgBackground = require('../../imgs/bg.png');

export default props => (
     <Image source={imgBackground} style={styles.backgroundImage}>
        <View style={{ flex: 2, padding: 15, marginTop: 100 }}>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: '#FFF' }}>Seja Bem-Vindo</Text>
                <Image source={imageLogo} style={{ marginTop: 30 }} />
            </View>
            <View style={{ flex: 2, marginTop: 200 }}>
                <Button title='Fazer Login' onPress={() => Actions.login()} />
            </View>
        </View>
    </Image>
);

const styles = StyleSheet.create({
    
    backgroundImage: {
        flex: 1,
        width: null
    }
});