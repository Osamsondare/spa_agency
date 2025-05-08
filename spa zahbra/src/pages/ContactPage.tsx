import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await emailjs.send(
        'service_j4aw50k',
        'template_3ngl8ed',
        {
          to_email: 'osamsond@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'AhXCZbMDnht-u787v'
      );
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Email sending error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/6483581/pexels-photo-6483581.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="absolute inset-0 bg-plum-dark/60"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-4" data-aos="fade-down">Contact Us</h1>
          <p className="text-white text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Get in touch with our team for inquiries, bookings, or any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Card 1 */}
            <div className="bg-taupe-light/10 rounded-lg p-8 flex flex-col items-center text-center" data-aos="fade-up">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-plum-dark mb-4">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl mb-3">Visit Us</h3>
              <p className="text-plum mb-2">123 Beauty Lane</p>
              <p className="text-plum">Luxury District, LX 12345</p>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-taupe-light/10 rounded-lg p-8 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-plum-dark mb-4">
                <Phone size={28} />
              </div>
              <h3 className="text-xl mb-3">Call Us</h3>
              <p className="text-plum mb-2">+1 (555) 123-4567</p>
              <p className="text-plum">+1 (555) 987-6543</p>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-taupe-light/10 rounded-lg p-8 flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-plum-dark mb-4">
                <Mail size={28} />
              </div>
              <h3 className="text-xl mb-3">Email Us</h3>
              <p className="text-plum mb-2">info@zahabaesthetics.com</p>
              <p className="text-plum">bookings@zahabaesthetics.com</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="mb-6">Send Us a Message</h2>
              <p className="mb-8 text-plum">
                Have a question or comment? Fill out the form below and our team will get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="bg-olive-light/20 border border-olive text-olive-dark p-4 rounded-md mb-6" data-aos="fade-down">
                  <span>Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-md mb-6" data-aos="fade-down">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-plum-dark">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-plum-dark">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-plum-dark">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-plum-dark">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn-primary flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Business Hours & Map */}
            <div data-aos="fade-left">
              {/* Business Hours */}
              <div className="mb-8 p-6 bg-plum-dark text-white rounded-lg" data-aos="flip-up">
                <div className="flex items-center mb-4">
                  <Clock size={24} className="text-gold mr-3" />
                  <h3 className="text-xl font-serif text-gold">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>11:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-md h-96 relative" data-aos="zoom-in">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48372.14637884088!2d-74.00943460582883!3d40.71274586344276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1652278963699!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zahab Aesthetics Spa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-taupe-light/10">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-plum">
              Find quick answers to common questions about our services, booking process, and policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* FAQ 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up">
              <h3 className="text-lg font-medium mb-3">How far in advance should I book an appointment?</h3>
              <p className="text-plum">
                We recommend booking 1-2 weeks in advance for standard services, and 2-3 weeks for specialized treatments to ensure availability.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-lg font-medium mb-3">What is your cancellation policy?</h3>
              <p className="text-plum">
                We require 24 hours notice for cancellations. Late cancellations or no-shows may incur a fee of 50% of the service price.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-medium mb-3">Do you offer gift cards?</h3>
              <p className="text-plum">
                Yes, we offer digital and physical gift cards in various denominations. They can be purchased in-store or through our website.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-lg font-medium mb-3">What should I do to prepare for my spa treatment?</h3>
              <p className="text-plum">
                We recommend arriving 15 minutes before your appointment, avoiding heavy meals, and staying hydrated. For facials, please come with a clean face.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;