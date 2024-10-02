"use client";
import React,{useState,useEffect} from 'react';
import Navbar from '@/Navbar/Navbar';
import './About.css';
import aboutImage from '../../assets/about1.jpg';
import Image from 'next/image';

import aboutAuthor from '../../assets/about-author.png';
import faq from '../../assets/faq-img-2.png';
import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';
import testimonial from '../../assets/testimonial.jpg';
import testimonial1 from '../../assets/testimonial.jpg';
import testimonial2 from '../../assets/testimonial.jpg';

const About= () => {
  return (
    <div>
      <Navbar text1="About" text2="Cleaner" path1="Home" path2="About"/>
    <div className="about-section">
      <div className="about-container">
        <div className="about-left">
          <Image
            className="about-image"
            src={aboutImage}
            alt="Cleaning Worker"
          />
        </div>
        <div className="about-right">
          <div className="about-header">
          <div className="section-title"><span>About </span> our Company</div>
          <div className="title">Our Success <br /> Cleaning Up your Mess</div>
            <p className="about-description">
              Can consent to the use of such technologies by closing this notice senectus amet sodales habitant dapibus.
            </p>
          </div>
          <div className="about-services">
            <div className="service-item">
              <div className="service-icon">
              <Image src={aboutAuthor} alt="Commercial Icon" />
              </div>
              <h3>Residential Cleaning Services</h3>
              <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <Image src={aboutAuthor} alt="Commercial Icon" />
              </div>
              <h3>Commercial Cleaning Services</h3>
              <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
            </div>
          </div>
          <div className="about-contact">
            <div className="contact-info">
            <Image src={aboutAuthor} alt="Commercial Icon" />

              <div className="contact-details">
                <span>Daniel Martyn</span>
                <p>CEO - Fetoxe</p>
              </div>
            </div>
            <div className="contact-consultancy">
              <span>Free Consultancy</span>
              <p>02 (552) 662 0808</p>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Team />
      <ClientFeedback />
    </div>
    </div>

  );
};



const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How many years have you been in business?",
      answer:
        "Enim quisque primis praesent cursus convallis pulvinar phasellus adipiscing nullam ullamcorper pretium accumsan.",
    },
    {
      question: "Do you bring equipment and cleaning supplies?",
      answer:
        "Yes, we provide all necessary cleaning supplies and equipment to ensure a spotless cleaning service.",
    },
    {
      question: "What areas do you service?",
      answer: "We cover a wide range of locations. Contact us for more details about specific regions.",
    },
  ];

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <Image
            src={faq} 
            alt="Cleaning Worker"
            className="faq-image"
          />
        </div>
        <div className="faq-right">
        <div className="section-title"><span>Essential </span> Questions </div>
        <div className="title">Every Cleaning Related Answer is Here  </div>
          

          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className="faq-icon">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`faq-answer ${activeIndex === index ? 'show' : ''}`}
                style={{ maxHeight: activeIndex === index ? '200px' : '0px' }}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



const Team = () => {
  const teamMembers = [
    {
      name: 'Stuart Broad',
      role: 'House Cleaner',
      image: service1,
    },
    {
      name: 'Shane Watson',
      role: 'Office Cleaner',
      image: service2,
    },
    {
      name: 'Georgia Melinda',
      role: 'Office Cleaner',
      image: service3,
    },
    {
      name: 'Georgia Mishel',
      role: 'Kitchen Cleaner',
      image: service4,
    }
  ];

  // Auto-scroll effect
  // useEffect(() => {
  //   const scrollContainer = document.querySelector('.team-grid');
  //   let scrollAmount = 0;
  //   const scrollSpeed = 2; // Speed of scrolling
  //   const scrollStep = () => {
  //     scrollAmount += scrollSpeed;
  //     if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
  //       scrollAmount = 0; // Reset to beginning when reaching the end
  //     }
  //     scrollContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  //   };
    
  //   const intervalId = setInterval(scrollStep, 100); // Auto-scroll interval

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount
  // }, []);

  return (
    <div className="team-container">
      <div className="section-title"><span>Essential </span> Questions </div>
      <div className="title">Guaranteed Quality Cleaning <br />Service Every Time</div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image 
              src={member.image} 
              alt={member.name} 
              className="member-image" 
              width={150}  
              height={150} 
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};





const feedbackData = [
  {
    text: "Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis conds imentum congue.",
    author: "Shon Toy",
    title: "Chief Marketing Officer",
    img: "service1.jpg", // Add the path for image
    testimonialImg: "testimonial1.jpg", // Add the path for the client image
  },
  {
    text: "A different feedback here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Doe",
    title: "Marketing Lead",
    img: "service2.jpg", // Different image for new author
    testimonialImg: "testimonial2.jpg", // Different image for new testimonial
  },
  
];

function ClientFeedback() {
  // Use state to track the current feedback index
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  // Get the current feedback from the array
  const { text, author, title, img, testimonialImg } = feedbackData[currentFeedbackIndex];

  const handleNext = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === feedbackData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentFeedbackIndex((prevIndex) => 
      prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="client-feedback-container">
      <div className="image-section">
        <Image
          src={feedback1}
          alt="Client washing with excitement"
          className="feedback-image"
        />
      </div>
      <div className="text-section">
        <div className="section-title">
          <span>Customer </span> Statement
        </div>
        <div className="title" style={{ textAlign: "start" }}>
          Our Client Feedback
        </div>
        <p className="feedback-text">
          {text}
        </p>
        <div className="author-info">
          <Image src={service1} alt={author} className="author-image" />
          <div className="author-details">
            <p className="author-name">{author}</p>
            <p className="author-title">{title}</p>
          </div>
        </div>
      </div>
      <div className="navigation-arrows">
        <button className="arrow-button-next" onClick={handleNext}>❯</button>
        <button className="arrow-button-prev" onClick={handlePrev}>❮</button>
      </div>
    </div>
  );
}







export default About;
