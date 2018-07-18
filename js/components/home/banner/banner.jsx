import React from 'react';
import ReactDOM from 'react-dom';

class MainBanner extends React.Component {


    render() {

        /*
        let mainSlider = document.querySelector(".main-banner");
        let slides = mainSlider.querySelectorAll(".main-banner-slide");
        let firstSlide = mainSlider.querySelector(".main-banner-slide-first");
        let secondSlide = mainSlider.querySelector(".main-banner-slide-second");
        let thirdSlide = mainSlider.querySelector(".main-banner-slide-third");
        let interval = null;
        let delay = 5000;
        let currentSlide = 0;

        let nextSlideTimeout = function() {
            timer = setTimeout(function() {
                firstSlide.click();
            }, delay);
        };

        var prevSlide = function() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('banner-slide--active');
            }
            currentSlide--;

            if (currentSlide < 0) {
                currentSlide = slides.length - 1;
            }

            slides[currentSlide].classList.add('banner-slide--active');

            clearTimeout(interval);
            nextSlideTimeout();
            };

            var nextSlide = function() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('banner-slide--active');
            }

            currentSlide++;

            if (currentSlide > slides.length - 1) {
                currentSlide = 0;
            }

            slides[currentSlide].classList.add('banner-slide--active');

            clearTimeout(interval);
            nextSlideTimeout();
            };

            nextSlideTimeout();

            prev.addEventListener('click', prevSlide);
            next.addEventListener('click', nextSlide);
            ;
        

*/

        return <div className="main-banner">
                    <div className="container">

                        <div className="main-banner-slide-first main-banner-slide banner-slide--active">
                            <a className="banner-slider-first-link" href="./pages/about_yerkaland.html">
                                <div className="banner-slider banner-slider-first">
                                    
                                    
                                    <h1>Lorem ipsum</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                        
                                </div>
                            </a>
                        </div> 

                        <div className="main-banner-slide-second main-banner-slide">
                            <a className="banner-slider-second-link" href="./pages/paintings.html">
                                <div className="banner-slider banner-slider-second">
                                    
                                    <h1>Lorem ipsum</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                                    
                                </div>
                            </a>
                        </div>

                        <div className="main-banner-slide-third main-banner-slide">
                            <a className="banner-slider-third-link" href="./pages/paintings.html">
                                <div className="banner-slider banner-slider-third">
                                    
                                    <h1>Lorem ipsum</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet sapien non mauris posuere ullamcorper sit amet a magna. Nullam sapien eros, tempus ut eros in, aliquam gravida nisl.</p>
                                    
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            }
        }

export {MainBanner}