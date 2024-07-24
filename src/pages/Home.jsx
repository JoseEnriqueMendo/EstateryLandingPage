import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ContactUS from '../components/ContactUS';
import Information from '../components/Information';
import Sells from '../components/Sells';
const home = () => {
  return (
    <div className="bg-main min-h-[100vh] min-w-[100vw] max-w-[100vw] w-[100vw]">
      <NavBar></NavBar>
      <Sells></Sells>
      <Information></Information>
      <ContactUS></ContactUS>
      <Footer></Footer>
    </div>
  );
};

export default home;
