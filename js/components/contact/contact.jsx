import React from 'react';


class Contact extends React.Component {
    render() {
        return <div className="contact-form">
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
            <input type="submit" value="Submit" />
        </form>
    </div>
    
    }
}


export {Contact}