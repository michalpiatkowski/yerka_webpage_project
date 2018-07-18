import React from 'react';
import ReactDOM from 'react-dom';

import {Navigation} from './navigation/navigation.jsx'
import {MainBanner} from './banner/banner.jsx'
import {MainContent} from './content/content.jsx'
import {Footer} from './footer/footer.jsx'


class App extends React.Component {
    render() {
        return <div>
                <Navigation />
                <MainBanner />
                <MainContent />
                <Footer />
            </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});

export {App}