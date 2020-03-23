import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterApp from '../src/navigations/Router'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
        )
    }
}

export default App;
