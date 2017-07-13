import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyBsh7KMlFOsEAKbKBUh00YWskWZXJgww3M",
            authDomain: "whatsappclone-a4d60.firebaseapp.com",
            databaseURL: "https://whatsappclone-a4d60.firebaseio.com",
            projectId: "whatsappclone-a4d60",
            storageBucket: "whatsappclone-a4d60.appspot.com",
            messagingSenderId: "854075415539"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Routes />
            </Provider>
        );
    }
    
}

export default App;
