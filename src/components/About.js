import whyImage from '../whyus.png';
import './About.css'; // Import the CSS file for styling

function About() {
  return (
    <>
      <div style={{ width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container">
            <img alt="about" src={whyImage} className="about-image" />
          </div>
          <div className="about-text-container">
            <h2 className="about-title">ABOUT US</h2>
            <p className="about-text">
              Started in 2020, American Outdoor Living is a family-owned and operated business dedicated to providing exceptional landscaping services.
              We pride ourselves on being customer-centric, ensuring every project exceeds expectations. Our team of skilled professionals is committed to delivering high-quality workmanship and personalized service, making your outdoor space a true reflection of your vision. Whether it's a simple lawn care task or a complete landscape overhaul, we are here to help you every step of the way. Thank you for considering us for your landscaping needs! We look forward to working with you and transforming your outdoor space into a beautiful oasis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
