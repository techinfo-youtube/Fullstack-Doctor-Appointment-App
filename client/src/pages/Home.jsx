import React from "react";
import Slider from "../components/Slider/Slider";
import Facility from "../components/Static/Facility/Facility";
import ShortIntro from "../components/Static/ShortIntro/ShortIntro";
import WhyChoose from "../components/Static/WhyChoose/WhyChoose";
import ContactMessage from "../components/Static/ConatctMessage/ContactMessage";

const Home = () => {
  return (
    <>
      {/* // slider  */}
      <Slider />
      {/* faciliyt  */}
      <Facility />
      {/* short hospital intro */}
      <ShortIntro />
      {/* why choose page */}
      <WhyChoose />
      {/* conatct  */}
      <ContactMessage />
    </>
  );
};

export default Home;
