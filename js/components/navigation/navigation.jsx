import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
    render() {
        return <div className="page-navigation">
        <div className="container">

            <div className="page-nav">
                <a href="index.html" class="page-logo">Yerkaland</a>
                <div className="page-nav-list">
                        <a href="#" class="hamburger"><i class="fas fa-bars"></i></a> 
                    <ul className="page-nav-menu">
                        <li><a href="#">About</a>
                            <ul className="page-nav-submenu">
                                <li><a href="#">Jacek Yerka</a></li>
                                <li><a href="./pages/about_yerkaland.html">Yerkaland</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Works</a>
                            <ul className="page-nav-submenu">
                                <li><a href="pages/paintings.html">Paintings</a></li>
                                <li><a href="#">Pastels</a></li>
                            </ul>
                        </li>

                        <li><a href="#">Purchase</a>
                            <ul className="page-nav-submenu">
                                <li><a href="#">Order</a></li>
                                <li><a href="#">Future works</a></li>
                                <li><a href="https://galeria.agraart.pl/">Art shop</a></li>
                            </ul>
                        </li>
                        
                        <li><a href="./pages/contact.html">Contact</a></li>
                        <li><button>PL</button> <button>ENG</button></li>
                    </ul>
                  
                        
                </div>
            </div>

        </div> 
    </div>    
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Navigation />,
        document.getElementById('app')
    );
});

export {Navigation}