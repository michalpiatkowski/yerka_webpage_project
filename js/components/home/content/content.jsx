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
                            <div className="main-slider-news-text">News</div>
                            <div className="main-slider-news-arrows">
                            <a className="left_arrow" href="#"><img src="img/icons/arrow_left_32.png" /></a>
                            <a className="right_arrow" href="#"><img src="img/icons/arrow right_32.png"/></a>
                            </div>
                            
                            <div className="main-slider-news-photos">
                            <section className="main-slider-news-photos-container">
                           
                                    <div className="img-news img-news-first">
                                    <img src="https://lh3.googleusercontent.com/Gkb_Idu94tYBsoDpSaccFouPvQxNI3tIFoCbdTQxfTLK6-KGSiwwSItzBmKi14khZbs2_2kg2YGLqGbYWftRRQFXNMduV0HMtmRUYE4dUlmXDYM3tbmd0LvnP6d_1eGUVBgfjdOwMIDTYFmpsTanpbcEbEr4KPyh8yT4UWEcPEM-i4hfOMoxzJKPbb87r38uGwa_PY3ka2womYRGrhEBmq7QC1Vo2MgPmKLiXrpe1pN83ndWe8GCNQ1q7sM8APzKdJ8PoGvLsG9FDMca6f17WsQjrbgpITObujBhWlDLrc-nwcPRvtGg6bGBw_95am3PXwXdafJRFkUtxJutEafJ8Xdgs3J3w8dHwYkI7zNZoZuq6yVMdfH4XKGPsGa07cft3hKnq1SxT2n_hH5t8ZLT_IQ9-LlYVA31DIgevHmHeBXm_gOJT6xpuAKJyAmMw-sPiTlBBlinoyuZAmc2UKA5ETusY18p-LecLubH72AdY_kPcETreX96PfKfwColmKUuTMeGdp3NYKYl9Xn64AUlEXBwEWDJ_uPocVMlnEVWeqGHMq7y3NV3urWW3U0054kgrLE8fle6wDrlnCuy1zXcgjxq3xs8lJmSc01k8x8=w681-h543-no" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>15 07 1410</p>
                                    </div>
                                  
                                    <div className="img-news img-news-second">
                                    <img src="https://lh3.googleusercontent.com/2bFcIV_wV68R_vpzlBHyjHWHAsUMMsisI8XrLqY-YExC3k_7lnJa0LDkCgMEOpdsnvO9Kil0sSTIGwUXy9RC8VB1jBdW6Qq2YJdsFSOWW8YTSsenQ9lhS35stP9RSfrLFGtxvQCKSl4kfBD4xrU__ESw2sYSd9Ngv0lJHCeBkaz3T9X0KZrWeirxXWFfGMokCx7z11uaFDo9O5zK-_sSqwZmYXRwZ79DFYyntCwwcBO0JT2J3QrxinqTKAjmnv-Qz-lfT8cKGd_2xHuWolwOu7utB1-QXD5aqY0blP1kk6TXeEH4OvgU6eJdzmzOGll1iSiM3FFTEYBhlqIxwLlqmg-cnJOiN7G7-IlHcne2EAXAIio4sKBWG1Ig5wWkd20IQBsSdBd0O-XvB2IeXOE4PsFYsiEl34Y-Q77a6IBlrIVRbzFluBEOVBHOH4He3_BIvuGdiHCbXg2tKlTIJec9edGsVwc5QMLLpDuRPOdbCsKbGpIWmcoPJWYMFg4degU8MKjuO-tCoFTtN1JRs0fmAykEv_7xt6ngdRAhzKoP679UAgLEg5yuq2_4318B9bSiyIiSLJaoYq3KRpl8-wy1PUiNMLwMsLfZxQyzFtQ=w1047-h832-no" />
                                    <h3>Lorem ipsum</h3>
                                    <h4>Lorem ipsum</h4>
                                    <p>01 09 1939</p>
                                    </div>
                            </section>
                            </div>
                        </div>

                        <div className="main-slider-gallery">
                            <div className="main-slider-gallery-text"><Link to='/works/paintings'>Gallery of paintings</Link></div>
                            <div className="main-slider-gallery-arrows"></div>
                            <div className="main-slider-gallery-photos">
                            <section className="main-slider-gallery-photos-container">
                                    <img src="img/paintings/podwojne_zycie_2.jpg" />
                                    <img src="img/banner/zimowa_fala.jpg" />
                                    <img src="img/paintings/partia_na_wyspie.jpg" />
                                    <img src="img/banner/fatamorgana.jpg" />
                                    <img src="img/paintings/partia_na_rafie.jpg" />
                                    <img src="img/banner/barocco.jpg" />
                                    <img src="img/paintings/pod_pejzazem.jpg" />
                                    <img src="img/paintings/perlowa_zatoka66.jpg" />
                                    <img src="img/paintings/odnalezienie_sw_graala.jpg" />
                                    <img src="img/paintings/nie_trzaskac_drzwiami.jpg" />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            
            }
        }
            
export {MainContent}