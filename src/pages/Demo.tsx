import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Demo = () => {
  return (
    <div>
      {/* Demo Header */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">
              See how Tuesday can boost your sales with triple-verified leads and AI email writer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Watch the demo and feel free to chat with our sales experts for any assistance.
            </p>
            <Button size="lg" variant="gradient" asChild>
              <Link to="/signup">Sign up Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              {/* Replace with actual demo video embed */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-600 text-center">Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-lg">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Why choose Tuesday ?</h2>
            <p className="text-xl text-gray-600">
              Our platform offers unmatched features to help you maximize your outreach success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Unlimited B2B Database</h3>
              <p className="text-gray-600">
                Why settle for limited data quota? With Tuesday, you can search for and export unlimited leads using our global B2B database of 200M+ contacts and 70M+ organizations.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Triple-verified emails and mobile numbers</h3>
              <p className="text-gray-600">
                Every email and phone number provided by Tuesday is verified at time of request – no need for verification tools like NeverBounce or MillionVerifier. Enjoy guaranteed deliverability.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Scale with AI personalization</h3>
              <p className="text-gray-600">
                Tuesday's AI Email Writer tool analyzes each prospect's LinkedIn profile, company website, and crafts a relevant and personalized email to promote your offer. Generate 1000s of personalized emails in minutes with 8x more replies.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Unlimited buyer intent data</h3>
              <p className="text-gray-600">
                With Tuesday's company search, you can enrich company leads with unlimited buyer intent data — from tech stack, total funding to website traffic, headcount growth and LinkedIn activities.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">1-on-1 cold email coaching calls</h3>
              <p className="text-gray-600">
                Once you sign up for Team plan, you get access to a 1-on-1 call with our cold email experts to build your campaign, and ask any questions about cold email strategies and usage of Tuesday.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="feature-card">
              <h3 className="text-xl font-bold mb-3">Zero learning curve</h3>
              <p className="text-gray-600">
                Tuesday's platform is easy to navigate, with pre-built use case templates and workflows. This means you can hop in and drive real results right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <div className="text-center mb-12">
            <h2 className="mb-4">Select the right plan for your business</h2>
          </div>

          {/* Pricing Table (Simplified version) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-tuesday-darkBlue mb-4 lowercase">free</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-500 ml-2">per month, billed annually</span>
                </div>
                <p className="text-gray-600 mb-4">Best for exploring Tuesday</p>
                <p className="font-medium mb-6">100 credits / month</p>
                <Button variant="gradient" className="w-full mb-6" asChild>
                  <Link to="/signup">Try it free</Link>
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-tuesday-darkBlue mb-4 lowercase">pro</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500 ml-2">per month, billed annually</span>
                </div>
                <p className="text-gray-600 mb-4">Best for individuals</p>
                <p className="font-medium mb-6">24,000 credits/yr</p>
                <Button variant="gradient" className="w-full mb-6" asChild>
                  <Link to="/signup">Try it free</Link>
                </Button>
              </div>
            </div>

            {/* Team Plan */}
            <div className="rounded-xl border-2 border-tuesday-blue bg-white shadow-md overflow-hidden relative">
              <div className="absolute top-0 inset-x-0 bg-tuesday-blue text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-6 pt-10">
                <h3 className="text-tuesday-darkBlue mb-4 lowercase">team</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">$399</span>
                  <span className="text-gray-500 ml-2">per month, billed annually</span>
                </div>
                <p className="text-gray-600 mb-4">Best for small teams and agencies</p>
                <p className="font-medium mb-6">120,000 credits/yr</p>
                <Button variant="gradient" className="w-full mb-6" asChild>
                  <Link to="/signup">Try it free</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container-lg">
          <h2 className="text-center mb-12">Join 1000+ sales professionals and agencies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                "Tuesday has been a game changer for AccelX. We've seen an impressive 60% increase in meetings booked since migrating from Apollo to Tuesday."
              </p>
              <div>
                <p className="font-bold text-tuesday-darkBlue">Will S.</p>
                <p className="text-gray-600 text-sm">from AccelX</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                "I believe you are doing great work and this is definitely the best "message generation" tool i've used so far."
              </p>
              <div>
                <p className="font-bold text-tuesday-darkBlue">Oleg Torgonskiy</p>
                <p className="text-gray-600 text-sm">Account Executive @ DeckRobot</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                "The tool is amazing and the chrome extension even more! It helps us so much in saving times and energy."
              </p>
              <div>
                <p className="font-bold text-tuesday-darkBlue">Annalisa Lucini</p>
                <p className="text-gray-600 text-sm">International Sales & Business Developer @ Teamtailor</p>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-6">
                "Really happy with Tuesday at the moment and it's making my life so much easier when it comes to researching prospects to reach out to via email or LinkedIn."
              </p>
              <div>
                <p className="font-bold text-tuesday-darkBlue">Simran Hundal</p>
                <p className="text-gray-600 text-sm">Founder & Tech Recruiter @ Titan Tech Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
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
              <Button size="lg" variant="default" className="bg-white text-tuesday-darkBlue hover:bg-gray-100" asChild>
                <Link to="/signup">Sign up for free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/pricing">See pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;