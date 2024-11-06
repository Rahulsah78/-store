import { motion } from "framer-motion";
import Data from "../Data/Data.json";
import { SlideUp } from "../Animation/Motion";
import { PiHeartStraight } from "react-icons/pi";
import { BsCart4 } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/AllSlices/CartSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const OurProducts = () => {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleaddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Item added to cart");
    };

    /// Adjusted filter logic to detect category keywords in product titles
    const filteredProducts = selectedCategory === "All"
        ? Data
        : Data.filter(item => {
            // Make filtering case-insensitive and handle partial matches
            const category = selectedCategory.toLowerCase();
            const title = item.title.toLowerCase();
            return title.includes(category);
        });




    return (
        <div className='px-4 md:px-16'>
            <div className='flex flex-col md:flex-row items-center justify-between p-9'>
                <div className="flex flex-col items-start mb-4">
                    <h1 className='text-3xl md:text-4xl font-bold'>
                        Our <span className='text-red-500'>Products</span>
                    </h1>
                </div>
                <div className="relative w-full md:w-auto">
                    <select
                        id="product-category"
                        className="block appearance-none w-full bg-white text-red-500 font-semibold border border-red-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none"
                        onChange={(e) => setSelectedCategory(e.target.value)} // Update category on change
                    >
                        <option value="All">All</option>
                        <option value="Shoe">Shoes</option>
                        <option value="Men's Shirt">Men's Shirt</option>
                        <option value="Lehenga">Lehenga</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.5 8l4.5 4.5L15.5 8H5.5z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Product Section */}
            <div className='flex flex-wrap items-center gap-5'>
                {filteredProducts.map((item, index) => (
                    <motion.div
                        variants={SlideUp(0.4 + index * 0.2)}
                        initial="initial"
                        whileInView="animate"
                        key={index}
                        className='group overflow-hidden relative cursor-pointer border flex flex-col items-center h-full w-full md:w-[27vw] mt-5 '
                    >
                        <img className='pt-5 transition-transform duration-300 ease-in-out transform hover:scale-110 h-72' src={item.img} alt={item.title} />

                        {/* Title and Price Section */}
                        <div className="mt-4 w-full flex items-center justify-between p-5">
                            <label className='font-bold'>{item.title}</label>
                            <label className='font-bold'>${item.price}</label>
                        </div>

                        {/* Mobile View for Add to Cart and View Details Buttons */}
                        <div className="md:hidden flex justify-between w-full mt-2 p-5">
                            <button
                                onClick={() => handleaddToCart(item)}
                                className="bg-gray-200 rounded-full py-2 px-4 text-black hover:bg-red-500 hover:text-white transition duration-300 flex-1 mr-2"
                            >
                                Add to Cart
                            </button>
                            <Link
                                to={`/ourproducts/${item.id}`}
                                className="bg-gray-200 rounded-full py-2 px-4 text-black hover:bg-red-500 hover:text-white transition duration-300 flex-1 ml-2 text-center"
                            >
                                View Details
                            </Link>
                        </div>

                        {/* Desktop View for Icons */}
                        <div className="hidden md:flex flex-col gap-4 absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                onClick={() => handleaddToCart(item)}
                                className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-red-500 transition-transform duration-300 transform scale-75 group-hover:scale-100"
                            >
                                <BsCart4 />
                            </button>
                            <Link
                                to={`/ourproducts/${item.id}`}
                                className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-red-500 transition-transform duration-300 transform scale-75 group-hover:scale-100"
                            >
                                <GoEye />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="m-5 flex items-center justify-center">
                <button className="px-14 py-3 bg-red-500 text-white border border-transparent hover:bg-transparent hover:text-black hover:border-red-500 transition duration-300 ease-in-out">
                    View All Products
                </button>
            </div>
        </div>


    );
};

export default OurProducts;
