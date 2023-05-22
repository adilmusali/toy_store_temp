import Footer from "../components/Footer";
import Header from "../components/Header";
import Available from "./Available";
import Form from "./Form";
import Open from "./Open";
import Option from "./Option"
import SocialMedia from "./SocialMedia";
import Story from "./Story";
import Stuffed from "./Stuffed"
import Wooden from "./Wooden";

const Home = () => {
  return (
    <>
    <Header/>
    <Open/>
    <Option/>
    <Stuffed/>
    <Wooden/>
    <Story/>
    <Available/>
    <Form/>
    <SocialMedia/>
    <Footer/>
    </>
  );
};

export default Home;
