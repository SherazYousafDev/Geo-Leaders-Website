import ConstructionAboutSection from "../Components/ConstructionAboutSection";
import CTABannerSection from "../Components/CTABannerSection";
import FooterSection from "../Components/FooterSection";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import TopArrow from "../Components/TopArrow";
import Portfolio from "../Components/Portfolio";
import ServicesSection from "../Components/ServicesSection";
import TestimonialsSection from "../Components/TestimonialSection";
import ValuesCardsSection from "../Components/ValueCardSection";
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import WorkingProcessSection from "../Components/WorkingProcessSection";


export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     <TopArrow/>
     <ConstructionAboutSection/>
     <ServicesSection/>
     <ValuesCardsSection/>
     <WhyChooseUsSection/>
     <Portfolio/>
     <TestimonialsSection/>
     <WorkingProcessSection/>
     <CTABannerSection/>
     <FooterSection/>
    </div>
  );
}
