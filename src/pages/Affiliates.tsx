import React from 'react';
import { Button } from '@/components/ui/button';

const Affiliates = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-lg text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="mb-6">Earn money by referring Tuesday to your network</h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our affiliate program and earn 20% recurring commission on every customer you refer.
            </p>
            <Button size="lg" variant="gradient">
              Become an Affiliate
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Our affiliate program is designed to be simple and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tuesday-blue/10 text-tuesday-blue flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Sign Up</h3>
              <p className="text-gray-600">
                Complete our simple application form and get approved to join our affiliate program.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tuesday-purple/10 text-tuesday-purple flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Share Your Link</h3>
              <p className="text-gray-600">
                Promote Tuesday to your audience using your unique referral link, custom discount codes, and our marketing materials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-tuesday-blue/10 text-tuesday-blue flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Earn Commission</h3>
              <p className="text-gray-600">
                Earn 20% commission on all purchases made through your referral link, paid out monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-50">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Benefits of Being a Tuesday Affiliate</h2>
            <p className="text-xl text-gray-600">
              Join our program and enjoy these exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefit 1 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">20% Recurring Commission</h3>
              <p className="text-gray-600">
                Earn 20% commission on all purchases made through your referral link for the lifetime of the customer.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">30-Day Cookie Duration</h3>
              <p className="text-gray-600">
                Our 30-day cookie tracking ensures you get credit for referrals who return to purchase within 30 days.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Promotional Materials</h3>
              <p className="text-gray-600">
                Access professional marketing materials, including banners, email templates, and social media posts.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Get personalized support from our affiliate management team to help you maximize your earnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Apply to Become an Affiliate</h2>
              <p className="text-gray-600">
                Fill out the form below to apply for our affiliate program
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-200">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                    Website/Blog
                  </label>
                  <input
                    type="url"
                    id="website"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="promotion" className="block text-sm font-medium text-gray-700 mb-1">
                    How will you promote Tuesday?
                  </label>
                  <textarea
                    id="promotion"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-tuesday-blue focus:border-transparent"
                  ></textarea>
                </div>

                <Button type="submit" variant="gradient" className="w-full">
                  Submit Application
                </Button>
              </form>
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
                <h3 className="text-lg font-semibold mb-2">How do I get paid?</h3>
                <p className="text-gray-600">
                  Payments are made via PayPal or bank transfer on the 15th of each month for the previous month's commissions. You need to earn at least $50 to receive a payment.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">How long does the application process take?</h3>
                <p className="text-gray-600">
                  We review applications within 48 hours. You'll receive an email notification once your application has been approved or rejected.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Can I promote Tuesday on social media?</h3>
                <p className="text-gray-600">
                  Yes, you can promote Tuesday on all social media platforms. We provide ready-to-use social media posts and images in our affiliate dashboard.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Is there a minimum number of referrals required?</h3>
                <p className="text-gray-600">
                  No, there's no minimum number of referrals required. You can refer as many or as few customers as you'd like.
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
            <h2 className="text-white mb-6">Ready to start earning with Tuesday?</h2>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
              Join our affiliate program today and start earning 20% commission on every customer you refer.
            </p>
            <Button size="lg" variant="default" className="bg-white text-tuesday-darkBlue hover:bg-gray-100">
              Become an Affiliate
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliates;