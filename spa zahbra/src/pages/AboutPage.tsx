import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, Award, Gem } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3621234/pexels-photo-3621234.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="absolute inset-0 bg-plum-dark/50"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-white mb-4" data-aos="fade-down">About Zahab Aesthetics</h1>
          <p className="text-white text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Discover our story, mission, and the passionate team behind our luxury spa and salon.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3865557/pexels-photo-3865557.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Zahab Aesthetics Spa Interior" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
                  <p className="text-plum-dark font-serif italic text-lg">
                    "Beauty begins the moment you decide to be yourself."
                  </p>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-gold mb-8"></div>
              
              <p className="mb-4 text-plum">
                Founded in 2015, Zahab Aesthetics began as a small skincare boutique with a vision to provide personalized, luxury beauty treatments in a tranquil environment.
              </p>
              
              <p className="mb-4 text-plum">
                Our founder, Sophia Zahab, combined her background in dermatology with her passion for holistic wellness to create a sanctuary where clients could escape the stresses of everyday life while receiving exceptional beauty care.
              </p>
              
              <p className="mb-8 text-plum">
                Today, Zahab Aesthetics has grown into a full-service spa and salon, offering a comprehensive range of treatments for all genders. We remain committed to our founding principles of excellence, personalization, and creating an atmosphere of absolute tranquility.
              </p>
              
              <div data-aos="zoom-in" data-aos-delay="100">
                <Link to="/booking" className="btn-primary">
                  Book an Appointment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-taupe-light/10">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-plum">
              At Zahab Aesthetics, we're guided by a set of principles that shape every aspect of our service and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Star size={28} />
              </div>
              <h3 className="text-xl mb-3">Excellence</h3>
              <p className="text-plum">
                We strive for excellence in every treatment, product, and interaction.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl mb-3">Inclusivity</h3>
              <p className="text-plum">
                We create a welcoming environment for clients of all genders, ages, and backgrounds.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl mb-3">Integrity</h3>
              <p className="text-plum">
                We uphold the highest ethical standards in our practices and recommendations.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Gem size={28} />
              </div>
              <h3 className="text-xl mb-3">Innovation</h3>
              <p className="text-plum">
                We continuously research and adopt the latest techniques and products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="mb-4">Meet Our Expert Team</h2>
            <p className="max-w-2xl mx-auto text-plum">
              Our team of highly skilled professionals is dedicated to providing exceptional service and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="group" data-aos="flip-left">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sophia Zahab" 
                  className="w-full h-96 object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mb-1">Sophia Zahab</h3>
              <p className="text-gold mb-3">Founder & Lead Aesthetician</p>
              <p className="text-plum">
                With over 15 years of experience in skincare and beauty treatments, Sophia leads our team with passion and expertise.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="group" data-aos="flip-left" data-aos-delay="100">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="David Chen" 
                  className="w-full h-96 object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mb-1">David Chen</h3>
              <p className="text-gold mb-3">Master Hair Stylist</p>
              <p className="text-plum">
                David brings creativity and precision to every cut and style, specializing in transformative hair treatments.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="group" data-aos="flip-left" data-aos-delay="200">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Maya Johnson" 
                  className="w-full h-96 object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl mb-1">Maya Johnson</h3>
              <p className="text-gold mb-3">Massage Therapist</p>
              <p className="text-plum">
                Certified in multiple massage techniques, Maya's healing touch is the perfect remedy for stress and tension.
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

      {/* Achievements Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1600")' }}
      >
        <div className="absolute inset-0 bg-plum-dark/70"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-white mb-4">Our Achievements</h2>
            <p className="max-w-2xl mx-auto text-white/80">
              Recognized for excellence in the beauty and wellness industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Achievement 1 */}
            <div className="text-center" data-aos="zoom-in">
              <div className="text-5xl font-serif text-gold mb-2">5+</div>
              <p className="text-white text-lg">Years of Excellence</p>
            </div>

            {/* Achievement 2 */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="text-5xl font-serif text-gold mb-2">3,000+</div>
              <p className="text-white text-lg">Happy Clients</p>
            </div>

            {/* Achievement 3 */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
              <div className="text-5xl font-serif text-gold mb-2">15+</div>
              <p className="text-white text-lg">Expert Professionals</p>
            </div>

            {/* Achievement 4 */}
            <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
              <div className="text-5xl font-serif text-gold mb-2">12</div>
              <p className="text-white text-lg">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;