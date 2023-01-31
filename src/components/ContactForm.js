import React, { useState } from "react";
import axios from "axios";
import './contact-form.scss'

const ContactForm = () => {

  // Set Data

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    selectOption: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({});

    if (!formData.fullName) {
      setErrors({
        fullName: "Full Name is required"
      });
      return;
    }

    if (!formData.email) {
      setErrors({
        ...errors,
        email: "Email Address is required"
      });
      return;
    }

    if (!formData.selectOption) {
      setErrors({
        ...errors,
        selectOption: "Select option is required"
      });
      return;
    }

    if (!formData.message) {
      setErrors({
        ...errors,
        message: "Message is required"
      });
      return;
    }

    setSuccess("Form submitted successfully");

    // Submit the form data to getform.io
    axios
      .post(
        "https://getform.io/f/072021c6-7c38-475b-a937-a90c9dda0412",
        formData
      )
      .then(() => {
        setSuccess("Form submitted successfully");
      })
      .catch((error) => {
        console.error(error);
        setErrors({
          ...errors,
          form: "An error occurred while submitting the form"
        });
      });
  };

  return (

    <section className="contact__form">
      <h1>I would love to hear from you, please get in touch.</h1>
      <form onSubmit={handleSubmit}>
        <label 
          htmlFor="fullName" 
          className="contact__form__label"
        >Your Name</label>
        <input 
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="contact__form__input" 
          placeholder="Full Name" 
        />
        
        {errors.fullName && (
          <p className="message message--error">{errors.fullName}</p>
        )}

        <label 
          htmlFor="email" 
          className="contact__form__label"
        >Email Address</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact__form__input" 
          placeholder="Email Address" 
        />
        {errors.email && (
          <p className="message message--error">{errors.email}</p>
        )}

        <label htmlFor="selectOption" className="contact__form__label">What are you interested in?</label>
        <select 
          name="selectOption"
          id="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className="contact__form__input contact__form__input--select">
          <option value="project">Web Development Consulation</option>
          <option value="project">Web Development Project</option>
          <option value="inquiry">Web Development Inquiry</option>
          <option value="training">Web Development Training</option>
        </select>
        
        {errors.selectOption && (
          <p className="message message--error">{errors.selectOption}</p>
        )}
        
        <label htmlFor="message" className="contact__form__label">Message</label>
        <textarea 
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact__form__input contact__form__input--textarea" placeholder="Your Message..."
        >
        </textarea>
        
        {errors.message && (
          <p className="message message--error">{errors.message}</p>
        )}
        
        <button type="submit" className="btn btn--lg">Submit</button>

        {success && <p className="message message--success">{success}</p>}
      </form>
    </section>
  )
}

export default ContactForm
