import { FaTruckFast } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { inView, motion } from "framer-motion";
import { SlideUp } from "../Animation/Motion";


const WhyChooseUs = () => {
    const cards = [
        {
            icon: <FaTruckFast className="text-8xl" />,
            title: 'Fast Delivery',
            para: 'We understand that waiting for your purchases can be frustrating, which is why we offer fast and reliable shipping options. '

        },
        {
            icon: <AiOutlineSafetyCertificate />,
            title: 'Unbeatable Quality',
            para: 'At our store, we pride ourselves on offering only the highest quality products that are carefully sourced and tested for durability.'

        },
        {
            icon: <RiCustomerService2Line />,
            title: '24/7 Customer Service',
            para: 'We believe that every customer deserves a seamless and enjoyable shopping experience.'

        },
    ]
    return (
        <>
            <div className='px-4 md:px-16'>
                <div className='flex flex-col items-center justify-center p-9'>
                    <h1 className='text-3xl md:text-5xl font-bold text-red-500'>Why Shop With Us</h1>
                    <motion.span
                        variants={SlideUp(0.2)}
                        initial="initial"
                        whileInView="animate"
                        className='border mt-4 border-b-4 w-16 border-[#002C3E]'
                    ></motion.span>
                </div>
                {/* cards */}
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    {
                        cards.map((item, index) => (
                            <motion.div
                                variants={SlideUp(0.4 + index * 0.2)}
                                whileInView={"animate"}
                                initial="initial"
                                key={index}
                                className='h-[300px] w-full md:w-[350px] p-5 rounded-md flex flex-col items-center justify-center bg-[#002C3E] mb-4 md:mb-0'
                            >
                                <div className="text-6xl md:text-8xl text-white">{item.icon}</div>
                                <h2 className="text-xl md:text-2xl mt-3 font-bold text-white">{item.title}</h2>
                                <p className="text-white mt-3 text-center">{item.para}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default WhyChooseUs
