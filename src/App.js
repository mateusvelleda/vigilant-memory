import React, {Component} from 'react';
import './App.css';
import '../node_modules/react-bootstrap/lib/utils/'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import AppBar from 'material-ui/AppBar';
import LinkForm from './components/LinkForm/LinkForm';
import CardList from './components/CardList/CardList';

import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div className="App">
                        <AppBar title="Vigilant Memory" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                        <LinkForm/>
                        <CardList/>
                    </div>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
