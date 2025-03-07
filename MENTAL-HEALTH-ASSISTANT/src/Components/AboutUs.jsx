import React from 'react';
import { motion } from 'framer-motion';
import './AbouUs.css';

const AboutUs = () => {
  return (
    <div className='About-us'>
      {/* Heading animation on load */}
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT MIND CARE
      </motion.h1>

      {/* Section 1 animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Why Mental Health is Important
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Mental health is a fundamental part of our overall well-being. It affects how we think, feel, and act in our daily lives. Unfortunately, mental health issues are often overlooked or ignored, leading to severe consequences. Every year, millions of people suffer silently, and an alarming number of them turn to suicide as a way out. According to the World Health Organization (WHO), close to 800,000 people die by suicide every year, a tragedy that could often be prevented with the right support and care. The impact of mental distress is profound, and it is essential that we prioritize mental well-being.

        At MindCare, we aim to change the narrative. Our mission is to provide a space where mental health support is just a click away. Whether you're seeking professional help or simply looking for a way to relieve stress, MindCare is here for you.
      </motion.p>

      {/* Section 2 animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        What We Do
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        MindCare is an innovative platform designed to help individuals maintain and improve their mental health. We offer a range of services, including access to a panel of experienced doctors, a personalized AI assistant, and tools to find the support you need in times of crisis.
      </motion.p>

      {/* Emergency helpline section animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        Emergency Helpline
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        In case of immediate mental health crises, we have an emergency helpline feature. Simply choose the relevant option, and our system will provide you with contact details for emergency services, ensuring you're never alone in times of distress.
      </motion.p>

      {/* Doctors Panel animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        Doctors Panel
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
      >
        Our Doctors Panel provides access to certified mental health professionals who are ready to assist you. Whether you’re dealing with stress, anxiety, depression, or other mental health challenges, our doctors are here to offer support, guidance, and treatment. You can browse through their profiles and choose a doctor based on your needs.
      </motion.p>

      {/* Subscription Plan animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
      >
        Subscription Plan
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
        This website will provide a subscription plan for the doctors in near future in which they will have to pay a certain amount to get their profile listed on the website. This will help the doctors to get more patients and the patients to get more options to choose from.
      </motion.p>

      {/* MINDORA AI Assistant animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 1 }}
      >
        Meet MINDORA – Your AI Assistant
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 1 }}
      >
        At the heart of MindCare is Mindora, an advanced AI assistant specifically designed to help you manage stress, find peace, and improve your mental well-being. Mindora is more than just a chatbot; it’s a companion crafted to guide you through tough moments, suggest mindfulness techniques, and offer support tailored to your needs. Mindora is always available to help you stay calm, focused, and positive, making it a unique tool designed to be your mental wellness companion.
      </motion.p>

      {/* Find a Doctor animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6.5, duration: 1 }}
      >
        Find a Doctor
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1 }}
      >
        MindCare also features a Find a Doctor system, where you can search for doctors based on location, specialization, and availability. With just a few clicks, you can find the right mental health professional near you, and learn about their qualifications and services.

      </motion.p>

      {/* Book an Appointment animation */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7.5, duration: 1 }}
      >
        Book an Appointment
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 8, duration: 1 }}
      >
        Once you've selected a doctor, you can easily book an appointment through our user-friendly system. Upon booking, an email is sent to the doctor, and you will receive a notification confirming the appointment. This seamless process ensures you can access care quickly and efficiently.
      </motion.p>
    </div>
  );
}

export default AboutUs;
