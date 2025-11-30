import AboutUsMission from "../Components/About us/AboutUsMission";
import AboutUsHeroSection from "../Components/About us/AboutUsSection";
import AboutUsTeam from "../Components/About us/AboutUsTeam";
import FooterSection from "../Components/FooterSection";
import Header from "../Components/Header";
import CTABannerSection from "../Components/CTABannerSection";



export default function About() {
  return (
    <div>
      <Header/>
      <AboutUsHeroSection/>
      <AboutUsMission/>
      <AboutUsTeam/>
      <CTABannerSection/>
      <FooterSection/>
    </div>
  );
}
