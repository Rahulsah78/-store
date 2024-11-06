import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { BiLogOut } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsFillSunFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { RxCross1 } from "react-icons/rx";
import Loader from "../Loader/Loader";
import { SlideUp,SlideLeft } from '../Animation/Motion';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMenu } from 'react-icons/ai';

const Layout = ({ children }) => {
    const [mobile, setMobile] = useState(false)
    const [showMenu, setShowMenu] = useState(false); // State to toggle menu
    const [logoutMessage, setLogoutMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("UserLoginInfo"));
    const location = useLocation(); // Get the current location
    const menu = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Blog', link: '/blog' },
        { label: 'Contact', link: '/contact' },
    ];
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [Layout]);


    useEffect(() => {
        setShowMenu(false);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem("UserLoginInfo");
        setIsLoggedIn(false);
        setShowMenu(false);
        setLogoutMessage('You have successfully logged out.');
        setTimeout(() => {
            setLogoutMessage('');
        }, 3000);
    };
    // userdata
    const getdata = JSON.parse(localStorage.getItem("UserLoginInfo"));
    // console.log(getdata)
    const allCartItem = useSelector((state) => state.cartslice.carts);

    return (
        <>
            {isLoading && (
                <div className="absolute flex items-center justify-center top-0 left-0 h-[100vh] z-[999] w-full bg-[#fff]">
                    <Loader />
                </div>
            )}
            <div className='min-h-screen'>
                <nav className='h-24 md:px-16 px-4 top-0 left-0 sticky z-50 bg-white flex items-center justify-between'>
                    <div>
                        <Link to={'/'}>
                            <img className='h-24 w-24 object-cover sm:hidden md:block' src="/logo.png" alt="Logo" />
                        </Link>
                    </div>

                    {/* menulink */}
                    <div>
                        <ul className='hidden md:flex items-center gap-7'>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`hover:text-red-500 font-bold ${location.pathname === item.link ? 'text-red-500' : 'text-black'} transition-colors duration-300`}
                                        to={item.link}
                                        onClick={() => setShowMenu(false)} // Close menu on link click
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex  items-center gap-5 relative'>
                        <button className="text-[25px] hover:text-red-500 transition duration-300 cursor-pointer hidden sm:block">
                            <IoSearch />
                        </button>

                        <Link to={'/cart/item'}>
                            <div className='relative sm:hidden md:block'>
                                <button className='text-[25px] hover:text-red-500 transition duration-300 cursor-pointer'>
                                    <BsCart3 />
                                </button>
                                <span className='absolute -top-4 text-[20px] text-red-500'>{allCartItem.length}</span>
                            </div>
                        </Link>
                        <div onClick={() => setMobile(!mobile)} className='md:hidden sm:block'>
                            <AiOutlineMenu className='text-[15px] h-10 w-10' />
                        </div>
                        {/* Conditional rendering based on user login status */}
                        {isLoggedIn ? (
                            <div onClick={() => setShowMenu(!showMenu)} className='h-12 w-12 cursor-pointer rounded-full overflow-hidden'>
                                <img src="rahul.enc" alt="user.png" />
                            </div>
                        ) : (
                            <Link to={'/signup'}>
                                <button className='bg-[#FA585E] hidden sm:block w-fit mt-3 text-white py-2 sm:py-3 px-4 sm:px-6 hover:bg-[#ff4d4d] transition'>
                                    Sign Up
                                </button>
                            </Link>
                        )}

                        {/* user dropdown menu */}
                        {
                            showMenu &&
                            <div className="absolute animate__animated animate__fadeIn bg-[#fff] border h-auto w-56 top-[5.7vw] right-0 bg-white-700 rounded-lg shadow-lg p-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-2 hover:text-red-500 hover:ml-5 transition-all duration-300 ease-in-out cursor-pointer">
                                        <FaUserCircle className="text-xl" />
                                        <Link to={'/profile'} onClick={() => setShowMenu(false)}>Profile</Link>
                                    </div>

                                    <div className="flex items-center gap-3 p-2 hover:text-red-500 hover:ml-5 transition-all duration-300 ease-in-out cursor-pointer">
                                        <BsFillSunFill className="text-xl" />
                                        <span>Light Mode</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 hover:text-red-500 hover:ml-5 transition-all duration-300 ease-in-out cursor-pointer">
                                        <FiSettings className="text-xl" />
                                        <span>Settings</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-2 hover:text-red-500 hover:ml-5 transition-all duration-300 ease-in-out cursor-pointer">
                                        <BiLogOut className="text-xl" />
                                        <span onClick={handleLogout}>Logout</span>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </nav>

                {/* mobiledropmenu */}
                {
                    mobile &&
                    <motion.div 
                    variants={SlideLeft}
                    animate="animate"
                    initial="animate"
                    className='absolute bg-red-200 md:hidden  sm:block w-[100vw] h-screen top-0 left-0   z-[999]'>
                        <div className=' px-5 h-24 flex items-center justify-between w-full '>
                            <p></p>
                            <button onClick={()=>setMobile(!mobile)} className='h-10  flex items-center justify-center text-4xl text-red-500 w-10'><RxCross1 /></button>
                        </div>
                        <div className='px-5'>
                            <ul className=' md:flex items-center gap-7'>
                                {menu.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`hover:text-red-500 font-bold ${location.pathname === item.link ? 'text-red-500' : 'text-black'} transition-colors duration-300`}
                                            to={item.link}
                                            onClick={() => setShowMenu(false)} // Close menu on link click
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {/* Conditional rendering based on user login status */}
                            {isLoggedIn ? (
                                <div onClick={() => setShowMenu(!showMenu)} className='h-12 w-12 cursor-pointer rounded-full overflow-hidden'>
                                    <img src="rahul.enc" alt="user.png" />
                                </div>
                            ) : (
                                <Link to={'/signup'}>
                                    <button className='bg-[#FA585E]  sm:block w-fit mt-3 text-white py-2 sm:py-3 px-4 sm:px-6 hover:bg-[#ff4d4d] transition'>
                                        Sign Up
                                    </button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                }

                <div>{children}</div>
                {/* Footer code here */}
                <footer className='w-full overflow-hidden px-4 sm:px-8 lg:px-16 py-12 bg-[#F8F9F9]'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12'>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img className='h-24 mx-auto' src="/logo.png" alt="Logo" />
                            <motion.div variants={SlideUp(0.6)} initial="initial" whileInView="animate" className='flex gap-2'>
                                <span className='font-bold'>ADDRESS:</span>
                                <p className='text-gray-400 cursor-pointer hover:text-red-500 transition-colors duration-300'>Kalaiya Bara, Nepal</p>
                            </motion.div>
                            <motion.div variants={SlideUp(0.8)} initial="initial" whileInView="animate" className='flex gap-2'>
                                <span className='font-bold'>PHONE NO:</span>
                                <p className='text-gray-400 cursor-pointer hover:text-red-500 transition-colors duration-300'>+9874563210</p>
                            </motion.div>
                            <motion.div variants={SlideUp(0.9)} initial="initial" whileInView="animate" className='flex gap-2'>
                                <span className='font-bold'>EMAIL:</span>
                                <p className='text-gray-400 cursor-pointer hover:text-red-500 transition-colors duration-300'>support@gmail.com</p>
                            </motion.div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='mb-4 font-bold'>MENU</h2>
                            <motion.div variants={SlideUp(0.6)} initial="initial" animate="animate" className='flex gap-3 flex-col'>
                                {
                                    menu.map((item, index) => (
                                        <motion.div key={index} variants={SlideUp(0.4 + index * 0.2)} initial="initial" whileInView="animate" className='text-gray-400 cursor-pointer hover:text-red-500 transition-colors duration-300'>
                                            <Link to={item.link}>{item.label}</Link>
                                        </motion.div>
                                    ))
                                }
                            </motion.div>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <h2 className='mb-4  font-bold'>Follow Us</h2>
                            <div className='flex gap-3 flex-col'>
                                <motion.div variants={SlideUp(0.4)} initial="initial" whileInView="animate" className='cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-300'>Facebook</motion.div>
                                <motion.div variants={SlideUp(0.6)} initial="initial" whileInView="animate" className='cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-300'>Instagram</motion.div>
                                <motion.div variants={SlideUp(0.8)} initial="initial" whileInView="animate" className='cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-300'>Twitter</motion.div>
                                <motion.div variants={SlideUp(0.9)} initial="initial" whileInView="animate" className='cursor-pointer text-gray-400 hover:text-red-500 transition-colors duration-300'>LinkedIn</motion.div>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <h2 className='mb-4 font-bold text-center'>Newsletter</h2>
                            <motion.p variants={SlideUp(0.6)} initial="initial" whileInView="animate" className='mb-4 text-gray-400 text-center'>
                                Subscribe to our newsletter and get daily updates.
                            </motion.p>
                            <motion.div variants={SlideUp(0.8)} initial="initial" whileInView="animate" className='flex flex-col sm:flex-row justify-center items-center'>
                                <input
                                    type="email"
                                    placeholder='Enter Your Mail'
                                    required
                                    className='border border-gray-300 p-2 outline-none w-full sm:w-auto sm:flex-1 mb-4 sm:mb-0 sm:mr-4'
                                />
                                <button className='bg-red-500 text-white px-6 py-2 hover:bg-red-600 transition w-full sm:w-auto'>
                                    Subscribe
                                </button>
                            </motion.div>
                        </div>

                    </div>
                </footer>

                {/* Copyrights */}
                <div className='py-6 flex flex-col items-center justify-center bg-black'>
                    <h3 className='text-white'>© 2021 All Rights Reserved <span className='text-red-500'>®kStore</span></h3>
                    <h4 className='text-white'>Distributed By <span className='text-red-500'>®kStore</span> </h4>
                </div>

            </div>
        </>
    );
};

export default Layout;
