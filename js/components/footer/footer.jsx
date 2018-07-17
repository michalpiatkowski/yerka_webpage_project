import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    render() {
        return <div className="page-footer">
        <div class="container">
            <div className="page-footer-el">
            <div className="page-footer-copyright">All rights reserved</div>
            <div className="page-footer-social-icons">
                <ul>
                        
                    <li>
                        <i className="fab fa-facebook-f"></i>
                        <a className="social-icon social-facebook" href="">Facebook</a>
                    </li>
                    <li>
                        <i className="fab fa-twitter"></i>
                        <a className="social-icon social-twitter" href="">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Footer/>,
        document.getElementById('app')
    );
});

export {Footer}