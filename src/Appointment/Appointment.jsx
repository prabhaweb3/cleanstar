"use client";
import React, { useState, useEffect } from "react";
import styles from "./Appointment.module.css"; // Importing CSS module
import Navbar from "@/Navbar/Navbar";
import { FaCalendarCheck, FaDatabase, FaBroom, FaPlay } from "react-icons/fa"; // Importing icons from react-icons

const Appointment = () => {
  const steps = [
    { title: "Book Online", description: "Coingue aten lorem consqua interdum pretium liguala a semper mauris easy dicta.", icon: <FaCalendarCheck /> },
    { title: "Received Data", description: "Coingue aten lorem consqua interdum pretium liguala a semper mauris easy dicta.", icon: <FaDatabase /> },
    { title: "Ready Cleaner", description: "Coingue aten lorem consqua interdum pretium liguala a semper mauris easy dicta.", icon: <FaBroom /> },
    { title: "Start Cleaning", description: "Coingue aten lorem consqua interdum pretium liguala a semper mauris easy dicta.", icon: <FaPlay /> },
  ];

  return (
    <div>
      <Navbar text1="Appointment" text2="" path1="Home" path2="Appointment" />
      <section className={styles.appointmentProcess}>
        <div className={styles.sectionTitle}>
          <span>Our </span> Working Process
        </div>
        <div className={styles.title}>
          Excellent Techniques For <br /> Effective Cleaning
        </div>
        <div className={styles.processSteps}>
          {steps.map((step, index) => (
            <div key={index} className={styles.processStep}>
              <div className={styles.iconPlaceholder}>{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.formOuter}>
          <AppointmentForm />
        </div>
        <CustomerFeedback />
      </section>
    </div>
  );
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name1) tempErrors.name1 = "Name is required.";
    if (!formData.name2) tempErrors.name2 = "Name is required.";
    if (!formData.service) tempErrors.service = "Please choose a service.";
    if (!formData.message) tempErrors.message = "Message is required.";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      const postData = async () => {
        try {
          const response = await fetch("https://your-api-endpoint.com/appointments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            alert("Form submitted successfully!");
          } else {
            alert("Error submitting form.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      postData();
      setIsSubmitted(false);
    }
  }, [isSubmitted, formData]);

  const services = [
    { value: "service1", label: "House Cleaning" },
    { value: "service2", label: "Office Cleaning" },
    { value: "service3", label: "Kitchen Cleaning" },
    { value: "service4", label: "Club Cleaning" },
  ];

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Book An Appointment</h1>
      <form className={styles.appointmentForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="name1"
          value={formData.name1}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        {errors.name1 && <p className={styles.error}>{errors.name1}</p>}

        <input
          className={styles.input}
          type="text"
          name="name2"
          value={formData.name2}
          onChange={handleChange}
          placeholder="Enter Name"
        />
        {errors.name2 && <p className={styles.error}>{errors.name2}</p>}

        <select
          className={styles.select}
          name="service"
          value={formData.service}
          onChange={handleChange}
        >
          <option value="">Select a Service</option>
          {
            services.map((val,ind)=>{
                return <option key={ind} value={val.value}>{val.label}</option>

            })
          }
        </select>
        {errors.service && <p className={styles.error}>{errors.service}</p>}

        <textarea
          className={styles.textarea}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          rows="4"
        />
        {errors.message && <p className={styles.error}>{errors.message}</p>}

        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Lucas Hall",
      role: "New York",
      quote: "Donec dictum egestas congue leo venenatis lorem suspen aenean orci volutpat vivamus.",
    },
    {
      name: "Jessica Brown",
      role: "California",
      quote: "Egestas metus aenean mauris purus risus etiam suscipit eget egestas.",
    },
    {
      name: "Mike Johnson",
      role: "New Jersey",
      quote: "Luctus integer auctor aenean tempor egestas cursus vehicula aenean fusce.",
    },
  ];

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.feedbackHeader}>
        <div className={styles.feedbackTag}>What People Say</div>
        <h1>Clients Feedback</h1>
      </div>
      <div className={styles.feedbackCards}>
        {feedbacks.map((feedback, index) => (
          <div key={index} className={styles.feedbackCard}>
            <div className={styles.quoteIcon}>“</div>
            <div>
              <h2>{feedback.name}</h2>
              <h3>{feedback.role}</h3>
              <p>{feedback.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointment;
