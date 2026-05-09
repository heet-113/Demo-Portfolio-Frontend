import React, { useState } from 'react';
import axios from 'axios';
import { Send, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    try {
      // In development, http://localhost:5000/api/contact
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        submitting: false,
        success: false,
        error: 'Failed to send message. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-container">
          <div className="contact-info fade-in-up">
            <h3>Let's talk about your next project</h3>
            <p>
              I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon"><Mail className="text-primary" /></div>
                <div>
                  <h4>Email</h4>
                  <p>heetr102@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon"><MapPin className="text-secondary" /></div>
                <div>
                  <h4>Location</h4>
                  <p>Jetpur, Gujarat</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-panel fade-in-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>

              {status.success && (
                <div className="form-message success">
                  Your message has been sent successfully!
                </div>
              )}

              {status.error && (
                <div className="form-message error">
                  {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
