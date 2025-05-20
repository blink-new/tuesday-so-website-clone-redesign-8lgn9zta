import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const TalkToSales = () => {
  return (
    <div>
      {/* Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Our Sales Team</h1>
            <p className="text-xl text-gray-600 mb-8">
              Speak with our experts to discover how Tuesday can help your team generate more leads and close more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                      <Phone className="h-5 w-5 text-tuesday-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Call Us</p>
                      <p className="text-gray-600 mt-1">+1 (800) 123-4567</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm PT</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                      <Mail className="h-5 w-5 text-tuesday-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Email Us</p>
                      <p className="text-gray-600 mt-1">sales@tuesday.so</p>
                      <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mr-4">
                      <MessageCircle className="h-5 w-5 text-tuesday-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-gray-600 mt-1">Chat with our team</p>
                      <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                  <h3 className="text-xl font-bold mb-6">Contact Form</h3>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Business Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name*
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title*
                      </label>
                      <input
                        type="text"
                        id="jobTitle"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help you?*
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-tuesday-blue focus:ring-tuesday-blue"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          I agree to receive communications from Tuesday. I understand I can unsubscribe at any time.
                        </span>
                      </label>
                    </div>
                    
                    <Button type="submit" variant="gradient" size="lg" className="w-full">
                      Submit Request
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">What happens after I submit the form?</h3>
                <p className="text-gray-600">
                  One of our sales representatives will reach out to you within 24 hours to schedule a call or demo at a time that works for you.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I get a custom demo for my specific industry?</h3>
                <p className="text-gray-600">
                  Yes, our sales team will tailor the demo to your specific industry, use case, and business needs to show you how Tuesday can work for you.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">What information should I prepare for the sales call?</h3>
                <p className="text-gray-600">
                  It helps to know your current lead generation process, challenges you're facing, volume of leads you're looking to generate, and any specific requirements you have.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I get pricing information before speaking with sales?</h3>
                <p className="text-gray-600">
                  Our standard pricing is available on our website, but our sales team can provide custom pricing for enterprise needs or specific use cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-lg">
          <div className="bg-gradient-to-r from-tuesday-blue to-tuesday-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-white mb-6">Not ready to talk to sales yet?</h2>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
              You can explore Tuesday on your own with our free trial - no credit card required.
            </p>
            <Button size="lg" variant="default" className="bg-white text-tuesday-darkBlue hover:bg-gray-100">
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalkToSales;