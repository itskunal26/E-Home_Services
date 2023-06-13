import Navbar from "../Navbar/Navbar";
import About from "./About us/About";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import HappyCustomers from "./Happy Customers/HappyCustomers";
import Services from "./Services/Services";
import Social from "./Social/Social";

const Dash = () => {

  // const id = sessionStorage.getItem('id')
  // const email = sessionStorage.getItem('userEmail')
  // console.log(id)
  // console.log(email)

  return (
    <div>
      <Navbar/>
      <Banner/>
      <Services/>
      <About/>
      <HappyCustomers/>
      <Social/>
      <Footer/>
    </div>
  );
};

export default Dash;
