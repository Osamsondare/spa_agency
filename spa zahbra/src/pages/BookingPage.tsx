import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, CheckSquare } from 'lucide-react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
          phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message
        },
        'AhXCZbMDnht-u787v'
      );
      
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      setTimeout(() => {
        setSuccess(false);
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
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="absolute inset-0 bg-plum-dark/60"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-4" data-aos="fade-down">Book Your Luxury Experience</h1>
          <p className="text-white text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Schedule your appointment and treat yourself to our premium spa and beauty services.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <div data-aos="fade-right">
              <h2 className="mb-6">Reserve Your Session</h2>
              <p className="mb-8 text-plum">
                Fill out the form below to book your appointment. Our team will confirm your booking via email or phone.
              </p>

              {success && (
                <div className="bg-olive-light/20 border border-olive text-olive-dark p-4 rounded-md mb-6 flex items-center" data-aos="fade-down">
                  <CheckSquare className="mr-2" size={20} />
                  <span>Your booking request has been submitted successfully! We'll contact you shortly to confirm.</span>
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
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-taupe">
                        <User size={18} />
                      </span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="Jane Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-plum-dark">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-taupe">
                        <Mail size={18} />
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-plum-dark">
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-taupe">
                        <Phone size={18} />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium text-plum-dark">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Luxury Facial">Luxury Facial</option>
                      <option value="Hair Styling">Hair Styling</option>
                      <option value="Massage Therapy">Massage Therapy</option>
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                      <option value="Body Treatments">Body Treatments</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block mb-2 font-medium text-plum-dark">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-taupe">
                        <Calendar size={18} />
                      </span>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="input-field pl-10"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="time" className="block mb-2 font-medium text-plum-dark">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-taupe">
                        <Clock size={18} />
                      </span>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="input-field pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-plum-dark">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Tell us about any special requests or concerns..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn-primary w-full flex justify-center items-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Book Appointment'}
                </button>
              </form>
            </div>

            {/* Right Column - Information */}
            <div className="lg:pl-8" data-aos="fade-left">
              <h3 className="text-2xl font-serif mb-6">Our Services</h3>

              <div className="space-y-6">
                <div className="bg-taupe-light/10 p-6 rounded-lg border border-taupe-light/20" data-aos="zoom-in">
                  <h4 className="text-xl font-medium mb-3">Luxury Facials</h4>
                  <p className="text-plum mb-3">
                    Our premium facials use high-quality products and advanced techniques to revitalize your skin.
                  </p>
                  <p className="text-gold font-medium">Starting from $120</p>
                </div>

                <div className="bg-taupe-light/10 p-6 rounded-lg border border-taupe-light/20" data-aos="zoom-in" data-aos-delay="100">
                  <h4 className="text-xl font-medium mb-3">Hair Styling</h4>
                  <p className="text-plum mb-3">
                    Transform your look with our expert stylists using premium products and cutting-edge techniques.
                  </p>
                  <p className="text-gold font-medium">Starting from $80</p>
                </div>

                <div className="bg-taupe-light/10 p-6 rounded-lg border border-taupe-light/20" data-aos="zoom-in" data-aos-delay="200">
                  <h4 className="text-xl font-medium mb-3">Massage Therapy</h4>
                  <p className="text-plum mb-3">
                    Relax and rejuvenate with our range of massage therapies, from Swedish to deep tissue.
                  </p>
                  <p className="text-gold font-medium">Starting from $100</p>
                </div>

                <div className="p-6 rounded-lg border border-gold/30 bg-gold/5" data-aos="fade-up" data-aos-delay="300">
                  <h4 className="text-xl font-medium mb-3">Special Package</h4>
                  <p className="text-plum mb-3">
                    Experience our signature package including facial, massage, and hair treatment for the ultimate indulgence.
                  </p>
                  <p className="text-gold font-medium">$250 (Save 15%)</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-plum-dark text-white rounded-lg" data-aos="flip-up" data-aos-delay="400">
                <h4 className="text-gold text-xl font-serif mb-3">Business Hours</h4>
                <ul className="space-y-2">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;