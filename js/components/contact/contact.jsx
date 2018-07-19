import React from 'react';


class Contact extends React.Component {
    render() {
        return <div className="contact-page">
        <div className="container">
        <h1>Contact me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius est arcu, non vestibulum diam elementum vitae. Proin consectetur ante et aliquet volutpat. </p>
        <div className="contact-form">
        
        <form>
            <label> Your name <br/><input name="user_name" type="text" />
            </label>
            <br />
            <label>
            Your email (required) <br/><input name="user_email" type="email" />
            </label>
            <br />
            <label>
            Subject <br/><input name="subject" type="text" />
            </label>
            <br />
            <label>
            Your message<br/><textarea></textarea>   
            </label>
            <br />
            <input type="submit" value="Submit" className="contact-submit"/>
        </form>
        
    </div>
    <p>Thank You for your Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est lacus, ornare vel elit commodo, dapibus imperdiet lectus. Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
</div>
</div>
    }
}


export {Contact}