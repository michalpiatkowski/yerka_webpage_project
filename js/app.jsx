import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';

import {Navigation} from './components/navigation/navigation.jsx'
import {Footer} from './components/footer/footer.jsx'
import {Home} from './components/home/home.jsx'
import {Contact} from './components/contact/contact.jsx'
import { AboutYerka } from './components/about/about_yerka.jsx';
import { AboutYerkaland } from './components/about/about_yerkaland.jsx';
import { Paintings } from './components/works/paintings.jsx';
import { Pastels } from './components/works/pastels.jsx'
import { Order } from './components/purchase/order.jsx';
import { FutureWorks } from './components/purchase/future_works.jsx';

require("../scss/main.scss")

class NotFound extends React.Component {
    render() {
        return <h1>404, Nothing is here</h1>
    }
}

class App extends React.Component {
    render() {
        return <HashRouter>
            <div>
            <Navigation />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about/jacek' component={AboutYerka} />
                <Route path='/about/yerkaland' component={AboutYerkaland} />
                <Route path='/works/paintings' component={Paintings} />
                <Route path='/works/pastels' component={Pastels} />
                <Route path='/purchase/order' component={Order} />
                <Route path='/purchase/future' component={FutureWorks} />
                <Route path='/contact' component={Contact} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
            </div>
        </HashRouter>;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

