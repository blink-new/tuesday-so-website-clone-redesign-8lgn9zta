import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const RoiCalculator = () => {
  const [formData, setFormData] = useState({
    emails: 500,
    deliverability: 95,
    openRate: 40,
    responseRate: 10,
    meetingRate: 30,
    closingRate: 20,
    dealValue: 5000
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  // Calculate ROI metrics
  const emailsDelivered = Math.round(formData.emails * (formData.deliverability / 100));
  const emailsOpened = Math.round(emailsDelivered * (formData.openRate / 100));
  const responses = Math.round(emailsOpened * (formData.responseRate / 100));
  const meetings = Math.round(responses * (formData.meetingRate / 100));
  const deals = Math.round(meetings * (formData.closingRate / 100));
  const revenue = deals * formData.dealValue;
  const roi = revenue - 399; // Assuming Team plan cost of $399/month

  return (
    <div>
      {/* ROI Calculator Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">How much money can you make?</h1>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Input Form */}
              <div>
                <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
                  <h3 className="text-xl font-bold mb-6">Enter Your Numbers</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Number of emails sent per month
                      </label>
                      <input
                        type="number"
                        name="emails"
                        value={formData.emails}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email deliverability rate (%)
                      </label>
                      <input
                        type="number"
                        name="deliverability"
                        value={formData.deliverability}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email open rate (%)
                      </label>
                      <input
                        type="number"
                        name="openRate"
                        value={formData.openRate}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Response rate (%)
                      </label>
                      <input
                        type="number"
                        name="responseRate"
                        value={formData.responseRate}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Meeting conversion rate (%)
                      </label>
                      <input
                        type="number"
                        name="meetingRate"
                        value={formData.meetingRate}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Deal closing rate (%)
                      </label>
                      <input
                        type="number"
                        name="closingRate"
                        value={formData.closingRate}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Average deal value ($)
                      </label>
                      <input
                        type="number"
                        name="dealValue"
                        value={formData.dealValue}
                        onChange={handleChange}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div>
                <div className="bg-white rounded-xl shadow-sm p-8 border border-tuesday-blue">
                  <h3 className="text-xl font-bold mb-6">Your Potential ROI with Tuesday</h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Emails Delivered</p>
                        <p className="text-2xl font-bold">{emailsDelivered}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Emails Opened</p>
                        <p className="text-2xl font-bold">{emailsOpened}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Responses</p>
                        <p className="text-2xl font-bold">{responses}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Meetings</p>
                        <p className="text-2xl font-bold">{meetings}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Deals</p>
                        <p className="text-2xl font-bold">{deals}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Revenue</p>
                        <p className="text-2xl font-bold">${revenue.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Monthly Cost</p>
                          <p className="text-2xl font-bold">$399</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Monthly ROI</p>
                          <p className="text-2xl font-bold text-green-600">${roi.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      <Button variant="gradient" className="w-full">
                        Start Your Free Trial
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container-lg">
          <div className="bg-gradient-to-r from-tuesday-blue to-tuesday-purple rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-white mb-6">Don't miss out – close your next deal with Tuesday!</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white mb-8">
                <div>
                  <p className="text-xl font-semibold">Free trial credits available</p>
                </div>
                <div>
                  <p className="text-xl font-semibold">No credit card required</p>
                </div>
                <div>
                  <p className="text-xl font-semibold">30-day money back guarantee</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="default" className="bg-white text-tuesday-darkBlue hover:bg-gray-100">
                Sign up for free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                See pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoiCalculator;