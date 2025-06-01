import { useState } from 'react';
import Header from '../components/common/Header';
import HeroSection from '../components/home/HeroSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handlePageChange = (pageId) => {
        console.log('Navigate to page:', pageId);
        setCurrentPage(pageId);
    };

    return (
        <div className="min-h-screen">
            <Header currentPage={currentPage} onPageChange={handlePageChange} />
            <HeroSection />
            <WhyChooseUs />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;