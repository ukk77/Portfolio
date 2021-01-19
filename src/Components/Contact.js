import React from 'react'
import { TextField, 
         Button } 
         from '@material-ui/core'
import './Contact.css'
import emailjs from 'emailjs-com';

function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();    
        emailjs.sendForm('service_bgb4hg9', 'template_l4n2yhh', e.target, 'user_JVqRyBtrQ0SKgkJkmow9A')
          .then((result) => {
              window.location.reload()   
          }, (error) => {
              console.log(error.text);
          });
      }

    return (
        <form className="contact-form" autocomplete="off" onSubmit={sendEmail}>
            <div className="title">
                <p className="titleP">Get in Touch</p>
            </div>
            
            <div className="form" >
                <div className="nameField">
                    <p className="fieldName">Name</p> <TextField id="outlined-basic" name="from_name" label="Name" fullWidth="true" variant="outlined" required/>
                </div>

                <div className="emailField">
                    <p className="fieldName">Email</p> <TextField id="outlined-basic" name="from_email" label="E-mail" fullWidth="true" variant="outlined" type="email"
                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" required/>
                </div>

                <div className="subjectField">
                    <p className="fieldName">Subject</p> <TextField id="outlined-basic" name="subject" label="Subject"  fullWidth="true" variant="outlined" required/>
                </div>

                <div className="messageField">
                    <p className="fieldName">Message</p> <TextField id="outlined-basic" name="message" label="Message" multiline="true" rows="6" fullWidth="true" variant="outlined" required/>
                </div>

                <div className="sendButton">
                    <Button variant="contained" size="large" type="submit" value="send">Send</Button>
                </div>
            </div>
        </form>
    )
}

export default Contact
