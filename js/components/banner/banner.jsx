import React from 'react';
import ReactDOM from 'react-dom';

class MainBanner extends React.Component {
    render() {
        return <div className="main-banner">
                    <div className="container">
                            
                        <div className="banner-slider banner-slider-first">
                            
                            <a href="#">
                                
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                        </a>
                

                        </div>
                        <div className="banner-slider banner-slider-second">
                            <a href="./pages/paintings.html">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                            </a>
                        </div>
                        <div className="banner-slider banner-slider-third">
                            <a href="#">
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                            </a>
                        </div>
                    </div>
                </div>
            }
        }

export {MainBanner}