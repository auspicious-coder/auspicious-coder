import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../UI/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: 'web-development'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        alert("Thank you for your message! We will contact you soon.");
        form.reset();
      })
      .catch((error) => alert(error));
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: 'web-development'
    });
  };


  return (
    <section id="contact" className="py-20">
      <div className="container-custom">
        <SectionTitle
          subtitle="Get In Touch"
          title="Ready to Start Your"
          highlight="Project?"
          description="Have an idea? Let's discuss how we can help you bring it to life."
        />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    auspicious.coder.pvt.ltd@gmail.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 9472971255
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Visit Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Tech Street, Silicon Valley<br />
                    California, USA
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-primary-900/20 dark:to-accent/5 rounded-2xl">
              <h4 className="font-bold text-lg mb-4">Why Choose Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Free Initial Consultation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Transparent Pricing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Dedicated Project Manager</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                  <span>Post-launch Support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="web-development">Web Development</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="ui-ux">UI/UX Design</option>
                  <option value="cloud-devops">Cloud & DevOps</option>
                  <option value="ai-ml">AI/ML Solutions</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-card focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <label htmlFor="privacy" className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                  I agree to the privacy policy and terms of service
                </label>
              </div>

              <Button type="submit" className="w-full">
                <Send className="w-5 h-5 mr-2 inline" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;