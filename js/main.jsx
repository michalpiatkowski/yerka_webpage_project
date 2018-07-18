import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app.jsx"
require("../scss/main.scss")


class App extends React.Component {
    render() {
        return <App />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});


export {App}