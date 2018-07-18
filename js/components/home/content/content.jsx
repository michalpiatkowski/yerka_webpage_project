import React from 'react';

class MainContent extends React.Component {
    render() {
        return <div className="main-content">
                    <div className="container">

                        <div className="main-slider-news">
                            <div className="main-slider-news-text">News</div>
                            <div className="main-slider-news-arrows"></div>
                            <div className="main-slider-news-photos">
                                    <div className="news-photo"></div>
                                    <div className="news-photo"></div>
                                    <div className="news-photo"></div>
                                    <div className="news-photo"></div>
                                    <div className="news-photo"></div>
                            </div>
                        </div>

                        <div className="main-slider-gallery">
                            <div className="main-slider-gallery-text"><a href="pages/paintings.html">Gallery</a></div>
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