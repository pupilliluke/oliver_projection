import React from 'react';
import Header from '../components/Header';
import AdSection from '../components/AdSection';
import SearchSection from '../components/SearchSection';
import StatisticalSupport from '../components/StatisticalSupport';
import TeamSection from '../components/TeamSection';
import SampleContent from '../components/SampleContent';
// import SignUpSection from './components/SignUpSection';
// import TestimonialSection from './components/TestimonialSection';
// import SponsorSection from './components/SponsorSection';
// import Footer from './components/Footer';

//styles
import '../styles/style.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';



const HomePage = () => {
  return (
    <div>
      <Header />
      <AdSection />
      <SearchSection />
      <StatisticalSupport />
      <TeamSection />
      <SampleContent />
      {/* <SignUpSection />
      <TestimonialSection />
      <SponsorSection />
      <Footer /> */}

      
    {/* <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/slick.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/all.min.js"></script>
    <script src="js/script2.js"></script> */}
    </div>
  );
};

export default HomePage;