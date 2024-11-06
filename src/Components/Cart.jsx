import Layout from "./Layout";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Assumes React Router for navigation
import { addToCart, removeToCart, decreaseQuantity, emptyCart } from "../Redux/AllSlices/CartSlice";

const Cart = () => {
    const allCartItem = useSelector((state) => state.cartslice.carts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Calculate subtotal, discount, and VAT
    const subtotal = allCartItem.reduce((acc, item) => acc + item.price * item.qty, 0);
    const discount = subtotal * 0.1; // 10% discount
    const vat = (subtotal - discount) * 0.15; // 15% VAT on discounted total
    const total = subtotal - discount + vat;

    // cartItem Increase
    const handleIncrease = (itemId) => {
        dispatch(addToCart(itemId));
    };

    // cartItem delete from cart
    const handleremovetocart = (e) => {
        dispatch(removeToCart(e));
    };

    const handleDecreaseQuantity = (e) => {
        dispatch(decreaseQuantity(e));
    };

    const handleEmptyCart = () => {
        dispatch(emptyCart());
    };

    return (
        <Layout>
            <div className="px-4 py-8 md:px-16">
                <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
                    Shopping Cart{allCartItem.length > 0 ? ` (${allCartItem.length})` : ""}
                </h1>

                {allCartItem.length > 0 ? (
                    <div className="bg-gray-100 border border-gray-300 shadow-md rounded-lg  md:p-6">
                        <table className="hidden md:table w-full text-left border-separate" style={{ borderSpacing: '0 0.5rem' }}>
                            <thead>
                                <tr className="bg-red-300 text-gray-800 font-semibold text-sm uppercase">
                                    <th className="py-4 px-6">Product</th>
                                    <th className="py-4 px-6">Name</th>
                                    <th className="py-4 px-6">Price</th>
                                    <th className="py-4 px-6">Action</th>
                                    <th className="py-4 px-6">Quantity</th>
                                    <th className="py-4 px-6">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allCartItem.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`bg-white shadow rounded-lg ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border border-gray-200`}
                                    >
                                        <td className="py-3 px-6 flex justify-center">
                                            <img src={item.img} alt="Product" className="w-16 h-16 object-cover rounded" />
                                        </td>
                                        <td className="py-3 px-6 text-center font-medium text-gray-700">{item.title}</td>
                                        <td className="py-3 px-6 text-center font-semibold text-gray-800">${item.price}</td>
                                        <td className="py-3 px-6 text-center">
                                            <button onClick={() => handleremovetocart(item.id)} className="hover:text-red-500 transition duration-300">
                                                <FaRegTrashAlt />
                                            </button>
                                        </td>
                                        <td className="py-3 px-6">
                                            <div className="flex items-center justify-center gap-2">
                                                <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-l px-2 py-1">-</button>
                                                <span className="px-4 font-medium text-gray-800">{item.qty}</span>
                                                <button
                                                    onClick={() => handleIncrease(item)}
                                                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-r px-2 py-1"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-center font-semibold text-gray-800">
                                            ${item.price * item.qty}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Card layout for small screens */}
                        <div className="md:hidden">
                            {allCartItem.map((item, index) => (
                                <div key={item.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
                                    <img src={item.img} alt="Product" className="w-16 h-16 object-cover rounded" />
                                    <div className="flex-1 text-center mx-4">
                                        <h2 className="font-medium  text-gray-700">{item.title}</h2>
                                        <p className="text-gray-800 font-semibold">${item.price}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <button onClick={() => handleremovetocart(item.id)} className="hover:text-red-500 transition duration-300">
                                            <FaRegTrashAlt />
                                        </button>
                                        <div className="flex items-center mx-2">
                                            <button onClick={() => handleDecreaseQuantity(item.id)} className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-l px-2 py-1">-</button>
                                            <span className="px-4 font-medium text-gray-800">{item.qty}</span>
                                            <button
                                                onClick={() => handleIncrease(item)}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-r px-2 py-1"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-gray-800">${item.price * item.qty}</p>
                                </div>
                            ))}
                        </div>

                        {/* Summary Section */}
                        <div className="mt-4 md:mt-8 p-2 bg-white shadow rounded-lg border border-gray-200">
                            <div className="flex justify-between mb-2 text-gray-700 font-semibold">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-gray-700 font-semibold">
                                <span>Discount (10%):</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2 text-gray-700 font-semibold">
                                <span>VAT (15%):</span>
                                <span>${vat.toFixed(2)}</span>
                            </div>
                            <hr className="my-2" />
                            <div className="flex justify-between text-xl font-bold text-gray-800">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex items-center gap-4 justify-between mt-4">
                                <div className="w-fit flex items-center gap-2 px-4 mt-6 bg-red-500 hover:bg-red-700 py-2 rounded-lg transition duration-300">
                                    <FaRegTrashAlt className="text-white" />
                                    <button onClick={handleEmptyCart} className="text-white font-bold">Clear cart</button>
                                </div>
                                {/* Checkout Button */}
                                <Link to={'/check_out_page'}>
                                    <button className="w-fit px-4 mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition duration-300">
                                        Proceed to Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-100 h-auto border border-gray-300 flex flex-col shadow-md rounded-lg p-6 text-center">
                        <h2 className="text-xl font-semibold text-gray-700">Your cart is empty.</h2>
                        <img className="h-44" src="/undrawCart.svg" alt="Empty Cart" />
                    </div>
                )}
            </div>
        </Layout>

    );
};

export default Cart;
