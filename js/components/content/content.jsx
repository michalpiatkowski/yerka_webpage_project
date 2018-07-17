import React from 'react';
import ReactDOM from 'react-dom';

class MainContent extends React.Component {
    render() {
        return   <div className="main-content">
                    <div className="container">

                         <div className="main-slider-news">
                            <div className="main-slider-news-text">News</div>
                            <div className="main-slider-news-arrows"></div>
                            <div className="main-slider-news-photos"></div>
                        </div>
                        <div className="main-slider-gallery">
                            <div className="main-slider-gallery-text">Gallery</div>
                            <div className="main-slider-gallery-arrows"></div>
                            <div className="main-slider-gallery-photos"></div>
                        </div>
                    </div>
                </div>
                }
            }

 document.addEventListener('DOMContentLoaded', function(){
     ReactDOM.render(
        <MainContent/>,
    document.getElementById('app')
    );
});
            
    export {MainContent}