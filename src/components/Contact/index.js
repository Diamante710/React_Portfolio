import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [formErrors, setFormErrors] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const { name, email, message } = formData;
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    };
  
    const validateForm = () => {
      let errors = {};
      let isValid = true;
  
      if (!name) {
        errors.name = 'Name is required';
        isValid = false;
      }
  
      if (!email) {
        errors.email = 'Email is required';
        isValid = false;
      } else if (
        !/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(email)
      ) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
      }
  
      if (!message) {
        errors.message = 'Message is required';
        isValid = false;
      }
  
      setFormErrors(errors);
      return isValid;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
      }
    };
  
    return (
      <section>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
              name="name"
              value={name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <div className="error-text">{formErrors.name}</div>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
              name="email"
              value={email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <div className="error-text">{formErrors.email}</div>
            )}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
              name="message"
              value={message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <div className="error-text">{formErrors.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </section>
    );
  };
export default Contact;