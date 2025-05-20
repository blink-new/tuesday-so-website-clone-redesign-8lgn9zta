import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle2, X } from 'lucide-react';

type ComparisonData = {
  title: string;
  description: string;
  tuesdayFeatures: string[];
  competitorFeatures: string[];
  tuesdayPros: string[];
  competitorCons: string[];
};

const comparisons: Record<string, ComparisonData> = {
  'tuesday-vs-apollo-io': {
    title: 'Tuesday vs Apollo.io',
    description: 'See how Tuesday compares to Apollo.io for B2B lead generation and sales outreach',
    tuesdayFeatures: [
      'Triple-verified emails and phone numbers',
      'AI email personalization',
      'Pay only for verified data',
      '30-day money-back guarantee',
      'Unlimited database access',
      'Superior data accuracy',
      'Lower starting price ($99/mo)'
    ],
    competitorFeatures: [
      'Email verification costs extra',
      'Limited AI capabilities',
      'Pay regardless of data quality',
      'No money-back guarantee',
      'Strict usage limits',
      'Lower data accuracy',
      'Higher starting price ($299/mo)'
    ],
    tuesdayPros: [
      'Higher deliverability rates',
      'More personalized outreach',
      'Better ROI with pay-per-success model',
      'Risk-free trial with money-back guarantee',
      'No limits on database searches'
    ],
    competitorCons: [
      'Lower deliverability rates',
      'Generic outreach templates',
      'Pay regardless of data quality',
      'No risk-free options',
      'Strict usage limits that hinder scaling'
    ]
  },
  'tuesday-vs-zoominfo': {
    title: 'Tuesday vs ZoomInfo',
    description: 'Compare Tuesday to ZoomInfo for enterprise-grade lead generation',
    tuesdayFeatures: [
      'Triple-verified emails and phone numbers',
      'AI email personalization',
      'Pay only for verified data',
      '30-day money-back guarantee',
      'Unlimited database access',
      'Superior data accuracy',
      'Affordable pricing ($99/mo)'
    ],
    competitorFeatures: [
      'Verified contact data',
      'No AI personalization',
      'Annual contracts required',
      'No money-back guarantee',
      'Usage limits based on plan',
      'Good data accuracy',
      'Enterprise pricing ($15,000+/year)'
    ],
    tuesdayPros: [
      'Significantly more affordable',
      'More flexible contracts',
      'AI-powered personalization',
      'Pay-as-you-go model',
      'No minimum commitment'
    ],
    competitorCons: [
      'Extremely expensive',
      'Long-term contracts required',
      'Manual personalization only',
      'Large upfront investment',
      'Complex sales process'
    ]
  },
  'tuesday-vs-lusha': {
    title: 'Tuesday vs Lusha',
    description: 'See how Tuesday and Lusha compare for lead data quality and verification',
    tuesdayFeatures: [
      'Triple-verified emails and phone numbers',
      'AI email personalization',
      'Pay only for verified data',
      '30-day money-back guarantee',
      'Unlimited database access',
      'Credit-based system with clear value',
      'Affordable pricing ($99/mo)'
    ],
    competitorFeatures: [
      'Contact verification not guaranteed',
      'No AI capabilities',
      'Pay regardless of data quality',
      'No money-back guarantee',
      'Limited monthly credits',
      'Credit system with unclear value',
      'Similar pricing but less value'
    ],
    tuesdayPros: [
      'Higher data accuracy',
      'AI-powered outreach',
      'Better value for credits',
      'Risk-free trial',
      'Unlimited database searches'
    ],
    competitorCons: [
      'Lower data accuracy',
      'No AI capabilities',
      'Less value per credit',
      'No risk-free options',
      'Limited monthly credits'
    ]
  },
  'tuesday-vs-cognism': {
    title: 'Tuesday vs Cognism',
    description: 'Compare Tuesday and Cognism for B2B contact data and compliance',
    tuesdayFeatures: [
      'Triple-verified emails and phone numbers',
      'AI email personalization',
      'Pay only for verified data',
      '30-day money-back guarantee',
      'Unlimited database access',
      'Credit-based system with clear value',
      'Affordable pricing ($99/mo)'
    ],
    competitorFeatures: [
      'Verified contact data',
      'Limited AI capabilities',
      'Annual contracts required',
      'No money-back guarantee',
      'Usage limits based on plan',
      'Credit system with unclear value',
      'Enterprise pricing ($10,000+/year)'
    ],
    tuesdayPros: [
      'More affordable pricing',
      'Flexible contracts',
      'Superior AI capabilities',
      'Risk-free trial',
      'Better credit value'
    ],
    competitorCons: [
      'Expensive pricing',
      'Long-term contracts',
      'Limited AI capabilities',
      'No risk-free options',
      'Less credit value'
    ]
  }
};

