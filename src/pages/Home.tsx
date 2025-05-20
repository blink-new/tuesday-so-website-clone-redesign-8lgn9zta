import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BarChart3, BarChartHorizontal, CheckCircle2, Mail, MessageSquare, Search, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 pb-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <h1 className="mb-6">
                  <span className="gradient-text">Triple-verified</span> B2B contact data
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Get access to 300M+ B2B contacts with mobile numbers and AI-personalized outreach. Start generating leads today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="gradient" className="w-full sm:w-auto" asChild>
                    <Link to="/pricing">Get Started Now</Link>
                  </Button>
                </div>
                <div className="mt-8 flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                        {i}
                      </div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-tuesday-darkBlue">Join 1000+ companies using Tuesday</p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">5.0 (200+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:ml-auto">
                <div className="relative">
                  <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Tuesday platform" 
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-tuesday-blue to-tuesday-purple flex items-center justify-center">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Verified Contact</p>
                        <p className="text-xs text-gray-500">john.smith@company.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">90% Email Delivery</p>
                        <div className="w-24 h-2 bg-gray-200 rounded-full mt-1">
                          <div className="w-[90%] h-full bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-lg">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Why Choose Tuesday?</h2>
              <p className="text-xl text-gray-600">
                We provide the most accurate B2B data with built-in AI personalization to maximize your outreach success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                  <Users className="h-6 w-6 text-tuesday-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited B2B Database</h3>
                <p className="text-gray-600">
                  Access our global B2B database of 300M+ contacts and 70M+ organizations with no limits on searches or exports.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
                  <CheckCircle2 className="h-6 w-6 text-tuesday-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Triple-Verified Contact Data</h3>
                <p className="text-gray-600">
                  Every email and phone number is verified at time of request – no need for additional verification tools.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                  <MessageSquare className="h-6 w-6 text-tuesday-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Personalization</h3>
                <p className="text-gray-600">
                  Our AI analyzes prospects' profiles and crafts personalized emails to promote your offer with 8x more replies.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
                  <BarChart3 className="h-6 w-6 text-tuesday-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Unlimited Buyer Intent Data</h3>
                <p className="text-gray-600">
                  Enrich leads with buyer intent data, tech stack info, funding details, and growth metrics with no limits.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-5">
                  <BarChartHorizontal className="h-6 w-6 text-tuesday-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Cold Email Coaching</h3>
                <p className="text-gray-600">
                  Team plan subscribers get 1-on-1 calls with our cold email experts to build effective outreach campaigns.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="feature-card">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-5">
                  <Search className="h-6 w-6 text-tuesday-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero Learning Curve</h3>
                <p className="text-gray-600">
                  Our platform is intuitive with pre-built templates and workflows so you can start generating results immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 bg-blue-50">
          <div className="container-lg">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Join 1000+ sales professionals and agencies</h2>
              <p className="text-xl text-gray-600">
                See what our customers are saying about their experience with Tuesday
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  "We've seen an impressive 60% increase in meetings booked since migrating from Apollo to Tuesday. For a couple hundred bucks a month, we're typically able to book 15-20 meetings per month per client."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold text-tuesday-darkBlue">Will S.</p>
                    <p className="text-gray-600">from AccelX</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  "I believe you are doing great work and this is definitely the best 'message generation' tool I've used so far. The personalization quality is leagues above competitors."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-bold text-tuesday-darkBlue">Oleg Torgonskiy</p>
                    <p className="text-gray-600">Account Executive @ DeckRobot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;