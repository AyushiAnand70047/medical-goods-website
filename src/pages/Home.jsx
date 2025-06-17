import { useState } from 'react';
// Importing common header component
import Header from '../components/common/Header';
// Importing hero section for homepage
import HeroSection from '../components/home/HeroSection';
// Importing section explaining why to choose us
import WhyChooseUs from '../components/home/WhyChooseUs';
// Importing testimonials section
import Testimonials from '../components/home/Testimonials';
// Importing newsletter subscription section
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    // State to keep track of the current page
    const [currentPage, setCurrentPage] = useState('home');

    // Handler to change the current page
    const handlePageChange = (pageId) => {
        console.log('Navigate to page:', pageId);
        setCurrentPage(pageId);
    };

    return (
        <div className="min-h-screen">
            {/* Header with navigation */}
            <Header currentPage={currentPage} onPageChange={handlePageChange} />
            {/* Main hero section */}
            <HeroSection />
            {/* Why choose us section */}
            <WhyChooseUs />
            {/* Customer testimonials */}
            <Testimonials />
            {/* Newsletter subscription */}
            <Newsletter />
        </div>
    );
};

export default Home;