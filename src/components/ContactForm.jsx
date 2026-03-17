import React, { useState } from "react";
import "./css/ContactForm.css";
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        emailjs.send(
            serviceId,
            templateId,
            formData,
            publicKey
        )
            .then(() => {
                alert("Message sent successfully");
            })
            .catch((error) => {
                console.log("EmailJS Error:", error);
                alert("Failed to send message");
            });

        setFormData({
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <form className="formContainer" onSubmit={handleSubmit}>

            <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
            />

            <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
            />

            <textarea
                name="message"
                rows="10"
                placeholder="Your Message"
                onChange={handleChange}
            ></textarea>

            <button type="submit">
                Send Message
            </button>

        </form>
    );
};

export default ContactForm;