import Blog from "../../components/Blog";
import ContactUs from "../../components/ContactUs";
import Header from "../../components/Header";
import HowDoWeWork from "../../components/HowDoWeWork";
import Navbar from "../../components/Navbar";
import OurClients from "../../components/OurClients";
import OurSevices from "../../components/OurServices";
import Testimonials from "../../components/Testimonials";
import WhoAreWe from "../../components/WhoAreWe";

export default function Home() {
  return (
    <div>
      <Navbar page="Home" />
      <Header />
      <WhoAreWe />
      <HowDoWeWork />
      <OurSevices />
      <Blog />
      <Testimonials />
      <OurClients />
      <ContactUs />
    </div>
  );
}
