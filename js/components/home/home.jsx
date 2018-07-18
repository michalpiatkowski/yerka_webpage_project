import React from 'react';

import {MainBanner} from './banner/banner.jsx'
import {MainContent} from './content/content.jsx'

class Home extends React.Component {
    render() {
        return <div>
            <MainBanner />
            <MainContent />
        </div>
    }
}

export {Home}