import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      // You can integrate with an API or email service here
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            
            {submitted ? (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h3>Thank You!</h3>
                <p>Thanks for reaching out! We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
                
                <button type="submit" className="submit-btn">
                  <span>Send Message</span>
                  <span className="btn-icon">📤</span>
                </button>
              </form>
            )}
          </div>

          <div className="contact-info-section">
            <h3>Contact Information</h3>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <span className="icon-text">📍</span>
              </div>
              <div>
                <h4>Address</h4>
                <p>Accra, Ghana<br />West Africa</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <span className="icon-text">📞</span>
              </div>
              <div>
                <h4>Phone</h4>
                <p>+233 XX XXX XXXX</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <span className="icon-text">✉️</span>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@kofigreenfarm.com</p>
              </div>
            </div>
            
            <div className="contact-info-item">
              <div className="contact-icon">
                <span className="icon-text">🕒</span>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Kofi Green's Farm Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.3033192156!2d-0.262401!3d5.560025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b4c6b3f1a7b%3A0x6e8f8b6e8f8b6e8f!2sAccra!5e0!3m2!1sen!2sgh!4v1610000000000"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;