import { motion } from "framer-motion"
import { SlideUp } from "../Animation/Motion"

const Subscribe = () => {
    return (
        <>
            <div className='h-auto min-h-[40vw] bg-[#D4CED0] flex flex-col items-center justify-center py-10 overflow-hidden'>
                <motion.h2
                    variants={SlideUp(0.4)}
                    initial="initial"
                    whileInView="animate"
                    className='text-3xl md:text-4xl font-bold text-[#2C3E50] text-center mb-4'>
                    Subscribe To Get Discount <br /> Offers
                </motion.h2>
                <motion.p
                    variants={SlideUp(0.6)}
                    initial="initial"
                    whileInView="animate"
                    className='text-base md:text-lg text-gray-600 text-center mb-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor
                </motion.p>
                <motion.div
                    variants={SlideUp(0.8)}
                    initial="initial"
                    whileInView="animate"
                    className='flex flex-col items-center w-full px-4 max-w-md'>
                    <input
                        type="text"
                        placeholder='Enter Your Email'
                        className='md:w-[40vw] w-full rounded-full px-6 py-4 outline-none text-red-500 placeholder:text-red-500'
                    />
                </motion.div>
                <motion.div
                    variants={SlideUp(0.9)}
                    initial="initial"
                    whileInView="animate"
                    className="w-full pt-5 px-4 flex items-center justify-center max-w-md">
                    <button
                        className="px-24 py-3   w-fit rounded-full bg-red-500 text-white border border-transparent hover:bg-transparent hover:text-black hover:border-red-500 transition duration-300 ease-in-out">
                        Subscribe
                    </button>
                </motion.div>
            </div>


        </>
    )
}

export default Subscribe
