import React from 'react';
import ReactDOM from 'react-dom';
import {slides} from './slides.js'

console.log(slides)

class MainBanner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            positionLeft: 0,
            positionTop: 0,
            slidesNumber: slides.length,
            counter : 0
        }
    }

    componentDidMount () {
        this.intervalId = setInterval (()=>{
            if(this.state.counter >= slides.length - 1) {
                //clearInterval( this.intervalId)
                this.setState({
                    counter: 0,
                    positionTop: 0,
                })
            } else {
                this.setState({
                    //positionLeft: this.state.positionLeft - 1200,
                    counter: this.state.counter + 1,
                    positionTop: this.state.positionTop - 600,
                })
            }
          
        }, 5500)
    }

    render() {
        const styleObj = {
            //left: this.state.positionLeft,
            top: this.state.positionTop,
            //width: slides.length * 1200
        }

       
        

        const slidesElem = slides.map( (elem,i ) => {
        const url = {
                backgroundImage: `url(${elem.src})`
            }
            return  <div key={i} 
                        className="main-banner-slide-first main-banner-slide banner-slide--active" 
                        style={url}
                        
                        >
                    <a className="banner-slider-first-link" href={elem.link}>
                        <div className="banner-slider banner-slider-first">
                     
                          
                            <h1>{elem.header}</h1>
                        
                
                        </div>
                    </a>
            </div> 
        })


        return <div className="main-banner container">
                    <div className="main-banner-banner" style={styleObj}>
                    {slidesElem}
                    </div>
                </div>
            }
        }

export {MainBanner}