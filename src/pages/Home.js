import Footer from "../components/Footer.js";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel.js";
const Home = () => {
  return (
    <>
      <Header />
      <div className="section">
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Welcome to ABC Cricket Club !</h1>
        <ImageCarousel />
      </div>
      <div className="p-3"></div>
      <div className="p-3"></div>
      <Footer />

    </>
  );
};

export default Home;
