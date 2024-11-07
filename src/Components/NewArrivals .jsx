import { motion } from "framer-motion"
import { SlideUp } from "../Animation/Motion"
import { Link } from "react-router-dom"

const NewArrivals = () => {
    return (
        <>
            <div className='mt-16 h-screen bg-[#D5D3D4] px-4 md:px-16'>
                <div className="h-full flex flex-col md:flex-row">
                    {/* Image Section */}
                   

                    {/* Text Section */}
                    <div className="flex flex-col items-center justify-center h-full w-full md:w-1/2 p-5">
                        <motion.p
                            variants={SlideUp(0.4)}
                            initial="initial"
                            whileInView="animate"
                            className="text-2xl text-gray-600 font-semibold text-center md:text-left"
                        >
                            #New Summer Collection 2024
                        </motion.p>
                        <motion.h2
                            variants={SlideUp(0.6)}
                            initial="initial"
                            whileInView="animate"
                            className="text-6xl text-red-500 font-bold text-center md:text-left"
                        >
                            New Denim
                        </motion.h2>
                        <motion.span
                            variants={SlideUp(0.8)}
                            initial="initial"
                            whileInView="animate"
                            className="text-6xl text-red-500 font-bold text-center md:text-left"
                        >
                            Coat
                        </motion.span>
                        <motion.div
                            variants={SlideUp(0.9)}
                            initial="initial"
                            whileInView="animate"
                        >
                            <Link to={'/'}>
                                <button className="mt-3 bg-red-500 text-white px-6 py-3 font-bold hover:bg-red-400 transition duration-300">
                                    Shop Now
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className="h-full w-full md:w-1/2 overflow-hidden flex items-center justify-center">
                        <img
                            src="https://preview.colorlib.com/theme/dealers/images/model_5.png"
                            alt=""
                            className="object-contain h-[75vw] w-60 md:h-full md:w-full"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default NewArrivals 
