import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleInput = (e) => {
        const { id, value } = e.target;
        if (id === "email") setEmail(value);
        else if (id === "password") setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("UserLoginInfo")) || [];
        
        const userFound = users.find(user => user.email === email && user.password === password);
        
        if (userFound) {
            toast.success("Login successful");
            navigate('/');
        } else {
            toast.error("Invalid login info");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <button className="absolute top-10 right-10 text-4xl cursor-pointer hover:text-red-500 transition-all duration-300">
                <Link to={'/'}><RxCross2 /></Link>
            </button>
            <div className="bg-white shadow-md rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            onChange={handleInput}
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
                </form>
                <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{' '}
                    <Link to={'/signup'} className="text-blue-500 hover:text-blue-800">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
