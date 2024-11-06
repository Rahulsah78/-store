import { motion } from "framer-motion";
import Layout from "./Layout";
import { SlideUp } from "../Animation/Motion";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the loading overlay after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      <Layout>
  {/* Overlay animation */}
  <div className="h-screen relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center bg-fixed z-10"
      style={{
        backgroundImage: "url('/about.avif')",
        backgroundAttachment: "fixed",
      }}
    ></div>
  </div>

  {isLoading && (
    <div className="absolute flex items-center justify-center top-0 left-0 h-full z-50 w-full bg-white">
      <Loader />
    </div>
  )}

  {/* About Content */}
  {!isLoading && (
    <div className="flex flex-col lg:flex-row h-screen lg:px-16">
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <img
          className="w-full h-[50vh] lg:h-auto object-cover" // Adjusted height for mobile
          src="/support.jpg"
          alt="Support"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-12 p-5">
        <div>
          <motion.h2
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-xl md:text-2xl font-bold text-red-500"
          >
            Seamless Shopping Experience
          </motion.h2>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="mt-3 text-justify text-gray-600 text-sm md:text-base"
          >
            Our platform is built with a user-centric approach to ensure a
            smooth and hassle-free shopping journey from browsing to
            checkout. Every feature, from intuitive navigation to rapid
            checkout processes, has been crafted with the customer in
            mind. Shopping on our platform is easy and enjoyable, whether
            you’re on desktop or mobile.
          </motion.p>
        </div>

        <div>
          <motion.h2
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="text-xl md:text-2xl font-bold text-red-500"
          >
            Quality Products, Curated for You
          </motion.h2>
          <motion.p
            variants={SlideUp(0.8)}
            initial="initial"
            whileInView="animate"
            className="mt-3 text-gray-600 text-justify text-sm md:text-base"
          >
            We handpick products across various categories to ensure our
            customers have access to the best quality at affordable
            prices. Our product catalog reflects a commitment to quality
            and excellence, and we collaborate with trusted brands and
            manufacturers to bring you only the most reliable items.
          </motion.p>
        </div>

        {/* <div>
          <motion.h2
            variants={SlideUp(0.9)}
            initial="initial"
            whileInView="animate"
            className="text-xl md:text-2xl font-bold text-red-500"
          >
            Safe & Secure Shopping
          </motion.h2>
          <motion.p
            variants={SlideUp(1.1)}
            initial="initial"
            whileInView="animate"
            className="mt-3 text-gray-600 font-extralight text-justify text-sm md:text-base"
          >
            Your security and trust are at the core of our e-commerce
            experience. Our platform is equipped with advanced security
            measures to ensure every transaction is safe. We use
            encryption, secure payment gateways, and privacy measures to
            protect your personal information at all times.
          </motion.p>
        </div> */}
      </div>
    </div>
  )}
</Layout>

    </>
  );
};

export default About;
