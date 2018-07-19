import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';

class MainContent extends React.Component {
    render() {
        return <div className="main-content">
                    <div className="container">

                        <div className="main-slider-news">
                            <div className="main-slider-news-text"></div>
                            <div className="main-slider-news-arrows">
                            <a className="left_arrow" href="#"><img src="img/icons/arrow_left_32.png" /></a>
                            <a className="right_arrow" href="#"><img src="img/icons/arrow right_32.png"/></a>
                            </div>
                            
                            <div className="main-slider-news-photos">
                            <section className="main-slider-news-photos-container">
                           
                                    <div className="img-news">
                                    <img src="img/banner/barocco.JPG" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>15 07 1410</p>
                                    </div>
                                  
                                    <div className="img-news">
                                    <img src="img/banner/fatamorgana.jpg" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>01 09 1939</p>
                                    </div>
                            </section>
                            </div>
                        </div>

                        <div className="main-slider-gallery">
                            <div className="main-slider-gallery-text"><Link to='/works/paintings'>Gallery</Link></div>
                            <div className="main-slider-gallery-arrows"></div>
                            <div className="main-slider-gallery-photos">
                            <section className="main-slider-gallery-photos-container">
                                    <img src="img/banner/zimowa_fala.jpg" />
                                    <img src="img/banner/fatamorgana.jpg" />
                                    <img src="img/banner/barocco.JPG" />
                                    <img src="img/banner/zimowa_fala.jpg" />
                                    <img src="img/banner/fatamorgana.jpg" />
                                    <img src="img/banner/barocco.JPG" />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            
            }
        }
            
export {MainContent}