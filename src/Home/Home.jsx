"use client";
import './Home.css';
import Navbar from '@/Navbar/Navbar';
import Image from 'next/image';
import rightImage from '../../assets/rightside.jpg';
import expert from '../../assets/expert.jpg';
import aboutImage from '../../assets/about1.jpg';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import { FaHome, FaBuilding, FaIndustry, FaHammer } from 'react-icons/fa'; // Importing icons
import React ,{useState} from 'react';
import testimonial from '../../assets/testimonial.jpg';
import feedback1 from '../../assets/feedback1.jpg';
import service1 from '../../assets/service1.jpg';
import service2 from '../../assets/service2.jpg';
import service3 from '../../assets/service3.jpg';
import service4 from '../../assets/service4.jpg';

const HomeScreen = () => {
  const servicesData = [
    
    {
      title: "Industrial Cleaning Services",
      description: "Expert cleaning services for factories and large facilities, ensuring compliance with safety regulations.",
      icon: <FaIndustry />,
    },
    {
      title: "Post-Construction Cleaning",
      description: "Thorough cleaning after construction or renovation, removing dust and debris for a pristine finish.",
      icon: <FaHammer />,
    },
    {
      title: "Deep Cleaning Services",
      description: "Comprehensive cleaning that tackles dirt and grime in hard-to-reach areas, ensuring a fresh environment.",
      icon: <FaHome />, // You can replace this with a different icon if needed
    },
    {
      title: "Office Sanitization Services",
      description: "Regular sanitization services to maintain a hygienic workspace and promote employee health.",
      icon: <FaBuilding />,
    },
    {
      title: "Eco-Friendly Cleaning Services",
      description: "Cleaning services using environmentally friendly products to minimize ecological impact.",
      icon: <FaIndustry />, // You can replace this with a different icon if needed
    },
    {
      title: "Window Cleaning Services",
      description: "Streak-free window cleaning for residential and commercial properties to enhance curb appeal.",
      icon: <FaHammer />, // You can replace this with a different icon if needed
    },
  ];

const pricingData = [
  {
    head: "Residential",
    price: "25.00",
    description: [
      "Carpet Cleaning",
      "Bathroom Cleaning",
      "Floor Cleaning",
      "Bedroom Cleaning",
    ],
    image: rightImage,
    icon: <FaHome />, // Added icon for Residential
  },
  {
    head: "Commercial",
    price: "50.00",
    description: [
      "Office Cleaning",
      "Window Cleaning",
      "Floor Cleaning",
      "Bathroom Cleaning",
    ],
    image: rightImage,
    icon: <FaBuilding />, // Added icon for Commercial
  },
  {
    head: "Industrial",
    price: "100.00",
    description: [
      "Factory Cleaning",
      "Heavy Equipment Cleaning",
      "Warehouse Maintenance",
    ],
    image: rightImage,
    icon: <FaIndustry />, // Added icon for Industrial
  },
  {
    head: "Special Services",
    price: "75.00",
    description: [
      "Post-Construction Cleaning",
      "Deep Cleaning",
      "Eco-Friendly Cleaning",
    ],
    image: rightImage,
    icon: <FaHammer />, // Added icon for Special Services
  },
];


  const projectsData = [
    {
      image: service1,
      heading: "Residential Service",
      description: "Office Cleaning",
    },
    {
      image: service2,
      heading: "Commercial Service",
      description: "Building Maintenance",
    },
    {
      image: service3,
      heading: "Industrial Service",
      description: "Factory Cleaning",
    },
    {
      image: service4,
      heading: "Post-Construction ",
      description: "Thorough cleaning for newly built or renovated spaces.",
    },
  ];

  const services = [
    { value: "Grease Trap Cleaning", label: "Grease Trap Cleaning" },
    { value: "Drain Line Jetting", label: "Drain Line Jetting" },
    { value: "Sump Pit Cleaning", label: "Sump Pit Cleaning" },
    { value: "Sewage Water Removing", label: "Sewage Water Removing" },
    { value: "Lift Station Cleaning", label: "Lift Station Cleaning" },
    { value: "Grease Trap Supply & Installation", label: "Grease Trap Supply & Installation" },
    { value: "Kitchen Duct Cleaning", label: "Kitchen Duct Cleaning" },
    { value: "Water Tank Cleaning", label: "Water Tank Cleaning" },
  ];

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="slide1">
          <div className="slide1left">
            <div className="sub-head"><span>Fast and</span> efficient service</div>
            <div className="main-head">
              <div className="main-head-s1">Cleaning</div>
              <div className="main-head-s2">Excellence</div>
              <div className="main-head-s3">Guaranteed!</div>
            </div>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="slide1right">
            <Image src={rightImage} alt="Image not found" layout="responsive" />
          </div>
        </div>

        <div className="online-appointment">
          <div className="appointment-inputs">
            <span className="appointment-title">Online Appointment</span>
            <input type="text" placeholder="Your Name" />
            <input type="number" placeholder="Phone Number" />
            <select>
              {
                services.map((val,ind)=>{
                  return <option key={ind} value={val.value}>{val.label}</option>
                })
              }
            </select>
            <input type="submit" value="Submit Now" />
          </div>
        </div>

        <div className="about-our-company">
          <div className="left-image">
            
            <div className='left-image-sub'>
              <Image className='left-image-sub-image' src={aboutImage} alt="About Our Company" layout="fill" objectFit="cover" />
              </div>
          </div>
          <div className="right-content">
            <div className="about-title">
              <span>About </span>Our Company
            </div>
            <div className="about-subtitle">Our Success Cleaning<br /> Up Your Mess</div>
            <div className="about-description">
              Can consent to the use of such technologies by closing this notice senectus amet sodales habitant dapibus
            </div>
            <div className="service-outer">
            {servicesData.slice(0, 2).map((service, index) => (
              <div className="service" key={index}>
                <div className="service-icon">{service.icon}</div>
                <div className="service-title">{service.title}</div>
                <div className="service-description">{service.description}</div>
              </div>
            ))}
            </div>
          </div>
        </div>

        <div className="banner">
          <Image src={brand1} alt="not found" />
          <Image src={brand2} alt="not found" />
          <Image src={brand1} alt="not found" />
          <Image src={brand2} alt="not found" />
          <Image src={brand1} alt="not found" />
          <Image src={brand2} alt="not found" />
          <Image src={brand1} alt="not found" />
          <Image src={brand2} alt="not found" />
        </div>

        <div className='our-success'>
          <div><span>Our </span> Popular Services</div>
          <div>Our Success Cleaning <br /> Up Your Mess</div>
          <div className="cardsContainer">
            {
              servicesData.map((val, ind) => {
                return <CardItem
                  key={ind}
                  src={rightImage}
                  icon={val.icon}
                  cardHead={val.title} // Changed to val.title for consistency
                  cardDescription={val.description}   
                />
              })
            }
          </div>
        </div>


        <div className='why-head'>
          <div className="why-title">
            <span>Why </span> Choose Klenar
          </div>
          <div className="why-subtitle">
            Expert House Cleaning<br /> Service You Can Trust
          </div>
          <div className="why-choose-cleaner">
            <div className="why-left">  
              <div className="why-progress">
                <Progress
                  headings={[
                    "Every Customer is Special",
                    "Customer Support Live Chat",
                    "Enjoy Discounts in Fees",
                  ]}
                  descriptions={[
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                  ]}
                />
                <Progress
                  headings={[
                    "High-Quality Cleaning Services",
                    "Flexible Scheduling",
                    "Eco-Friendly Products",
                  ]}
                  descriptions={[
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                    "Bras fringilla conubia odios metus torquent commodo quam",
                  ]}
                />
              </div>
            </div>
            <div className="why-right">
              <Image className="whyRightImage" src={expert} alt="Klenar Cleaning Service" />
            </div>
          </div>
        </div>
        

        <div className="package-outer">
  <div className="package">
    <div>
      <div><span>Our </span> Affordable Package</div>
      <div>Special Pricing Package<br />No Hidden Charge</div>
    </div>
    <div className='button-outer'>
      <button>Monthly</button>
      <button>Yearly</button>
    </div>
  </div>
  <div className="pricing-cards">
    {pricingData.map((pricing, index) => (
      <PricingCard
        key={index}
        icon={pricing.icon} // Add icon prop here
        cardHead={pricing.head}
        cardPrice={pricing.price}
        cardDescription={pricing.description}
      />
    ))}
  </div>
</div>


        <ClientFeedback />
        <div className="completed-projects">
          <div className="project-header">
            <div><span>Some </span> Completed Projects</div>
            <div>Every Project is Different<br />Every Client Special</div>
          </div>
          <div className="projects-container">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                src={project.image}
                heading={project.heading}
                description={project.description}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;

const CardItem = ({ icon, cardHead, cardDescription }) => {
  return (
    <div className="card">
      <div className='card-left'>
        <div className='card-left-icon'>{icon}</div> 
      </div>
      <div className='card-right'>
        <div className="cardHead">{cardHead}</div>
        <div className="cardDescription">{cardDescription}</div>
        <div className="cardFooter">Read Details</div>
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
          <Image src={feedback1} alt={author} className="author-image" />
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



const PricingCard = ({ icon, cardHead, cardPrice, cardDescription }) => {
  return (
    <div className="pricing-card">
      {icon && <div className="card-icon">{icon}</div>} {/* Icon wrapper */}
      <div className="cardHead">{cardHead}</div>
      <div className="cardPrice">${cardPrice}</div>
      <div className="cardDescription">
        {cardDescription.map((val, ind) => (
          <div key={ind}> {val}</div>
        ))}
      </div>
      <div className="cardFooter">Get Services</div>
    </div>
  );
};


const ProjectCard = ({ src, heading, description }) => {
  return (
    <div className="project-card">
      <Image src={src} alt={heading} />
      <div className='project-card-footer'>
        <div>
          <div className="heading">{heading}</div>
          <div className="description">{description}</div>
        </div>
        <div className='add-icon'>+</div>
      </div>
    </div>
  );
};

const Progress = ({ headings, descriptions }) => {
  return (
    <div className="progressContainer">
      {headings.map((heading, index) => (
        <div key={index} className="progressItem">
          <div className="progressBar">
            <div className="progressCircle"></div>
            <div className="progressLine"></div>
          </div>
          <div className="progressContent">
            <h3>{heading}</h3>
            <p>{descriptions[index]}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
