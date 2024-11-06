import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Check login status from localStorage (or use your auth logic)
    
    const [formValue, setFormValue] = useState({
        FullName: "",
        EmailAddress: "",
        ShippingAddress: "",
        City: "",
        ZipCode: "",
        CreditCardInformation: "",
        ExpiryDate: "",
        CVC: "",
    });

    const [errorValue, setErrorValue] = useState({
        FullName: null,
        EmailAddress: null,
        ShippingAddress: null,
        City: null,
        ZipCode: null,
        CreditCardInformation: null,
        ExpiryDate: null,
        CVC: null,
    });

    const validator = (key, value) => {
        if (!value.trim()) {
            setErrorValue((prev) => ({
                ...prev,
                [key]: `${key} field is required`,
            }));
        } else {
            setErrorValue((prev) => ({
                ...prev,
                [key]: null,
            }));
        }
    };

    const handleFormValue = (e) => {
        const input = e.target;
        const value = input.value;
        const key = input.name;

        setFormValue((prev) => ({
            ...prev,
            [key]: value,
        }));
        validator(key, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!isLoggedIn) {
            toast.error("Please login to proceed with checkout");
            return;
        }

        let allValid = true;
        // Validate all fields
        Object.keys(formValue).forEach((key) => {
            validator(key, formValue[key]);
            if (errorValue[key]) allValid = false;
        });

        if (allValid) {
            console.log("Form is valid. Proceeding with checkout.");
            toast.success("Order Placed");
            navigate('/');
        }
    };

    return (
        <Layout>
            <div className="px-4 py-8">
                <h1 className="text-4xl font-bold text-red-600 mb-6">Checkout</h1>
                <div className="bg-white shadow-md w-[90vw] rounded-lg p-8">
                    <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="FullName" className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="FullName"
                                    name="FullName"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="John Doe"
                                    value={formValue.FullName}
                                    onChange={handleFormValue}
                                />
                                {errorValue.FullName && <small className="text-red-500">{errorValue.FullName}</small>}
                            </div>
                            <div>
                                <label htmlFor="EmailAddress" className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="EmailAddress"
                                    name="EmailAddress"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="johndoe@example.com"
                                    value={formValue.EmailAddress}
                                    onChange={handleFormValue}
                                />
                                {errorValue.EmailAddress && <small className="text-red-500">{errorValue.EmailAddress}</small>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ShippingAddress" className="block text-gray-700">Shipping Address</label>
                            <input
                                type="text"
                                id="ShippingAddress"
                                name="ShippingAddress"
                                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                placeholder="123 Main St, Apt 4B"
                                value={formValue.ShippingAddress}
                                onChange={handleFormValue}
                            />
                            {errorValue.ShippingAddress && <small className="text-red-500">{errorValue.ShippingAddress}</small>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="City" className="block text-gray-700">City</label>
                                <input
                                    type="text"
                                    id="City"
                                    name="City"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="City"
                                    value={formValue.City}
                                    onChange={handleFormValue}
                                />
                                {errorValue.City && <small className="text-red-500">{errorValue.City}</small>}
                            </div>
                            <div>
                                <label htmlFor="ZipCode" className="block text-gray-700">Zip Code</label>
                                <input
                                    type="text"
                                    id="ZipCode"
                                    name="ZipCode"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="Zip Code"
                                    value={formValue.ZipCode}
                                    onChange={handleFormValue}
                                />
                                {errorValue.ZipCode && <small className="text-red-500">{errorValue.ZipCode}</small>}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="CreditCardInformation" className="block text-gray-700">Credit Card Information</label>
                            <input
                                type="text"
                                id="CreditCardInformation"
                                name="CreditCardInformation"
                                className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                placeholder="Card Number"
                                value={formValue.CreditCardInformation}
                                onChange={handleFormValue}
                            />
                            {errorValue.CreditCardInformation && <small className="text-red-500">{errorValue.CreditCardInformation}</small>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                            <div>
                                <label htmlFor="ExpiryDate" className="block text-gray-700">Expiry Date</label>
                                <input
                                    type="text"
                                    id="ExpiryDate"
                                    name="ExpiryDate"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="MM/YY"
                                    value={formValue.ExpiryDate}
                                    onChange={handleFormValue}
                                />
                                {errorValue.ExpiryDate && <small className="text-red-500">{errorValue.ExpiryDate}</small>}
                            </div>
                            <div>
                                <label htmlFor="CVC" className="block text-gray-700">CVC</label>
                                <input
                                    type="text"
                                    id="CVC"
                                    name="CVC"
                                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                                    placeholder="CVC"
                                    value={formValue.CVC}
                                    onChange={handleFormValue}
                                />
                                {errorValue.CVC && <small className="text-red-500">{errorValue.CVC}</small>}
                            </div>
                        </div>
                        <button type="submit" className="w-full mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition duration-300">
                            Complete Purchase
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default CheckOutPage;
