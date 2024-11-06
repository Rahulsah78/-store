import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import data from "../Data/Data.json";
import { toast } from 'react-toastify';
import { addToCart } from '../Redux/AllSlices/CartSlice';
import { useDispatch } from 'react-redux';

const OurProductDetails = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();
    const product = data.find((item) => item.id === parseInt(productId, 10));

    const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
    const [isHovering, setIsHovering] = useState(false);
    const [showAlternateImage, setShowAlternateImage] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setZoomPosition({ x, y });
    };

    if (!product) {
        return <div className="p-10 text-red-500">Product not found</div>;
    }

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Item added to cart");
    };

    return (
        <Layout>
            <div className="flex items-center justify-center min-h-screen px-4 py-8 md:px-10 md:py-16">
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 bg-white shadow-lg rounded-lg p-4 md:p-8 w-full max-w-4xl">

                    {/* Image Section with Zoom Effect */}
                    <div
                        className="w-full md:w-1/2 flex items-center justify-center overflow-hidden relative"
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <img
                            src={showAlternateImage ? product.alternateImg : product.img}
                            alt={product.title}
                            className="w-full max-h-96 object-cover rounded-md shadow-md transition-transform duration-300 ease-out"
                            style={{
                                transform: isHovering ? `scale(1.5)` : 'scale(1)',
                                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            }}
                        />
                    </div>

                    {/* Details Section */}
                    <div className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-800">{product.title}</h1>
                        <p className="text-xl md:text-2xl font-semibold text-red-500">Price: ${product.price}</p>
                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
                            {product.description}
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button
                                onClick={() => handleAddToCart(product)}
                                className="h-10 px-6 bg-red-500 hover:bg-red-600 text-white text-sm md:text-base font-medium rounded-md transition duration-300"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OurProductDetails;