const Comparison = () => {
  const { slug } = useParams();
  
  // Default to Apollo.io comparison if slug not found
  const data = slug && comparisons[slug] ? comparisons[slug] : comparisons['tuesday-vs-apollo-io'];
  
  // Extract competitor name for display
  const competitorName = slug?.split('-vs-').pop()?.replace('-', '.');
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{data.title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {data.description}
            </p>
            <Button size="lg" variant="gradient" asChild>
              <Link to="/signup">Try Tuesday Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <h2 className="text-center mb-12">Feature Comparison</h2>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 p-6 border-b border-gray-200">
              <div className="col-span-1">
                <p className="font-medium text-gray-500">Features</p>
              </div>
              <div className="col-span-1 text-center">
                <p className="font-bold text-tuesday-blue">Tuesday</p>
              </div>
              <div className="col-span-1 text-center">
                <p className="font-bold text-gray-700">{competitorName || 'Competitor'}</p>
              </div>
            </div>
            
            {/* Feature Rows */}
            <div className="divide-y divide-gray-200">
              {data.tuesdayFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-3 p-6">
                  <div className="col-span-1">
                    <p className="font-medium">{feature}</p>
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {index < 2 ? (
                      <CheckCircle2 className="h-6 w-6 text-gray-400" />
                    ) : (
                      <X className="h-6 w-6 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-16 bg-blue-50">
        <div className="container-lg">
          <h2 className="text-center mb-12">Why Choose Tuesday?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tuesday Pros */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-tuesday-blue">Tuesday Advantages</h3>
              <ul className="space-y-4">
                {data.tuesdayPros.map((pro, index) => (
                  <li key={index} className="flex">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mr-3 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Competitor Cons */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-6 text-gray-700">{competitorName || 'Competitor'} Disadvantages</h3>
              <ul className="space-y-4">
                {data.competitorCons.map((con, index) => (
                  <li key={index} className="flex">
                    <X className="h-5 w-5 text-red-500 shrink-0 mr-3 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="container-lg">
          <h2 className="text-center mb-12">Pricing Comparison</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              {/* Tuesday Pricing */}
              <div className="col-span-3 md:col-span-1">
                <div className="rounded-xl border-2 border-tuesday-blue bg-white h-full flex flex-col">
                  <div className="bg-tuesday-blue text-white p-4 text-center">
                    <h3 className="font-bold">Tuesday</h3>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">$99</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        <span>24,000 credits/year</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        <span>Triple-verified data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        <span>AI personalization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mr-2 mt-0.5" />
                        <span>30-day guarantee</span>
                      </li>
                    </ul>
                    <Button variant="gradient" className="w-full mt-auto" asChild>
                      <Link to="/signup">Try Free</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Apollo.io Pricing */}
              <div className="col-span-3 md:col-span-1">
                <div className="rounded-xl border border-gray-200 bg-white h-full flex flex-col">
                  <div className="bg-gray-700 text-white p-4 text-center">
                    <h3 className="font-bold">Apollo.io</h3>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">$299</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mr-2 mt-0.5" />
                        <span>Limited credits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mr-2 mt-0.5" />
                        <span>Unverified data</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                        <span>Basic templates only</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                        <span>No guarantee</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 mt-auto" disabled>
                      Compare
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* ZoomInfo Pricing */}
              <div className="col-span-3 md:col-span-1">
                <div className="rounded-xl border border-gray-200 bg-white h-full flex flex-col">
                  <div className="bg-gray-700 text-white p-4 text-center">
                    <h3 className="font-bold">ZoomInfo</h3>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="text-center mb-4">
                      <span className="text-3xl font-bold">$15,000+</span>
                      <span className="text-gray-500">/year</span>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mr-2 mt-0.5" />
                        <span>Annual contract</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-gray-400 shrink-0 mr-2 mt-0.5" />
                        <span>Good data quality</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                        <span>No AI capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 shrink-0 mr-2 mt-0.5" />
                        <span>No guarantee</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 mt-auto" disabled>
                      Compare
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container-lg">
          <h2 className="text-center mb-12">What Customers Who Switched Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                "We've seen an impressive 60% increase in meetings booked since migrating from Apollo to Tuesday. For a couple hundred bucks a month, we're typically able to book 15-20 meetings per month per client."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold text-tuesday-darkBlue">Will S.</p>
                  <p className="text-gray-600">AccelX</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg text-gray-700 mb-6">
                "After struggling with ZoomInfo's high cost and complex interface, switching to Tuesday was a breath of fresh air. The data quality is comparable but at a fraction of the price."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <p className="font-bold text-tuesday-darkBlue">Sarah M.</p>
                  <p className="text-gray-600">Growth Marketer</p>
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
            <h2 className="text-white mb-6">Ready to experience the Tuesday difference?</h2>
            <p className="text-white text-xl mb-8 max-w-3xl mx-auto">
              Try Tuesday risk-free with our 30-day money-back guarantee.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="default" className="bg-white text-tuesday-darkBlue hover:bg-gray-100" asChild>
                <Link to="/signup">Try Tuesday Free</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/pricing">See Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comparison;