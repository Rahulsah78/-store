import { useEffect, useState } from "react"
import Layout from "./Layout"
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { SlideUp } from "../Animation/Motion";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide the loading overlay after 3 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, []);

    return (
        <Layout>
            {/* Overlay animation */}
            {isLoading && (
                <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh] z-50 w-full bg-[#fff]">
                    <Loader />
                </div>
            )}
           <div className="px-4 py-10 min-h-screen flex flex-col md:flex-row items-center justify-between">
    {/* Contact Form Section */}
    <div className="w-full h-full flex flex-col justify-center p-8 bg-white shadow-lg rounded-lg mb-8 md:mb-0 md:mr-8">
        <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-bold text-red-500 mb-4">Get in Touch</motion.h2>
        <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-600 mb-8">Feel free to reach out to us with any questions or feedback.</motion.p>
        <form className="space-y-4">
            <motion.input
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                required type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            <motion.input
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                required type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500" />
            <motion.textarea
                variants={SlideUp(0.9)}
                initial="initial"
                whileInView="animate"
                placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500 h-32 resize-none"></motion.textarea>
            <button className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-300">
                Send Message
            </button>
        </form>
    </div>

    {/* Contact Info Section */}
    <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl text-red-500 font-bold mb-6">Contact Information</h2>
        <motion.p
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="mb-4">We are always here to help you. Reach out to us through any of the contact details below.</motion.p>
        <div className="space-y-4">
            <motion.div
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="flex gap-2">
                <strong>Phone:</strong>
                <p> +1 234 567 890</p>
            </motion.div>
            <motion.div
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className="flex gap-2">
                <strong>Email:</strong>
                <Link className="hover:text-red-500 transition-colors duration-300" to={'https://mail.google.com/mail/u/0/#inbox'}>sahfamily786@.com</Link>
            </motion.div>
            <motion.div
                variants={SlideUp(0.8)}
                initial="initial"
                whileInView="animate"
                className="flex gap-2">
                <strong>Address:</strong>
                <p> 123 E-commerce St., New Road</p>
            </motion.div>
        </div>
        <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1148853.8011124383!2d83.65817430883144!3d28.3948574566528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399593d4c5b0e0b9%3A0x74db2d11566b68d3!2sNepal!5e0!3m2!1sen!2sin!4v1698258273485!5m2!1sen!2sin"
            className="mt-6 rounded-lg border-2 border-red-500 w-full h-48"
            allowFullScreen=""
            loading="lazy"
        ></iframe>
    </div>
</div>

        </Layout>

    );
};

export default Contact;
