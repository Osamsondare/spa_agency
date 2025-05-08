import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, Trophy, Heart } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-cover bg-center" 
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3997981/pexels-photo-3997981.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="absolute inset-0 bg-plum-dark/50"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <h1 className="text-white mb-6">Experience Luxury at Zahab Aesthetics Spa</h1>
            <p className="text-white text-lg mb-8">
              Where beauty meets tranquility. Indulge in our premium spa and beauty treatments designed for your ultimate relaxation and rejuvenation.
            </p>
            <Link to="/booking" className="btn-primary text-lg" data-aos="zoom-in" data-aos-delay="300">
              Book an Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4">Our Premium Services</h2>
            <p className="max-w-2xl mx-auto text-plum">
              Discover our range of luxury treatments designed to rejuvenate your body and soul, 
              provided by our expert therapists using premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="service-card" data-aos="flip-left">
              <div className="mb-4 text-gold">
                <Sparkles size={40} />
              </div>
              <h3 className="text-xl mb-3">Luxury Facials</h3>
              <p className="text-plum mb-4">
                Revitalize your skin with our premium facials, featuring organic ingredients and advanced techniques.
              </p>
              <Link to="/booking" className="text-gold hover:text-gold-dark font-medium">
                Learn more →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="service-card" data-aos="flip-up" data-aos-delay="100">
              <div className="mb-4 text-gold">
                <Scissors size={40} />
              </div>
              <h3 className="text-xl mb-3">Hair Styling & Treatments</h3>
              <p className="text-plum mb-4">
                Transform your look with our expert stylists, offering cutting-edge techniques and premium products.
              </p>
              <Link to="/booking" className="text-gold hover:text-gold-dark font-medium">
                Learn more →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="service-card" data-aos="flip-right" data-aos-delay="200">
              <div className="mb-4 text-gold">
                <Heart size={40} />
              </div>
              <h3 className="text-xl mb-3">Body Treatments</h3>
              <p className="text-plum mb-4">
                Indulge in our signature massages and body treatments, designed to relax and rejuvenate.
              </p>
              <Link to="/booking" className="text-gold hover:text-gold-dark font-medium">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-taupe-light/20">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="max-w-2xl mx-auto text-plum">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience at Zahab Aesthetics Spa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-right">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
                ></div>
                <div>
                  <h4 className="text-lg font-serif">Sophia Williams</h4>
                  <p className="text-taupe">Regular Client</p>
                </div>
              </div>
              <p className="text-plum italic">
                "The luxury facial at Zahab was truly transformative. My skin has never looked better, and the serene atmosphere made the experience all the more enjoyable. The staff is professional and attentive to every detail."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md" data-aos="fade-left" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-cover bg-center rounded-full mr-4"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
                ></div>
                <div>
                  <h4 className="text-lg font-serif">James Anderson</h4>
                  <p className="text-taupe">First-time Visitor</p>
                </div>
              </div>
              <p className="text-plum italic">
                "I was hesitant about visiting a spa, but Zahab's unisex services made me feel welcome. The deep tissue massage was exactly what I needed after weeks of stress. I'll definitely be returning!"
              </p>
            </div>
          </div>

          <div className="text-center mt-12" data-aos="zoom-in">
            <Link to="/booking" className="btn-primary">
              Book an Appointment Now
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative h-[500px]">
                <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-cover bg-center rounded-lg shadow-xl z-10"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3985338/pexels-photo-3985338.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
                ></div>
                <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-cover bg-center rounded-lg shadow-xl"
                  style={{ backgroundImage: 'url("https://images.pexels.com/photos/3865530/pexels-photo-3865530.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
                ></div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="mb-6">Why Choose Zahab Aesthetics?</h2>
              <p className="mb-8 text-plum">
                At Zahab, we believe in providing an exceptional experience from the moment you step through our doors. Our commitment to excellence sets us apart in the following ways:
              </p>

              <div className="space-y-6">
                <div className="flex items-start" data-aos="fade-up" data-aos-delay="100">
                  <div className="mr-4 text-gold">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Expert Professionals</h4>
                    <p className="text-plum">
                      Our team consists of certified professionals with years of experience in the beauty and wellness industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-aos="fade-up" data-aos-delay="200">
                  <div className="mr-4 text-gold">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Premium Products</h4>
                    <p className="text-plum">
                      We use only the highest quality, luxury products that are gentle on your skin and environmentally friendly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-aos="fade-up" data-aos-delay="300">
                  <div className="mr-4 text-gold">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2">Personalized Experience</h4>
                    <p className="text-plum">
                      Every treatment is tailored to your specific needs and preferences, ensuring optimal results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8" data-aos="fade-up" data-aos-delay="400">
                <Link to="/booking" className="btn-primary">
                  Book an Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;