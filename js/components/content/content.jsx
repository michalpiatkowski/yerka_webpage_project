import React from 'react';
import ReactDOM from 'react-dom';

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
                            <div className="main-slider-gallery-text">Gallery</div>
                            <div className="main-slider-gallery-arrows"></div>
                            <div className="main-slider-gallery-photos">
                                    <div className="gallery-photo"></div>
                                    <div className="gallery-photo"></div>
                                    <div className="gallery-photo"></div>
                                    <div className="gallery-photo"></div>
                                    <div className="gallery-photo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            }
        }
            
export {MainContent}