import Card from "../components/Card";
import card2 from "../card2.png";
import card3 from "../card3.png";
import card1 from "../megaToscana.png";
import "./Services.css"; // Import the CSS file for styling

function Services() {
  return (
    <div className="container services">
      <h2 className="main-title text-center">SERVICES</h2>
      <div className="card-cover">
        <div className="flex-container">
          <Card
            title="Commercial Maintenance"
            img={card1}
            text="Keep your properties looking great! We have plans to customize your needs"
            link="/maintenance"
          />
          <Card
            title="Clean-ups"
            img={card2}
            text="First time clean ups for any occasion or need"
            link="/clean-ups"
          />
          <Card
            title="Irrigation Repairs"
            img={card3}
            text="Poly pipe fixes, setting up new systems and everything in between"
            link="/irrigation-repairs"
          />
        </div>
        <div className="flex-container">
          <Card
            title="New build landscaping"
            img={card1}
            text="Get a free quote, great feedback, and the most bang for your buck"
            link="/new-build-landscaping"
          />
          <Card
            title="Refresh your rock"
            img={card2}
            text="We take care of making your yard look great again"
            link="/refresh-your-rock"
          />
          <Card
            title="Pavers and Turf"
            img={card2}
            text="Talk to experts, we have the options to fit your specific needs"
            link="/pavers-and-turf"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
