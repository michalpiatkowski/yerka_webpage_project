import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
    } from 'react-router-dom';
// import { AboutYerkaland } from '../about/about_yerkaland';
// import { AboutYerka } from '../about/about_yerka';

class Navigation extends React.Component {
    render() {
        return <div className="page-navigation">
                    <div className="container">

                        <div className="page-nav">
                            <Link to="/" className="page-logo">Yerkaland</Link>
                            <div className="page-nav-list">
                                <a href="#" className="hamburger"><i className="fas fa-bars"></i></a> 
                               
                                <ul className="page-nav-menu">
                                    <li><a href="#">About</a>
                                        <ul className="page-nav-submenu">
                                            <li><Link to='/about/jacek'>Jacek Yerka</Link></li>
                                            <li><Link to='/about/yerkaland'>Yerkaland</Link></li>
                                        </ul>
                                    </li>

                                    <li><a href="#">Works</a>
                                        <ul className="page-nav-submenu">
                                            <li><Link to='/works/paintings'>Paintings</Link></li>
                                            <li><Link to='/works/pastels'>Pastels</Link></li>
                                        </ul>
                                    </li>

                                    <li><a href="#">Purchase</a>
                                        <ul className="page-nav-submenu">
                                            <li><Link to='/purchase/order'>Order</Link></li>
                                            <li><Link to='/purchase/future'>Future works</Link></li>
                                            <li><a href="https://galeria.agraart.pl/">Art shop</a></li>
                                        </ul>
                                    </li>
                                    
                                    <li><Link to='/contact'>Contact</Link></li>
                                       <li className="flags"> 
                                    <button><img src="img/icons/united-states-of-america_24.png"/></button>
                                    <button><img src="img/icons/poland_24.png"/></button>
                                </li>
                                    </ul>                     
                            </div>
                        </div>
                    </div> 
                </div>    
    }
}

export {Navigation}