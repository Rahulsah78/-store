import React, { useEffect, useRef } from 'react';
import Layout from './Layout';
import WhyChooseUs from './WhyChooseUs';
import NewArrivals from './NewArrivals ';
import OurProducts from './OurProducts';
import Subscribe from './Subscribe';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { SlideUp, SlideLeft } from '../Animation/Motion';
import { Link } from 'react-router-dom';
import FAQ from './FAQ';


const Home = () => {
    const typedRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: [
                'Save 20% Off Everything',
                'Amazing Deals!',
                'Limited Time Offer!',
                'Shop the Best Deals!',
                'Hurry, Don\'t Miss Out!'
            ],

            typeSpeed: 150,
            backSpeed: 100,
            loop: true,
        });

        return () => {
            // Destroy instance on cleanup to prevent memory leaks
            typed.destroy();
        };
    }, []);
    return (
        <>
            <Layout>
                {/* home section */}
                <div className='h-screen overflow-hidden'>
                    <div className="h-full flex flex-col md:flex-row bg-[#F9F9F9]">
                        {/* Text Section */}
                        <div className="h-full w-full md:w-1/2  flex items-center justify-center md:justify-start px-4 md:px-16">
                            <div className='flex flex-col items-center md:items-start pt-10 md:pt-0'>
                                <motion.div
                                    variants={SlideUp(0.4)}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <span ref={typedRef} className="text-red-500 font-bold text-3xl"></span>
                                </motion.div>
                                <motion.p
                                    variants={SlideUp(0.6)}
                                    initial="initial"
                                    animate="animate"
                                    className='text-center md:text-left text-gray-800 mt-3'>
                                    laborum eaque magnam fugiat hic, amet tempora <br className="hidden sm:inline" />
                                    quibusdam laudantium. This is an example of a <br className="hidden sm:inline" />
                                    repudiandae earum suscipit fugiat molestias.
                                </motion.p>
                                <motion.div
                                    variants={SlideUp(0.8)}
                                    initial="initial"
                                    animate="animate"
                                >
                                    <Link to={'/'}>
                                        <button
                                            className='bg-[#FA585E] w-fit mt-3 text-white py-2 sm:py-3 px-4 sm:px-6 hover:bg-[#ff4d4d] transition'>
                                            Shop Now
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="h-full w-full md:w-1/2 flex items-center justify-center overflow-hidden">
                            <img className='h-full w-full object-cover md:object-contain object-center' src="/Men.png" alt="Product" />
                        </div>
                    </div>
                </div>

                {/* <Last /> */}

                {/* whyChooseUs */}
                <WhyChooseUs />
                {/* New Arrivals */}
                <NewArrivals />
                {/* OurProducts */}
                <OurProducts />
                {/* Subscribe */}
                <Subscribe />
                {/* FAQ */}
                <FAQ />

            </Layout>
        </>
    );
};

export default Home;
