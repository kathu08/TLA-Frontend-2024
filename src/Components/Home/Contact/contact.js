import React, { useState } from 'react';
import { Container, Grid } from '@mui/material'
import './contact.css'
import Heading from "../../../shared/Heading";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = () => {
        console.log('Form Data:', formData);
    };

    return (
        <Container maxWidth='lg' className="contact-container-div">
            <Heading>தொடர்புகள்</Heading>

            <div className="contact-container">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={12} sm={10}>
                        <Grid container spacing={4} direction="column">
                            <Grid item>
                                <div className="contact-row">பெயர்</div>
                                <div className="contact-icon-div">
                                    <input className="contact-input"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                    ></input>
                                    <span className="contact-icon material-symbols-outlined">person</span>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="contact-row">மின்னஞ்சல்</div>
                                <div className="contact-icon-div">
                                    <input className="contact-input"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    ></input>
                                    <span className="contact-icon material-symbols-outlined">mail</span>
                                </div>
                            </Grid>
                            <Grid item>
                                <div className="contact-row">தகவல்</div>
                                <div className="contact-icon-div">
                                    <textarea className="contact-input message-input"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </Grid>
                            <Grid item>
                                <button className="contact-send-button" onClick={handleSubmit}>அனுப்பு</button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className="col-right">
                            <Grid item>
                                <div className="nav-text">மின்னஞ்சல்</div>
                                <a className="nav-link" href="mailto:thamizhiyam@gmail.com">thamizhiyam@gmail.com</a>
                            </Grid>
                            <Grid item>
                                <div className="nav-text">முகப்புத்தகம்</div>
                                <a className="nav-link" href="https://web.facebook.com/TLAuom" target="_blank" rel="noopener noreferrer">https://web.facebook.com/TLAuom</a>
                            </Grid>
                            <Grid item>
                                <div className="nav-text">நீகுழாய்</div>
                                <a className="nav-link" href="https://www.youtube.com/@TLAUOM" target="_blank" rel="noopener noreferrer">https://www.youtube.com/@TLAUOM</a>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>

    );
}
export default Contact
