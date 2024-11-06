import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { MdRemoveRedEye } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        const { id, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.name || !data.email || !data.password) {
            toast.error("All fields are required");
            return;
        }

        let arr = JSON.parse(localStorage.getItem("UserLoginInfo") || "[]");
        arr.push(data);
        localStorage.setItem("UserLoginInfo", JSON.stringify(arr));

        setData({ name: "", email: "", password: "" });
        toast.success("Signup successful");
        navigate('/login');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button className="absolute top-10 right-10 text-4xl cursor-pointer hover:text-red-500 transition-all duration-300">
                <Link to={'/'} ><RxCross2 /></Link>
            </button>
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            onChange={handleInput}
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            onChange={handleInput}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            onChange={handleInput}
                            type="password"
                            id="password"
                            placeholder="Create a password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className='absolute top-8 right-2 w-8 h-8 rounded-full cursor-pointer transition hover duration-300 hover:text-white hover:bg-red-500 flex items-center justify-center'>
                            <MdRemoveRedEye />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Sign Up</button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Already have an account?{' '}
                    <Link to={'/login'} className="text-blue-500 hover:text-blue-800">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
