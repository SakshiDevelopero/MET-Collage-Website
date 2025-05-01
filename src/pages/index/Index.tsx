import Layout from "@/components/layout/Layout";
import HeroSwiper from "./HeroSwiper";
import MetInfo from "./MetInfo";
import Achievements from "./Achievements";
import Institutes from "./Institutes";
import StudentSay from "./StudentSay";
import CampusPlacement from "./CampusPlacement";
import ContactForm from "./ContactForm";
import Video from "./Video";

const Index = () => {
  return (
    <Layout>
      {/* Hero Swiper */}
      <HeroSwiper />

      {/* MET Info Section with Auto-rotating Images */}
      <MetInfo />

      {/* Institutes Section with 3D Carousel */}
      <Institutes />

      {/* Video Section */}
      <Video />

      {/* Achievements Section */}
      <Achievements />

      {/* Campus Placement Section */}
      <CampusPlacement />

      {/* Student Testimonials */}
      <StudentSay />

      {/* Contact Form with Map */}
      <ContactForm />
    </Layout>
  );
};

export default Index;
