import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ValueProps from '@/components/sections/ValueProps';
import HowItWorks from '@/components/sections/HowItWorks';
import SocialProof from '@/components/sections/SocialProof';
import Plans from '@/components/sections/Plans';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
    return (
        <>
            <Header />
            <main id="main-content">
                <Hero />
                <ValueProps />
                <HowItWorks />
                <SocialProof />
                <Plans />
                <FAQ />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
