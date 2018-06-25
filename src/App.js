import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layout from './Layout';
import { HashRouter as Router } from 'react-router-dom';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';

const muiTheme = createMuiTheme({
    palette: {
        primary: green,
        secondary: lightGreen
    }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={muiTheme}>
            <Router>
                <Layout/>
            </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;
