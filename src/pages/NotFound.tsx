import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container-lg text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="gradient-text text-7xl font-bold mb-6">404</h1>
            <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Button size="lg" variant="gradient" className="flex items-center gap-2" asChild>
              <Link to="/">
                <ArrowLeft className="h-5 w-5" />
                Go Back Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;