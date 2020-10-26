import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact Us</h2>
            <div className="contact__formContainer">
                <form>
                    <div className="formContainer_name">
                        <label htmlFor="name">Name </label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="formContainer_email">
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" required />
                    </div>
                    <button type="button" className="submitButton">Submit</button>
                </form>
            </div>
                <br/><h2>OR</h2><br/>
            <h1>Feel free to call us on +911234567890</h1>
        </section>
    );
}

export default Contact;
