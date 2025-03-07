import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookApointment.css';

const BookAppointment = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        contact: '',
        email: '',
        condition: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Get doctor info from the location state
    const location = useLocation();
    const doctor = location.state?.doctor || { name: 'Dr. Smith', email: 'doctor@example.com' }; // Default values if no doctor data is passed

    useEffect(() => {
        if (!doctor) {
            navigate('/'); // Redirect to the homepage if no doctor info is found
        }
    }, [doctor, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.send(
            'service_g97uisk',
            'template_wu694h2',
            {
                from_name: form.name,
                to_name: "Mental Health Assistant",
                from_contact: form.contact,
                from_email: form.email,
                message: form.condition,
                doctor_name: doctor.name,
                doctor_email: doctor.email,
            },
            'zfJeRM4Ed17u1qGet'
        )
            .then(() => {
                setLoading(false);
                alert('Thank you! Your email has been sent.');
                setForm({
                    name: '',
                    contact: '',
                    email: '',
                    condition: '',
                });
                navigate('/'); // Redirect to main page
            }, (error) => {
                setLoading(false);
                console.error(error);
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mt-5">
            <motion.div
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <h3 className="text-white font-bold text-2xl mb-6">Book Appointment with {doctor.name}</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-8 appointment-form"
                >
                    <label htmlFor="name" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Name</span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's Your Name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium m-0"
                        />
                    </label>
                    <label htmlFor="contact" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Contact</span>
                        <input
                            type="text"
                            name="contact"
                            value={form.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact number"
                            className="m-0 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label htmlFor="email" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Email</span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's Your Email?"
                            className="m-0 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label htmlFor="condition" className="flex flex-col">
                        <span className="text-white font-medium mb-4">Your Condition</span>
                        <input
                            rows="4"
                            name="condition"
                            value={form.condition}
                            onChange={handleChange}
                            placeholder="Explain your condition to us"
                            className="m-0 bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <button
                        type="submit"
                        className=" m-0 w-100 bg-tertiary outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                    >
                        {loading ? 'Sending....' : 'Send Appointment Request'}
                    </button>
                </form>
            </motion.div>

            <motion.div
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div className="earth-canvas"></div>
            </motion.div>
        </div>
    );
};

export default BookAppointment;
