
// imports ------------------------------------------------
import React from 'react'
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import primaryPalette from '@material-ui/core/colors/teal';
// import secondaryPalette from '@material-ui/core/colors/brown';
import errorPalette from '@material-ui/core/colors/orange';
import noSeQueEsPalette from '@material-ui/core/colors/green';

import './assets/css/style.css';

import App from './components/app';
import BaseConfigure from './components/app/BaseConfigure';

// createStore --------------------------------------------
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

// reducers -----------------------------------------------
import reducers from "./_config/reducers"

// createStore --------------------------------------------
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunk, logger, ));

const pudoYellow={ light: '#ffe74c', main: '#f7b500', dark: '#bf8600',contrastText: '#000000' };
const pudoGrey= { light: '#e2e2db', main: '#b0b0a9', dark: '#81817a',contrastText: '#000000' };

const theme = createMuiTheme({
    palette: {
        //primary: primaryPalette,
        primary:pudoYellow,
        //secondary: secondaryPalette,
        secondary: pudoGrey,
        error:errorPalette,
    },
    status: {
        danger: noSeQueEsPalette,
    },
    typography: {
        useNextVariants: true, // https://material-ui.com/style/typography/#migration-to-typography-v2
        fontFamily: ['neutra',].join(','),
        fontSize: 16,
    },
});

// index render -------------------------------------------

ReactDOM.render(
    <Provider store={store}>
        <BaseConfigure>
            <BrowserRouter>
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </BrowserRouter>
        </BaseConfigure>
    </Provider>,
    document.getElementById('root')
);


