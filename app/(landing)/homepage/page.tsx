import React from 'react';
import Navbar from '@/components/homepage/Navbar';
import Hero from '@/components/homepage/Hero';

import Testimonial from '@/components/homepage/Testinomial';
import FAQ from '@/components/homepage/FAQs';
import Footer from '@/components/homepage/Footer';
import { FeaturesSectionDemo } from '@/components/homepage/Featuer';

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-gray-900 dark:bg-black dark:text-white">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <FeaturesSectionDemo />
                <Testimonial />
                <FAQ />
            </main>
            <div className="mx-10 justify-center">
                <Footer />
            </div>

        </div>
    );
}
