import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">ngaushoelii@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-400">+254 (710) 366-114</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-900"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;