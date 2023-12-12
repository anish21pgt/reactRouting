import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="section" style={{ marginBottom: '235px' }}>
        <h1 style={{ textAlign: 'center', fontFamily: 'Times New Roman' }}>Contact Us !</h1>
        <div className="p-5"></div>

        <div className="address-container">
          <div className="address-block" >
            <p className="address-title"><b>Registered Address:</b></p>
            <p className="address-line">ABC Group</p>
            <p className="address-line">12/3 Main Street</p>
            <p className="address-line">T Nagar, Chennai - 600 017</p>
          </div>

          <div className="address-block">
            <p className="address-title"><b>Corporate Address:</b></p>
            <p className="address-line">ABC Group</p>
            <p className="address-line">45/6 Business Avenue</p>
            <p className="address-line">Andheri East, Mumbai - 400 069</p>
          </div>
        </div>

        <div className="p-4"></div>

        <div className="feedback-container">
          <div className="address-block">
            <p className="address-title"><b>For any queries or feedbacks reach out to us !</b></p>
            <p className="address-line"><b>Email:</b> connect@abcclub.com</p>
            <p className="address-line"><b>Contact Number (Toll Free):</b> 1800-123-456</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
