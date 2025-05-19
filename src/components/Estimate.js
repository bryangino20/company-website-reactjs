import React, { useState } from "react";
import emailjs from "emailjs-com";
import contact from "./Contact.js";

function Estimate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
   const serviceID = 'default_service';
   const templateID = 'template_alznf2c';

    emailjs
      .send(
        "service_562irb8 ", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_user_id" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("There was an error. Please try again later.");
        }
      );
  };

  // return (
  //   // <div className="estimate-container">
  //   //   <h2>Get Your Free Estimate</h2>
  //   //   <form onSubmit={handleSubmit}>
  //   //     <label>
  //   //       Name:
  //   //       <input
  //   //         type="text"
  //   //         name="name"
  //   //         value={formData.name}
  //   //         onChange={handleChange}
  //   //         required
  //   //       />
  //   //     </label>
  //   //     <label>
  //   //       Email:
  //   //       <input
  //   //         type="email"
  //   //         name="email"
  //   //         value={formData.email}
  //   //         onChange={handleChange}
  //   //         required
  //   //       />
  //   //     </label>
  //   //     <label>
  //   //       Phone:
  //   //       <input
  //   //         type="tel"
  //   //         name="phone"
  //   //         value={formData.phone}
  //   //         onChange={handleChange}
  //   //         required
  //   //       />
  //   //     </label>
  //   //     <label>
  //   //       Message:
  //   //       <textarea
  //   //         name="message"
  //   //         value={formData.message}
  //   //         onChange={handleChange}
  //   //       ></textarea>
  //   //     </label>
  //   //     <button type="submit">Submitttal</button>
  //   //   </form>
  //   // </div>
  // );
}

export default Estimate;